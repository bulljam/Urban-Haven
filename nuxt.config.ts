import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  sourcemap: {
    server: false,
    client: false
  },
  vite: {
    build: {
      sourcemap: false
    },
    plugins: [tailwindcss()]
  },
  googleFonts: {
    families: {
      Manrope: [400, 500, 600, 700],
      'Cormorant Garamond': [500, 600, 700]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true
  }
})
