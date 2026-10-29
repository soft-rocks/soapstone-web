<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-these-pointing, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="these + 複數名詞，指身邊的東西" mark="these keys">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Are', role: 'be 動詞', kind: 'dim' },
          { t: 'these', role: '身邊的', kind: 'key' },
          { t: 'keys', role: '複數名詞' },
          { t: 'yours?', role: '補語', kind: 'dim' },
        ]"
      />
      <p class="translation">這些鑰匙是你的嗎？</p>
    </NoteSlide>

    <NoteSlide title="these 指的東西" mark="these keys">
      <div class="rows is-labeled">
        <div>
          <span class="term">手上拿的</span>
          <span
            ><NoteMark sentence="These bags are really heavy." :marks="['These bags']" /><span
              class="translation"
              >這些袋子真的很重。</span
            ></span
          >
        </div>
        <div>
          <span class="term">身邊的</span>
          <span
            ><NoteMark sentence="Are these seats free?" :marks="['these seats']" /><span
              class="translation"
              >這幾個位子有人坐嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">寄給別人看的</span>
          <span
            ><NoteMark sentence="I hope you like these pictures." :marks="['these pictures.']" /><span
              class="translation"
              >希望你喜歡這些圖。</span
            ></span
          >
        </div>
        <div>
          <span class="term">所在的地方</span>
          <span
            ><NoteMark
              sentence="The people in these mountains are very friendly."
              :marks="['these mountains']"
            /><span class="translation">這一帶山區的人都很友善。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="these 指近的，those 指遠的" mark="these">
      <div class="rows is-labeled">
        <div>
          <span class="term">these keys</span>
          <span>說話的人手上的鑰匙</span>
        </div>
        <div>
          <span class="term">those keys</span>
          <span>桌子另一頭的鑰匙</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="手上的東西用 these" mark="these">
      <NoteFix
        wrong="Look at those flowers in my hand."
        right="Look at these flowers in my hand."
        fix="these flowers"
      />
    </NoteSlide>

    <NoteSlide title="一把鑰匙用 this key" mark="these keys">
      <NoteFix wrong="Is these key yours?" right="Is this key yours?" fix="this key" />
    </NoteSlide>

    <NoteSlide title="these 加名詞，動詞用 are" mark="Are">
      <NoteFix wrong="Is these keys yours?" right="Are these keys yours?" fix="Are" />
    </NoteSlide>

    <NoteSlide title="these 後面的名詞加 -s" mark="keys">
      <NoteFix
        wrong="I'm sending you these photo."
        right="I'm sending you these photos."
        fix="photos."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
