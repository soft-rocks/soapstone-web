<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-repeated-events, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + always + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'He', role: '主詞' },
          { t: 'was', kind: 'key', ring: true },
          { t: 'always', kind: 'key', ring: true },
          { t: 'talking', role: '-ing' },
          { t: 'about this prize, but I never thought he would win it.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="always、-ing" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">always</span>
          <span>總是、一直。放在 was 或 were 後面。</span>
        </div>
        <div>
          <span class="term">-&#x2060;ing</span>
          <span>過去一直重複的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說天氣">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="In September it was always raining." :marks="[]" /><span
              class="translation"
              >九月的時候一直在下雨。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">it was always + -&#x2060;ing 可以說某段時間天氣一直是那樣。</p>
    </NoteSlide>
    <NoteSlide title="有時候帶有抱怨">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="My sister was always borrowing my clothes." :marks="[]" /><span
              class="translation"
              >我姊姊總是在借我的衣服。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">was always + -&#x2060;ing 常帶一點抱怨，說某人的習慣讓人煩。</p>
    </NoteSlide>
    <NoteSlide title="過去進行式用 was 或 were 加 -ing" mark="was">
      <NoteFix
        wrong="He did always talking about it."
        right="He was always talking about it."
        :fix="['was']"
      />
    </NoteSlide>
    <NoteSlide title="was 後面的動詞要加 -ing" mark="was">
      <NoteFix
        wrong="It was always rain in September."
        right="It was always raining in September."
        :fix="['raining']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 we，用 were">
      <NoteFix wrong="We was always laughing." right="We were always laughing." :fix="['were']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
