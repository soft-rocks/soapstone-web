<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-slightest-faintest, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定 + the slightest，表示一點都沒有" mark="don't have the faintest">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'He', role: '主詞' },
          { t: 'didn\'t show', role: '否定', kind: 'key' },
          { t: 'the slightest', role: '最少的', kind: 'key', ring: true },
          { t: 'interest', role: '名詞' },
          { t: 'in the plan.', kind: 'dim' },
        ]"
      />
      <p class="translation">他對那個計畫一點興趣都沒有。</p>
    </NoteSlide>

    <NoteSlide title="the faintest 常配 idea、clue、hope" mark="faintest idea">
      <div class="rows is-labeled">
        <div>
          <span class="term">the faintest idea</span>
          <span
            ><NoteMark
              sentence="I've looked in every pocket. I haven't the faintest idea where my keys are."
              :marks="['the faintest idea']"
            /><span class="translation"
              >我每個口袋都找過了。我完全不知道我的鑰匙在哪裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">the faintest clue</span>
          <span
            ><NoteMark
              sentence="Water was coming through the ceiling, and my sister was alone. She didn't have the faintest clue what to do."
              :marks="['the faintest clue']"
            /><span class="translation"
              >水從天花板流下來，我姊姊又一個人在家。她完全不知道該怎麼辦。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if 子句和問句裡的 the slightest，表示只要有一點點" mark="the faintest">
      <NoteMark
        sentence="If you have the slightest problem, call me."
        :marks="['the slightest problem']"
      />
      <p class="translation">只要有一點問題，就打給我。</p>
    </NoteSlide>

    <NoteSlide title="the faintest idea 和否定一起用" mark="don't have">
      <NoteFix
        wrong="I have the faintest idea where he is."
        right="I don't have the faintest idea where he is."
        fix="don't have"
      />
    </NoteSlide>

    <NoteSlide title="最高級前面要加 the" mark="the faintest">
      <NoteFix
        wrong="She didn't show slightest interest."
        right="She didn't show the slightest interest."
        fix="the slightest"
      />
    </NoteSlide>

    <NoteSlide title="一點都沒有用最高級 slightest" mark="faintest">
      <NoteFix
        wrong="There isn't the slight chance of rain."
        right="There isn't the slightest chance of rain."
        fix="slightest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
