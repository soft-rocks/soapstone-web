<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-so-as-to-formal, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="so + 形容詞 + as to，怎麼樣到會去做某件事" mark="so ignorant as to think">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Nobody was', kind: 'dim' },
          { t: 'so foolish', role: 'so + 形容詞', kind: 'key' },
          { t: 'as to believe', role: 'as to + 原形動詞', kind: 'key', ring: true },
          { t: 'him.', kind: 'dim' },
        ]"
      />
      <p class="translation">沒有人笨到去相信他。</p>
    </NoteSlide>

    <NoteSlide title="Would you be so kind as to ...? 是客氣的請求" mark="so ignorant as to">
      <NoteMark
        sentence="Would you be so kind as to close the window?"
        :marks="['so kind as to']"
      />
      <p class="translation">可以麻煩你關一下窗嗎？</p>
    </NoteSlide>

    <NoteSlide title="Should I be so fortunate as to ... 表示如果有幸" mark="so ignorant">
      <NoteMark
        sentence="Should I be so fortunate as to win, I'll share the prize."
        :marks="['so fortunate as to']"
      />
      <p class="translation">如果我有幸得獎，我會跟大家分享獎金。</p>
    </NoteSlide>

    <NoteSlide title="as 後面接 to 加原形動詞" mark="as to">
      <NoteFix
        wrong="Would you be so kind as you sign this form?"
        right="Would you be so kind as to sign this form?"
        fix="as to"
      />
    </NoteSlide>

    <NoteSlide title="as to 後面用原形動詞" mark="as to think">
      <NoteFix
        wrong="Would you be so kind as to helping me?"
        right="Would you be so kind as to help me?"
        fix="help"
      />
    </NoteSlide>

    <NoteSlide title="形容詞前面用 so，不用 such" mark="so ignorant">
      <NoteFix
        wrong="She wasn't such foolish as to lend him money."
        right="She wasn't so foolish as to lend him money."
        fix="so"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
