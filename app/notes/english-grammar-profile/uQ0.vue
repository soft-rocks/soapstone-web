<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-habits-and-general-facts, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="goes 說媽媽每天上班的習慣">
      <NoteWords
        :size="40"
        :parts="[
          { t: 'She', role: '主詞' },
          { t: 'goes', role: '動詞-s', kind: 'key', ring: true },
          { t: 'to work', role: '地點', kind: 'dim' },
          { t: 'by bus.', role: '方式', kind: 'dim' },
        ]"
      />
      <p class="translation">她搭公車上班。</p>
    </NoteSlide>
    <NoteSlide title="現在簡單式說平常都這樣的事" mark="goes">
      <div class="rows is-labeled">
        <div>
          <span class="term">習慣</span>
          <span
            ><NoteMark sentence="I watch TV in the evening." :marks="['watch']" /><span
              class="translation"
              >我晚上會看電視。</span
            ></span
          >
        </div>
        <div>
          <span class="term">一再發生</span>
          <span
            ><NoteMark sentence="The train leaves every half hour." :marks="['leaves']" /><span
              class="translation"
              >火車每半小時一班。</span
            ></span
          >
        </div>
        <div>
          <span class="term">事實</span>
          <span
            ><NoteMark sentence="Water boils at 100 degrees." :marks="['boils']" /><span
              class="translation"
              >水在一百度沸騰。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="工作和住的地方也用現在簡單式" mark="goes">
      <div class="rows is-labeled">
        <div>
          <span class="term">工作</span>
          <span
            ><NoteMark sentence="I work in a supermarket." :marks="['work']" /><span
              class="translation"
              >我在超市工作。</span
            ></span
          >
        </div>
        <div>
          <span class="term">住</span>
          <span
            ><NoteMark sentence="They live in a flat on the tenth floor." :marks="['live']" /><span
              class="translation"
              >他們住在十樓的一間公寓。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="每天做的事不用進行式" mark="goes">
      <NoteFix
        wrong="I'm getting up at seven every day."
        right="I get up at seven every day."
        :fix="['get']"
      />
    </NoteSlide>
    <NoteSlide title="一直都對的事實用現在簡單式" mark="goes">
      <NoteFix
        wrong="Water is boiling at 100 degrees."
        right="Water boils at 100 degrees."
        :fix="['boils']"
      />
    </NoteSlide>
    <NoteSlide title="by 說交通方式，後面不加 the" mark="by">
      <NoteFix
        wrong="She goes to work by the bus."
        right="She goes to work by bus."
        :fix="['bus']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
