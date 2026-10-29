<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-supposed-to-past-expectation, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + supposed to + 原形動詞 (+ but ...)">
      <div class="rows is-labeled">
        <div>
          <span class="term">was / were supposed to</span>
          <span>原本安排好、原本應該。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>原本要做的事。</span>
        </div>
        <div>
          <span class="term">but ...</span>
          <span>後來發生的改變。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="安排改變了">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I was supposed to arrive on 11th June, but I will arrive next month."
              :marks="['was supposed to']"
            /><span class="translation">我原本應該六月十一日到，可是我會下個月才到。</span></span
          >
        </div>
      </div>
      <p class="remark">說到未來的安排時，was supposed to 表示這個安排已經改了。</p>
    </NoteSlide>
    <NoteSlide title="說時間和地點">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It was supposed to be on Tuesday at one."
              :marks="['It was supposed to be']"
            /><span class="translation">原本應該是星期二一點。</span></span
          >
        </div>
      </div>
      <p class="remark">It was supposed to be 常說原本安排的時間或地點。</p>
    </NoteSlide>
    <NoteSlide title="這個片語是 be supposed to，supposed 要有 -d" mark="supposed">
      <NoteFix
        wrong="I was suppose to call her."
        right="I was supposed to call her."
        :fix="['supposed']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="We were supposed to met at noon."
        right="We were supposed to meet at noon."
        :fix="['meet']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 they，用 were" mark="they">
      <NoteFix
        wrong="They was supposed to come yesterday."
        right="They were supposed to come yesterday."
        :fix="['were']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
