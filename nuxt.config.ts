// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'nuxt-aos',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@pinia-plugin-persistedstate/nuxt',
    '@formkit/auto-animate',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/seo',
    'nuxt-lodash'
  ]
})