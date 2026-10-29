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
- **A change to one page type applies to every page of that type.** The grammar practice and
  the Dragon practice are one kind of page; the grammar note and the Dragon list are another.
  When the owner asks to change one, change every page of that kind in the same edit, keep the
  shared behavior in one component or composable, and test every route of that kind.
- **Do review and checking work yourself, in the foreground.** Do not hand a review, a
  screenshot check or a fix to background agents. A background agent counts as working only
  after you have read its output; a message that it will reply later is not progress.
- **Push only when the request in hand says push.** A push to `main` deploys the site. An
  earlier "commit + push" does not cover the next change. Without the word push, leave the
  change uncommitted and report it. When the user does say push, push to `main`, not a side
  branch.

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
before changing styles, and change a rule there, not here. The Hallmark skill
(`.claude/skills/hallmark`) reads it as the locked system, so a Hallmark run keeps this design
instead of picking its own theme. Hallmark's run records go to `.hallmark/`, which git, ESLint
and Prettier ignore. Code that draws colors itself (the SVG diagrams in `app/utils/markdown.ts`)
uses the `--ui-*` variables, so it follows the theme.

### Numbers stay at text size

Do not set a number larger than the text around it. A count, an index number or a sentence
number uses the size of the line it sits in. No "figure" styles, no number as a headline.

A number is not the point of a screen just because it is a number. Do not pick it out for
emphasis, in a layout or in text. This is the agent's habit, not something a theme asks for.

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

The script writes `app/content/english-grammar-profile/index.json` for every note that has a
`content.md`: the metadata from the source `grammar/index.json`, the name, the practice sentences,
and `examples`, the 例句 list grouped under its `####` headings. It copies no markdown.

- Ids are 3-character base62, assigned at sync time and **kept forever**: the script reuses the id
  already recorded for a slug, so a published URL never moves. They are registered, not derived,
  which is the opposite of the sentence ids (see below) — a short id cannot be computed from
  content, and the 62^3 space starts colliding well before the 1239 entries in the source index.
- Ids are unique without case. macOS treats `JV5.vue` and `jv5.vue` as one file, so the sync
  never gives out an id that differs from a taken one by case alone. When two ids already differ
  only by case, it keeps the one whose page file exists with that exact name and gives the other
  note a new id.
- Each grammar note page is written by hand as HTML in
  `app/notes/english-grammar-profile/<id>.vue`. Do not render grammar notes through
  `app/utils/markdown.ts`. The page ports the explanation from `content.md` and colors the parts
  of each sentence. The 例句 list is not written by hand: `<NoteExamples>` renders it from
  `note.examples`, so a sync carries a change to the list.
- A change to the explanation in `content.md` does not reach the page by sync. Port it to the
  `.vue` page by hand. The sync warns when a note has no page.
- A grammar note uses no color for the parts of a sentence. DESIGN.md allows one hue, the
  logo red, and only for an active state or a wrong answer. Mark a part with a rule under it,
  its name, a ring, or weight, in ink. `omitted` strikes through a word left out.
- A note shown as slides (`NoteDeck`, `NoteSlide`, `NoteMark`) follows these rules:
  - A slide title states the one point the slide teaches. No section numbers in a title, and
    no section label above it.
  - A slide teaches something the page head does not already show. Do not open with a slide
    that restates the H1 or names its verb.
  - The title states what the reader learns from the slide's diagram, never a fact the reader
    already sees on it. For the parts of His flatmate put him up to it., write
    「第一個受詞放在動詞和小品詞中間」, not 「這句的動詞是 put up to」.
  - In a diagram, the name under a part carries its placeholder, so the reader does not have
    to look it up: 第一個受詞（someone）, 第二個受詞（something）. Titles, remarks and labels do
    not carry it.
  - A slide is a diagram of the sentence, not prose moved into a frame. Show the structure in
    SVG or in the part rows; keep prose to one remark line.
  - `mark` circles the words of the note's sentence that the slide is about, in the
    top-right corner.
  - `mark` and the `marks` of `NoteMark` match whole words. A contraction is one word, so
    write `I'll` or `We're`, not `'ll` or `'re`. A mark that matches nothing circles nothing
    and gives no error, so check each ring in the screenshots.
  - A title names the pattern it talks about. Do not write 「這個句型」 or 「不屬於這個句型」:
    the reader cannot tell which pattern that is. Write 「片語介系詞動詞要有小品詞」.
  - On a phone the slides swipe sideways with native scroll-snap. The expand button opens an
    overlay with a close button; Esc also closes it. Do not use the Fullscreen API: iPhone
    Safari does not support it for a page element.
  - Expanded on a phone (under 560px), the deck is a webtoon: the slides stack edge to edge in
    one column at a larger type size, with no snap, and the reader scrolls down through them.
    A swipe from left to right closes it: 80px or more to the right, and at least twice as far
    across as down. A swipe from right to left does nothing.
  - A deck sentence longer than 40 characters sits on its own line above the slide title.
    A shorter one sits beside the title.
  - A paragraph on a slide does not end with one word alone on its last line. This covers
    English sentences, translations and remarks. Every `<p>` on a slide uses
    `text-wrap: balance`. A text span in a row, like `.translation` and `.gloss`, uses
    `balance` too. Do not use `pretty`: Chrome does not apply it to a Chinese
    last line like 「句子。」. The slide title follows the same rule and uses `balance`:
    `pretty` leaves 「去式」 alone on the last line of a title. Do not use
    `word-break: keep-all` on a title: a Chinese run wider than the line then breaks at its
    last character, or a line starts with 「，」. Check the last line of each paragraph and
    each title in the screenshots, at both widths.
  - A line on a slide does not break at a hyphen inside a word or a suffix, like `-ed`,
    `first-class` or 「動詞-ing」. In a note's template text, write `&#x2060;` (word joiner) on
    each side of such a hyphen. A hyphen at the start of the text gets one after it only:
    `<code>-&#x2060;ed</code>`. The slide title adds the joiners itself.
  - From 560px, a slide title does not break inside a Chinese word like 經驗. `NoteSlide`
    puts each clause that ends with 「，」 or 「、」 in an inline-block, so a title in two lines
    breaks after one of them. A title with neither that takes two lines must break between words:
    shorten it or reword it. Under 560px a clause is often wider than the slide, so a break
    inside a word is accepted there.
  - At every width, a line of a slide title or slide text does not start with 時, 的, 地, 裡, 「，」,
    or a suffix like -er, and does not end with 不 or 沒 apart from the word after it. A line
    does not start with the last Chinese character of a clause alone, like 「事，」.
    `NoteSlide` keeps a Chinese word on one line with word joiners. The segmenter finds the
    words, and `terms` in `Slide.vue` lists the grammar terms it splits. When a screenshot
    shows a break inside a term like 原形動詞, add the term to `terms`. Do not reword the
    title to get around it.
  - At every width, an English phrase in a slide title of 18 characters or less, like
    "be worth" or "can't help", keeps one line. A title line does not end with "be" when
    "worth" starts the next line. A longer phrase may break at its spaces.
  - A slide title covers every row on the slide. When a row teaches something the title does
    not name, change the title or drop the row.
  - The first slide may omit `mark` when its diagram shows the whole sentence.
  - A slide does not overflow at 1280px. When the rows do not fit, drop a row; do not shrink
    the type.
  - A ringed part in `NoteWords` has no rule under it. The ring already marks it.
  - In labeled rows from 560px, the name column is as wide as the longest name, at least
    8.5em. All rows share the column through `subgrid`. A name like
    「most of + the + 名詞」 keeps one line.
  - `NoteWords` shows words a sentence leaves out with `kind: 'gone'`: gray with a line
    through them. Red is only for a wrong sentence.
  - A phone layout is drawn for the phone. Do not shrink the desktop drawing to fit. The SVG
    diagrams (`NoteWords`, `NoteFork`) draw 1 unit to 1px under 560px and wrap into more
    rows; they shrink only a part wider than the slide.
  - `NoteWords` breaks a part wider than the slide into lines of whole words, about the same
    width each. A named part keeps a rule under each line and puts the name under the last
    line. Do not split a long part into several parts to make it fit.
  - In `NoteWords`, a row of plain words, with no rule, ring or name, is as tall as a line of
    text. The lines of a long dim part read as one paragraph, with no extra gap between them.
  - A `move` arrow must not cross words. Between parts in one row it goes over the row. From
    the first part of a lower row it goes up the left side. Put the moved part at the start
    of its row when the diagram wraps. From another part of another row it goes along the
    right side of every row, over the target's row, and down onto the target.
  - A ring does not touch its words, the words beside it, or the ring beside it. A ring
    reaches 0.4em past each side of its text, so `.mark-ring` keeps a 0.4em margin on each
    side. Change the margin when the ring size changes.
  - The deck styles live in the `<style>` block of each deck component, inside
    `@layer components`. Each such block first states
    `@layer theme, base, components, utilities;`. A component style can load before
    `main.css`. Without the statement, `components` becomes the first layer, and the base
    reset overrides every component rule, `.list-row` included. `NoteWords` and `NoteFork` share `components/note/words.css`. Do not
    put deck styles back in `main.css`.
  - Do not scroll or change layout inside a ResizeObserver callback. Defer the change to the
    next frame. A change inside the callback raises "ResizeObserver loop completed", and Nuxt
    dev shows the error over the page.
  - When styles move to a new file, write the new file before deleting the old rules. The page
    must not render without them, even for one hot reload.
  - After a change to a deck or a deck component, test every deck, not only the one the
    change was for. At 1920, 1440, 1280, 768 and 375px, click next through each deck. After each
    click, the count and the slide in view must match. Next is disabled on the last slide, and
    ArrowLeft goes back to the first. At 560px and wider, do the same in the expanded deck. Then
    screenshot every slide at 1280 and 375px and look at each one. Report the deck as working
    only after both checks pass for every deck.
  - A slide's position comes from `offsetLeft` or `offsetTop` minus the first slide's offset.
    Both offsets count from the page, not from the stage.
- Keep the spans of one sentence on one line, separated by spaces. Vue drops whitespace that
  contains a newline between two elements, and the words run together.
- A note's title is its own H1: the English sentence the note starts from. Under it the page
  shows the Chinese name of the grammar point, which the sync reads from `grammar/titles.json` in
  english-notes. Never show the EGP guideword or a pattern formula on any page.
- The notes live under `/english-grammar-profile`. The old `/grammars` URLs are prerendered as
  redirect pages from `routeRules` in `nuxt.config.ts`.
- `/english-grammar-profile` and `/dragon-english-basic-100` are one kind of page and both render
  `app/components/SentenceIndex.vue`. Each row is a label with a line under it. Both indexes
  use the same row form: the same field on top and the same field under it. Do not change one
  index's row without the other. Play-all and the
  practice run read the rows' sentences.
- `/english-grammar-profile` lists every EGP entry in the order of `grammar/index.json` in
  english-notes, not only the written notes. Its row is the same as the Dragon row: the
  English sentence, with its translation under it. A written note shows its H1 and links to
  its page. Every entry shows its sentence from `grammar/sentences.json` and its translation
  from `grammar/translations.json`. An entry without a note has no link. Everything else about
  its row, hover included, is the same as a Dragon row.
  The sync writes the list to `app/content/english-grammar-profile/catalog.json`.
- "Make the formats the same" covers every page of both kinds: index, note page, deck and
  practice run, and every note in the batch. Do it all without asking. Ask only when a wrong
  choice would force the whole batch to be redone.
- Do only what the request asks. Do not add fallbacks, extra fields, new data files or
  requests to other sessions that nobody asked for. When data is missing, report what is
  missing; do not fill the gap with something else.
- Add no visual difference the request did not ask for: no gray, no smaller type, no label.
  When the request names one difference, such as no link, make only that one.
- Do not show EGP `examples` as an entry's sentence: they are learner essays with errors. Do
  not show the EGP guideword either. The sentence comes from `grammar/sentences.json`.
- Play-all and the practice run read a sentence from the CDN by its hash. Before a page plays
  or practises a sentence, ask the session that owns the CDN whether
  `sentences/<hash>/index.json` and its audio are published for it. Until it confirms, the
  page plays only sentences known to be there.
- Do not report a page as done until you have opened it and compared each row and each control
  with what the request asked for, and the data it reads (CDN files included) is in place.
- On both indexes the reader sets the row order. The row clicked last moves to the top. The
  button on the right of a row moves it to the bottom. The order is kept in localStorage under
  `soapstone:order:<index>`; without it the rows keep the default order. Play-all follows the
  shown order.
- Duplicate EGP entries share one name in `titles.json`. The index lists only the entry with
  the smallest egpId of each name.
- `/dragon-english-basic-100` takes its translations from
  `notes/dragon-english-basic-100/translations.json` in english-notes. No row number, on either
  index.
- Nothing in this repo sets words apart, and that includes copied-in content: the sync strips
  corner quotes as a note lands in `app/content/english-grammar-profile/`, so neither the files here nor the
  page carry that emphasis. It happens once, at sync, never at render. english-notes keeps its
  own copy — it is read-only from here, so wording that should change is reported to the user
  or to the session that writes the notes.
- A note page reaches the route through `import.meta.glob`, whose file list is fixed when the
  dev server starts. After adding a page, restart `npm run dev` or the page hydrates with a
  mismatch. A static build is unaffected.
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
file name, the sentence from the note's H1, the Chinese translation from
`notes/dragon-english-basic-100/translations.json` in english-notes, and the numbered list under
the note's 例句 heading as its practice sentences. It also copies each note to `<id>.md`. The
ids are the book's own numbering and never move.

- Each row of the list links to `/dragon-english-basic-100/<id>`, the sentence's note, which has
  its own practice run at `/dragon-english-basic-100/<id>/sentences`.
- A grammar note and a Dragon note render through the same `app/components/NoteArticle.vue`. A
  Dragon note without a deck passes rendered markdown as `html`; a grammar note passes its page
  as the slot.
- Make a deck in this order. Review the note first: every explanation and every 中譯. If it is
  wrong or unclear, send the problem to the english-notes session; it fixes the note,
  regenerates what depends on it and updates the CDN. Do not work around a bad note. When you
  agree with the note, tell the english-notes session to publish its 例句 to the CDN, then
  write the deck. The upload does not block the deck.
- A deck shows only what its note has. A wrong sentence, a rule or an example that the note
  lacks is a content problem: send it to the english-notes session as soon as you find it, then
  change the deck to match the fixed note. Never list such a problem for the user to send.
- To review a deck, read the whole `.vue` file and its whole note. Text pulled out by a script
  is not a review. Report a deck as reviewed only after that reading.
- A Dragon deck has no NoteFix and no wrong sentence. The Dragon notes have no wrong examples
  (notes/dragon-english-basic-100/AGENTS.md in english-notes), so a deck must not add one.
- A Dragon note with a deck has a page at `app/notes/dragon-english-basic-100/<id>.vue`. The
  page gets the note's entry as `note` and holds the deck. The 例句 list under the deck still
  comes from the note's markdown, under the heading 例句 without its section number.

- A list of sentences shows each sentence's translation directly under it. A reader studying the
  list needs both, so the translation is not hidden behind a toggle or a detail page.
- Play-all and the practice run read the sentences from the CDN by hash, so a sentence not
  published there is silent in play-all and skipped in practice (see Practice runs).

## Practice runs

Every practice page renders `app/components/PracticeScreen.vue`, which runs
`app/composables/usePracticeRun.ts`. Do not build a practice page any other way.

- Progress is saved per set in `app/stores/practice.ts` (`localStorage['soapstone:practiceRuns']`):
  the shuffled order, the sentences answered, and when the set was last opened. Opening a set
  resumes at the first sentence not done. A set whose sentences changed is shuffled again.
- A set counts as practised once when its last sentence is answered. Opening or reloading it
  does not count.
- `/practices` lists every set: the set opened last on top, finished sets at the bottom.
- Every JSON read from the CDN goes through `fetchCdn` in `app/utils/cdn.ts`. An attempt times out
  after 5 seconds and retries after 1, 2 and 4 seconds, then the page goes home. A 404 skips the
  sentence; three in a row goes home instead of requesting the whole set.
- Play-all on the note and the Dragon list is `app/composables/usePlayAll.ts`.

## Sentence ids

CDN sentence ids are content-derived: `sha256(text.trim())`, first 12 bytes, base64url, no
padding — 16 characters, stable for the same sentence forever, which is why
`sentences/<hash>/index.json` needs no lookup table. Do not assume the same scheme for grammar.

## Breadcrumbs

The layout shows a breadcrumb trail on every page except the home page. The trail for each
route is in `app/composables/useBreadcrumbs.ts`. A new route gets its trail there.

Crumbs for pages of one kind take their label from the same field. A grammar note and a Dragon
sentence are both notes, so both crumbs show the H1 sentence, never an id.

A row that links to a page somewhere else in the site names that page by its trail, from
`useBreadcrumbTrail()`, rendered with `UBreadcrumb` like the layout's trail. Every row of one
list uses the same component and the same structure, whether its trail has one crumb or more.
A title alone, such as one sentence on `/practices`, does not tell the reader which book or note
it belongs to.

## Global preferences (state)

Cross-page preferences live in **Pinia** (`@pinia/nuxt`) and persist to localStorage.

- Stores go in `app/stores/`: `settings.ts` (`useSettingsStore`) and `practice.ts`
  (`usePracticeStore`), both auto-imported by Nuxt.
- Persistence is wired up in `app/plugins/persistedstate.client.ts` with
  `pinia-plugin-persistedstate`, **client-side only**: this is a static site, there is no
  localStorage during prerender, so the HTML always carries the defaults and the real values are
  restored in the browser. A store opts in with `persist` and lands in
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
  components/           # PracticeScreen, SentencePractice, SentenceTyping, BackToTop, ...
  composables/          # usePracticeRun, usePlayAll, useAudioSequence, ...
  layouts/default.vue   # site shell
  pages/                # file-based routing, prerendered at build time
  plugins/              # persistedstate.client.ts: Pinia persistence
  stores/               # Pinia stores (settings.ts, practice.ts)
  utils/                # cdn.ts (fetchCdn), markdown.ts, sentenceHash.ts, ...
public/                 # copied verbatim: CNAME, favicon, robots.txt
nuxt.config.ts
.github/workflows/deploy.yml
```

## When changing things

- The domain lives in `public/CNAME` (currently `english-notes.soft.rocks`). GitHub Pages is
  already configured to serve the `web` branch with that custom domain, and the domain is proxied
  through Cloudflare with a 10-minute cache, so a deploy takes a few minutes to show up.
- Use tokens for color (`text-primary`, `text-muted`, `border-muted`, `bg-elevated`, ...).
  Never hardcode hex values in a template or component.
- Every animation needs a `prefers-reduced-motion` opt-out.
