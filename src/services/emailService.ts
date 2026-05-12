import emailjs from '@emailjs/browser'

// ── Shared public key ─────────────────────────────────────────────────────────
// Found in EmailJS dashboard → Account → General → Public Key
export const EMAILJS_PUBLIC_KEY = 'aVPic-0A3lHEPhWLS'

// ── Subject → routing map ─────────────────────────────────────────────────────
// serviceId  — EmailJS Email Service (Email Services tab)
// templateId — EmailJS Template (configure the "To" address inside each template)
//   recovery template → To: recovery@truenorthar.com
//   claims template   → To: claims@truenorthar.com
export interface SubjectRoute {
  label: string     // shown in the dropdown
  value: string     // used as the email subject line
  serviceId: string
  templateId: string
}

const RECOVERY_SERVICE_ID = 'service_e8xo3kn'
const RECOVERY_TEMPLATE_ID = 'template_vw4tlud'
const CLAIMS_TEMPLATE_ID = 'template_1dvgy9w'

export const SUBJECT_ROUTES: SubjectRoute[] = [
  {
    label: 'Services Question',
    value: 'services-question',
    serviceId: RECOVERY_SERVICE_ID,
    templateId: RECOVERY_TEMPLATE_ID,
  },
  {
    label: 'General Inquiry',
    value: 'general-inquiry',
    serviceId: RECOVERY_SERVICE_ID,
    templateId: RECOVERY_TEMPLATE_ID,
  },
  {
    label: 'Debtor Appointment',
    value: 'debtor-appointment',
    serviceId: RECOVERY_SERVICE_ID,
    templateId: RECOVERY_TEMPLATE_ID,
  },
  {
    label: 'Transport Appointment',
    value: 'transport-appointment',
    serviceId: RECOVERY_SERVICE_ID,
    templateId: RECOVERY_TEMPLATE_ID,
  },
  {
    label: 'Damage Claim',
    value: 'damage-claim',
    serviceId: RECOVERY_SERVICE_ID,
    templateId: CLAIMS_TEMPLATE_ID,
  },
  {
    label: 'Complaint',
    value: 'complaint',
    serviceId: RECOVERY_SERVICE_ID,
    templateId: CLAIMS_TEMPLATE_ID,
  },
]

// ── Payload sent to every template ───────────────────────────────────────────
// Template variables: {{from_name}}, {{from_email}}, {{phone}},
//                     {{subject}}, {{message}}
export interface EmailPayload {
  from_name: string
  from_email: string
  phone: string
  message: string
}

// ── Send helper ───────────────────────────────────────────────────────────────
export async function sendEmail(route: SubjectRoute, payload: EmailPayload): Promise<void> {
  await emailjs.send(
    route.serviceId,
    route.templateId,
    { ...payload, subject: route.label },
    EMAILJS_PUBLIC_KEY,
  )
}
