/**
 * The numbered list under a note's 例句 heading, shared by the grammar and Dragon syncs. A
 * group is a `####` heading; each numbered line is followed by its translation.
 */
export function exampleGroups(markdown) {
  const lines = markdown.split('\n');
  const start = lines.findIndex((line) => /^##\s+(?:\d+\.\s*)?例句\s*$/.test(line.trim()));
  if (start === -1) return [];

  const groups = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.startsWith('## ')) break;
    const heading = /^####\s+(.*\S)\s*$/.exec(line);
    if (heading) {
      groups.push({ heading: heading[1], items: [] });
      continue;
    }
    const match = /^\d+\.\s+(.*\S)\s*$/.exec(line);
    if (!match) continue;
    if (!groups.length) groups.push({ heading: '', items: [] });
    groups.at(-1).items.push({ en: match[1], zh: (lines[i + 1] ?? '').trim() });
  }
  return groups;
}

/** The note's practice sentences: the English of every item under 例句. */
export function exampleSentences(markdown) {
  return exampleGroups(markdown).flatMap((group) => group.items.map((item) => item.en));
}
