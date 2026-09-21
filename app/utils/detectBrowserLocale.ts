export interface LocaleOption<T extends string> {
  /** Internal locale code, e.g. `zhtw`. */
  code: T;
  /** BCP-47 tag the code stands for, e.g. `zh-TW`. */
  language: string;
}

/**
 * Pick the best available locale for a list of browser language tags.
 *
 * Browser tags are BCP-47, so matching runs against each locale's `language` tag and
 * returns its internal `code`. Per browser tag, most preferred first: an exact match
 * wins, then a script-aware match (zh-Hant-HK -> zh-TW, never zh-Hans -> zh-TW), then a
 * plain primary-subtag match when exactly one available locale uses it. Returns the
 * fallback when nothing matches.
 */
export function detectBrowserLocale<T extends string>(
  browserTags: readonly string[],
  available: readonly LocaleOption<T>[],
  fallback: T,
): T {
  const byLower = new Map(available.map((locale) => [locale.language.toLowerCase(), locale.code]));

  for (const tag of browserTags) {
    const lower = tag.toLowerCase();

    const exact = byLower.get(lower);
    if (exact) return exact;

    const [primary] = lower.split('-');
    if (!primary) continue;

    const wanted = chineseScript(lower);
    const candidates = available.filter((locale) => {
      const language = locale.language.toLowerCase();
      if (language.split('-')[0] !== primary) return false;
      if (!wanted) return true;
      return chineseScript(language) === wanted;
    });

    if (candidates.length === 1) return candidates[0]!.code;
  }

  return fallback;
}

/** Han script of a Chinese tag, so Traditional never falls back to Simplified or vice versa. */
function chineseScript(lowerTag: string): 'hant' | 'hans' | null {
  const parts = lowerTag.split('-');
  if (parts[0] !== 'zh') return null;
  if (parts.includes('hant')) return 'hant';
  if (parts.includes('hans')) return 'hans';
  if (parts.some((part) => ['tw', 'hk', 'mo'].includes(part))) return 'hant';
  if (parts.some((part) => ['cn', 'sg', 'my'].includes(part))) return 'hans';
  return null;
}
