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

  const token = clean(config.mailtrapToken)
  const fromEmail = clean(config.mailtrapFromEmail)
  const fromName = clean(config.mailtrapFromName) || 'Urban Haven'
  const toEmails = clean(config.mailtrapToEmail)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)

  if (!token || !fromEmail || toEmails.length === 0) {
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
    await $fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: {
        from: { email: fromEmail, name: fromName },
        to: toEmails.map((address) => ({ email: address })),
        subject,
        text,
        category: 'website-contact'
      }
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
