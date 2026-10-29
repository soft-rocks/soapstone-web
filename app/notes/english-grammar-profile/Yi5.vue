<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-modal-with-be-able-to, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 情態動詞 + be able to + 原形動詞" mark="be">
      <div class="rows is-labeled">
        <div>
          <span class="term">情態動詞</span>
          <span>would、might、may、should、must、will。</span>
        </div>
        <div>
          <span class="term">be able to</span>
          <span>能夠。be 用原形。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>能做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="為什麼不說 would can" mark="be able to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You might be able to get a ticket at the door."
              :marks="['be able to', 'might']"
            /><span class="translation">你也許可以在門口買到票。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="should 後面不能接 can，用 be able to" mark="be able to">
      <NoteFix
        wrong="We should can finish by June."
        right="We should be able to finish by June."
        :fix="['be able to']"
      />
    </NoteSlide>
    <NoteSlide title="情態動詞後面接原形 be" mark="be">
      <NoteFix
        wrong="You might is able to help."
        right="You might be able to help."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="able 後面要有 to" mark="able">
      <NoteFix
        wrong="I'd be able take walks every day."
        right="I'd be able to take walks every day."
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
