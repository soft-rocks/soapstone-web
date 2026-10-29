<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-imagined-situations, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + would + be + 形容詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">would</span>
          <span>會。說想像的情況。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>想像中會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="先說想法，再想像結果" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Let's go to the lake. It would be fun there."
              :marks="['would']"
            /><span class="translation">我們去湖邊吧。在那裡會很好玩。</span></span
          >
        </div>
      </div>
      <p class="remark">常先說自己的想法或計畫，再用 would 想像結果。</p>
    </NoteSlide>
    <NoteSlide title="would 後面接原形動詞" mark="would">
      <NoteFix wrong="It would looks great." right="It would look great." :fix="['look']" />
    </NoteSlide>
    <NoteSlide title="would 後面直接接原形動詞" mark="would">
      <NoteFix wrong="It would to be fun." right="It would be fun." :fix="['be']" />
    </NoteSlide>
    <NoteSlide title="would 後面接原形 be" mark="would">
      <NoteFix
        wrong="It would is nice to live there."
        right="It would be nice to live there."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
