// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  icon: {
    customCollections: [
      {
        prefix: 's',
        dir: './app/assets/icons',
      },
    ],
    mode: 'svg',
  },
  colorMode: {
    preference: 'light',
  },
  app: {
    baseURL: '/',
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg',
          href: '/favicon.svg',
        },
      ],
    },
  },
});
