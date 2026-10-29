<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-be-more-less-likely-comparison, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + be + (much) more likely + to + 原形動詞 (+ than ...)">
      <div class="rows is-labeled">
        <div>
          <span class="term">more likely</span>
          <span>比較可能。</span>
        </div>
        <div>
          <span class="term">less likely</span>
          <span>比較不可能。</span>
        </div>
        <div>
          <span class="term">much</span>
          <span>加強比較，「可能得多」。</span>
        </div>
        <div>
          <span class="term">than ...</span>
          <span>比較的對象。上下文清楚時可以省略。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用 much 加強">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Young drivers are much more likely to have accidents."
              :marks="[]"
            /><span class="translation">年輕駕駛發生車禍的可能性高得多。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="同一句裡同時用 more 和 less">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="They are more likely to have better jobs and much less likely to cause problems."
              :marks="[]"
            /><span class="translation">他們比較可能找到好工作，也比較不會造成問題。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="likely 的比較級用 more likely，不加 -er" mark="more likely">
      <NoteFix
        wrong="They are more likelier to win."
        right="They are more likely to win."
        :fix="['likely']"
      />
    </NoteSlide>
    <NoteSlide title="比較的對象用 than">
      <NoteFix
        wrong="Girls are more likely to read that boys."
        right="Girls are more likely to read than boys."
        :fix="['than']"
      />
    </NoteSlide>
    <NoteSlide title="加強比較級用 much，不用 very">
      <NoteFix
        wrong="Old cars are very more likely to break down."
        right="Old cars are much more likely to break down."
        :fix="['much']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
