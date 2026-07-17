/**
 * True North Recovery — contact-form email service (Node, no dependencies).
 *
 * Runs on the origin server, listening on localhost only. nginx proxies
 * /api/contact to it. Receives the form POST, routes by subject, and sends a
 * formatted notification via Resend. The Resend key comes from the env
 * (RESEND_API_KEY) — never hard-coded.
 *
 * Requires Node 18+ (uses the built-in global fetch). See server/README.md.
 */
import http from "node:http";

// ── Config ────────────────────────────────────────────────────────────────────
const PORT = Number(process.env.PORT) || 8787;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = "True North Recovery <noreply@send.truenorthar.com>";

const RECOVERY_INBOX = "recovery@truenorthar.com";
const CLAIMS_INBOX = "claims@truenorthar.com";
const CLAIMS_SUBJECTS = new Set(["damage-claim", "complaint"]);

const SUBJECT_LABELS = {
  "services-question": "Services Question",
  "general-inquiry": "General Inquiry",
  "debtor-appointment": "Debtor Appointment",
  "transport-appointment": "Transport Appointment",
  "damage-claim": "Damage Claim",
  complaint: "Complaint",
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function esc(s = "") {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]
  );
}

function renderContactEmail({ name, email, phone, subjectLabel, message }) {
  const safeName = esc(name);
  const safeEmail = esc(email);
  const safePhone = esc(phone);
  const safeSubject = esc(subjectLabel);
  const safeMsg = esc(message).replace(/\n/g, "<br>");

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>New Contact Form Submission</title>
<style>
  @media only screen and (max-width:600px){
    .card{width:100% !important;border-radius:0 !important;}
    .pad{padding:20px !important;}
  }
</style>
</head>
<body style="margin:0;padding:0;background:#eef1f4;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">New ${safeSubject} from ${safeName}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef1f4;">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" class="card" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;">
          <tr>
            <td style="background:#0f1d37;padding:24px 28px;">
              <div style="color:#93b4e6;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;font-weight:bold;">True North Recovery</div>
              <div style="color:#ffffff;font-size:20px;font-weight:bold;margin-top:4px;">New Contact Form Submission</div>
            </td>
          </tr>
          <tr>
            <td class="pad" style="padding:24px 28px 0;">
              <span style="display:inline-block;background:#e8f0fb;color:#1a3d73;font-size:13px;font-weight:bold;padding:6px 12px;border-radius:14px;">${safeSubject}</span>
            </td>
          </tr>
          <tr>
            <td class="pad" style="padding:16px 28px 4px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;color:#1f2937;">
                <tr>
                  <td width="70" style="padding:8px 0;color:#6b7280;font-size:13px;vertical-align:top;">Name</td>
                  <td style="padding:8px 0;font-weight:bold;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;font-size:13px;vertical-align:top;">Email</td>
                  <td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#1a3d73;text-decoration:none;font-weight:bold;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#6b7280;font-size:13px;vertical-align:top;">Phone</td>
                  <td style="padding:8px 0;"><a href="tel:${safePhone}" style="color:#1a3d73;text-decoration:none;font-weight:bold;">${safePhone}</a></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="pad" style="padding:12px 28px 8px;">
              <div style="color:#6b7280;font-size:13px;margin-bottom:6px;">Message</div>
              <div style="background:#f7f9fb;border:1px solid #e2e8f0;border-radius:6px;padding:16px;font-size:15px;line-height:1.5;color:#1f2937;">${safeMsg}</div>
            </td>
          </tr>
          <tr>
            <td class="pad" style="padding:8px 28px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" bgcolor="#1a3d73" style="border-radius:6px;">
                    <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(subjectLabel)}" style="display:inline-block;padding:12px 24px;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:6px;">Reply to ${safeName}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#f7f9fb;border-top:1px solid #e2e8f0;padding:16px 28px;color:#9aa5b1;font-size:12px;">
              Submitted via the truenorthar.com contact form. Reply directly to reach the sender.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `New Contact Form Submission — ${subjectLabel}

Name:  ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

— Submitted via the truenorthar.com contact form. Reply to reach the sender.`;

  return { html, text };
}

function send(res, status, obj) {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(obj));
}

// ── Server ────────────────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  if (req.method !== "POST" || !req.url.startsWith("/api/contact")) {
    return send(res, 404, { error: "not_found" });
  }

  let raw = "";
  req.on("data", (chunk) => {
    raw += chunk;
    if (raw.length > 100_000) req.destroy(); // guard against huge bodies
  });
  req.on("end", async () => {
    let body;
    try {
      body = JSON.parse(raw || "{}");
    } catch {
      return send(res, 400, { error: "invalid_json" });
    }

    const name = (body.name ?? "").toString().trim();
    const email = (body.email ?? "").toString().trim();
    const phone = (body.phone ?? "").toString().trim();
    const subject = (body.subject ?? "").toString().trim();
    const message = (body.message ?? "").toString().trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk || !subject || !message) {
      return send(res, 400, { error: "missing_or_invalid_fields" });
    }
    if (name.length > 200 || message.length > 5000) {
      return send(res, 400, { error: "too_long" });
    }

    const subjectLabel = SUBJECT_LABELS[subject] ?? "Contact Form";
    const to = CLAIMS_SUBJECTS.has(subject) ? CLAIMS_INBOX : RECOVERY_INBOX;
    const { html, text } = renderContactEmail({
      name,
      email,
      phone,
      subjectLabel,
      message,
    });

    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [to],
          reply_to: email,
          subject: `New ${subjectLabel} from ${name}`,
          html,
          text,
        }),
      });
      if (!r.ok) {
        console.error("resend error", r.status, await r.text());
        return send(res, 502, { error: "send_failed" });
      }
      return send(res, 200, { ok: true });
    } catch (err) {
      console.error("send error", err);
      return send(res, 502, { error: "send_failed" });
    }
  });
});

// localhost only — nginx proxies to it, so it's never exposed to the internet.
server.listen(PORT, "127.0.0.1", () => {
  console.log(`contact server listening on 127.0.0.1:${PORT}`);
});
