<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-the, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="the + 最高級 + 名詞可以當主詞、受詞或補語" mark="the latest technology">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark
              sentence="The best place to swim is the north beach."
              :marks="['The best place']"
            /><span class="translation">最適合游泳的地方是北邊的海灘。</span></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark
              sentence="We bought the cheapest tickets."
              :marks="['the cheapest tickets']"
            /><span class="translation">我們買了最便宜的票。</span></span
          >
        </div>
        <div>
          <span class="term">補語</span>
          <span
            ><NoteMark
              sentence="This is the oldest church in town."
              :marks="['the oldest church']"
            /><span class="translation">這是鎮上最古老的教堂。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞加 's 可以代替 the" mark="the latest">
      <NoteMark
        sentence="Taipei 101 was once the world's tallest building."
        :marks="['the world\'s tallest']"
      />
      <p class="translation">台北 101 曾經是世界上最高的大樓。</p>
    </NoteSlide>

    <NoteSlide title="最高級前面用 the，不用 a" mark="the latest">
      <NoteFix
        wrong="We stayed in a best hotel in the city."
        right="We stayed in the best hotel in the city."
        fix="the best"
      />
    </NoteSlide>

    <NoteSlide title="用了 Europe's 就不加 the" mark="the latest">
      <NoteFix
        wrong="It's the Europe's biggest beach."
        right="It's Europe's biggest beach."
        fix="Europe's"
      />
    </NoteSlide>

    <NoteSlide title="最好的要用最高級 best" mark="latest">
      <NoteFix
        wrong="This is the good restaurant in town."
        right="This is the best restaurant in town."
        fix="best"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
