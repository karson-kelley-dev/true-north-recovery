/**
 * True North Recovery — contact-form email Worker.
 *
 * Receives the contact form POST from the site, routes it to the right internal
 * inbox by subject, and sends a formatted notification via Resend. Replaces the
 * old client-side EmailJS flow: the Resend key stays server-side (a Worker
 * secret), recipient addresses aren't exposed in the browser, and the From is
 * the company's own domain.
 *
 * Deploy: see worker/README.md. Set the RESEND_API_KEY secret before going live.
 */

// ── Config ────────────────────────────────────────────────────────────────────
// The verified Resend sender. Using the `send.` subdomain keeps these DNS records
// isolated from the company's real M365 email (nothing to merge, no risk).
const FROM = "True North Recovery <noreply@send.truenorthar.com>";

// Origins allowed to call this Worker (CORS). Add/remove as needed.
const ALLOWED_ORIGINS = [
  "https://truenorthar.com",
  "https://www.truenorthar.com",
  "http://localhost:5173", // Vite dev
];

// Subject value → internal recipient. Anything not listed falls back to recovery@.
const CLAIMS_INBOX = "claims@truenorthar.com";
const RECOVERY_INBOX = "recovery@truenorthar.com";
const CLAIMS_SUBJECTS = new Set(["damage-claim", "complaint"]);

// Human labels for the subject values (for the email subject line + badge).
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

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
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

// ── Worker ────────────────────────────────────────────────────────────────────
export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") ?? "";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== "POST") {
      return json({ error: "method_not_allowed" }, 405, origin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "invalid_json" }, 400, origin);
    }

    const name = (body.name ?? "").toString().trim();
    const email = (body.email ?? "").toString().trim();
    const phone = (body.phone ?? "").toString().trim();
    const subject = (body.subject ?? "").toString().trim();
    const message = (body.message ?? "").toString().trim();

    // Basic validation — required fields + a sane email + length caps.
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk || !subject || !message) {
      return json({ error: "missing_or_invalid_fields" }, 400, origin);
    }
    if (name.length > 200 || message.length > 5000) {
      return json({ error: "too_long" }, 400, origin);
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
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [to],
          reply_to: email, // hitting Reply goes straight to the customer
          subject: `New ${subjectLabel} from ${name}`,
          html,
          text,
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error("resend error", res.status, detail);
        return json({ error: "send_failed" }, 502, origin);
      }
      return json({ ok: true }, 200, origin);
    } catch (err) {
      console.error("worker error", err);
      return json({ error: "send_failed" }, 502, origin);
    }
  },
};
