// ── Contact form email ────────────────────────────────────────────────────────
// The form POSTs here → a Cloudflare Worker → Resend (see /worker). This replaces
// the old client-side EmailJS flow: no API key in the browser, recipient inboxes
// aren't exposed, and mail sends from the company's own domain.
//
// Same-origin path — nginx on the server proxies this to the Node contact
// service (see server/README.md). Relative, so it works on whatever host the
// site is served from.
const CONTACT_ENDPOINT = '/api/contact'

// ── Subject dropdown ──────────────────────────────────────────────────────────
// Just labels + values for the <Select>. The Worker maps each value to the right
// internal inbox (recovery@ vs claims@), so routing lives server-side now.
export interface SubjectRoute {
  label: string
  value: string
}

export const SUBJECT_ROUTES: SubjectRoute[] = [
  { label: 'Services Question', value: 'services-question' },
  { label: 'General Inquiry', value: 'general-inquiry' },
  { label: 'Debtor Appointment', value: 'debtor-appointment' },
  { label: 'Transport Appointment', value: 'transport-appointment' },
  { label: 'Damage Claim', value: 'damage-claim' },
  { label: 'Complaint', value: 'complaint' },
]

// ── Send ──────────────────────────────────────────────────────────────────────
export interface ContactPayload {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendEmail(payload: ContactPayload): Promise<void> {
  const res = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    throw new Error(`Contact send failed: ${res.status}`)
  }
}
