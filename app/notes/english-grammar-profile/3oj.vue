<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-530, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + must not + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">must not / mustn't</span>
          <span>不可以、禁止。</span>
        </div>
        <div>
          <span class="term">mustn't</span>
          <span>口語常用的縮寫。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不可以做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="規定常用 must not">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Passengers must not speak to the driver." :marks="['must not']" /><span
              class="translation"
              >乘客不可以跟司機說話。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">正式的規定和告示常寫 must not，不縮寫。</p>
    </NoteSlide>
    <NoteSlide title="must 的否定是 must not 或 mustn't" mark="mustn't">
      <NoteFix
wrong="You don't must be late for the interview."
        right="You mustn't be late for the interview." :fix="['mustn\'t']" />
    </NoteSlide>
    <NoteSlide title="not 放在 must 後面">
      <NoteFix
        wrong="You not must touch it."
        right="You must not touch it."
        :fix="['must', 'touch']"
      />
    </NoteSlide>
    <NoteSlide title="mustn't 後面直接接原形動詞" mark="mustn't">
      <NoteFix
        wrong="We mustn't to make a noise."
        right="We mustn't make a noise."
        :fix="['make']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
