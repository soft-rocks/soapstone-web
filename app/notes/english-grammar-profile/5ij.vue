<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-est-63, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="單音節形容詞加 -est 是最高級" mark="the cheapest">
      <div class="rows is-labeled">
        <div>
          <span class="term">old → oldest</span>
          <span
            ><NoteMark
              sentence="My grandfather is the oldest man in the village."
              :marks="['the oldest']"
            /><span class="translation">我爺爺是村子裡年紀最大的人。</span></span
          >
        </div>
        <div>
          <span class="term">tall → tallest</span>
          <span
            ><NoteMark
              sentence="That's the tallest building in the city."
              :marks="['the tallest']"
            /><span class="translation">那是這座城市最高的大樓。</span></span
          >
        </div>
        <div>
          <span class="term">long → longest</span>
          <span
            ><NoteMark
              sentence="The Nile is the longest river in Africa."
              :marks="['the longest']"
            /><span class="translation">尼羅河是非洲最長的河。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前面說過是什麼，名詞可以不寫" mark="the cheapest">
      <NoteMark
        sentence="I bought the shirt because it was the cheapest."
        :marks="['the cheapest']"
      />
      <p class="translation">我買那件襯衫，因為它最便宜。</p>
    </NoteSlide>

    <NoteSlide title="加了 -est，前面不加 most" mark="cheapest">
      <NoteFix
        wrong="This is the most cheapest bag."
        right="This is the cheapest bag."
        fix="the cheapest"
      />
    </NoteSlide>

    <NoteSlide title="最高級前面要加 the" mark="the cheapest">
      <NoteFix
        wrong="She is youngest person in the office."
        right="She is the youngest person in the office."
        fix="the youngest"
      />
    </NoteSlide>

    <NoteSlide title="單音節形容詞加 -est，不用 most" mark="cheapest">
      <NoteFix
        wrong="That's the most fast car in the race."
        right="That's the fastest car in the race."
        fix="fastest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
