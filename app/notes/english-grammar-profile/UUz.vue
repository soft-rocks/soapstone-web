<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-after-if-clauses, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="If + 主詞 + should + 原形動詞, + 句子" mark="you can">
      <div class="rows is-labeled">
        <div>
          <span class="term">if … should</span>
          <span>萬一、如果真的。說不太可能、可是有可能的情況。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>可能發生的事。</span>
        </div>
        <div>
          <span class="term">後面的句子</span>
          <span>常是祈使句或 you can。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="緊急情況的指示">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If something should happen, call 112."
              :marks="['If something should happen,']"
            /><span class="translation">萬一發生什麼事，打 112。</span></span
          >
        </div>
      </div>
      <p class="remark">說緊急情況的指示常用 If something should happen。</p>
    </NoteSlide>
    <NoteSlide title="should 後面接原形動詞" mark="should">
      <NoteFix
        wrong="If you should changed your mind, call me."
        right="If you should change your mind, call me."
        :fix="['change']"
      />
    </NoteSlide>
    <NoteSlide title="should 後面直接接原形動詞" mark="should">
      <NoteFix
        wrong="If anything should to go wrong, call us."
        right="If anything should go wrong, call us."
        :fix="['go']"
      />
    </NoteSlide>
    <NoteSlide title="should 後面的動詞不變化，一律用原形" mark="should">
      <NoteFix
        wrong="If the train should arrives late, wait here."
        right="If the train should arrive late, wait here."
        :fix="['arrive']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
