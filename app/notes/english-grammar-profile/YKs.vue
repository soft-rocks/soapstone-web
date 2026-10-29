<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-as-complement-of-prepositions, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="名詞片語接在介系詞後面，組成介系詞片語">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I like everything', kind: 'dim' },
          { t: 'in', role: '介系詞', kind: 'key' },
          { t: 'my house.', role: '名詞片語', kind: 'key' },
        ]"
      />
      <p class="translation">我喜歡我家裡的每一樣東西。</p>
    </NoteSlide>

    <NoteSlide title="介系詞說明地點、時間、對象或方式" mark="in">
      <div class="rows is-labeled">
        <div>
          <span class="term">地點</span>
          <span>in, on, at, near, next to, under</span>
        </div>
        <div>
          <span class="term">時間</span>
          <span>in, on, at, after, before</span>
        </div>
        <div>
          <span class="term">對象和方式</span>
          <span>to, for, with, by</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞後面接名詞片語、人名或代名詞受格" mark="my house.">
      <div class="rows is-labeled">
        <div>
          <span class="term">限定詞 + 名詞</span>
          <span>in my house, at the station</span>
        </div>
        <div>
          <span class="term">人名或地名</span>
          <span>with Anna, in London</span>
        </div>
        <div>
          <span class="term">代名詞受格</span>
          <span>with me, for her</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="go 後面接地點要加 to" mark="in">
      <NoteFix
        wrong="I'm going the cinema tonight."
        right="I'm going to the cinema tonight."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="介系詞後面的單數可數名詞要有限定詞" mark="my">
      <NoteFix wrong="My bag is on table." right="My bag is on the table." fix="the" />
    </NoteSlide>

    <NoteSlide title="with 後面用 us，不用 we">
      <NoteFix wrong="Come to the party with we." right="Come to the party with us." fix="us" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
