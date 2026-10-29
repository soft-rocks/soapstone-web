<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-how-adjective-clause, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="How 加形容詞，後面接主詞和動詞" mark="How lucky you are">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'How beautiful', role: 'How + 形容詞', kind: 'key', ring: true },
          { t: 'this beach', role: '主詞' },
          { t: 'is!', role: '動詞', kind: 'key' },
        ]"
      />
      <p class="translation">這片海灘好美！</p>
    </NoteSlide>

    <NoteSlide title="後面加 to 不定詞，說明原因" mark="to have visited">
      <NoteMark
        sentence="How lucky you are to have visited that exhibition!"
        :marks="['to have visited']"
      />
      <p class="translation">你能去看那個展覽，真是太幸運了！</p>
    </NoteSlide>

    <NoteSlide title="How 加形容詞，直接接 to 不定詞" mark="How lucky">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'How nice', role: 'How + 形容詞', kind: 'key' },
          { t: 'to see', role: 'to + 原形動詞', kind: 'key', ring: true },
          { t: 'you again!', kind: 'dim' },
        ]"
      />
      <p class="translation">真高興再見到你！</p>
    </NoteSlide>

    <NoteSlide title="主詞在動詞前面，不倒裝" mark="you are">
      <NoteFix
        wrong="How beautiful is this beach!"
        right="How beautiful this beach is!"
        fix="this beach is"
      />
    </NoteSlide>

    <NoteSlide title="形容詞後面接主詞，用 How" mark="How">
      <NoteFix wrong="What lucky you are!" right="How lucky you are!" fix="How" />
    </NoteSlide>

    <NoteSlide title="to 後面用原形動詞" mark="to have">
      <NoteFix
        wrong="How lovely to getting your letter!"
        right="How lovely to get your letter!"
        fix="to get"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
