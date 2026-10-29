<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-meant-to-ideal-states, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + meant to + 原形動詞" mark="be">
      <div class="rows is-labeled">
        <div>
          <span class="term">be meant to</span>
          <span>本來應該、本來的用途是。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>常用 be，說應有的狀態。也可以用其他動詞，說應有的用途。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說用途">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Primary school is meant to give you the basics of your education."
              :marks="[]"
            /><span class="translation">小學的用意是讓你打好教育的基礎。</span></span
          >
        </div>
      </div>
      <p class="remark">be meant to 也說一樣東西本來的用途。</p>
    </NoteSlide>
    <NoteSlide title="和現實對比">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Holidays are meant to be relaxing, but ours was very stressful."
              :marks="['but']"
            /><span class="translation">假期本來應該很放鬆，可是我們的假期壓力很大。</span></span
          >
        </div>
      </div>
      <p class="remark">be meant to 常和 but 一起用，說現實和理想不一樣。</p>
    </NoteSlide>
    <NoteSlide title="這個片語是 be meant to，用過去分詞 meant" mark="meant">
      <NoteFix
        wrong="Animals are mean to be free."
        right="Animals are meant to be free."
        :fix="['meant']"
      />
    </NoteSlide>
    <NoteSlide title="meant 前面要有 be 動詞" mark="meant">
      <NoteFix
        wrong="Children meant to play outside."
        right="Children are meant to play outside."
        :fix="['are']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="A home is meant to being a safe place."
        right="A home is meant to be a safe place."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
