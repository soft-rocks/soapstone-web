<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-finite-after-than, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="than 後面接有主詞和動詞的子句" mark="than you can imagine">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The test was', kind: 'dim' },
          { t: 'easier', role: '比較級', kind: 'key' },
          { t: 'than', role: 'than', kind: 'key' },
          { t: 'I thought.', role: '主詞 + 動詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">考試比我想的簡單。</p>
    </NoteSlide>

    <NoteSlide title="常見的子句：想法、以前、別人" mark="than you can imagine">
      <div class="rows is-labeled">
        <div>
          <span class="term">than + 預期</span>
          <span
            ><NoteMark
              sentence="We got lost twice in the mountains. The trip took longer than we planned."
              :marks="['than we planned']"
            /><span class="translation"
              >我們在山裡迷路了兩次。這趟旅行花的時間比我們計畫的長。</span
            ></span
          >
        </div>
        <div>
          <span class="term">than + 以前</span>
          <span
            ><NoteMark
              sentence="A coffee costs five dollars now. Prices are higher than they used to be."
              :marks="['than they used to be']"
            /><span class="translation">一杯咖啡現在要五塊。物價比以前高。</span></span
          >
        </div>
        <div>
          <span class="term">than + 主詞 + 助動詞</span>
          <span
            ><NoteMark sentence="My brother runs faster than I do." :marks="['than I do']" /><span
              class="translation"
              >我哥哥跑得比我快。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="than 後面的子句不再加 it" mark="imagine">
      <NoteFix
        wrong="Your garden is bigger than it looks it."
        right="Your garden is bigger than it looks."
        fix="looks"
      />
    </NoteSlide>

    <NoteSlide title="比較級後面接 than，不接 that" mark="than">
      <NoteFix
        wrong="The price is higher that we expected."
        right="The price is higher than we expected."
        fix="than"
      />
    </NoteSlide>

    <NoteSlide title="子句的主詞用主格" mark="you">
      <NoteFix wrong="Our dog eats more than me do." right="Our dog eats more than I do." fix="I" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
