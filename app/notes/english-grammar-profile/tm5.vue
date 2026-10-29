<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-combining-multiple-adjectives, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="逗號隔開形容詞，最後兩個用 and 連接" mark="materialistic, greedy and shallow">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It was a', kind: 'dim' },
          { t: 'long,', role: '形容詞', kind: 'key' },
          { t: 'cold', role: '形容詞', kind: 'key' },
          { t: 'and', role: '連接詞', kind: 'key', ring: true },
          { t: 'lonely', role: '形容詞', kind: 'key' },
          { t: 'winter.', role: '名詞' },
        ]"
      />
      <p class="translation">那是一個漫長、寒冷又寂寞的冬天。</p>
      <p class="remark">最後一個形容詞和名詞中間不加逗號。</p>
    </NoteSlide>

    <NoteSlide title="一串形容詞也可以放在 be 後面" mark="greedy and shallow">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He was', role: '主詞 + be', kind: 'dim' },
          {
            t: 'tired, hungry and very angry.',
            role: '形容詞, 形容詞 + and + 形容詞',
            kind: 'key',
          },
        ]"
      />
      <p class="translation">他又累又餓，而且非常生氣。</p>
    </NoteSlide>

    <NoteSlide title="副詞放在它修飾的形容詞前面" mark="increasingly materialistic">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'an', kind: 'dim' },
          { t: 'increasingly', role: '副詞', kind: 'key', ring: true },
          { t: 'materialistic', role: '形容詞', kind: 'key' },
          { t: 'society', role: '名詞' },
        ]"
      />
      <p class="translation">一個越來越物質的社會</p>
      <p class="remark"><code>increasingly</code> 修飾 <code>materialistic</code>。</p>
    </NoteSlide>

    <NoteSlide title="形容詞也可以是複合形容詞" mark="greedy">
      <NoteMark
        sentence="He was a shy, self-conscious and sensitive boy."
        :marks="['self-conscious']"
      />
      <p class="translation">他是個害羞、在意別人眼光又敏感的男孩。</p>
    </NoteSlide>

    <NoteSlide title="最後一個形容詞和名詞中間不加逗號" mark="shallow society">
      <NoteFix
        wrong="It was a long, cold and lonely, winter."
        right="It was a long, cold and lonely winter."
        fix="lonely winter"
      />
    </NoteSlide>

    <NoteSlide title="副詞放在形容詞前面" mark="increasingly materialistic">
      <NoteFix
        wrong="She is a smart, funny and kind really teacher."
        right="She is a smart, funny and really kind teacher."
        fix="really kind"
      />
    </NoteSlide>

    <NoteSlide title="修飾形容詞要用副詞" mark="increasingly">
      <NoteFix
        wrong="We live in an increasing busy city."
        right="We live in an increasingly busy city."
        fix="increasingly"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
