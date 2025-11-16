import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', 'motion-v/nuxt', '@nuxt/eslint'],
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
    plugins: [tailwindcss() as import('vite').PluginOption]
  },
  googleFonts: {
    families: {
      Manrope: [400, 500, 600, 700],
      'Cormorant Garamond': [500, 600, 700]
    },
    display: 'block',
    prefetch: true,
    preconnect: true
  },
  motionV: {
    components: true,
    utilities: true,
    directives: false
  }
})
