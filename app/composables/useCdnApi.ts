const CDN_BASE = 'https://cdn.jsdelivr.net/gh/soft-rocks/soapstone-cdn@main';

export interface WordToken {
  text: string;
  is_masked: boolean;
}

export interface WordDetail {
  id: number;
  public_id: string;
  word: string;
  locale: string;
  markdown: string;
}

export interface Translation {
  id: number;
  public_id: string;
  locale: string;
  content: string;
}

export interface GrammarDetail {
  id: number;
  public_id: string;
  category: string;
  value: string;
  markdown: string;
  locale: string;
}

export interface Sentence {
  id: number;
  public_id: string;
  hash: string;
  text: string;
  word_tokens: WordToken[];
  audio_url: string;
  translations: Translation[];
  words: WordDetail[];
  grammars: GrammarDetail[];
  created_at: string;
  updated_at: string;
}

export interface DailySentenceResponse {
  url: string;
}

export function useCdnApi() {
  const getAssetUrl = (path: string) => {
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
    return `${CDN_BASE}/${normalizedPath}`;
  };

  const fetchAsset = async <T>(path: string): Promise<T> => {
    const url = getAssetUrl(path);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    return response.json() as Promise<T>;
  };

  const fetchSentence = async (path: string): Promise<Sentence> => {
    return fetchAsset<Sentence>(path);
  };

  return {
    getAssetUrl,
    fetchAsset,
    fetchSentence,
    baseUrl: CDN_BASE,
  };
}
