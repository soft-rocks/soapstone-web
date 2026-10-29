<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-negative-main-clauses-affirmative-question-tags, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定的直述句後面，附加問句不加 not">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You haven\'t been to my house before,', role: '否定的直述句' },
          { t: 'have you?', role: '肯定的附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">你以前沒來過我家，對吧？</p>
    </NoteSlide>

    <NoteSlide title="附加問句用直述句的 be、do 或 have" mark="have you">
      <div class="rows is-labeled">
        <div>
          <span class="term">be</span>
          <span
            ><NoteMark sentence="That isn't normal, is it?" :marks="['is it']" /><span
              class="translation"
              >這不正常，對吧？</span
            ></span
          >
        </div>
        <div>
          <span class="term">do</span>
          <span
            ><NoteMark
              sentence="Your parents don't like discos, do they?"
              :marks="['do they']"
            /><span class="translation">你爸媽不喜歡舞廳，對吧？</span></span
          >
        </div>
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark
              sentence="She hasn't finished the book yet, has she?"
              :marks="['has she']"
            /><span class="translation">她還沒讀完那本書，對吧？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說話時省略直述句的主詞，附加問句照樣完整" mark="have you">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', kind: 'gone' },
          { t: 'Doesn\'t sound interesting,', role: '省略主詞' },
          { t: 'does it?', role: '完整的附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">聽起來沒什麼意思，對吧？</p>
    </NoteSlide>

    <NoteSlide title="否定的直述句接肯定的附加問句" mark="have you">
      <NoteFix
        wrong="You haven't been here before, haven't you?"
        right="You haven't been here before, have you?"
        fix="have"
      />
    </NoteSlide>

    <NoteSlide title="hasn't 的句子用 has 的附加問句" mark="have">
      <NoteFix wrong="She hasn't called, does she?" right="She hasn't called, has she?" fix="has" />
    </NoteSlide>

    <NoteSlide title="附加問句的時態跟著直述句" mark="have">
      <NoteFix wrong="You didn't see him, do you?" right="You didn't see him, did you?" fix="did" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
