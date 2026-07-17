# Contact-form email service (server-side)

Runs `contact-server.mjs` as a small Node service on the origin server, behind
nginx at `/api/contact`. Sends contact-form submissions via Resend. No Cloudflare
account needed — only server access.

> The `worker/` folder is the Cloudflare-Worker alternative — ignore it; we're
> using this server-side path instead.

## Architecture
```
browser → Cloudflare (passthrough) → nginx (origin) ──/api/contact──> Node service (localhost:8787) → Resend
```

## One-time setup (SSH in with sudo)

### 0. See what's on the box
```bash
cat /etc/os-release                 # OS (assume Ubuntu/Debian below)
nginx -v                            # web server present?
node -v                             # Node 18+? (need 18+ for global fetch)
which node                          # path for the systemd ExecStart
ls /etc/nginx/sites-enabled/        # which site config to edit
```

### 1. Install Node if missing (Ubuntu/Debian, Node 20)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Put the service on the box
```bash
sudo mkdir -p /opt/tnr-contact
sudo cp contact-server.mjs /opt/tnr-contact/      # or scp/git-pull it there
```

### 3. Store the Resend key (root-only, out of the unit file)
```bash
echo 'RESEND_API_KEY=re_your_key_here' | sudo tee /etc/tnr-contact.env
sudo chmod 600 /etc/tnr-contact.env
```

### 4. systemd service — keeps it running + restarts on reboot/crash
Create `/etc/systemd/system/tnr-contact.service`:
```ini
[Unit]
Description=True North Recovery contact-form email service
After=network.target

[Service]
WorkingDirectory=/opt/tnr-contact
ExecStart=/usr/bin/node /opt/tnr-contact/contact-server.mjs
EnvironmentFile=/etc/tnr-contact.env
Environment=PORT=8787
Restart=always
RestartSec=3
User=www-data
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
```
(Adjust `ExecStart` to your `which node` path.) Then:
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now tnr-contact
sudo systemctl status tnr-contact          # should be "active (running)"
```

Smoke-test the service directly (before nginx):
```bash
curl -X POST http://127.0.0.1:8787/api/contact \
  -H 'content-type: application/json' \
  -d '{"name":"Test","email":"you@example.com","phone":"555-1212","subject":"general-inquiry","message":"hello"}'
# → {"ok":true}  and an email lands in recovery@
```

### 5. nginx — proxy /api/contact to the service
In the site's server block (in `/etc/nginx/sites-enabled/…`), add:
```nginx
location = /api/contact {
    proxy_pass http://127.0.0.1:8787;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```
Then:
```bash
sudo nginx -t          # test config
sudo systemctl reload nginx
```

### 6. Deploy the site
The site already posts to the relative `/api/contact` (`CONTACT_ENDPOINT` in
`src/services/emailService.ts`). Build and deploy `dist/` as you normally do.

### 7. Test end-to-end
Submit the real contact form → confirm it lands in `recovery@` (a Damage Claim /
Complaint lands in `claims@`), and hitting **Reply** goes to the submitter.

## Notes
- The service binds to **127.0.0.1 only** — never exposed to the internet; nginx
  is the only way in.
- Change recipients/routing in `contact-server.mjs` (`RECOVERY_INBOX`,
  `CLAIMS_INBOX`, `CLAIMS_SUBJECTS`) → `sudo systemctl restart tnr-contact`.
- Logs: `sudo journalctl -u tnr-contact -f`.
