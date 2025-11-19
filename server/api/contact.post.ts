import nodemailer from 'nodemailer'

interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  budget?: string
  message?: string
  sourcePath?: string
  contextTitle?: string
}

const clean = (value: unknown) => (typeof value === 'string' ? value.trim() : '')
const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
const maskEmail = (value: string) => {
  const [local, domain] = value.split('@')
  if (!local || !domain) return 'Hidden'
  const visible = local.slice(0, 1)
  return `${visible}${'*'.repeat(Math.max(local.length - 1, 2))}@${domain}`
}
const maskPhone = (value: string) => {
  if (!value) return 'Not provided'
  const digits = value.replaceAll(/\D/g, '')
  if (digits.length < 4) return 'Hidden'
  return `•••• ${digits.slice(-2)}`
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event)
  const config = useRuntimeConfig(event)

  const name = clean(body?.name)
  const email = clean(body?.email)
  const phone = clean(body?.phone)
  const budget = clean(body?.budget)
  const message = clean(body?.message)
  const contextTitle = clean(body?.contextTitle) || 'Contact Form'

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email and message are required.'
    })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide a valid email address.'
    })
  }

  const host = clean(config.mailtrapHost)
  const user = clean(config.mailtrapUser)
  const pass = clean(config.mailtrapPass)
  const fromEmail = clean(config.mailtrapFromEmail)
  const fromName = clean(config.mailtrapFromName) 
  const secure = Boolean(config.mailtrapSecure)
  const port =
    typeof config.mailtrapPort === 'number'
      ? config.mailtrapPort
      : Number.parseInt(String(config.mailtrapPort), 10)
  const toEmails = clean(config.mailtrapToEmail)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)

  if (
    !host ||
    !Number.isFinite(port) ||
    !user ||
    !pass ||
    !fromEmail ||
    toEmails.length === 0
  ) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Mailtrap environment variables are missing.'
    })
  }

  const subject = `[${fromName}] New Website Inquiry`
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(maskEmail(email))
  const safePhone = escapeHtml(maskPhone(phone))
  const safeBudget = escapeHtml(budget || 'Not provided')
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br>')

  const text = [
    `New inquiry from Urban Haven website`,
    '',
    `Name: ${name}`,
    `Email: ${maskEmail(email)}`,
    `Phone: ${maskPhone(phone)}`,
    `Budget: ${budget || 'Not provided'}`,
    '',
    `Message:`,
    message
  ].join('\n')
  const html = `
    <div style="background:#f8f6f2;padding:28px;font-family:Arial,Helvetica,sans-serif;color:#1e1d1a;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e7e2d9;border-radius:16px;overflow:hidden;">
        <div style="padding:20px 24px;background:#f1ece2;border-bottom:1px solid #e7e2d9;">
          <p style="margin:0;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#7b7467;">${safeName}</p>
          <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;font-weight:700;">${escapeHtml(contextTitle)}</h1>
        </div>
        <div style="padding:24px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#7b7467;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#7b7467;">Email</td><td style="padding:8px 0;">${safeEmail}</td></tr>
            <tr><td style="padding:8px 0;color:#7b7467;">Phone</td><td style="padding:8px 0;">${safePhone}</td></tr>
            <tr><td style="padding:8px 0;color:#7b7467;">Budget</td><td style="padding:8px 0;">${safeBudget}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;border:1px solid #e7e2d9;border-radius:12px;background:#fcfbf8;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#7b7467;">Message</p>
            <p style="margin:0;line-height:1.7;">${safeMessage}</p>
          </div>
        </div>
      </div>
    </div>
  `

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass
      }
    })

    await transporter.sendMail({
      from: `${fromName} <${fromEmail}>`,
      to: toEmails.join(', '),
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html
    })
  } catch {
    throw createError({
      statusCode: 502,
      statusMessage: 'Unable to send message right now.'
    })
  }

  return {
    ok: true
  }
})
