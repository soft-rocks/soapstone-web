<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-complex-noun-phrases-with-adverbs-adjectives, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="副詞修飾形容詞，形容詞修飾名詞">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'They made', kind: 'dim' },
          { t: 'really', role: '副詞', kind: 'key' },
          { t: 'good', role: '形容詞' },
          { t: 'friends.', role: '名詞' },
        ]"
      />
      <p class="translation">他們成了非常好的朋友。</p>
    </NoteSlide>

    <NoteSlide title="程度副詞可以加強或減弱形容詞" mark="really">
      <div class="rows is-labeled">
        <div>
          <span class="term">加強</span>
          <span
            ><NoteMark sentence="It took us a very long time." :marks="['very']" /><span
              class="translation"
              >我們花了很長的時間。</span
            ></span
          >
        </div>
        <div>
          <span class="term">減弱</span>
          <span
            ><NoteMark sentence="She's a fairly good cook." :marks="['fairly']" /><span
              class="translation"
              >她廚藝還不錯。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="quite 放在 a 前面，very 放在 a 後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">a + very</span>
          <span
            ><NoteMark sentence="It took us a very long time." :marks="['a very']" /><span
              class="translation"
              >我們花了很長的時間。</span
            ></span
          >
        </div>
        <div>
          <span class="term">quite + a</span>
          <span
            ><NoteMark sentence="It's quite a long way to the station." :marks="['quite a']" /><span
              class="translation"
              >到車站還滿遠的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="修飾形容詞要用副詞 really" mark="really">
      <NoteFix
        wrong="It was a real nice evening."
        right="It was a really nice evening."
        fix="really"
      />
    </NoteSlide>

    <NoteSlide title="副詞放在它修飾的形容詞前面" mark="really good">
      <NoteFix
        wrong="They are good really friends."
        right="They are really good friends."
        fix="really good"
      />
    </NoteSlide>

    <NoteSlide title="very 放在 a 和形容詞中間">
      <NoteFix
        wrong="We had very a long journey."
        right="We had a very long journey."
        fix="a very"
      />
    </NoteSlide>

    <NoteSlide title="very 不修飾名詞，名詞前面要有形容詞">
      <NoteFix wrong="She is a very teacher." right="She is a very good teacher." fix="good" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
