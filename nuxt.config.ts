// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', 'nuxt-svgo', 'nuxt-swiper'],
  css: ['~/styles/main.css'],

  app: {
    head: {
      title: 'Fix My Doors - Ваш надёжный партнёр в ремонте и установке дверей',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Мы специализируемся на профессиональном ремонте и установке дверей любой сложности. Закажите услуги у лучших специалистов!',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://vadyakr.github.io/fixmydoors/snipped.png',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://vadyakr.github.io/fixmydoors/favicon.ico',
        },
      ],
    },
    baseURL: '/fixmydoors',
  },

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
