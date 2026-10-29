/**
 * Copy the Dragon English Basic 100 sentence list out of the english-notes repo.
 *
 * english-notes is local-only, so the list is vendored here and committed, the same way
 * the grammar notes are (see sync-grammar.mjs).
 *
 *   node scripts/sync-dragon.mjs [path-to-english-notes]
 *
 * Each note's H1 is its sentence, already corrected against the source text. The
 * three-digit number in the file name is the entry's id, so it never moves. The
 * Chinese translation of each sentence comes from translations.json, keyed by that id.
 *
 * Each note is also copied as <id>.md, for the note page, and the numbered list under
 * its 例句 heading becomes the entry's practice sentences.
 */
import { existsSync } from 'node:fs';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { exampleSentences } from './examples.mjs';

const [sourceArg] = process.argv.slice(2);
const SOURCE = sourceArg ?? process.env.ENGLISH_NOTES_DIR ?? '../english-notes';
const NOTES = path.join(SOURCE, 'notes/dragon-english-basic-100');
const TARGET = 'app/content/dragon-english-basic-100';

if (!existsSync(NOTES)) {
  console.error(`No notes at ${NOTES}. Pass the english-notes path as an argument.`);
  process.exit(1);
}

const translations = JSON.parse(await readFile(path.join(NOTES, 'translations.json'), 'utf8'));

const files = (await readdir(NOTES)).filter((file) => /^\d{3}\.md$/.test(file)).sort();

const entries = [];
const notes = new Map();
for (const file of files) {
  const markdown = await readFile(path.join(NOTES, file), 'utf8');
  const match = /^#\s+(.*\S)\s*$/m.exec(markdown);
  if (!match) {
    console.error(`${file}: no H1`);
    process.exit(1);
  }
  const id = file.slice(0, 3);
  if (!translations[id]) {
    console.error(`${file}: no translation in translations.json`);
    process.exit(1);
  }
  entries.push({
    id,
    sentence: match[1],
    translation: translations[id],
    sentences: exampleSentences(markdown),
  });
  notes.set(`${id}.md`, markdown);
}

await mkdir(TARGET, { recursive: true });
for (const [file, markdown] of notes) await writeFile(path.join(TARGET, file), markdown);
await writeFile(path.join(TARGET, 'index.json'), `${JSON.stringify(entries, null, 2)}\n`);
console.log(`${entries.length} sentence(s) in ${TARGET}`);
