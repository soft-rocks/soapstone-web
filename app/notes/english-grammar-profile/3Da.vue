<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-make-as-object-complement, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="形容詞放在受詞後面，說受詞變成什麼樣" mark="makes me angry">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Loud music', role: '主詞' },
          { t: 'makes', role: 'make', kind: 'dim' },
          { t: 'me', role: '受詞', kind: 'key' },
          { t: 'tired.', role: '形容詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">很吵的音樂讓我覺得很累。</p>
    </NoteSlide>

    <NoteSlide title="受詞也可以是東西" mark="makes me angry">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The rain', role: '主詞' },
          { t: 'made', role: 'make', kind: 'dim' },
          { t: 'the roads', role: '受詞', kind: 'key' },
          { t: 'wet.', role: '形容詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">雨讓路面變濕了。</p>
    </NoteSlide>

    <NoteSlide title="make 後面的代名詞用受格" mark="me">
      <NoteFix
        wrong="Your phone call made I very happy."
        right="Your phone call made me very happy."
        fix="me"
      />
    </NoteSlide>

    <NoteSlide title="說明受詞的狀態用形容詞" mark="angry">
      <NoteFix wrong="Her smile makes me happily." right="Her smile makes me happy." fix="happy" />
    </NoteSlide>

    <NoteSlide title="make 加受詞後面直接接形容詞" mark="makes me angry">
      <NoteFix
        wrong="The long walk made us to be tired."
        right="The long walk made us tired."
        fix="us tired"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
