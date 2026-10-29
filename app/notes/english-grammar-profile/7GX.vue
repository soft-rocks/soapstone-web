<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-in-noun, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="最高級後面接 in 加地方" mark="in the house">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This is', kind: 'dim' },
          { t: 'the quietest', role: 'the + 最高級', kind: 'key' },
          { t: 'street', role: '名詞' },
          { t: 'in our town.', role: 'in + 地方', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">這是我們鎮上最安靜的街。</p>
    </NoteSlide>

    <NoteSlide title="一般名詞前面加 the，地名不加" mark="the house">
      <div class="rows is-labeled">
        <div>
          <span class="term">in + the + 名詞</span>
          <span
            ><NoteMark sentence="It's the oldest café in the city." :marks="['in the city']" /><span
              class="translation"
              >那是這座城市裡最老的咖啡店。</span
            ></span
          >
        </div>
        <div>
          <span class="term">in + 地名</span>
          <span
            ><NoteMark
              sentence="It's the tallest building in Taipei."
              :marks="['in Taipei']"
            /><span class="translation">那是台北最高的大樓。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="範圍是地方時用 in，不用 of" mark="in">
      <NoteFix
        wrong="It's the oldest café of the city."
        right="It's the oldest café in the city."
        fix="in"
      />
    </NoteSlide>

    <NoteSlide title="國家和城市的名稱前面不加 the" mark="in the house">
      <NoteFix
        wrong="It's the highest mountain in the Taiwan."
        right="It's the highest mountain in Taiwan."
        fix="in Taiwan"
      />
    </NoteSlide>

    <NoteSlide title="短的形容詞前面不加 most" mark="biggest">
      <NoteFix
        wrong="These are the most cheapest jeans in the shop."
        right="These are the cheapest jeans in the shop."
        fix="cheapest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
