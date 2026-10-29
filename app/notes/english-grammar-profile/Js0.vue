<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-imperative-and-conditional, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="祈使句說條件，and 接結果" mark="and you'll want">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Study hard', role: '條件', kind: 'key' },
          { t: 'and', role: 'and', kind: 'key', ring: true },
          { t: 'you\'ll pass the exam.', role: '結果', kind: 'key' },
        ]"
      />
      <p class="translation">好好讀書，你就會考過。</p>
      <p class="remark">等於 <code>If you study hard, you'll pass the exam.</code></p>
    </NoteSlide>

    <NoteSlide title="用 or 時，不這樣做就會有壞結果" mark="and">
      <NoteMark sentence="Wear a hat, or you'll get sunburnt." :marks="['or']" />
      <p class="translation">戴頂帽子，不然你會曬傷。</p>
    </NoteSlide>

    <NoteSlide title="祈使句表示條件時，用 and 接結果" mark="and">
      <NoteFix
        wrong="Try this cake, then you'll love it."
        right="Try this cake and you'll love it."
        fix="and"
      />
    </NoteSlide>

    <NoteSlide title="祈使句用原形動詞開頭" mark="See">
      <NoteFix
        wrong="Practicing every day and you'll get better."
        right="Practice every day and you'll get better."
        fix="Practice"
      />
    </NoteSlide>

    <NoteSlide title="will 後面接原形動詞" mark="you'll want">
      <NoteFix
        wrong="Take the early bus and you'll arrived on time."
        right="Take the early bus and you'll arrive on time."
        fix="arrive"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
