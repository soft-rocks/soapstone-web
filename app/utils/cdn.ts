const CDN_BASE = 'https://cdn.jsdelivr.net/gh/soft-rocks/soapstone-cdn@main';

export function cdnUrl(path: string): string {
  return `${CDN_BASE}/${path.replace(/^\//, '')}`;
}

export function sentenceUrl(id: string): string {
  return cdnUrl(`sentences/${id}/index.json`);
}

/** The CDN has no file at this path: do not retry. */
export class CdnNotFoundError extends Error {}

/** The CDN did not answer after every retry. */
export class CdnUnreachableError extends Error {}

const ATTEMPT_TIMEOUT_MS = 5000;
const RETRY_DELAYS_MS = [1000, 2000, 4000];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Every JSON read from the CDN goes through here. Each attempt times out after 5 seconds,
 * so a request that never answers cannot hold the page. A 404 throws CdnNotFoundError at
 * once. Any other failure retries after 1, 2 and 4 seconds, then throws CdnUnreachableError.
 */
export async function fetchCdn<T>(url: string): Promise<T> {
  for (let attempt = 0; ; attempt += 1) {
    try {
      return await $fetch<T>(url, { timeout: ATTEMPT_TIMEOUT_MS, retry: 0 });
    } catch (error) {
      if ((error as { statusCode?: number }).statusCode === 404) throw new CdnNotFoundError(url);
      const delay = RETRY_DELAYS_MS[attempt];
      if (delay === undefined) throw new CdnUnreachableError(url);
      await wait(delay);
    }
  }
}

/** A sentence's index.json, found by the hash of its own text. */
export async function fetchSentence<T>(text: string): Promise<T> {
  return fetchCdn<T>(sentenceUrl(await sentenceHash(text)));
}

/** True when a failed load means the CDN could not be reached, not that the file is missing. */
export function isCdnUnreachable(error: unknown): boolean {
  const cause = (error as { cause?: unknown } | null)?.cause;
  return error instanceof CdnUnreachableError || cause instanceof CdnUnreachableError;
}
