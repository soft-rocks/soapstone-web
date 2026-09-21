# AGENTS.md

Guidance for coding agents working in this repository.

## Ground rules

- **English only in the codebase.** Comments, identifiers, UI strings, commit messages,
  and docs like this file are all written in English. No Chinese anywhere in tracked files.
  The single exception is `i18n/locales/*.json`: those are translation data, so a locale file
  contains that language. Never inline a translated string anywhere else — put it in the
  locale files and call `t()`.
- Do not invent product content. Copy, page structure, and features come from the user;
  when something is unspecified, ask instead of filling the page with plausible text.
- **No decorative filler text.** Do not put a kicker or eyebrow label above a heading that
  just restates it, do not add a one-line "description" under every setting or field, and do not
  write taglines, slogans, or explanatory blurbs nobody asked for. A page gets one title; a
  control gets one label. If a string is not information the reader needs, it does not ship.
- **Do not surface metadata the user did not ask for.** Fields like `level`, `category`,
  `guideword`, ids, slugs, hashes and counts exist in the data for filtering and addressing, not
  for display. Never render them as a badge, a chip or a `A · B` byline on your own initiative —
  put them on screen only when the user asks for that specific field in that specific place.
- Ship verified work: run `npm run lint && npm run typecheck && npm run generate` before
  handing anything over, and screenshot at 1280px and 375px when the layout changed.

## What this is

The frontend for `english-notes.soft.rocks`. A Nuxt 4 site generated as pure static files
by `nuxt generate` and pushed to the `web` branch by GitHub Actions for GitHub Pages.
There is no server runtime, so do not add server routes, runtime API handlers, or any
SSR-only logic.

## Commands

```bash
npm run dev        # dev server at http://localhost:3000
npm run generate   # static output in .output/public (the dist symlink points there)
npm run preview    # serve the generated output locally
npm run lint       # ESLint
npm run typecheck  # vue-tsc
npm run format     # Prettier
```

## Stack

| Item         | Version  | Notes                                                                                                                |
| ------------ | -------- | -------------------------------------------------------------------------------------------------------------------- |
| Nuxt         | 4.5      | `ssr: true` with `nitro.preset: 'static'`; every route is prerendered at build time                                  |
| Tailwind CSS | v4       | Bundled through `@nuxt/ui`. No `tailwind.config.js`; tokens live in CSS `@theme`                                     |
| Nuxt UI      | 4        | Its semantic variables (`--ui-bg`, ...) are remapped to the kami palette in `main.css`                               |
| Pinia        | 4        | Global preferences, persisted to localStorage                                                                        |
| TypeScript   | 5.9      | **Do not upgrade to 7.x**: `vue-tsc` and `typescript-eslint` are both incompatible and lint/typecheck crash outright |
| ESLint       | 10       | Flat config in `eslint.config.mjs`                                                                                   |
| Node         | 22.22.2+ | CI runs 24                                                                                                           |

## Design language: kami

The visual system comes from `~/.claude/skills/kami`. Read
`~/.claude/skills/kami/references/design.md` before changing styles. The invariants:

1. The page background is warm parchment `#f5f4ed` — **never pure white**
2. One chromatic accent only: ink blue `#1B365D`, covering no more than ~5% of the surface
3. Every gray carries a yellow-brown undertone (R >= G > B); no cool grays
4. Serif type carries the hierarchy, weight locked at **500**, no bold. Only small labels
   (`.eyebrow`, `.section-num`) use a sans face
5. Line-height 1.1-1.3 for headings, 1.5-1.55 for body
6. No hard drop shadows, no second accent color

Tokens are defined in `app/assets/css/main.css` under `@theme static`: the `ink-*` (ink blue)
and `sand-*` (warm gray) scales, plus `--color-parchment`, `--color-ivory`, `--color-line`.
`app/app.config.ts` points Nuxt UI's `primary` at `ink` and `neutral` at `sand`.

### Icons

Icons come from Iconify through `@nuxt/icon` (bundled with Nuxt UI), rendered as
`<UIcon name="i-lucide-*" />`. Collections must be installed locally — `@iconify-json/lucide` is
the only one so far — because a static host has no Iconify API to fall back on. `nuxt.config.ts`
sets `icon.mode: 'svg'` so the SVG is inlined during prerender and shows without JavaScript;
the default CSS mode injects the icon at runtime instead. To use another icon set, install its
`@iconify-json/*` package first.

### Fonts

- Latin: Charter, falling back to Georgia.
- CJK: TsangerJinKai02 W04, the Kai face kami specifies. The jsDelivr source referenced by the
  kami templates is dead (404), so the font is self-hosted: the TTF comes from
  [tw93/MiaoYan-NetNewsWire-Theme](https://github.com/tw93/MiaoYan-NetNewsWire-Theme) (MIT) and
  was split with `cn-font-split` into 292 unicode-range woff2 chunks under `public/fonts/tsanger/`,
  loaded via `<link href="/fonts/tsanger/tsanger.css">` in `nuxt.config.ts`. A browser only
  downloads the chunks a page actually needs (a few hundred KB). The family name declared in that
  CSS is `TsangerJinKai02 W04`. The font files still carry their foundry notice
  (Beijing Tsanger Character Technology Co., Ltd.); MIT is the upstream repository's license.
  To swap the face, rerun `npx cn-font-split run -i <ttf> -o <dir>` and replace the directory.
- Do not switch to a Song/Ming face (Noto Serif TC, Source Han Serif, Songti) — kami is Kai.
- UI labels use `--font-ui` (PingFang TC / system-ui).

## i18n

`@nuxtjs/i18n` with `strategy: 'no_prefix'`, so **the locale never appears in the URL**: one set
of static routes, language is a stored preference applied on the client.

- Locale codes are lowercase with no separator (`en`, `zhtw`); each locale also declares the real
  BCP-47 tag in its `language` field (`zh-TW`). Code is what the app and the CDN use; `language`
  is what goes into `<html lang>` via `useLocaleHead()` in `app/app.vue`. Do not put `zhtw` in
  `lang` — it is not a valid tag.
- Messages live in `i18n/locales/<code>.json`. Adding a language means one JSON file plus one
  entry in `nuxt.config.ts` and the `languages` endonym map inside every locale file.
- The reader picks the language in `/settings`. Until they do, `settings.locale` is `null` and
  `useResolvedLocale()` matches the browser's `navigator.languages` against the available
  locales, falling back to `en`. `app/utils/detectBrowserLocale.ts` does the matching: exact tag,
  then script-aware for Chinese (`zh-Hant-HK` -> `zhtw`, while `zh-Hans`/`zh-CN` deliberately does
  **not** match Traditional and lands on `en`), then a plain primary-subtag match when exactly one
  locale uses it.
- `detectBrowserLanguage` in the module config stays `false`: the store is the only source of
  truth, and the module's own cookie would fight it.
- The locale is applied in `onMounted`, never earlier: prerendered HTML is always in the default
  locale, so switching during hydration would mismatch.

## Grammar notes

Notes are written in the sibling `english-notes` repo, which is local-only (not on GitHub, not on
the CDN), so they are **vendored** into this one and committed:

```bash
node scripts/sync-grammar.mjs ../english-notes
```

The script copies every note that has a `content.md` into `app/content/grammar/<id>.md` and writes
`app/content/grammar/index.json` with the metadata from the source `grammar/index.json`.

- Ids are 3-character base62, assigned at sync time and **kept forever**: the script reuses the id
  already recorded for a slug, so a published URL never moves. They are registered, not derived,
  which is the opposite of the sentence ids (see below) — a short id cannot be computed from
  content, and the 62^3 space starts colliding well before the 1239 entries in the source index.
- The markdown is rendered at build time with `markdown-it` and injected with `v-html`. That is
  safe only because the content comes from this repo; never point that renderer at remote input.
- Indented blocks in a note are never code, so they never render as a monospace `<pre>`. An
  example block becomes `.example` (serif, CJK-only lines dimmed as the translation); a block
  drawn with box-drawing characters becomes an inline SVG diagram. If a note needs a diagram,
  it gets SVG — never ASCII art.
- Only the notes named on the command line are carried; re-running with no slugs refreshes
  exactly what is already in the index and deletes anything no longer selected.
- Every note is added to `nitro.prerender.routes` from the index, so each one is a real static
  page with a 200 status, unlike `/sentences/<id>`.

### Sentence ids, for contrast

CDN sentence ids are content-derived: `sha256(text.trim())`, first 12 bytes, base64url, no
padding — 16 characters, stable for the same sentence forever, which is why
`sentences/<hash>/index.json` needs no lookup table. Do not assume the same scheme for grammar.

## Global preferences (state)

Cross-page preferences live in **Pinia** (`@pinia/nuxt`) and persist to localStorage.

- Stores go in `app/stores/`. Today there is only `settings.ts` (`useSettingsStore`,
  auto-imported by Nuxt).
- Persistence is wired up in `app/plugins/persistedstate.client.ts` with
  `pinia-plugin-persistedstate`, **client-side only**: this is a static site, there is no
  localStorage during prerender, so the HTML always carries the defaults and the real values are
  restored in the browser. A store opts in with `persist: true` and lands in
  `localStorage['soapstone:<storeId>']`.
- Any UI bound to persisted state must be wrapped in `<ClientOnly>`, otherwise it hydration-mismatches.
- The `@pinia-plugin-persistedstate/nuxt` module **cannot be used**: its peer range is still
  `@pinia/nuxt@^0.5`, which conflicts with `@pinia/nuxt@1.x`. Hence the hand-rolled plugin.
- Add new routes to `nitro.prerender.routes` in `nuxt.config.ts` when nothing links to them.

## Layout

```
app/
  assets/css/main.css   # Tailwind @theme, Nuxt UI variable remap, kami base styles
  app.config.ts         # Nuxt UI theme (palette mapping, button appearance)
  layouts/default.vue   # site shell
  pages/                # file-based routing, prerendered at build time
  plugins/              # persistedstate.client.ts: Pinia persistence
  stores/               # Pinia stores (settings.ts)
public/                 # copied verbatim: CNAME, favicon, robots.txt, fonts/
nuxt.config.ts
.github/workflows/deploy.yml
```

## When changing things

- The domain lives in `public/CNAME` (currently `english-notes.soft.rocks`). GitHub Pages is
  already configured to serve the `web` branch with that custom domain, and the domain is proxied
  through Cloudflare with a 10-minute cache, so a deploy takes a few minutes to show up.
- Use tokens for color (`text-primary`, `text-muted`, `border-muted`, `bg-elevated`, ...).
  Never hardcode hex values, and never reach for Tailwind's default `gray-*` / `zinc-*` — those
  are cool grays.
- Every animation needs a `prefers-reduced-motion` opt-out.
