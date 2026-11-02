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

    <NoteSlide title="說過的名詞 C 可以省略" mark="house">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It\'s', kind: 'dim' },
          { t: 'my flatmate\'s', role: '名詞 A + \'s', kind: 'key' },
          { t: 'brother\'s', role: '名詞 B + \'s', kind: 'key' },
          { t: 'bike.', role: '名詞 C', kind: 'gone' },
        ]"
      />
      <p class="translation">（這輛腳踏車）是我室友的哥哥的。</p>
    </NoteSlide>

    <NoteSlide title="從最後的名詞往前讀" mark="Emily's grandmother's house">
      <div class="rows is-labeled">
        <div>
          <span class="term">房子 → 奶奶的 → Emily 的</span>
          <span
            ><NoteMark
              sentence="We stayed at Emily's grandmother's house."
              :marks="['Emily\'s grandmother\'s']"
            /><span class="translation">我們住在 Emily 的奶奶家。</span></span
          >
        </div>
        <div>
          <span class="term">相簿 → 媽媽的 → Ann 的</span>
          <span
            ><NoteMark
              sentence="There were no photographs of him in Ann's mother's albums."
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

    <NoteSlide title="第一個名詞也要加 's" mark="Emily's grandmother's">
      <NoteFix
        wrong="We met him at Sarah sister's party."
        right="We met him at Sarah's sister's party."
        fix="Sarah's"
      />
    </NoteSlide>

    <NoteSlide title="擁有的人在前，東西在最後" mark="house">
      <NoteFix
        wrong="We sat in my uncle's garden's neighbour."
        right="We sat in my uncle's neighbour's garden."
        fix="neighbour's garden"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
