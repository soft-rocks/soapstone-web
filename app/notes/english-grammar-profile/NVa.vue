<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-er, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="單音節形容詞加 -er" mark="cheaper">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My brother', role: '主詞' },
          { t: 'is', role: 'be', kind: 'dim' },
          { t: 'taller', role: '形容詞-er', kind: 'key', ring: true },
          { t: 'than me.', role: 'than + 比較的對象', kind: 'key' },
        ]"
      />
      <p class="translation">我哥哥比我高。</p>
      <p class="remark"><code>tall</code> 加 <code>-er</code>，就是比較級。</p>
    </NoteSlide>

    <NoteSlide title="比較的對象很清楚時，可以不寫 than" mark="than the trousers">
      <NoteMark sentence="This bag is cheap, but that one is cheaper." :marks="['cheaper']" />
      <p class="translation">這個包包很便宜，但是那個更便宜。</p>
    </NoteSlide>

    <NoteSlide title="比較級也可以放在名詞前面" mark="cheaper">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I have an', kind: 'dim' },
          { t: 'older', role: '形容詞-er', kind: 'key', ring: true },
          { t: 'brother.', role: '名詞' },
        ]"
      />
      <p class="translation">我有一個哥哥。</p>
    </NoteSlide>

    <NoteSlide title="加了 -er，前面不加 more" mark="cheaper">
      <NoteFix
        wrong="This shirt is more cheaper than that one."
        right="This shirt is cheaper than that one."
        fix="cheaper"
      />
    </NoteSlide>

    <NoteSlide title="比較級後面接 than，不接 that" mark="than">
      <NoteFix
        wrong="My room is smaller that yours."
        right="My room is smaller than yours."
        fix="than"
      />
    </NoteSlide>

    <NoteSlide title="有 than 的句子，形容詞要用比較級" mark="cheaper than">
      <NoteFix
        wrong="Trains are fast than buses."
        right="Trains are faster than buses."
        fix="faster"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
