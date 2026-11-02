<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-affirmative-main-clauses-negative-question-tags, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="直述句沒有助動詞時，附加問句用 doesn't">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'sounds peaceful,', role: '一般動詞' },
          { t: 'doesn\'t it?', role: '否定的附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">聽起來很寧靜，不是嗎？</p>
    </NoteSlide>

    <NoteSlide title="have 和情態動詞的直述句，附加問句用同一個字加 n't" mark="doesn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark
              sentence="We've arranged to meet at twelve, haven't we?"
              :marks="['haven\'t we']"
            /><span class="translation">我們約好十二點見面，對吧？</span></span
          >
        </div>
        <div>
          <span class="term">should</span>
          <span
            ><NoteMark
              sentence="We should leave soon, shouldn't we?"
              :marks="['shouldn\'t we']"
            /><span class="translation">我們應該快點出發，對吧？</span></span
          >
        </div>
        <div>
          <span class="term">could</span>
          <span
            ><NoteMark
              sentence="You could ask your teacher for help, couldn't you?"
              :marks="['couldn\'t you']"
            /><span class="translation">你可以請老師幫忙，對吧？</span></span
          >
        </div>
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark sentence="It'll be dark by six, won't it?" :marks="['won\'t it']" /><span
              class="translation"
              >六點天就黑了，對吧？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="I think 開頭時，附加問句跟著後面的子句" mark="it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I think', kind: 'dim' },
          { t: 'it would be fantastic,', role: '子句' },
          { t: 'wouldn\'t it?', role: '附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">我覺得那會很棒，你說是不是？</p>
    </NoteSlide>

    <NoteSlide title="直述句有 have，附加問句用 haven't" mark="doesn't">
      <NoteFix
        wrong="We've met before, don't we?"
        right="We've met before, haven't we?"
        fix="haven't"
      />
    </NoteSlide>

    <NoteSlide title="will not 縮寫成 won't" mark="doesn't">
      <NoteFix wrong="You'll come, willn't you?" right="You'll come, won't you?" fix="won't" />
    </NoteSlide>

    <NoteSlide title="I think 開頭時，附加問句不用 don't I" mark="it">
      <NoteFix
        wrong="I think it's a good idea, don't I?"
        right="I think it's a good idea, isn't it?"
        fix="isn't it"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
