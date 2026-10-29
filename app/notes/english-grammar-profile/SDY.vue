<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-future-in-the-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + going to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She didn\'t know what', role: '主詞' },
          { t: 'was', kind: 'key', ring: true },
          { t: 'going to', kind: 'key', ring: true },
          { t: 'happen.', role: '原形動詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="was / were、going to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">was / were</span>
          <span>把時間點放在過去。</span>
        </div>
        <div>
          <span class="term">going to + 原形動詞</span>
          <span>從那個時間點看，之後的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="過去的預料">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I could tell it was going to be a long day." :marks="[]" /><span
              class="translation"
              >我看得出來那會是很漫長的一天。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說話者說過去那時候覺得會發生的事。這件事後來可能發生，也可能沒發生。</p>
    </NoteSlide>
    <NoteSlide title="過去的計畫沒有實現" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We were going to fly, but the tickets were too expensive."
              :marks="['were going to', 'but']"
            /><span class="translation">我們本來要搭飛機，可是機票太貴了。</span></span
          >
        </div>
      </div>
      <p class="remark">was / were going to 後面常接 but，說明計畫為什麼沒做成。</p>
    </NoteSlide>
    <NoteSlide title="放在 know、think、wonder 後面" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I wondered who was going to win."
              :marks="['was', 'wondered', 'who']"
            /><span class="translation">我在想誰會贏。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="時間點在過去，be 動詞也用過去式">
      <NoteFix
        wrong="She didn't know what is going to happen."
        right="She didn't know what was going to happen."
        :fix="['was']"
      />
    </NoteSlide>
    <NoteSlide title="know 後面的子句不是疑問句，主詞放在 was 前面" mark="know">
      <NoteFix
        wrong="I didn't know what was he going to do."
        right="I didn't know what he was going to do."
        :fix="['he', 'going']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="We were going to went to Rome."
        right="We were going to go to Rome."
        :fix="['go']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
