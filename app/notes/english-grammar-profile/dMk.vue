<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-noun-of-possessive-determiner-noun, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="of 和 's 都表示所有">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The owner is', kind: 'dim' },
          { t: 'a friend', role: 'a + 名詞' },
          { t: 'of', role: 'of', kind: 'key' },
          { t: 'my father\'s.', role: '所有格限定詞 + 名詞 + \'s', kind: 'key' },
        ]"
      />
      <p class="translation">老闆是我爸爸的朋友。</p>
      <p class="remark">意思是我爸爸的其中一個朋友。</p>
    </NoteSlide>

    <NoteSlide title="加不加 's，意思一樣" mark="father's">
      <div class="rows is-labeled">
        <div>
          <span class="term">加 's</span>
          <span
            ><NoteMark sentence="She's a friend of my sister's." :marks="['sister\'s']" /><span
              class="translation"
              >她是我姊姊的朋友。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不加 's</span>
          <span
            ><NoteMark sentence="She's a friend of my sister." :marks="['sister']" /><span
              class="translation"
              >她是我姊姊的朋友。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="人名加 's，以 -&#x2060;s 結尾的複數名詞只加撇號" mark="father's">
      <div class="rows is-labeled">
        <div>
          <span class="term">人名 + 's</span>
          <span>a cousin of Tom's</span>
        </div>
        <div>
          <span class="term">複數名詞 + '</span>
          <span>a friend of my parents'</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說其中一個人，名詞前面用 a，不用 the" mark="a friend">
      <NoteFix
        wrong="He's the friend of my uncle's."
        right="He's a friend of my uncle's."
        fix="a"
      />
    </NoteSlide>

    <NoteSlide title="parents 以 -&#x2060;s 結尾，只加撇號">
      <NoteFix
        wrong="She's a friend of my parents's."
        right="She's a friend of my parents'."
        fix="parents'"
      />
    </NoteSlide>

    <NoteSlide title="a friend 和 my father's 中間要有 of" mark="of">
      <NoteFix wrong="He's a friend my father's." right="He's a friend of my father's." fix="of" />
    </NoteSlide>

    <NoteSlide title="mine 後面不加 's，'s 只加在名詞後面" mark="father's">
      <NoteFix wrong="She's a friend of mine's." right="She's a friend of mine." fix="mine" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
