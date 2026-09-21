/**
 * The id a sentence has on the CDN, ported from english-notes
 * (.scripts/note-cli/cmd/hash.go): SHA-256 of the trimmed sentence, first 12 bytes,
 * base64url, no padding. 12 bytes divides by 3, so it is always 16 characters with no
 * padding fragment. Content-derived and stable, which is why sentences/<hash>/ needs
 * no lookup table — unlike the registered ids grammar notes use.
 *
 * Web Crypto is used rather than node:crypto so the same code runs in the browser.
 * Note the two known ways the two sides can disagree: Go's strings.TrimSpace and JS
 * trim() cover slightly different whitespace, and neither side normalises Unicode.
 */
export async function sentenceHash(sentence: string): Promise<string> {
  const bytes = new TextEncoder().encode(sentence.trim());
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return base64url(new Uint8Array(digest.slice(0, 12)));
}

function base64url(bytes: Uint8Array): string {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
}

/** The clear (unblurred) English take for a sentence. */
export function sentenceAudioUrl(hash: string): string {
  return cdnUrl(`sentences/${hash}/audio/en/clear.mp3`);
}
