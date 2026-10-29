<script setup lang="ts">
/**
 * One slide of a <NoteDeck>. `title` states the one point the slide makes. `mark` names
 * the words of the note's sentence the slide is about; the sentence shows in the top-right
 * corner with those words circled.
 */
import { deckKey } from '~/utils/deck';

const props = defineProps<{ title?: string; mark?: string | string[] }>();

const deck = inject(deckKey);
const number = deck?.register() ?? 0;
const active = computed(() => (deck ? deck.index.value === number : true));
// A long sentence takes its own line above the title, so the title keeps the slide width
const stacked = (deck?.sentence?.length ?? 0) > 40;
// A word joiner on each side of a hyphen keeps "動詞-ing" on one line
// A no-break space before a suffix keeps "加 -er" on one line, so no line starts with -er
// A no-break space before 時 keeps "be 時，" on one line, so no line starts with 時
// A no-break space before 的 keeps "hand over 的" on one line, so no line starts with 的
// No-break spaces around an ellipsis keep "as ... as" on one line
// Word joiners between the characters of a Chinese word keep 主詞 or 後面 on one line. The
// segmenter finds the words, but it splits grammar terms like 受詞 and 過去式, and it reads
// 後面接 as 後 and 面接; `terms` lists those. A joiner too many costs nothing.
const words = new Intl.Segmenter('zh-Hant', { granularity: 'word' });
const terms = new RegExp(
  [
    '主要子句',
    '間接問句',
    '形式主詞',
    '關係代名詞',
    '介系詞片語',
    '連綴動詞',
    '感官動詞',
    '原形動詞',
    '動詞原形',
    '過去分詞',
    '現在分詞',
    '第三人稱',
    '交通工具',
    '代名詞',
    '形容詞',
    '介系詞',
    '連接詞',
    '疑問詞',
    '不定詞',
    '動名詞',
    '助動詞',
    '過去式',
    '現在式',
    '未來式',
    '完成式',
    '進行式',
    '直述句',
    '陳述句',
    '疑問句',
    '條件句',
    '祈使句',
    '否定句',
    '肯定句',
    '不可數',
    '比較級',
    '最高級',
    '小品詞',
    '所有格',
    '連字號',
    '某件事',
    '一件事',
    '這件事',
    '第一個',
    '第二個',
    '第三個',
    '另一個',
    '否定式',
    '有可能',
    '一出生',
    '給誰',
    '再加',
    '在前',
    '在後',
    '那個',
    '這個',
    '一段',
    '那段',
    '這段',
    '出現',
    '同一',
    '哪一',
    '開車',
    '後面',
    '前面',
    '受詞',
    '主詞',
    '動詞',
    '名詞',
    '副詞',
    '冠詞',
    '原形',
    '子句',
    '句首',
    '句尾',
    '句子',
    '問句',
    '片語',
    '單數',
    '複數',
    '可數',
    '語序',
    '時態',
    '逗號',
    '被動',
    '東西',
    '時間',
  ].join('|'),
  'g',
);
// Joins the characters of each Chinese word and term in `text`
function joinWords(text: string): string {
  // joined[k]: no break between character k and the one after it
  const joined: boolean[] = [];
  const join = (start: number, end: number) => {
    for (let k = start; k < end - 1; k += 1) joined[k] = true;
  };
  for (const { segment, index } of words.segment(text)) {
    if (/^\p{Script=Han}{2,}$/u.test(segment)) join(index, index + segment.length);
  }
  for (const match of text.matchAll(terms)) join(match.index, match.index + match[0].length);
  // 時 after a word stays with it: 前面時，not 前面 and 時，, and 名詞時用, not 名詞 and 時用.
  // 時間, 時候 and 時態 are words of their own and may start a line.
  for (const match of text.matchAll(/\p{Script=Han}(?=時(?![間候態]))/gu))
    join(match.index, match.index + 2);
  // 不 and 沒 stay with the verb after them: 不接 or 沒有, not 不 at the end of a line
  for (const match of text.matchAll(/[不沒]\p{Script=Han}/gu)) join(match.index, match.index + 2);
  // 的, 地 and 裡 stay with the word before them: 後面的 hate, 客氣地請 and 子句裡, not 的, 地
  // or 裡 at the start of a line. 地方 and 地點 are words of their own and may start a line.
  // A lookahead, so 子句裡的 joins 裡 and 的 too
  for (const match of text.matchAll(/\p{Script=Han}(?=[的裡]|地(?![方點]))/gu))
    join(match.index, match.index + 2);
  // The last character of a clause stays with the one before it: 可能的事，not 事， at the
  // start of a line
  for (const match of text.matchAll(/\p{Script=Han}(?=\p{Script=Han}[，、。])/gu))
    join(match.index, match.index + 2);
  return text
    .split('')
    .map((char, k) => (joined[k] ? `${char}\u2060` : char))
    .join('');
}
// English words in a row, like "be worth" or "can't help". A run of 18 characters or less
// keeps one line, so no line ends with "be". A longer run may be wider than a phone slide,
// so it still breaks at its spaces.
const englishRun = /[A-Za-z][\w'’-]*(?: [A-Za-z][\w'’-]*)+/g;
const heading = computed(() => {
  const title = props.title
    ?.replace(englishRun, (run) => (run.length <= 18 ? run.replace(/ /g, '\u00a0') : run))
    .replace(/ (?=-)/g, '\u00a0')
    .replace(/ \u6642(?![\u9593\u5019\u614b])/g, '\u00a0\u6642')
    .replace(/ \u7684/g, '\u00a0\u7684')
    .replace(/-/g, '\u2060-\u2060')
    .replace(/ (\.\.\.|\u2026) /g, '\u00a0$1\u00a0');
  return title && joinWords(title);
});
// The body text of a slide, like a remark or a translation, gets the same joiners, so 單數
// or 表示 does not break across lines. The slot holds markup, so this runs on the rendered
// text after mount.
const body = ref<HTMLElement>();
onMounted(() => {
  if (!body.value) return;
  const walker = document.createTreeWalker(body.value, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = node.nodeValue ?? '';
    if (/\p{Script=Han}{2}/u.test(text)) node.nodeValue = joinWords(text);
  }
});
// A title breaks after a 「，」 or a 「、」, not inside a Chinese word like 經驗
const clauses = computed(() => heading.value?.split(/(?<=[\uff0c\u3001])/) ?? []);
const marks = computed(() =>
  props.mark === undefined ? [] : Array.isArray(props.mark) ? props.mark : [props.mark],
);
</script>

<template>
  <div class="slide" :class="{ 'is-on': active }" :aria-hidden="!active">
    <div v-if="title || marks.length" class="slide-head" :class="{ 'is-stacked': stacked }">
      <h2 v-if="title" class="slide-title">
        <span v-for="(clause, at) in clauses" :key="at" class="slide-clause">{{ clause }}</span>
      </h2>
      <NoteMark v-if="marks.length && deck?.sentence" :sentence="deck.sentence" :marks="marks" />
    </div>
    <div ref="body" class="slide-body"><slot /></div>
  </div>
</template>

<style>
/* From 560px wide the type scales with the deck width (cqw); below that a slide keeps its
   natural height. The rules for .translation, .remark and .rows style the slide content a
   note page writes. */
/* Name the layer order first. A component style can load before main.css; without this,
   components would become the first layer, and the base reset would override it. */
@layer theme, base, components, utilities;

@layer components {
  .deck .slide {
    flex: 0 0 100%;
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: 28px 20px 32px;
    font-size: 17px;
    line-height: 1.55;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  /* The title on the left, the note's sentence with its circled words on the right */
  .deck .slide-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.6em 1.4em;
    margin: 0 0 1em;
  }

  .deck .slide-head.is-stacked {
    flex-direction: column-reverse;
  }

  .deck .slide-head.is-stacked .mark-sentence {
    align-self: flex-end;
    white-space: normal;
    text-align: right;
  }

  /* The one point the slide makes */
  .deck .slide-title {
    margin: 0;
    font-size: 1.6em;
    line-height: 1.2;
    letter-spacing: -0.02em;
    /* Pretty leaves a Chinese last line like 去式 alone, so a title uses balance. keep-all
       does not work: a Chinese run wider than the slide then breaks at its last character. */
    text-wrap: balance;
  }

  .deck .slide-body {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
  }

  /* Keeps a word like 句子。 from taking the last line alone. Chrome's pretty leaves a
     Chinese last line like that one as it is, so paragraphs use balance. */
  .deck .slide p {
    margin: 0;
    text-wrap: balance;
  }

  .deck .slide .translation {
    font-size: 0.82em;
    color: var(--ui-text-dimmed);
  }

  .deck .slide .remark {
    font-size: 0.88em;
    color: var(--ui-text-muted);
  }

  .deck .slide code {
    font-size: 0.85em;
    background: var(--ui-bg-accented);
  }

  /* Hairline rows: a term and what it means */
  .deck .rows {
    display: flex;
    flex-direction: column;
  }

  .deck .rows > div {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: 0.2em 1.2em;
    padding: 0.45em 0;
    border-top: 1px solid var(--ui-border-accented);
  }

  .deck .rows > div:last-child {
    border-bottom: 1px solid var(--ui-border-accented);
  }

  /* A name breaks at its spaces, not inside a Chinese word like 名詞. A name with no space
     that is wider than its column still breaks. */
  .deck .rows .term {
    font-weight: 600;
    word-break: keep-all;
    overflow-wrap: anywhere;
  }

  .deck .rows .gloss {
    color: var(--ui-text-muted);
    text-wrap: balance;
  }

  .deck .rows .term b {
    font-weight: 700;
  }

  .deck .rows .term i {
    font-style: normal;
    font-weight: 400;
    color: var(--ui-text-muted);
  }

  /* Rows with a short name on the left and a sentence with its circled words on the right */
  .deck .rows.is-labeled > div {
    grid-template-columns: 8.5em minmax(0, 1fr);
    align-items: baseline;
  }

  /* A row's translation is a span, not a p, so it needs its own balance. Without it, a
     translation like 「…為什麼發生。」 leaves 生。 alone on the last line. */
  .deck .rows .translation {
    display: block;
    text-wrap: balance;
  }

  .deck .rows .mark-sentence {
    flex: 1 1 auto;
    min-width: 0;
    margin: 0;
    font-size: 1em;
    white-space: normal;
    color: var(--ui-text);
  }

  .deck .rows .mark-ring {
    font-weight: 700;
  }

  /* A sentence with circled words as the slide's own example, not the one in the corner */
  .deck .slide-body > .mark-sentence {
    margin: 0;
    font-size: 1.3em;
    white-space: normal;
    color: var(--ui-text);
  }

  .deck .slide-body > .mark-sentence .mark-ring {
    font-weight: 700;
  }

  @container (max-width: 559px) {
    .deck .slide-head {
      flex-direction: column-reverse;
    }

    .deck .rows > div,
    .deck .rows.is-labeled > div {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @container (min-width: 560px) {
    .deck .slide {
      padding: 4.5cqw 6cqw;
      font-size: 2.3cqw;
      overflow: hidden;
    }

    /* The name column is as wide as the longest name, at least 8.5em, so a name like
       "most of + the + 名詞" keeps one line. All rows share the column through subgrid. */
    .deck .rows.is-labeled {
      display: grid;
      grid-template-columns: minmax(8.5em, max-content) minmax(0, 1fr);
      column-gap: 1.2em;
    }

    .deck .rows.is-labeled > div {
      grid-column: 1 / -1;
      grid-template-columns: subgrid;
    }

    /* A clause keeps one line, so a title in two lines breaks after a 「，」 or a 「、」. A
       phone does not do this: there a clause is often wider than the slide, and the title
       would take one more line. */
    .deck .slide-clause {
      display: inline-block;
    }
  }
}
</style>
