<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-be-expressions-infinitive, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="過去式和 will">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark sentence="I was obliged to stay until the end." :marks="[]" /><span
              class="translation"
              >我不得不待到結束。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark
              sentence="All staff will be obliged to use identity cards."
              :marks="[]"
            /><span class="translation">所有員工都必須使用識別證。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="I'm bound to feeling nervous."
        right="I'm bound to feel nervous."
        :fix="['feel']"
      />
    </NoteSlide>
    <NoteSlide title="due 前面要有 be 動詞" mark="be">
      <NoteFix
        wrong="I due to start on Monday."
        right="I am due to start on Monday."
        :fix="['am']"
      />
    </NoteSlide>
    <NoteSlide title="這個慣用語是 be obliged to">
      <NoteFix
        wrong="We were oblige to pay the fine."
        right="We were obliged to pay the fine."
        :fix="['obliged']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
