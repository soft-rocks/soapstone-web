/**
 * EGP guidewords look like `FORM: VERB + DIRECT OBJECT + PARTICLE + PREPOSITION + OBJECT`.
 * The prefix names the aspect (FORM, USE, FORM/USE); the rest is the pattern itself.
 */
export function guidewordForm(guideword: string): string {
  return (
    guideword
      .replace(/^[A-Z/]+:\s*/, '')
      // The source quotes the literal words in a pattern; as a title it is already set
      // apart, so the marks only add noise
      .replace(/['"\u2018\u2019\u201c\u201d]/g, '')
      .trim()
  );
}

/**
 * Chinese names for the terms seen in guidewords so far, taken from the note that uses
 * them. This belongs in the source index next to the English, not here: a table kept on
 * this side drifts away from the notes' own wording every time one is rewritten. Until
 * it lives there, an unknown term makes the whole line drop out rather than render half
 * translated.
 */
const TERMS: Record<string, string> = {
  VERB: '動詞',
  'DIRECT OBJECT': '直接受詞',
  PARTICLE: '小品詞',
  PREPOSITION: '介系詞',
  OBJECT: '介系詞受詞',
};

export function guidewordFormZh(guideword: string): string | undefined {
  const parts = guidewordForm(guideword)
    .split('+')
    .map((part) => part.trim());

  const translated = parts.map((part) => TERMS[part]);
  if (translated.some((term) => !term)) return undefined;

  return translated.join(' + ');
}
