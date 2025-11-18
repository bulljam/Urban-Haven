# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Contact Form (Mailtrap SMTP)

The reusable `InquiryForm` submits to `POST /api/contact` and sends emails via Mailtrap SMTP.

Create a `.env` file from `.env.example` and set:

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
