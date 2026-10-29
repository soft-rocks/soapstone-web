<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-the-most, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="長的形容詞前面加 the most" mark="the most famous">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Football is', kind: 'dim' },
          { t: 'the most', role: 'the most', kind: 'key', ring: true },
          { t: 'popular', role: '形容詞', kind: 'key' },
          { t: 'sport', role: '名詞' },
          { t: 'in Brazil.', kind: 'dim' },
        ]"
      />
      <p class="translation">足球是巴西最受歡迎的運動。</p>
    </NoteSlide>

    <NoteSlide title="三個音節以上和 -ful 結尾的形容詞用 the most" mark="most famous">
      <div class="rows is-labeled">
        <div>
          <span class="term">三個音節以上</span>
          <span
            ><NoteMark
              sentence="Health is the most important thing in life."
              :marks="['the most important']"
            /><span class="translation">健康是人生中最重要的事。</span></span
          >
        </div>
        <div>
          <span class="term">-ful / -ous</span>
          <span
            ><NoteMark
              sentence="She's the most careful driver I know."
              :marks="['the most careful']"
            /><span class="translation">她是我認識開車最小心的人。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="長的形容詞不加 -est" mark="the most famous">
      <NoteFix
        wrong="It was the expensivest phone in the shop."
        right="It was the most expensive phone in the shop."
        fix="the most expensive"
      />
    </NoteSlide>

    <NoteSlide title="most 前面要加 the" mark="the most">
      <NoteFix
        wrong="This is most beautiful beach in Taiwan."
        right="This is the most beautiful beach in Taiwan."
        fix="the most"
      />
    </NoteSlide>

    <NoteSlide title="用了 most，形容詞就不加 -est" mark="most famous">
      <NoteFix
        wrong="She's the most famousest singer in Korea."
        right="She's the most famous singer in Korea."
        fix="famous"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
