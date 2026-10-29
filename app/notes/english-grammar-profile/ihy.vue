<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-inversion, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Should + 主詞 + 原形動詞, + 句子" mark="Should">
      <div class="rows is-labeled">
        <div>
          <span class="term">Should</span>
          <span>放在句首，代替 if。</span>
        </div>
        <div>
          <span class="term">主詞</span>
          <span>放在 should 後面。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>可能發生的情況。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="商業信件的結尾">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Should you have any questions, please contact me."
              :marks="[]"
            /><span class="translation">如果您有任何問題，請與我聯絡。</span></span
          >
        </div>
      </div>
      <p class="remark">商業信件常用這句話結尾。</p>
    </NoteSlide>
    <NoteSlide title="倒裝的時候不用 if">
      <NoteFix
        wrong="If should you need help, call us."
        right="Should you need help, call us."
        :fix="['Should']"
      />
    </NoteSlide>
    <NoteSlide title="倒裝把 should 放在主詞前面" mark="Should">
      <NoteFix
        wrong="You should have any questions, please write."
        right="Should you have any questions, please write."
        :fix="['Should you']"
      />
    </NoteSlide>
    <NoteSlide title="should 後面接原形動詞" mark="Should">
      <NoteFix
        wrong="Should the parcel arrives late, tell us."
        right="Should the parcel arrive late, tell us."
        :fix="['arrive']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
