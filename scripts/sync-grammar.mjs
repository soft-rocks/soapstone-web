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
import { existsSync } from 'node:fs';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [sourceArg, ...slugArgs] = process.argv.slice(2);
const SOURCE = sourceArg ?? process.env.ENGLISH_NOTES_DIR ?? '../english-notes';
const TARGET = 'app/content/grammar';
const INDEX = path.join(TARGET, 'index.json');

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

function nextId(taken) {
  // 62^3 is a small space, so retry until a free one turns up and give up loudly
  for (let attempt = 0; attempt < 10_000; attempt += 1) {
    const id = randomId();
    if (!taken.has(id)) return id;
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

const taken = new Set(idBySlug.values());
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
    taken.add(id);
  }

  const markdown = withoutEmphasisMarks(await readFile(markdownPath, 'utf8'));
  await writeFile(path.join(TARGET, `${id}.md`), markdown);

  notes.push({
    id,
    slug,
    title: noteTitle(markdown),
    sentences: exampleSentences(markdown),
    level: entry.level,
    category: entry.category,
    guideword: entry.guideword,
    canDo: entry.canDo,
  });

  console.log(`${id}  ${slug}`);
}

/** The note's own H1, which is what a list of notes is labelled with. */
function noteTitle(markdown) {
  const match = /^#\s+(.*\S)\s*$/m.exec(markdown);
  return match ? match[1] : '';
}

/**
 * The numbered list under 例句 is the note's set of practice sentences. Their
 * translations sit on the indented continuation line, which is not needed here: the
 * CDN copy of each sentence carries its own.
 */
function exampleSentences(markdown) {
  const lines = markdown.split('\n');
  const start = lines.findIndex((line) => /^##\s+(?:\d+\.\s*)?例句\s*$/.test(line.trim()));
  if (start === -1) return [];

  const sentences = [];
  for (const line of lines.slice(start + 1)) {
    if (line.startsWith('## ')) break;
    const match = /^\d+\.\s+(.*\S)\s*$/.exec(line);
    if (match) sentences.push(match[1]);
  }
  return sentences;
}

// Drop notes that are no longer selected
const keep = new Set(notes.map((note) => `${note.id}.md`));
for (const file of await readdir(TARGET)) {
  if (file.endsWith('.md') && !keep.has(file)) {
    await rm(path.join(TARGET, file));
    console.log(`removed ${file}`);
  }
}

notes.sort((a, b) => a.slug.localeCompare(b.slug));
await writeFile(INDEX, `${JSON.stringify(notes, null, 2)}\n`);
console.log(`\n${notes.length} note(s) in ${TARGET}`);
