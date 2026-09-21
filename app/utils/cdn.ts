const CDN_BASE = 'https://cdn.jsdelivr.net/gh/soft-rocks/soapstone-cdn@main';

export function cdnUrl(path: string): string {
  return `${CDN_BASE}/${path.replace(/^\//, '')}`;
}

export function sentenceUrl(id: string): string {
  return cdnUrl(`sentences/${id}/index.json`);
}
