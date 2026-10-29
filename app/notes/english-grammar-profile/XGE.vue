<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-s-s, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="連用兩個 's">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'at', role: '介系詞', kind: 'dim' },
          { t: 'Emily\'s', role: '名詞 A + \'s', kind: 'key' },
          { t: 'grandmother\'s', role: '名詞 B + \'s', kind: 'key' },
          { t: 'house.', role: '名詞 C' },
        ]"
      />
      <p class="translation">在 Emily 的奶奶家。</p>
    </NoteSlide>

    <NoteSlide title="從最後的名詞往前讀" mark="Emily's grandmother's house">
      <div class="rows is-labeled">
        <div>
          <span class="term">房子 → 奶奶的 → Emily 的</span>
          <span
            ><NoteMark
              sentence="They stayed at Emily's grandmother's house."
              :marks="['Emily\'s grandmother\'s']"
            /><span class="translation">他們住在 Emily 的奶奶家。</span></span
          >
        </div>
        <div>
          <span class="term">相簿 → 媽媽的 → Ann 的</span>
          <span
            ><NoteMark
              sentence="There were no photos of him in Ann's mother's albums."
              :marks="['Ann\'s mother\'s']"
            /><span class="translation">Ann 她媽媽的相簿裡沒有一張他的照片。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="第二個名詞也要加 's" mark="grandmother's">
      <NoteFix
        wrong="We stayed at Emily's grandmother house."
        right="We stayed at Emily's grandmother's house."
        fix="grandmother's"
      />
    </NoteSlide>

    <NoteSlide title="人的所有格用 's" mark="Emily's grandmother's">
      <NoteFix
        wrong="We met at the party of the sister of Sarah."
        right="We met at Sarah's sister's party."
        fix="Sarah's sister's"
      />
    </NoteSlide>

    <NoteSlide title="擁有的人在前，東西在最後" mark="house">
      <NoteFix
        wrong="I borrowed my sister's car's friend."
        right="I borrowed my sister's friend's car."
        fix="friend's car"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
