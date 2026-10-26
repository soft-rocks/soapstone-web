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
- **Do not set words apart.** The recurring failure here is emphasis: corner quotes around
  a phrase to coin it as a term, a parenthetical restating what the sentence just said, a
  bolded label in front of prose, a kicker over a heading. Position and type already carry
  the hierarchy — a title is a title because of where it sits, not because it is quoted.
  Write plainly, and strip these marks when they arrive from the source rather than passing
  them through.
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
| Nuxt UI      | 4        | Its semantic variables (`--ui-bg`, ...) are remapped to the soft.rocks palette in `main.css`                         |
| Pinia        | 4        | Global preferences, persisted to localStorage                                                                        |
| TypeScript   | 5.9      | **Do not upgrade to 7.x**: `vue-tsc` and `typescript-eslint` are both incompatible and lint/typecheck crash outright |
| ESLint       | 10       | Flat config in `eslint.config.mjs`                                                                                   |
| Node         | 22.22.2+ | CI runs 24                                                                                                           |

## Design language: soft.rocks

The design system is in [`DESIGN.md`](DESIGN.md): tokens, rules, controls and motion. Read it
before changing styles. The Hallmark skill (`.claude/skills/hallmark`) reads it as the locked
system, so a Hallmark run keeps this design instead of picking its own theme. Change a rule there,
not here. Code that draws colors itself (the SVG diagrams in `app/utils/markdown.ts`) uses the
`--ui-*` variables, so it follows the theme.

### A change to one page type applies to every page of that type

The grammar practice and the Dragon practice are the same kind of page. So are the grammar
note and the Dragon list. When the owner asks to change one of them, change every page of that
kind in the same edit. Put the shared behavior in one component or composable, so the pages
cannot drift apart. Then test every route of that kind, not only the one the owner named.

Wrong: the owner asked to remove the top arrow on `/dragon-english-basic-100/sentences`. The
agent removed it there only and left it on the grammar practice pages.

### Numbers stay at text size

Do not set a number larger than the text around it. A count, an index number or a sentence
number uses the size of the line it sits in. No "figure" styles, no number as a headline.

A number is not the point of a screen just because it is a number. Do not pick it out for
emphasis, in a layout or in text. This is the agent's habit, not something a theme asks for.

Wrong: in the Hallmark Grid redesign the agent chose to set the note count and the sentence
count at 72px on the home page, and the current sentence number at 72px on the Dragon list. The
owner rejected it.

### Icons

Icons come from Iconify through `@nuxt/icon` (bundled with Nuxt UI), rendered as
`<UIcon name="i-lucide-*" />`. Collections must be installed locally — `@iconify-json/lucide` is
the only one so far — because a static host has no Iconify API to fall back on. `nuxt.config.ts`
sets `icon.mode: 'svg'` so the SVG is inlined during prerender and shows without JavaScript;
the default CSS mode injects the icon at runtime instead. To use another icon set, install its
`@iconify-json/*` package first.

### Fonts

- Latin: Public Sans 400/500/600/700 from Google Fonts, linked in `nuxt.config.ts`. It is also
  Nuxt UI's default, which soft.rocks uses.
- CJK: PingFang TC on Apple devices, Noto Sans TC (Google Fonts) elsewhere.

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
  example block becomes `.example` (left hairline, CJK-only lines dimmed as the translation); a block
  drawn with box-drawing characters becomes an inline SVG diagram. If a note needs a diagram,
  it gets SVG — never ASCII art.
- A note's title is its EGP guideword with the aspect prefix (`FORM:`, `FORM/USE:`) and every
  quote mark removed: the source writes `FORM/USE: 'WOULD HATE' + 'TO'`, the page shows
  `WOULD HATE + TO`. See `app/utils/guideword.ts`.
- Nothing in this repo sets words apart, and that includes copied-in content: the sync strips
  corner quotes as a note lands in `app/content/grammar/`, so neither the files here nor the
  page carry that emphasis. It happens once, at sync, never at render. english-notes keeps its
  own copy — it is read-only from here, so wording that should change is reported to the user
  or to the session that writes the notes.
- A note's markdown reaches the page through `import.meta.glob`, whose file list is fixed
  when the dev server starts. After syncing a note that was not there before, restart
  `npm run dev` or the page renders its title and reports the body as missing. A static
  build is unaffected.
- Only the notes named on the command line are carried; re-running with no slugs refreshes
  exactly what is already in the index and deletes anything no longer selected.
- Every note is added to `nitro.prerender.routes` from the index, so each one is a real static
  page with a 200 status, unlike `/sentences/<id>`.

## Dragon English Basic 100

`/dragon-english-basic-100` lists the hundred sentences of the book, with a play-all control and
a practice run at `/dragon-english-basic-100/sentences`. The list is vendored the same way the
grammar notes are:

```bash
node scripts/sync-dragon.mjs ../english-notes
```

It writes `app/content/dragon-english-basic-100/index.json`: the three-digit id from the note's
file name, the sentence from the note's H1, and the Chinese translation from
`notes/dragon-english-basic-100/translations.json` in english-notes. The ids are the book's own
numbering and never move.

- A list of sentences shows each sentence's translation directly under it. A reader studying the
  list needs both, so the translation is not hidden behind a toggle or a detail page.
  Wrong: the first version of this page listed the English alone, and the reader asked where
  the translations were.
- Play-all and the practice run read the sentences from the CDN by hash, so a sentence not
  published there is silent in play-all and skipped in practice.

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
  assets/css/main.css   # Tailwind @theme, Nuxt UI variable remap, soft.rocks base styles
  app.config.ts         # Nuxt UI theme (palette mapping, button appearance)
  layouts/default.vue   # site shell
  pages/                # file-based routing, prerendered at build time
  plugins/              # persistedstate.client.ts: Pinia persistence
  stores/               # Pinia stores (settings.ts)
public/                 # copied verbatim: CNAME, favicon, robots.txt
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
