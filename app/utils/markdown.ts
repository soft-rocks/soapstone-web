import MarkdownIt from 'markdown-it';

// html: false — notes are plain markdown from english-notes, no embedded HTML is expected
// or allowed through. typographer stays off so quotes and dashes render as written.
const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: false,
  breaks: false,
});

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Indented blocks in the notes are never code. They are either example sentences with
// their translation, or a sentence-anatomy diagram drawn with box-drawing characters.
// Neither belongs in a monospace <pre>: that art depends on the reader's font metrics,
// wraps badly on a phone and reads as code to a screen reader.
md.renderer.rules.code_block = (tokens, index) => {
  const content = tokens[index]!.content;
  return renderTreeDiagram(content) ?? renderExample(content);
};

/**
 * An indented block of example lines: an English line with its translation under it.
 * These illustrate the body text and are never published as sentences, so unlike the
 * numbered list in 例句 they carry no audio and are not clickable.
 */
function renderExample(source: string): string {
  const lines = source
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const out: string[] = [];

  for (let i = 0; i < lines.length; i += 1) {
    const text = lines[i]!;

    if (isTranslation(text)) {
      out.push(translationLine(text));
      continue;
    }

    const translations: string[] = [];
    while (i + 1 < lines.length && isTranslation(lines[i + 1]!)) {
      translations.push(lines[(i += 1)]!);
    }

    out.push(`<p>${escapeHtml(text)}</p>${translations.map(translationLine).join('')}`);
  }

  return `<div class="example">${out.join('')}</div>\n`;
}

const translationLine = (text: string) => `<p class="translation">${escapeHtml(text)}</p>`;

/** The 例句 heading gets an anchor so the page can hang a play-all control on it. */
function markExamplesHeading(html: string): string {
  return html.replace('<h2>例句</h2>', '<h2 id="examples-heading">例句</h2>');
}

/** A numbered example in 例句 and its translation form one clickable unit. */
function markListSentences(html: string): string {
  return html.replace(/<li>([\s\S]*?)<\/li>/g, (match, inner: string) => {
    const english = inner.split('<br>')[0] ?? '';
    const text = unescapeHtml(english.replace(/<[^>]+>/g, '')).trim();
    if (!text || /^[*→]/.test(text) || !/[A-Za-z]/.test(text)) return match;
    return `<li class="sentence" data-audio="${escapeHtml(text)}">${inner}</li>`;
  });
}

const unescapeHtml = (value: string) =>
  value
    .replaceAll('&quot;', '"')
    .replaceAll('&gt;', '>')
    .replaceAll('&lt;', '<')
    .replaceAll('&#39;', "'")
    .replaceAll('&amp;', '&');

function isTranslation(line: string) {
  return line.trim().length > 0 && !/[A-Za-z]/.test(line);
}

/**
 * Inside a list item or a blockquote, a wrapped line is the translation of the line
 * above it, so it gets its own line. Body paragraphs are wrapped for the width of the
 * source file, so their soft breaks stay spaces.
 */
let nesting = 0;

for (const token of ['blockquote_open', 'list_item_open'] as const) {
  md.renderer.rules[token] = (tokens, index, options, _env, self) => {
    nesting += 1;
    return self.renderToken(tokens, index, options);
  };
}

for (const token of ['blockquote_close', 'list_item_close'] as const) {
  md.renderer.rules[token] = (tokens, index, options, _env, self) => {
    nesting -= 1;
    return self.renderToken(tokens, index, options);
  };
}

md.renderer.rules.softbreak = () => (nesting > 0 ? '<br>' : '\n');

/** Dim the translation that follows one of those breaks. */
function markTranslations(html: string): string {
  return html.replace(/<br>([^<]+)/g, (match, text: string) =>
    isTranslation(text) ? `<br><span class="translation">${text}</span>` : match,
  );
}

/** Monospace advance as a fraction of the font size; JetBrains Mono is exactly 0.6em. */
const ADVANCE = 0.6;
const MONO_SIZE = 14;
const LABEL_SIZE = 13;
const ROW_HEIGHT = 22;
const PAD = 4;

interface Branch {
  column: number;
  label: string;
}

/**
 * Parse a block shaped like
 *
 *     They let me in on the plan.
 *          │   │  │  │   └── 受詞：the plan
 *          │   │  │  └───── 介系詞：on
 *
 *     他們讓我知道了那個計畫。
 *
 * into an SVG figure. Returns null when the block is not that shape, which leaves
 * every other indented block as ordinary preformatted text.
 */
function renderTreeDiagram(source: string): string | null {
  const lines = source.replace(/\s+$/, '').split('\n');
  const sentence = lines[0];
  if (!sentence || /[│└├─]/.test(sentence)) return null;

  const branches: Branch[] = [];
  let caption = '';

  for (const line of lines.slice(1)) {
    if (!line.trim()) continue;

    const elbow = line.indexOf('└');
    if (elbow === -1) {
      // Lines after the diagram are the translation of the sentence
      if (branches.length) caption = caption ? `${caption} ${line.trim()}` : line.trim();
      continue;
    }

    const label = line
      .slice(elbow)
      .replace(/^[└─\s]+/, '')
      .trim();
    if (!label) return null;
    branches.push({ column: elbow, label });
  }

  if (branches.length < 2) return null;

  const x = (column: number) => PAD + column * MONO_SIZE * ADVANCE;
  const labelX = Math.max(...branches.map((branch) => x(branch.column))) + 28;
  const baseline = MONO_SIZE + PAD;

  const rows = branches.map((branch, i) => {
    const y = baseline + ROW_HEIGHT * (i + 1);
    const from = x(branch.column) + (MONO_SIZE * ADVANCE) / 2;
    const [name, value] = splitLabel(branch.label);

    return [
      `<path d="M ${round(from)} ${round(baseline + 6)} V ${round(y - 4)} H ${round(labelX - 8)}"`,
      ` fill="none" stroke="var(--color-sand-400)" stroke-width="1" />`,
      `<text x="${round(labelX)}" y="${round(y)}" font-size="${LABEL_SIZE}"`,
      ` fill="var(--color-sand-700)">${escapeHtml(name)}`,
      value ? `<tspan fill="var(--color-ink-500)">${escapeHtml(value)}</tspan>` : '',
      `</text>`,
    ].join('');
  });

  const height = baseline + ROW_HEIGHT * branches.length + PAD * 2;
  const width = labelX + estimateWidth(branches, LABEL_SIZE) + PAD;

  const svg = [
    `<svg viewBox="0 0 ${round(width)} ${round(height)}" role="img"`,
    ` aria-label="${escapeHtml(`${sentence.trim()} ${branches.map((b) => b.label).join('; ')}`)}"`,
    ` style="width:100%;max-width:${round(width)}px;height:auto">`,
    `<text x="${PAD}" y="${round(baseline)}" xml:space="preserve"`,
    ` font-family="var(--font-mono)" font-size="${MONO_SIZE}"`,
    ` fill="var(--color-sand-950)">${escapeHtml(sentence)}</text>`,
    rows.join(''),
    `</svg>`,
  ].join('');

  const figcaption = caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : '';
  return `<figure class="diagram">${svg}${figcaption}</figure>\n`;
}

/** `直接受詞：me` renders with the part after the colon in ink. */
function splitLabel(label: string): [string, string] {
  const at = label.indexOf('：');
  if (at === -1) return [label, ''];
  return [label.slice(0, at + 1), label.slice(at + 1)];
}

/** CJK glyphs occupy a full em, latin roughly half; close enough to size the viewBox. */
function estimateWidth(branches: Branch[], fontSize: number) {
  const isWide = (char: string) => {
    const code = char.codePointAt(0) ?? 0;
    return code >= 0x3000 && code <= 0xffe6;
  };

  const widest = Math.max(
    ...branches.map((branch) =>
      [...branch.label].reduce((sum, char) => sum + (isWide(char) ? 1 : 0.55), 0),
    ),
  );
  return widest * fontSize;
}

const round = (value: number) => Math.round(value * 10) / 10;

interface RenderOptions {
  /** Replaces the note's own H1. */
  title?: string;
  /** Printed under the title. */
  subtitle?: string;
}

export function renderMarkdown(source: string, options: RenderOptions = {}): string {
  nesting = 0;
  let html = markExamplesHeading(markListSentences(markTranslations(md.render(source))));

  if (options.title) {
    html = html.replace(/<h1>[\s\S]*?<\/h1>/, `<h1>${escapeHtml(options.title)}</h1>`);
  }

  const close = html.indexOf('</h1>');
  if (close === -1) return html;

  const subtitle = options.subtitle
    ? `<p class="subtitle">${escapeHtml(options.subtitle)}</p>`
    : '';

  // The heading and its Chinese line form one block, so a control can sit to their right
  return [
    html.slice(0, html.indexOf('<h1>')),
    '<header class="note-head" id="note-head"><div>',
    html.slice(html.indexOf('<h1>'), close + 5),
    subtitle,
    '</div></header>',
    html.slice(close + 5),
  ].join('');
}
