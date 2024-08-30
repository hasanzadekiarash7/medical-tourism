// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "nuxt-aos",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@pinia-plugin-persistedstate/nuxt",
    "@formkit/auto-animate",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxtjs/seo",
    "nuxt-lodash",
    "nuxt-viewport",
  ],
  css: ["~/assets/skeleton.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_variables.scss" as *;',
        },
      },
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: ["./stores"],
    autoImport: true,
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  i18n: {
    defaultLocale: "en",
    langDir: "./lang",
    locales: [
      { code: "fa", dir: "rtl", file: "fa.js", iso: "fa-IR" },
      { code: "en", dir: "ltr", file: "en.js", iso: "en-US" },
    ],
  },
  experimental: {
    viewTransition: true,
  },
  viewport: {
    breakpoints: {
      desktop: 900,
      desktopMedium: 1400,
      desktopWide: 1900,

      mobile: 300,
      mobileMedium: 375,
      mobileWide: 450,

      tablet: 450,
      tabletMedium: 750,
      tabletWide: 900,
    },
  },
});
