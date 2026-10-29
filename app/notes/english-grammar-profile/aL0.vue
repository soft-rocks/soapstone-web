<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-non-finite-after-than, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="than 前後比的是兩件事，兩邊都用動詞-ing" mark="than sitting at home">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Walking to work', role: '動詞-ing', kind: 'key' },
          { t: 'is cheaper', role: '比較級', kind: 'dim' },
          { t: 'than', role: 'than' },
          { t: 'taking the bus.', role: '動詞-ing', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">走路上班比搭公車便宜。</p>
    </NoteSlide>

    <NoteSlide title="less + 形容詞 + than 表示沒有那麼怎麼樣" mark="more fun than">
      <NoteMark
        sentence="I can read or sleep on the way to work. Taking the bus is less tiring than driving."
        :marks="['less tiring than driving']"
      />
      <p class="translation">我上班路上可以看書或睡覺。搭公車比開車不累。</p>
    </NoteSlide>

    <NoteSlide title="than 後面用動詞-ing，不用原形動詞" mark="sitting">
      <NoteFix
        wrong="Taking the train is faster than drive."
        right="Taking the train is faster than driving."
        fix="driving"
      />
    </NoteSlide>

    <NoteSlide title="前面用動詞-ing，than 後面也用動詞-ing" mark="sitting">
      <NoteFix
        wrong="Reading is more relaxing than to watch TV."
        right="Reading is more relaxing than watching TV."
        fix="watching"
      />
    </NoteSlide>

    <NoteSlide title="動詞當主詞時用動詞-ing" mark="Going away">
      <NoteFix
        wrong="Swim is better than running for your knees."
        right="Swimming is better than running for your knees."
        fix="Swimming"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
