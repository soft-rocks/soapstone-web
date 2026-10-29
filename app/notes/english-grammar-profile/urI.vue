<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Do + I / you / we / they + have to + 原形動詞？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Do … have to / Does … have to</span>
          <span>必須……嗎？</span>
        </div>
        <div>
          <span class="term">Have … got to / Has … got to</span>
          <span>必須……嗎？比較口語，常用在英式英文。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>問的那件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="疑問詞放在句首" mark="What">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="What time do we have to be there?" :marks="['What', 'do']" /><span
              class="translation"
              >我們必須幾點到那裡？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">What、When、Where、How long 放在 do 或 does 前面。</p>
    </NoteSlide>
    <NoteSlide title="have to 的問句要用 do 或 does" mark="have to">
      <NoteFix wrong="What we have to bring?" right="What do we have to bring?" :fix="['do']" />
    </NoteSlide>
    <NoteSlide title="does 後面接原形 have" mark="have">
      <NoteFix wrong="Does she has to go?" right="Does she have to go?" :fix="['have']" />
    </NoteSlide>
    <NoteSlide title="have 後面要接 to 和原形動詞" mark="have">
      <NoteFix
        wrong="Do you have bring a pencil?"
        right="Do you have to bring a pencil?"
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
