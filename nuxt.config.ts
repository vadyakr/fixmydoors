// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', 'nuxt-svgo', 'nuxt-swiper', '@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxt/image', '@nuxtjs/seo', 'nuxt-gtag', 'yandex-metrika-module-nuxt3'],
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
          'FixMyDoors – профессиональный ремонт дверей и окон в Минске. Мы выполняем ремонт пластиковых и деревянных дверей, окон и балконов. Быстрый выезд мастера, гарантия качества и доступные цены. Ремонт окон любой сложности в Минске с высокой надежностью и долгосрочной гарантией. Закажите услуги по ремонту дверей и окон у лучших специалистов!',        },
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
        {
          name: 'yandex-verification',
          content: '34e8ef7aba113de7',
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
      crawlLinks: false,
      failOnError: false,
    },
  },

  site: { 
    url: 'https://fixmydoors.by/', 
    name: 'FixMyDoors',
    description: 'FixMyDoors – профессиональный ремонт дверей и окон в Минске. Мы выполняем ремонт пластиковых и деревянных дверей, окон и балконов. Быстрый выезд мастера, гарантия качества и доступные цены. Ремонт окон любой сложности в Минске с высокой надежностью и долгосрочной гарантией. Закажите услуги по ремонту дверей и окон у лучших специалистов!'
  }, 

  gtag: {
    id: 'G-E9DCH4X3H9'
  },

  yandexMetrika: {
    id: '98851724',
  }
})