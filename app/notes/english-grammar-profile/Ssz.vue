<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-so-much, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="much 放在比較級前面，表示差很多" mark="much better">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This flat is', kind: 'dim' },
          { t: 'much', role: 'much', kind: 'key', ring: true },
          { t: 'bigger', role: '比較級', kind: 'key' },
          { t: 'than our old one.', role: 'than + 比較的對象' },
        ]"
      />
      <p class="translation">這間公寓比我們以前那間大很多。</p>
    </NoteSlide>

    <NoteSlide title="短的形容詞加 -er，長的形容詞用 more" mark="much better">
      <div class="rows is-labeled">
        <div>
          <span class="term">much + 形容詞-er</span>
          <span
            ><NoteMark
              sentence="The express train is much faster than the local one."
              :marks="['much faster']"
            /><span class="translation">快車比區間車快很多。</span></span
          >
        </div>
        <div>
          <span class="term">much + more + 形容詞</span>
          <span
            ><NoteMark
              sentence="Flying is much more expensive than taking the train."
              :marks="['much more expensive']"
            /><span class="translation">搭飛機比搭火車貴很多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="so much 的語氣比 much 強" mark="much">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The house is beautiful, and', kind: 'dim' },
          { t: 'so much', role: 'so much', kind: 'key', ring: true },
          { t: 'bigger', role: '比較級', kind: 'key' },
          { t: 'than the previous one.', role: 'than + 比較的對象' },
        ]"
      />
      <p class="translation">這間房子很漂亮，而且比之前那間大太多了。</p>
    </NoteSlide>

    <NoteSlide title="much 加比較級也可以放在 look、feel 後面" mark="is much better">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The children', role: '主詞' },
          { t: 'look', role: '連綴動詞', kind: 'key', ring: true },
          { t: 'much happier', role: 'much + 比較級', kind: 'key' },
          { t: 'in the new school.', kind: 'dim' },
        ]"
      />
      <p class="translation">孩子們在新學校看起來開心多了。</p>
    </NoteSlide>

    <NoteSlide title="修飾比較級用 much，不用 very" mark="much">
      <NoteFix
        wrong="My new phone is very faster than my old one."
        right="My new phone is much faster than my old one."
        fix="much"
      />
    </NoteSlide>

    <NoteSlide title="much 後面要用比較級" mark="better">
      <NoteFix
        wrong="This test was much easy than the last one."
        right="This test was much easier than the last one."
        fix="easier"
      />
    </NoteSlide>

    <NoteSlide title="much 放在比較級前面" mark="much better">
      <NoteFix
        wrong="The city is bigger much than the village."
        right="The city is much bigger than the village."
        fix="much bigger"
      />
    </NoteSlide>

    <NoteSlide title="修飾比較級用 so much，不用 so many" mark="much">
      <NoteFix
        wrong="The new bed is so many softer."
        right="The new bed is so much softer."
        fix="so much"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
