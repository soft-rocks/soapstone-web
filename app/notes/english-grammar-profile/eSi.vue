<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-able-to-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + able to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She', role: '主詞' },
          { t: 'was', kind: 'key', ring: true },
          { t: 'able to', kind: 'key', ring: true },
          { t: 'get', role: '原形動詞' },
          { t: 'a good seat.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="was / were able to、wasn't / weren't able to、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">was / were able to</span>
          <span>過去某一次做到了。</span>
        </div>
        <div>
          <span class="term">wasn't / weren't able to</span>
          <span>過去某一次沒做到。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>做到或沒做到的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說做到的原因" mark="was able to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Sales went up, so we were able to improve our products."
              :marks="[]"
            /><span class="translation">銷售量增加了，所以我們能改善產品。</span></span
          >
        </div>
      </div>
      <p class="remark">was able to 前後常說明為什麼能做到。</p>
    </NoteSlide>
    <NoteSlide title="able 後面要有 to" mark="able">
      <NoteFix wrong="She was able get a seat." right="She was able to get a seat." :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="We were able to finished on time."
        right="We were able to finish on time."
        :fix="['finish']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是複數，用 were">
      <NoteFix
        wrong="The firefighters was able to save the house."
        right="The firefighters were able to save the house."
        :fix="['were']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
