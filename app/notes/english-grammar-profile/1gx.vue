<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-hyperbole, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="誇大數量的限定詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'m going to make', role: '主詞和動詞', kind: 'dim' },
          { t: 'loads of', role: '誇大數量的限定詞', kind: 'key' },
          { t: 'cookies', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我要做一大堆餅乾</p>
    </NoteSlide>

    <NoteSlide title="不是真的數字，只是說很多" mark="loads of">
      <div class="rows is-labeled">
        <div>
          <span class="term">loads of</span>
          <span
            ><NoteMark sentence="We've got loads of time." :marks="['loads of']" /><span
              class="translation"
              >我們有很多時間。</span
            ></span
          >
        </div>
        <div>
          <span class="term">tons of</span>
          <span
            ><NoteMark sentence="I've got tons of homework." :marks="['tons of']" /><span
              class="translation"
              >我有一大堆功課。</span
            ></span
          >
        </div>
        <div>
          <span class="term">hundreds of</span>
          <span
            ><NoteMark sentence="I've told you hundreds of times!" :marks="['hundreds of']" /><span
              class="translation"
              >我跟你說過幾百次了！</span
            ></span
          >
        </div>
        <div>
          <span class="term">a million</span>
          <span
            ><NoteMark sentence="I've got a million things to do." :marks="['a million']" /><span
              class="translation"
              >我有一百萬件事要做。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞照 of 後面的名詞決定" mark="cookies">
      <div class="rows is-labeled">
        <div>
          <span class="term">可數名詞</span>
          <span
            ><NoteMark sentence="There are loads of people here." :marks="['are', 'people']" /><span
              class="translation"
              >這裡有好多人。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark sentence="There is loads of food left." :marks="['is', 'food']" /><span
              class="translation"
              >還剩很多食物。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="loads 後面要加 of" mark="loads of">
      <NoteFix
        wrong="I've got loads homework."
        right="I've got loads of homework."
        fix="loads of"
      />
    </NoteSlide>

    <NoteSlide title="可數名詞用複數" mark="cookies">
      <NoteFix
        wrong="There were hundreds of person at the party."
        right="There were hundreds of people at the party."
        fix="people"
      />
    </NoteSlide>

    <NoteSlide title="不說確切數字用 hundreds" mark="loads of">
      <NoteFix
        wrong="I've told you hundred of times."
        right="I've told you hundreds of times."
        fix="hundreds"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
