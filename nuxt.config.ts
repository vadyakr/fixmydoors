// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', 'nuxt-svgo', 'nuxt-swiper'],
  css: ['~/styles/main.css'],

  build: {
    transpile: ['trpc-nuxt'],
  },

  nitro: {
    prerender: {
      // enabled by default with nuxt generate, not required
      crawlLinks: false,
      // https://github.com/nuxt/nuxt/issues/22159
      failOnError: false,
    },
  },
})
