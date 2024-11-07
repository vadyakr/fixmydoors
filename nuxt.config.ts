// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', 'nuxt-svgo', 'nuxt-swiper', '@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxt/image', '@nuxtjs/seo'],
  css: ['~/styles/main.css'],

  app: {
    head: {
      title: 'Профессиональный ремонт дверей и окон в Минске – Быстро и Надежно',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
          'Профессиональный ремонт дверей и окон любой сложности в Минске. Надежные мастера, быстрый выезд и гарантия качества. Закажите услуги у лучших специалистов!',        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/snipped.png',
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },

  build: {
    transpile: ['trpc-nuxt'],
  },

  robots: {
    allow: ['/']
  },

  nitro: {
    prerender: {
      // enabled by default with nuxt generate, not required
      crawlLinks: false,
      // https://github.com/nuxt/nuxt/issues/22159
      failOnError: false,
    },
  },

  site: { 
    url: 'https://fixmydoors.by/', 
    name: 'FixMyDoors',
    description: 'Fix My Doors – надёжный выбор для ремонта дверей и окон в Минске'
  }, 
})