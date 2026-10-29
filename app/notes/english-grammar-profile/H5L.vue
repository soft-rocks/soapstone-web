<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-very, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="very 放在形容詞前面" mark="very friendly">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The hotel staff', role: '主詞' },
          { t: 'were', role: 'be' },
          { t: 'very', role: 'very', kind: 'key', ring: true },
          { t: 'nice', role: '形容詞', kind: 'key' },
          { t: 'to us.', kind: 'dim' },
        ]"
      />
      <p class="translation">飯店的員工對我們很好。</p>
    </NoteSlide>

    <NoteSlide title="兩個 very 加形容詞，用 and 或 but 連接" mark="very">
      <div class="rows is-labeled">
        <div>
          <span class="term">and</span>
          <span
            ><NoteMark
              sentence="The food was very cheap and very good."
              :marks="['very cheap', 'very good']"
            /><span class="translation">那裡的食物很便宜，也很好吃。</span></span
          >
        </div>
        <div>
          <span class="term">but</span>
          <span
            ><NoteMark
              sentence="Our teacher is very strict but very fair."
              :marks="['very strict', 'very fair']"
            /><span class="translation">我們老師很嚴格，但是很公平。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="very 不修飾動詞，動詞用 very much" mark="very">
      <NoteFix wrong="I very like this city." right="I like this city very much." fix="very much" />
    </NoteSlide>

    <NoteSlide title="主詞和形容詞中間要有 be" mark="are">
      <NoteFix wrong="My new teacher very kind." right="My new teacher is very kind." fix="is" />
    </NoteSlide>

    <NoteSlide title="very 放在形容詞前面，不放在後面" mark="very friendly">
      <NoteFix
        wrong="The beach was beautiful very."
        right="The beach was very beautiful."
        fix="very beautiful"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
