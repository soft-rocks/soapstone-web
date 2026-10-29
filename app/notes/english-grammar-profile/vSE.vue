<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-with-adverbs-550, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + must + 副詞 + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'In my opinion,', kind: 'dim' },
          { t: 'our town', role: '主詞' },
          { t: 'must', kind: 'key', ring: true },
          { t: 'clearly', role: '副詞' },
          { t: 'use', role: '原形動詞' },
          { t: 'this area to create a park and a playground for children.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="must certainly / definitely、must clearly、must completely">
      <div class="rows is-labeled">
        <div>
          <span class="term">must certainly / definitely</span>
          <span>一定必須、一定。</span>
        </div>
        <div>
          <span class="term">must clearly</span>
          <span>顯然必須。</span>
        </div>
        <div>
          <span class="term">must completely</span>
          <span>完全。常接 disagree、agree、change。</span>
        </div>
        <div>
          <span class="term">must seriously</span>
          <span>認真地。常接 think、consider。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="推論和義務都可以加副詞" mark="must">
      <div class="rows is-labeled">
        <div>
          <span class="term">義務</span>
          <span
            ><NoteMark sentence="We must seriously consider the cost." :marks="['must']" /><span
              class="translation"
              >我們必須認真考慮費用。</span
            ></span
          >
        </div>
        <div>
          <span class="term">推論</span>
          <span
            ><NoteMark sentence="There must surely be another way." :marks="['must']" /><span
              class="translation"
              >一定還有別的方法。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">must 說義務和推論的時候，都可以加副詞。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 must 和原形動詞中間，不放在動詞和受詞中間" mark="must">
      <NoteFix
        wrong="We must consider seriously the cost."
        right="We must seriously consider the cost."
        :fix="['seriously', 'the']"
      />
    </NoteSlide>
    <NoteSlide title="放在動詞前面要用副詞 clearly" mark="clearly">
      <NoteFix
        wrong="The town must clear use this area."
        right="The town must clearly use this area."
        :fix="['clearly']"
      />
    </NoteSlide>
    <NoteSlide title="副詞後面直接接原形動詞">
      <NoteFix
        wrong="I must completely to disagree."
        right="I must completely disagree."
        :fix="['disagree.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
