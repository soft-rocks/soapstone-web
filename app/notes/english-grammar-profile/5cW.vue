<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-predicative-with-linking-verbs, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="look 加形容詞，說看起來怎麼樣" mark="looks perfect">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'look', role: 'look', kind: 'key', ring: true },
          { t: 'tired.', role: '形容詞', kind: 'key' },
          { t: 'Did you sleep well?', kind: 'dim' },
        ]"
      />
      <p class="translation">你看起來很累，你有睡好嗎？</p>
    </NoteSlide>

    <NoteSlide title="feel 說人的感覺，也說摸起來的感覺" mark="looks">
      <div class="rows is-labeled">
        <div>
          <span class="term">人 + feel</span>
          <span
            ><NoteMark
              sentence="I always wear these clothes on long flights. I feel comfortable in them."
              :marks="['feel comfortable']"
            /><span class="translation"
              >我搭長途飛機總是穿這些衣服。我穿起來覺得很舒服。</span
            ></span
          >
        </div>
        <div>
          <span class="term">東西 + feel</span>
          <span
            ><NoteMark sentence="This sweater feels soft." :marks="['feels soft']" /><span
              class="translation"
              >這件毛衣摸起來很軟。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="look 後面接形容詞，不用副詞" mark="perfect">
      <NoteFix
        wrong="You look beautifully in your wedding photos."
        right="You look beautiful in your wedding photos."
        fix="beautiful"
      />
    </NoteSlide>

    <NoteSlide title="feel 前面不加 am" mark="looks">
      <NoteFix
        wrong="I am feel sick after the boat ride."
        right="I feel sick after the boat ride."
        fix="feel"
      />
    </NoteSlide>

    <NoteSlide title="第三人稱單數的 feel 要加 -s" mark="looks">
      <NoteFix wrong="This sweater feel soft." right="This sweater feels soft." fix="feels" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
