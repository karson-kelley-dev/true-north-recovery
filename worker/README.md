# Contact-form email Worker

Sends the site's contact-form submissions to the right internal inbox via
**Resend**. Replaces the old client-side EmailJS flow (key is now server-side,
recipients aren't exposed in the browser, From is the company domain).

## One-time setup

### 1. Resend
1. Create a Resend account (use a **company-owned email** as the login).
2. Add a domain → use the subdomain **`send.truenorthar.com`** (keeps DNS records
   isolated from the company's real M365 email — nothing to merge, no risk).
3. Resend shows a handful of DNS records (DKIM / SPF / return-path). Hand those to
   whoever manages `truenorthar.com`'s DNS. **If it's on Cloudflare, set them to
   "DNS only" (grey cloud), not proxied.**
4. Click **Verify** once the records propagate (a few minutes).
5. Create an **API key** (Resend → API Keys). You'll set it as the Worker secret.

> If you'd rather send from the bare `noreply@truenorthar.com` (root domain),
> verify `truenorthar.com` instead and change `FROM` in `contact-worker.js` — but
> then the SPF record must be **merged** into the domain's existing one, not added
> as a second record.

### 2. Deploy the Worker
From this `worker/` folder:

```bash
npm install -g wrangler      # if you don't have it
wrangler login               # log into your Cloudflare account
wrangler secret put RESEND_API_KEY   # paste the Resend API key when prompted
wrangler deploy
```

Wrangler prints the Worker URL, e.g. `https://tnr-contact.<your-subdomain>.workers.dev`.

### 3. Point the site at the Worker
In `src/services/emailService.ts`, set `CONTACT_ENDPOINT` to that Worker URL, then
build + push the site.

## Notes
- **Recipients / routing** live in `contact-worker.js` (`RECOVERY_INBOX`,
  `CLAIMS_INBOX`, `CLAIMS_SUBJECTS`). Change them here, redeploy — no site rebuild.
- **CORS**: add/remove site origins in `ALLOWED_ORIGINS`.
- **CC/BCC**: add `cc: [...]` / `bcc: [...]` to the Resend payload in
  `contact-worker.js` if you want extra people looped in (can be per-subject).
- **Cost**: Resend free tier (3k/mo) + Workers free tier (100k req/day) → $0 at a
  contact form's volume.
