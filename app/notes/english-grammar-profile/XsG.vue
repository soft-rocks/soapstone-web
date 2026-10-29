<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-questions-about-the-future-415, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Am / Is / Are + 主詞 + 動詞-ing ...?">
      <div class="rows is-labeled">
        <div>
          <span class="term">am / is / are + 主詞</span>
          <span>be 動詞放在主詞前面。</span>
        </div>
        <div>
          <span class="term">動詞&#x2060;-&#x2060;ing</span>
          <span>對方安排好的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="問原因：Why">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Why is she leaving her job?" :marks="[]" /><span
              class="translation"
              >她為什麼要辭職？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="問方式和時間長短：How / How long">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="How are you getting to the wedding?" :marks="[]" /><span
              class="translation"
              >你要怎麼去婚禮？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="疑問詞後面要有 am、is 或 are" mark="are">
      <NoteFix
        wrong="Why you moving to a different area?"
        right="Why are you moving to a different area?"
        :fix="['are']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是單數，用 is">
      <NoteFix
        wrong="Why are your sister leaving?"
        right="Why is your sister leaving?"
        :fix="['is']"
      />
    </NoteSlide>
    <NoteSlide title="plan 的字尾是一個母音加一個子音，要重複 n 再加 -ing">
      <NoteFix
        wrong="Are you visiting London and planing a tour?"
        right="Are you visiting London and planning a tour?"
        :fix="['planning']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
