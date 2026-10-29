<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-use-with-uncountable-nouns, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a bit of 加不可數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'had', role: '動詞' },
          { t: 'a bit of', role: 'a bit of', kind: 'key' },
          { t: 'free time,', role: '不可數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我有一點空閒時間，</p>
    </NoteSlide>

    <NoteSlide title="a little、a bit of 和 a little bit of" mark="a bit of">
      <div class="rows is-labeled">
        <div>
          <span class="term">a little</span>
          <span
            ><NoteMark
              sentence="We could spend a little time together."
              :marks="['a little']"
            /><span class="translation">我們可以一起待一下。</span></span
          >
        </div>
        <div>
          <span class="term">a bit of</span>
          <span
            ><NoteMark sentence="I had a bit of free time." :marks="['a bit of']" /><span
              class="translation"
              >我有一點空閒時間。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a little bit of</span>
          <span
            ><NoteMark
              sentence="I just watch a little bit of TV after school."
              :marks="['a little bit of']"
            /><span class="translation">我放學後只看一點點電視。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a little 有一點，little 幾乎沒有" mark="a bit of">
      <div class="rows is-labeled">
        <div>
          <span class="term">a little</span>
          <span
            ><NoteMark
              sentence="There's a little milk left. We can have tea."
              :marks="['a little']"
            /><span class="translation">還剩一點牛奶。我們可以泡茶。</span></span
          >
        </div>
        <div>
          <span class="term">little</span>
          <span
            ><NoteMark
              sentence="There's little milk left. We need to buy some."
              :marks="['little']"
            /><span class="translation">牛奶幾乎沒了。我們得去買。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a little 不加 of" mark="a bit of">
      <NoteFix
        wrong="Can I have a little of milk in my tea?"
        right="Can I have a little milk in my tea?"
        fix="a little milk"
      />
    </NoteSlide>

    <NoteSlide title="a bit 要加 of" mark="a bit of">
      <NoteFix
        wrong="I need a bit help with my homework."
        right="I need a bit of help with my homework."
        fix="a bit of"
      />
    </NoteSlide>

    <NoteSlide title="可數名詞的複數用 a few" mark="a bit of">
      <NoteFix
        wrong="I bought a little apples at the market."
        right="I bought a few apples at the market."
        fix="a few"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
