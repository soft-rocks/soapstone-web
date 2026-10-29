<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-question-tags, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="肯定的直述句後面接否定的附加問句">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'It\'s fantastic,', role: '肯定的直述句' },
          { t: 'isn\'t it?', role: '否定的附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">這很棒，對吧？</p>
    </NoteSlide>

    <NoteSlide title="否定的直述句後面接肯定的附加問句" mark="isn't it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You don\'t know where I live,', role: '否定的直述句' },
          { t: 'do you?', role: '肯定的附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">你不知道我住哪裡，對吧？</p>
    </NoteSlide>

    <NoteSlide title="附加問句用直述句的 be 或助動詞，沒有就用 do" mark="isn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">be</span>
          <span>You were there, <b>weren't you</b>?</span>
        </div>
        <div>
          <span class="term">do / does</span>
          <span>She lives here, <b>doesn't she</b>?</span>
        </div>
        <div>
          <span class="term">did</span>
          <span>It cost £30, <b>didn't it</b>?</span>
        </div>
        <div>
          <span class="term">情態動詞</span>
          <span>You can swim, <b>can't you</b>?</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="肯定的直述句不接肯定的附加問句" mark="isn't">
      <NoteFix wrong="It's cold today, is it?" right="It's cold today, isn't it?" fix="isn't" />
    </NoteSlide>

    <NoteSlide title="直述句沒有助動詞時，現在式用 do" mark="isn't">
      <NoteFix wrong="You like pizza, aren't you?" right="You like pizza, don't you?" fix="don't" />
    </NoteSlide>

    <NoteSlide title="代名詞代替直述句的主詞" mark="it">
      <NoteFix
        wrong="Your mother is a nurse, isn't it?"
        right="Your mother is a nurse, isn't she?"
        fix="she"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
