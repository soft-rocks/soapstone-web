/**
 * Copy written grammar notes out of the english-notes repo into this one.
 *
 * english-notes is the source of truth but is not published anywhere this site can
 * reach at runtime, so its notes are vendored here and committed: CI builds without
 * needing the sibling checkout, and every note prerenders to a real static page.
 *
 *   node scripts/sync-grammar.mjs [path-to-english-notes] [slug...]
 *
 * Naming slugs sets which notes the site carries. With no slugs it refreshes exactly
 * the ones already in the index, so re-running never pulls in a note nobody asked for.
 * Anything no longer selected is deleted. Each note keeps the short base62 id it was
 * first given, so published URLs never move.
 */
import { existsSync, readdirSync } from 'node:fs';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { exampleGroups, exampleSentences } from './examples.mjs';

const [sourceArg, ...slugArgs] = process.argv.slice(2);
const SOURCE = sourceArg ?? process.env.ENGLISH_NOTES_DIR ?? '../english-notes';
const TARGET = 'app/content/english-grammar-profile';
const INDEX = path.join(TARGET, 'index.json');
const CATALOG = path.join(TARGET, 'catalog.json');
const PAGES = 'app/notes/english-grammar-profile';

/** Nothing in this repo sets words apart, so the marks come off as a note is copied in. */
const withoutEmphasisMarks = (text) => (text ?? '').replaceAll('「', '').replaceAll('」', '');

const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ID_LENGTH = 3;

function randomId() {
  let id = '';
  for (let i = 0; i < ID_LENGTH; i += 1) {
    id += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return id;
}

// macOS and Windows treat file names without case, so JV5.vue and jv5.vue are one file.
// `taken` holds lower-case ids: an id is free only when no id differs from it by case alone.
function nextId(taken) {
  // 62^3 is a small space, so retry until a free one turns up and give up loudly
  for (let attempt = 0; attempt < 10_000; attempt += 1) {
    const id = randomId();
    if (!taken.has(id.toLowerCase())) return id;
  }
  throw new Error(`Could not find a free ${ID_LENGTH}-character id; the space is full`);
}

const sourceIndexPath = path.join(SOURCE, 'grammar/index.json');
if (!existsSync(sourceIndexPath)) {
  console.error(
    `No grammar index at ${sourceIndexPath}. Pass the english-notes path as an argument.`,
  );
  process.exit(1);
}

const sourceEntries = JSON.parse(await readFile(sourceIndexPath, 'utf8')).entries;

// The Chinese name of each note's grammar point, keyed by slug. The note page shows it
// under the H1 instead of the EGP guideword.
const titlesPath = path.join(SOURCE, 'grammar/titles.json');
const titles = existsSync(titlesPath) ? JSON.parse(await readFile(titlesPath, 'utf8')) : {};

// The Chinese translation of each note's H1 sentence, keyed by slug
const translationsPath = path.join(SOURCE, 'grammar/translations.json');
const translations = existsSync(translationsPath)
  ? JSON.parse(await readFile(translationsPath, 'utf8'))
  : {};
const bySlug = new Map(sourceEntries.map((entry) => [entry.slug, entry]));

const existing = existsSync(INDEX) ? JSON.parse(await readFile(INDEX, 'utf8')) : [];
const idBySlug = new Map(existing.map((note) => [note.slug, note.id]));

const selected = slugArgs.length ? slugArgs : existing.map((note) => note.slug);
if (!selected.length) {
  console.error(
    'Nothing selected. Name the slugs to sync, e.g.\n  node scripts/sync-grammar.mjs ../english-notes some-slug',
  );
  process.exit(1);
}

// Two ids that differ only by case share one page file. Keep the id whose page file exists
// with that exact name, or else the first one, and give the other note a new id.
const pageFiles = new Set(existsSync(PAGES) ? readdirSync(PAGES) : []);
const taken = new Set();
const owners = new Map();
for (const [slug, id] of [...idBySlug].sort(
  ([, a], [, b]) => pageFiles.has(`${b}.vue`) - pageFiles.has(`${a}.vue`),
)) {
  const key = id.toLowerCase();
  if (taken.has(key)) {
    idBySlug.delete(slug);
    console.warn(`${id}  ${slug}: same file name as ${owners.get(key)}; gets a new id`);
    continue;
  }
  taken.add(key);
  owners.set(key, id);
}
await mkdir(TARGET, { recursive: true });

const notes = [];
for (const slug of selected) {
  const entry = bySlug.get(slug);
  if (!entry) {
    console.error(`${slug}: not listed in ${sourceIndexPath}`);
    process.exit(1);
  }

  const markdownPath = path.join(SOURCE, 'grammar', slug, 'content.md');
  if (!existsSync(markdownPath)) {
    console.error(`${slug}: no content.md yet`);
    process.exit(1);
  }

  let id = idBySlug.get(slug);
  if (!id) {
    id = nextId(taken);
    taken.add(id.toLowerCase());
  }

  // The page itself is written by hand in app/notes/english-grammar-profile/<id>.vue.
  // From the markdown the site takes only the title and the 例句 list.
  const markdown = withoutEmphasisMarks(await readFile(markdownPath, 'utf8'));
  if (!existsSync(path.join(PAGES, `${id}.vue`))) {
    console.warn(`${id}  ${slug}: no page at ${PAGES}/${id}.vue yet`);
  }

  notes.push({
    id,
    slug,
    title: noteTitle(markdown),
    translation: translations[slug] ?? '',
    name: titles[slug] ?? '',
    sentences: exampleSentences(markdown),
    examples: exampleGroups(markdown),
  });

  console.log(`${id}  ${slug}`);
}

/** The note's own H1, which is what a list of notes is labelled with. */
function noteTitle(markdown) {
  const match = /^#\s+(.*\S)\s*$/m.exec(markdown);
  return match ? match[1] : '';
}

// The markdown copies are no longer used
for (const file of await readdir(TARGET)) {
  if (file.endsWith('.md')) {
    await rm(path.join(TARGET, file));
    console.log(`removed ${file}`);
  }
}

notes.sort((a, b) => a.slug.localeCompare(b.slug));
await writeFile(INDEX, `${JSON.stringify(notes, null, 2)}\n`);
console.log(`\n${notes.length} note(s) in ${TARGET}`);

// Every EGP entry, written or not, in the order of grammar/index.json, for the index page.
// Each entry carries its Chinese name and its English sentence from grammar/sentences.json,
// which english-notes writes; the sentence becomes the note's H1. EGP examples are learner
// essays with errors, so they are never an entry's sentence.
// Duplicate EGP entries share one name in titles.json; only the smallest egpId is listed.
const sentencesPath = path.join(SOURCE, 'grammar/sentences.json');
const sentences = existsSync(sentencesPath)
  ? JSON.parse(await readFile(sentencesPath, 'utf8'))
  : {};
const named = new Set();
const catalog = [];
for (const entry of [...sourceEntries].sort((a, b) => a.egpId - b.egpId)) {
  const name = titles[entry.slug];
  if (name && named.has(name)) continue;
  if (name) named.add(name);
  catalog.push(entry);
}
const listed = new Set(catalog.map((entry) => entry.slug));
await writeFile(
  CATALOG,
  `${JSON.stringify(
    sourceEntries
      .filter((entry) => listed.has(entry.slug))
      .map((entry) => ({
        slug: entry.slug,
        sentence: sentences[entry.slug] ?? '',
        translation: translations[entry.slug] ?? '',
      })),
  )}\n`,
);
console.log(`${listed.size} EGP entries in ${CATALOG}`);
