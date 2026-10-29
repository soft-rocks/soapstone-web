<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-attributive-with-nouns-50, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="兩個以上的形容詞照順序排" mark="main character">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We bought a', kind: 'dim' },
          { t: 'beautiful', role: '評價', kind: 'key' },
          { t: 'old', role: '年紀', kind: 'key' },
          { t: 'wooden', role: '材料', kind: 'key' },
          { t: 'table.', role: '名詞', ring: true },
        ]"
      />
      <p class="translation">我們買了一張漂亮的舊木桌。</p>
      <p class="remark">順序：評價、大小、年紀、顏色、來源、材料。</p>
    </NoteSlide>

    <NoteSlide title="長短放在顏色前面" mark="main">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My sister has beautiful', kind: 'dim' },
          { t: 'long', role: '長短', kind: 'key' },
          { t: 'dark', role: '顏色', kind: 'key' },
          { t: 'hair.', role: '名詞' },
        ]"
      />
      <p class="translation">我姊姊有一頭漂亮的深色長髮。</p>
    </NoteSlide>

    <NoteSlide title="兩個形容詞中間可以加 and" mark="main character">
      <NoteMark
        sentence="Let's watch this one tonight. It's an amusing and exciting action film."
        :marks="['amusing and exciting']"
      />
      <p class="translation">我們今天晚上看這部吧。那是一部好笑又刺激的動作片。</p>
    </NoteSlide>

    <NoteSlide title="單獨的形容詞放在名詞前面" mark="main character">
      <NoteFix
        wrong="We ate food delicious at the market."
        right="We ate delicious food at the market."
        fix="delicious food"
      />
    </NoteSlide>

    <NoteSlide title="顏色放在材料前面" mark="main">
      <NoteFix
        wrong="My aunt wears a cotton white shirt to work."
        right="My aunt wears a white cotton shirt to work."
        fix="white cotton"
      />
    </NoteSlide>

    <NoteSlide title="a 或 an 看緊接在後面的字" mark="a journalist">
      <NoteFix wrong="It was a amazing trip." right="It was an amazing trip." fix="an" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
