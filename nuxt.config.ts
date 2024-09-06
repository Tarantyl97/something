// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: ['swiper/swiper-bundle.css'],

  modules: [
    '@nuxt/fonts', 
    '@nuxt/image', 
    '@nuxt/ui'
  ],

  plugins: [
    '~/plugins/swiper.js'
  ]


})