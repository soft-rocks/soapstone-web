<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-use-non-finite-perfect-clauses, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not having been 加過去分詞，交代原因">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Not having been', role: 'not having been', kind: 'key' },
          { t: 'given', role: '過去分詞', kind: 'key' },
          { t: 'precise orders,', role: '受詞', kind: 'dim' },
          { t: 'he decided', role: '主要子句' },
        ]"
      />
      <p class="translation">因為沒有收到明確的指示，他決定⋯⋯</p>
    </NoteSlide>

    <NoteSlide title="having been 先發生，being 同時存在" mark="having been given">
      <div class="rows is-labeled">
        <div>
          <span class="term">having been</span>
          <span
            ><NoteMark
              sentence="Having been warned about the traffic, we left early."
              :marks="['Having been warned']"
            /><span class="translation">我們事先被提醒會塞車，所以提早出門。</span></span
          >
        </div>
        <div>
          <span class="term">being</span>
          <span
            ><NoteMark
              sentence="Being watched by the teacher, the students worked quietly."
              :marks="['Being watched']"
            /><span class="translation">老師在看，所以學生安靜地做功課。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="放在句首，或放在主詞後面" mark="Not having been given">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="Having been taught by the best, he became a great teacher."
              :marks="['Having been taught']"
            /><span class="translation"
              >他受過最好的老師指導，後來自己也成了很棒的老師。</span
            ></span
          >
        </div>
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="I myself, having been educated the hard way, want the best for my children."
              :marks="['having been educated']"
            /><span class="translation"
              >我自己是吃過苦才受到教育的，所以想給孩子最好的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="having 後面接 been" mark="been">
      <NoteFix
        wrong="Not having being given orders, he waited."
        right="Not having been given orders, he waited."
        fix="been"
      />
    </NoteSlide>

    <NoteSlide title="被動要有 been" mark="been">
      <NoteFix
        wrong="Having born in Italy, she speaks Italian at home."
        right="Having been born in Italy, she speaks Italian at home."
        fix="been"
      />
    </NoteSlide>

    <NoteSlide title="主要子句的主詞要是被做這件事的人" mark="he">
      <NoteFix
        wrong="Having been warned about the storm, the trip was cancelled."
        right="Having been warned about the storm, we cancelled the trip."
        fix="we"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
