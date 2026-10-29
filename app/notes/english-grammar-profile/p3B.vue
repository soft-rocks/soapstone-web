<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-complement-of-be, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="比較級放在 be 後面" mark="It's easier">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The bus', role: '主詞' },
          { t: 'is', role: 'be', kind: 'key' },
          { t: 'cheaper.', role: '比較級', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">公車比較便宜。</p>
    </NoteSlide>

    <NoteSlide title="說過在比什麼，就不寫 than" mark="by bus">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'You can come by bus.', role: '提出做法', kind: 'dim' },
          { t: 'It\'s', role: '主詞 + be' },
          { t: 'easier.', role: '比較級', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">你可以搭公車來，比較方便。</p>
      <p class="remark"><code>It</code> 指搭公車來這件事。</p>
    </NoteSlide>

    <NoteSlide title="It would be better 客氣地提出建議" mark="easier">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It would be better', role: '建議', kind: 'key', ring: true },
          { t: 'if you came after five.', role: 'if 子句' },
        ]"
      />
      <p class="translation">你五點以後來會比較好。</p>
    </NoteSlide>

    <NoteSlide title="有 than 的句子要用比較級" mark="easier">
      <NoteFix
        wrong="Come by train. It's fast than the bus."
        right="Come by train. It's faster than the bus."
        fix="faster"
      />
    </NoteSlide>

    <NoteSlide title="主詞和比較級中間要有 be" mark="It's">
      <NoteFix wrong="The new house bigger." right="The new house is bigger." fix="is" />
    </NoteSlide>

    <NoteSlide title="長的形容詞前面加 more" mark="easier">
      <NoteFix
        wrong="This chair is comfortabler."
        right="This chair is more comfortable."
        fix="more comfortable"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
