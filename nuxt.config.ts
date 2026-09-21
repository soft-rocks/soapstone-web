// https://nuxt.com/docs/api/configuration/nuxt-config
import grammarNotes from './app/content/grammar/index.json';

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2026-09-19',
  devtools: { enabled: true },

  // Fully static: nuxt generate prerenders every route into .output/public
  // (the dist symlink at the repo root points at it)
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/settings',
        '/grammars',
        ...grammarNotes.flatMap((note) => [
          `/grammars/${note.id}`,
          `/grammars/${note.id}/sentences`,
        ]),
        '/404.html',
      ],
      failOnError: false,
    },
  },

  runtimeConfig: {
    public: {
      // CI injects the commit hash through NUXT_PUBLIC_GIT_COMMIT
      gitCommit: 'dev',
    },
  },

  i18n: {
    // no_prefix keeps the locale out of the URL: one set of static routes, the
    // language is a stored preference applied on the client (see app/stores/settings.ts)
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', language: 'en', file: 'en.json' },
      { code: 'zhtw', name: 'Chinese (Traditional)', language: 'zh-TW', file: 'zhtw.json' },
    ],
    // The stored preference is the only source of truth
    detectBrowserLanguage: false,
  },

  icon: {
    // Inline the SVG during prerender so icons render without JS on the static host.
    // Icon data comes from the locally installed @iconify-json/lucide collection.
    mode: 'svg',
    serverBundle: 'local',
    // Names built at runtime are not picked up by the scanner, so list them here
    clientBundle: {
      scan: true,
      icons: [
        'lucide:play',
        'lucide:square',
        'lucide:check',
        'lucide:lightbulb',
        'lucide:copy',
        'lucide:menu',
      ],
    },
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  app: {
    baseURL: '/',
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // TsangerJinKai02, self-hosted as unicode-range chunks (public/fonts/tsanger/)
        { rel: 'stylesheet', href: '/fonts/tsanger/tsanger.css' },
      ],
    },
  },
});
