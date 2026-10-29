<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-use-formal, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="few 單獨指一群人裡沒幾個人">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'They were sent to Britain to improve their English,', kind: 'dim' },
          { t: 'but', kind: 'dim' },
          { t: 'few', role: '那些學生裡沒幾個人', kind: 'key', ring: true },
          { t: 'had', role: '動詞' },
          { t: 'any real contact with the language.', role: 'any + 名詞片語' },
        ]"
      />
      <p class="translation">他們被送到英國去加強英文，但很少人真的接觸到這個語言。</p>
    </NoteSlide>

    <NoteSlide title="few of 後面說出是哪一群人" mark="few">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Very few', role: 'very few', kind: 'key' },
          { t: 'of the players', role: 'of + 名詞片語' },
          { t: 'were over thirty.', role: '複數動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">球員裡很少人超過三十歲。</p>
    </NoteSlide>

    <NoteSlide title="few 的語氣是否定的，a few 是肯定的" mark="few">
      <div class="rows is-labeled">
        <div>
          <span class="term">few<br /><i>強調少</i></span>
          <span
            ><NoteMark sentence="Few friends visited him in hospital." :marks="['Few']" /><span
              class="translation"
              >沒幾個朋友去醫院看他。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a few<br /><i>有一些</i></span>
          <span
            ><NoteMark sentence="A few neighbours helped us move." :marks="['A few']" /><span
              class="translation"
              >有幾個鄰居幫我們搬家。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式的文章用 few，說話時用 not many" mark="few">
      <div class="rows is-labeled">
        <div>
          <span class="term">正式的文章</span>
          <span
            ><NoteMark sentence="Few students passed." :marks="['Few']" /><span class="translation"
              >很少學生及格。</span
            ></span
          >
        </div>
        <div>
          <span class="term">說話</span>
          <span
            ><NoteMark sentence="Not many students passed." :marks="['Not many']" /><span
              class="translation"
              >沒有很多學生及格。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="few 指複數的人，動詞用複數" mark="had">
      <NoteFix
        wrong="Few people was at the meeting."
        right="Few people were at the meeting."
        fix="were"
      />
    </NoteSlide>

    <NoteSlide title="few 後面接可數名詞的複數" mark="few">
      <NoteFix
        wrong="Few student understood the question."
        right="Few students understood the question."
        fix="students"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞用 little，不用 few" mark="few">
      <NoteFix
        wrong="The guide gave us few information."
        right="The guide gave us little information."
        fix="little"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
