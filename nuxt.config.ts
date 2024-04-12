// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/ionic", "@pinia/nuxt", "@nuxtjs/tailwindcss"],

  pinia: {
    storesDirs: ["./stores/**"],
  },
});

