<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 061, as slides, in the order of notes/dragon-english-basic-100/061.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="far 放在比較級前面，表示差很多" mark="far">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Professional baseball is', kind: 'dim' },
          { t: 'far', role: '修飾比較級', kind: 'key', ring: true },
          { t: 'more exciting', role: '比較級', kind: 'key' },
          { t: 'at a stadium than on TV.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="far 和 much 表示差很多，a little 表示差一點" mark="far">
      <div class="rows is-labeled">
        <div>
          <span class="term">far</span>
          <span
            ><NoteMark
              sentence="This book is far more interesting than the movie."
              :marks="['far']"
            /><span class="translation">這本書比電影有趣得多。</span></span
          >
        </div>
        <div>
          <span class="term">much</span>
          <span
            ><NoteMark
              sentence="My new phone is much lighter than my old one."
              :marks="['much']"
            /><span class="translation">我的新手機比舊的輕很多。</span></span
          >
        </div>
        <div>
          <span class="term">a little</span>
          <span
            ><NoteMark
              sentence="My sister is a little taller than my mother."
              :marks="['a little']"
            /><span class="translation">我姊姊比我媽媽高一點。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="比較的對象可以是兩個介系詞片語" :mark="['at a stadium', 'on TV']">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'far more exciting', role: '比較級', kind: 'dim' },
          { t: 'at a stadium', role: '介系詞片語', kind: 'key' },
          { t: 'than', role: '連接詞' },
          { t: 'on TV.', role: '介系詞片語', kind: 'key' },
        ]"
      />
      <p class="remark">比較的是在球場看和在電視上看。</p>
    </NoteSlide>

    <NoteSlide title="than 後面的介系詞片語保留介系詞" mark="on">
      <div class="rows is-labeled">
        <div>
          <span class="term">at</span>
          <span
            ><NoteMark
              sentence="Food tastes better at home than at a restaurant."
              :marks="['at#2']"
            /><span class="translation">食物在家裡吃比在餐廳吃好吃。</span></span
          >
        </div>
        <div>
          <span class="term">in</span>
          <span
            ><NoteMark sentence="It is colder in Hokkaido than in Tokyo." :marks="['in#2']" /><span
              class="translation"
              >北海道比東京冷。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
