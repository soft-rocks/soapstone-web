// https://nuxt.com/docs/api/configuration/nuxt-config
import dragonEntries from './app/content/dragon-english-basic-100/index.json';
import grammarNotes from './app/content/english-grammar-profile/index.json';

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2026-09-19',
  devtools: { enabled: true },

  // The grammar notes moved from /grammars to /english-grammar-profile. The old URLs are
  // prerendered as redirect pages, so links already shared keep working.
  routeRules: {
    '/grammars': { redirect: '/english-grammar-profile' },
    ...Object.fromEntries(
      grammarNotes.flatMap((note) => [
        [`/grammars/${note.id}`, { redirect: `/english-grammar-profile/${note.id}` }],
        [
          `/grammars/${note.id}/sentences`,
          { redirect: `/english-grammar-profile/${note.id}/sentences` },
        ],
      ]),
    ),
  },

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
        '/english-grammar-profile',
        '/english-grammar-profile/sentences',
        '/grammars',
        ...grammarNotes.flatMap((note) => [
          `/grammars/${note.id}`,
          `/grammars/${note.id}/sentences`,
        ]),
        ...grammarNotes.flatMap((note) => [
          `/english-grammar-profile/${note.id}`,
          `/english-grammar-profile/${note.id}/sentences`,
        ]),
        '/dragon-english-basic-100',
        '/dragon-english-basic-100/sentences',
        ...dragonEntries.flatMap((entry) => [
          `/dragon-english-basic-100/${entry.id}`,
          `/dragon-english-basic-100/${entry.id}/sentences`,
        ]),
        '/practices',
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
        'lucide:chevron-right',
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
        // Space Grotesk, the sales deck face; CJK falls through to PingFang TC or Noto Sans TC
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&family=Noto+Sans+TC:wght@400;500;700&display=swap',
        },
      ],
    },
  },
});
