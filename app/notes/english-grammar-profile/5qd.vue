<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-modifying, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="副詞修飾限定詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'we\'ve spent', role: '主詞和動詞', kind: 'dim' },
          { t: 'nearly', role: '副詞', kind: 'key' },
          { t: 'every', role: '限定詞', kind: 'key' },
          { t: 'day', role: '名詞' },
          { t: 'together.', role: '補充', kind: 'dim' },
        ]"
      />
      <p class="translation">我們幾乎每天都待在一起。</p>
    </NoteSlide>

    <NoteSlide title="常見的組合" mark="nearly every">
      <div class="rows is-labeled">
        <div>
          <span class="term">nearly / almost every</span>
          <span
            ><NoteMark
              sentence="We've spent nearly every day together."
              :marks="['nearly every']"
            /><span class="translation">我們幾乎每天都待在一起。</span></span
          >
        </div>
        <div>
          <span class="term">not every</span>
          <span
            ><NoteMark sentence="Not every student likes maths." :marks="['Not every']" /><span
              class="translation"
              >不是每個學生都喜歡數學。</span
            ></span
          >
        </div>
        <div>
          <span class="term">hardly any</span>
          <span
            ><NoteMark sentence="There's hardly any milk left." :marks="['hardly any']" /><span
              class="translation"
              >牛奶幾乎沒了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">quite a few</span>
          <span
            ><NoteMark
              sentence="Quite a few people came to the party."
              :marks="['Quite a few']"
            /><span class="translation">不少人來參加派對。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="副詞放在限定詞前面" mark="nearly every">
      <NoteFix
        wrong="We've spent every nearly day together."
        right="We've spent nearly every day together."
        fix="nearly every"
      />
    </NoteSlide>

    <NoteSlide title="修飾 every 用 almost" mark="nearly">
      <NoteFix
        wrong="Most every student passed."
        right="Almost every student passed."
        fix="Almost"
      />
    </NoteSlide>

    <NoteSlide title="every 後面接單數名詞" mark="day">
      <NoteFix
        wrong="Nearly every students has a phone."
        right="Nearly every student has a phone."
        fix="student"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
