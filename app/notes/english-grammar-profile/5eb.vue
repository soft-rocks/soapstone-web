<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-with-plural-nouns-340, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="several 加複數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Several', role: '數量限定詞', kind: 'key' },
          { t: 'days', role: '複數名詞', kind: 'key' },
          { t: 'ago,', role: '時間', kind: 'dim' },
          { t: 'we received', role: '主詞和動詞' },
          { t: 'a complaint.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">幾天前，我們接到一件投訴。</p>
    </NoteSlide>

    <NoteSlide title="several、millions of 和 a few of" mark="Several days">
      <div class="rows is-labeled">
        <div>
          <span class="term">several</span>
          <span
            ><NoteMark
              sentence="Several days ago, we received a complaint."
              :marks="['Several days']"
            /><span class="translation">幾天前，我們接到一件投訴。</span></span
          >
        </div>
        <div>
          <span class="term">millions of</span>
          <span
            ><NoteMark
              sentence="Millions of people watched the final on TV."
              :marks="['Millions of']"
            /><span class="translation">有好幾百萬人在電視上看決賽。</span></span
          >
        </div>
        <div>
          <span class="term">a few of</span>
          <span
            ><NoteMark
              sentence="They interviewed a few of the students."
              :marks="['a few of the']"
            /><span class="translation">他們訪問了其中幾個學生。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="確切的數字不加 -s 和 of" mark="Several">
      <div class="rows is-labeled">
        <div>
          <span class="term">確切的數字</span>
          <span
            ><NoteMark sentence="The city has two million people." :marks="['two million']" /><span
              class="translation"
              >這座城市有兩百萬人。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不確定的大數目</span>
          <span
            ><NoteMark
              sentence="Millions of people visit Paris every year."
              :marks="['Millions of']"
            /><span class="translation">每年有好幾百萬人去巴黎。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="several 後面用 hours，不用 hour" mark="days">
      <NoteFix wrong="I waited for several hour." right="I waited for several hours." fix="hours" />
    </NoteSlide>

    <NoteSlide title="millions 要加 of" mark="Several">
      <NoteFix
        wrong="Millions people watched the final."
        right="Millions of people watched the final."
        fix="Millions of"
      />
    </NoteSlide>

    <NoteSlide title="a few of 後面要有限定詞" mark="Several">
      <NoteFix
        wrong="A few of students were late."
        right="A few of the students were late."
        fix="the"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
