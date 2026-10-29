<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-past-simple-negative, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="was 加 not，再接過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The ticket price', role: '主詞' },
          { t: 'was', role: 'was / were' },
          { t: 'not', role: 'not', kind: 'key' },
          { t: 'reduced', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">票價沒有打折。</p>
    </NoteSlide>

    <NoteSlide title="常用的說法：allowed、invited、told、done" mark="was not reduced">
      <div class="rows is-labeled">
        <div>
          <span class="term">allowed</span>
          <span
            ><NoteMark
              sentence="I wasn't allowed to work for two weeks."
              :marks="['wasn\'t allowed']"
            /><span class="translation">我兩個星期不准工作。</span></span
          >
        </div>
        <div>
          <span class="term">done</span>
          <span
            ><NoteMark sentence="A lot of things were not done." :marks="['were not done']" /><span
              class="translation"
              >很多事都沒做。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動的否定不用 didn't" mark="was not">
      <NoteFix
        wrong="The ticket price didn't reduced."
        right="The ticket price wasn't reduced."
        fix="wasn't"
      />
    </NoteSlide>

    <NoteSlide title="複數主詞用 weren't" mark="was">
      <NoteFix
        wrong="The dogs wasn't kept inside."
        right="The dogs weren't kept inside."
        fix="weren't"
      />
    </NoteSlide>

    <NoteSlide title="despite 後面接名詞" mark="despite the fact that">
      <NoteFix
        wrong="The price was not reduced despite I showed my student ID."
        right="The price was not reduced despite the fact that I showed my student ID."
        fix="the fact that"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
