<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-comparison, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="as + 形容詞 + a + 名詞 + as，形容詞放在 a 前面" mark="as large a number">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'It wasn\'t', kind: 'dim' },
          { t: 'as good', role: 'as + 形容詞', kind: 'key', ring: true },
          { t: 'a game', role: 'a + 名詞', kind: 'key' },
          { t: 'as last week\'s.', role: 'as + 比較的對象' },
        ]"
      />
      <p class="translation">這場比賽沒有上禮拜那場好看。</p>
    </NoteSlide>

    <NoteSlide title="so + 形容詞 + a + 名詞 + that 說明結果" mark="as large a">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'It was', kind: 'dim' },
          { t: 'so hot', role: 'so + 形容詞', kind: 'key', ring: true },
          { t: 'a day', role: 'a + 名詞', kind: 'key' },
          { t: 'that the roads melted.', role: 'that 子句' },
        ]"
      />
      <p class="translation">那天熱到路面都融化了。</p>
    </NoteSlide>

    <NoteSlide title="too 也一樣，形容詞放在 a 前面" mark="large a">
      <NoteMark sentence="It was too good a chance to miss." :marks="['too good a chance']" />
      <p class="translation">那個機會太好了，不能錯過。</p>
    </NoteSlide>

    <NoteSlide title="這個句型的形容詞放在 a 前面" mark="as large a">
      <NoteFix
        wrong="She is as a good player as her brother."
        right="She is as good a player as her brother."
        fix="as good a player"
      />
    </NoteSlide>

    <NoteSlide title="as 加形容詞的比較，後面也用 as" mark="as the guest appearances">
      <NoteFix
        wrong="He is as fast a runner than his father."
        right="He is as fast a runner as his father."
        fix="as#2"
      />
    </NoteSlide>

    <NoteSlide title="so 接形容詞再接 a，such 接 a 再接形容詞" mark="as large a">
      <NoteFix
        wrong="It was such hot a day that we stayed inside."
        right="It was so hot a day that we stayed inside."
        fix="so"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
