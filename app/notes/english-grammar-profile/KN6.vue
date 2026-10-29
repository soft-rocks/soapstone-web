<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-a-very-adjectives, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a + very + 形容詞 + 名詞" mark="a very nice town.">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'It\'s', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'a', role: '冠詞' },
          { t: 'very', role: '副詞', kind: 'key' },
          { t: 'nice', role: '形容詞' },
          { t: 'town.', role: '名詞' },
        ]"
      />
      <p class="translation">這是個很不錯的小鎮。</p>
    </NoteSlide>

    <NoteSlide title="very 前面用 a" mark="a very">
      <div class="rows is-labeled">
        <div>
          <span class="term">an old house</span>
          <span>a very old house</span>
        </div>
        <div>
          <span class="term">an interesting book</span>
          <span>a very interesting book</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="冠詞看後面的 very">
      <NoteFix wrong="It's an very old house." right="It's a very old house." fix="a very" />
    </NoteSlide>

    <NoteSlide title="a 放在 very 前面" mark="a very">
      <NoteFix wrong="It's very a nice town." right="It's a very nice town." fix="a very" />
    </NoteSlide>

    <NoteSlide title="very 後面要有形容詞">
      <NoteFix wrong="She is a very teacher." right="She is a very good teacher." fix="very good" />
    </NoteSlide>

    <NoteSlide title="名詞前面要有 a">
      <NoteFix wrong="He's very good man." right="He's a very good man." fix="a very" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
