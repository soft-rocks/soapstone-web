<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-a-little-bit, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a bit 放在比較級前面，表示差一點" mark="a little bit">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This jacket is', kind: 'dim' },
          { t: 'a bit', role: 'a bit', kind: 'key', ring: true },
          { t: 'cheaper', role: '比較級', kind: 'key' },
          { t: 'than that one.', role: 'than + 比較的對象' },
        ]"
      />
      <p class="translation">這件外套比那件便宜一點。</p>
    </NoteSlide>

    <NoteSlide title="a bit、a little bit、a little 意思一樣" mark="a little bit older">
      <div class="rows is-labeled">
        <div>
          <span class="term">a bit</span>
          <span
            ><NoteMark
              sentence="The second lesson was a bit longer."
              :marks="['a bit longer']"
            /><span class="translation">第二堂課長一點。</span></span
          >
        </div>
        <div>
          <span class="term">a little bit（口語）</span>
          <span
            ><NoteMark
              sentence="The soup is a little bit saltier today."
              :marks="['a little bit saltier']"
            /><span class="translation">今天的湯鹹一點。</span></span
          >
        </div>
        <div>
          <span class="term">a little（正式）</span>
          <span
            ><NoteMark
              sentence="The second room was a little larger."
              :marks="['a little larger']"
            /><span class="translation">第二個房間大一點。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="長的形容詞用 a bit more" mark="older">
      <NoteMark
        sentence="The hotel was a bit more expensive than we planned."
        :marks="['a bit more expensive']"
      />
      <p class="translation">旅館比我們預計的貴一點。</p>
    </NoteSlide>

    <NoteSlide title="bit 前面要加 a" mark="a little bit">
      <NoteFix
        wrong="He is bit taller than his father."
        right="He is a bit taller than his father."
        fix="a bit"
      />
    </NoteSlide>

    <NoteSlide title="有 than 的句子要用比較級" mark="older">
      <NoteFix
        wrong="My room is a bit small than yours."
        right="My room is a bit smaller than yours."
        fix="smaller"
      />
    </NoteSlide>

    <NoteSlide title="a bit 放在比較級前面" mark="a little bit older">
      <NoteFix
        wrong="The water is warmer a bit today."
        right="The water is a bit warmer today."
        fix="a bit warmer"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
