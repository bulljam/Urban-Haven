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

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event)
  const config = useRuntimeConfig(event)

  const name = clean(body?.name)
  const email = clean(body?.email)
  const phone = clean(body?.phone)
  const budget = clean(body?.budget)
  const message = clean(body?.message)
  const sourcePath = clean(body?.sourcePath) || 'Unknown'
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
  const fromName = clean(config.mailtrapFromName) || 'Urban Haven'
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

  const subject = `[Urban Haven] ${contextTitle}`
  const text = [
    `New inquiry from Urban Haven website`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Budget: ${budget || 'Not provided'}`,
    `Source: ${sourcePath}`,
    '',
    `Message:`,
    message
  ].join('\n')

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
      text
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
