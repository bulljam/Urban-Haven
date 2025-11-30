# Urban Haven

Premium real estate showcase website built with Nuxt 3 (Vue 3), Tailwind CSS, and DaisyUI.

![Urban Haven Home](app/assets/images/Home.png)

## Overview

Urban Haven is a mobile-first, design-forward real estate experience with:

- Reusable Vue components and clean page composition
- Luxury/minimal visual language with refined typography
- Responsive layouts for Home, Listings, Property Details, About, and Contact
- Property filtering, pagination, and detailed listing pages
- Smooth scrolling and motion-enhanced interactions
- Contact workflow backed by SMTP email delivery

## Tech Stack

- Nuxt
- Vue
- Tailwind CSS
- DaisyUI
- Motion (`motion-v`)
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- Nodemailer for email delivery

## Project Structure

```text
app/
  components/
    forms/
    layout/
    property/
    sections/
    shared/
  composables/
  data/
    properties.ts
  layouts/
  pages/
    index.vue
    listings/index.vue
    listings/[slug].vue
    about.vue
    contact.vue
  plugins/
    gsap.client.ts
    lenis.client.ts
  assets/
    css/main.css
    images/Home.png
server/
  api/
    contact.post.ts
nuxt.config.ts
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm preview
pnpm lint
pnpm lint:fix
pnpm typecheck
```

## Environment Variables

Copy `.env.example` to `.env` and configure Mailtrap SMTP:

```bash
NUXT_MAILTRAP_HOST=live.smtp.mailtrap.io
NUXT_MAILTRAP_PORT=2525
NUXT_MAILTRAP_USER=your_mailtrap_username
NUXT_MAILTRAP_PASS=your_mailtrap_password
NUXT_MAILTRAP_SECURE=false
NUXT_MAILTRAP_FROM_EMAIL=hello@yourdomain.com
NUXT_MAILTRAP_FROM_NAME=Urban Haven
NUXT_MAILTRAP_TO_EMAIL=inbox@yourdomain.com
```

Notes:

- `FROM` is your website sender identity.
- `TO` is the destination inbox for incoming form submissions.
- The form submitter address is set as `Reply-To`.

## Contact Form

- UI component: `app/components/forms/InquiryForm.vue`
- API route: `POST /api/contact`
- Backend sender: `server/api/contact.post.ts`
- Email output: plain-text + HTML template with a `Reply to Lead` CTA

## Quality Checks

Run before shipping:

```bash
pnpm lint
pnpm typecheck
pnpm build
```
