// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', 'nuxt-svgo', 'nuxt-swiper', '@nuxtjs/robots', '@nuxtjs/sitemap'],
  css: ['~/styles/main.css'],

  app: {
    head: {
      title: 'Fix My Doors - Ваш надёжный партнёр в ремонте дверей',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Мы специализируемся на профессиональном ремонте дверей любой сложности. Закажите услуги у лучших специалистов!',
        },
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
    description: 'Fix My Doors - Ваш надёжный партнёр в ремонте дверей'
    }, 
})