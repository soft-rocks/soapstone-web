/**
 * EGP guidewords look like `FORM: VERB + DIRECT OBJECT + PARTICLE + PREPOSITION + OBJECT`.
 * The prefix names the aspect (FORM, USE, FORM/USE); the rest is the pattern itself.
 */
export function guidewordForm(guideword: string): string {
  return guideword.replace(/^[A-Z/]+:\s*/, '').trim();
}

/**
 * Chinese names for the terms seen in guidewords so far. This belongs in the source
 * index next to the English, not here — until it lives there, an unknown term makes
 * the whole line drop out rather than render half translated.
 */
const TERMS: Record<string, string> = {
  VERB: '動詞',
  'DIRECT OBJECT': '直接受詞',
  PARTICLE: '介副詞',
  PREPOSITION: '介系詞',
  OBJECT: '受詞',
};

export function guidewordFormZh(guideword: string): string | undefined {
  const parts = guidewordForm(guideword)
    .split('+')
    .map((part) => part.trim());

  const translated = parts.map((part) => TERMS[part]);
  if (translated.some((term) => !term)) return undefined;

  return translated.join(' + ');
}
