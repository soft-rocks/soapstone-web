<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// contact-clause, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="名詞後面直接接主詞和動詞" mark="the one I liked best">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The pizza', role: '名詞', kind: 'key' },
          { t: 'that', kind: 'gone' },
          { t: 'we', role: '主詞', kind: 'key', ring: true },
          { t: 'ordered', role: '動詞' },
          { t: 'was cold.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們點的披薩是冷的。</p>
    </NoteSlide>

    <NoteSlide title="受詞可以省略，主詞不能省略" mark="the one I">
      <div class="rows is-labeled">
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark
              sentence="The man I met at the party was a pilot."
              :marks="['The man I met']"
            /><span class="translation">我在派對上認識的那個男人是機師。</span></span
          >
        </div>
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark
              sentence="The man who lives next door is a pilot."
              :marks="['who lives']"
            /><span class="translation">住在隔壁的那個男人是機師。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞留在子句動詞後面" mark="I liked best">
      <NoteMark sentence="That's the café we were talking about." :marks="['talking about']" />
      <p class="translation">那就是我們剛剛在說的咖啡店。</p>
    </NoteSlide>

    <NoteSlide title="當主詞的 who 不能省略" mark="the one I">
      <NoteFix
        wrong="The girl sits next to me is from Japan."
        right="The girl who sits next to me is from Japan."
        fix="who sits"
      />
    </NoteSlide>

    <NoteSlide title="子句裡不再加受詞" mark="liked best">
      <NoteFix
        wrong="The bag I bought it was expensive."
        right="The bag I bought was expensive."
        fix="bought was"
      />
    </NoteSlide>

    <NoteSlide title="加逗號的非限定子句不能省略關係代名詞" mark="the one I liked">
      <NoteFix
        wrong="My car, I bought last year, is already broken."
        right="My car, which I bought last year, is already broken."
        fix="which"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
