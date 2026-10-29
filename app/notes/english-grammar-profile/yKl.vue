<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-complex-noun-phrases-with-little-or, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="little or no 強調量很少，甚至完全沒有">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'They have', kind: 'dim' },
          { t: 'little or no', role: '很少或沒有', kind: 'key' },
          { t: 'spare time', role: '不可數名詞' },
          { t: 'to relax and recharge their batteries.', role: 'to + 原形動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">他們幾乎沒有空閒時間可以放鬆、充電。</p>
    </NoteSlide>

    <NoteSlide title="little 接不可數名詞，few 接複數可數名詞" mark="little or no">
      <div class="rows is-labeled">
        <div>
          <span class="term">little or no</span>
          <span>little or no money, little or no experience</span>
        </div>
        <div>
          <span class="term">few or no</span>
          <span>few or no visitors</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="little or no 常放在 have、with 和 there is 後面" mark="have little or no">
      <div class="rows is-labeled">
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark
              sentence="The village has little or no public transport."
              :marks="['has little or no']"
            /><span class="translation">那個村子幾乎沒有大眾運輸。</span></span
          >
        </div>
        <div>
          <span class="term">with</span>
          <span
            ><NoteMark
              sentence="films with little or no artistic value"
              :marks="['with little or no']"
            /><span class="translation">幾乎沒有藝術價值的電影</span></span
          >
        </div>
        <div>
          <span class="term">there is</span>
          <span
            ><NoteMark
              sentence="There is little or no chance of rain."
              :marks="['There is little or no']"
            /><span class="translation">幾乎不可能下雨。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="tourists 是複數可數名詞，用 few or no">
      <NoteFix
        wrong="There were little or no tourists in the town."
        right="There were few or no tourists in the town."
        fix="few"
      />
    </NoteSlide>

    <NoteSlide title="no 後面的名詞不加 a" mark="little or no">
      <NoteFix
        wrong="He has little or no a chance of winning."
        right="He has little or no chance of winning."
        fix="chance"
      />
    </NoteSlide>

    <NoteSlide title="little or no 已經是否定，動詞不再加 not" mark="have">
      <NoteFix
        wrong="We don't have little or no money."
        right="We have little or no money."
        fix="have"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
