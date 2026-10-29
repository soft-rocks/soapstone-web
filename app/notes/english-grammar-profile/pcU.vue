<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-slightly, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="slightly 放在比較級前面，表示只差一點" mark="slightly better">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The blue jacket is', kind: 'dim' },
          { t: 'slightly', role: 'slightly', kind: 'key', ring: true },
          { t: 'cheaper', role: '比較級', kind: 'key' },
          { t: 'than the black one.', role: 'than + 比較的對象' },
        ]"
      />
      <p class="translation">藍色那件外套比黑色那件便宜一點。</p>
    </NoteSlide>

    <NoteSlide title="長的形容詞用 slightly more" mark="slightly better">
      <NoteMark
        sentence="The new chairs are slightly more comfortable than the old ones."
        :marks="['slightly more comfortable']"
      />
      <p class="translation">新的椅子比舊的舒服一點。</p>
    </NoteSlide>

    <NoteSlide title="slightly 加比較級也可以放在名詞前面" mark="slightly better">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Could I have', kind: 'dim' },
          { t: 'a', role: '限定詞' },
          { t: 'slightly bigger', role: 'slightly + 比較級', kind: 'key', ring: true },
          { t: 'room?', role: '名詞' },
        ]"
      />
      <p class="translation">我可以換一間大一點的房間嗎？</p>
    </NoteSlide>

    <NoteSlide title="修飾比較級要用副詞 slightly" mark="slightly">
      <NoteFix
        wrong="The second test was slight easier."
        right="The second test was slightly easier."
        fix="slightly"
      />
    </NoteSlide>

    <NoteSlide title="有 than 的句子要用比較級" mark="better">
      <NoteFix
        wrong="This year's rent is slightly high than last year's."
        right="This year's rent is slightly higher than last year's."
        fix="higher"
      />
    </NoteSlide>

    <NoteSlide title="slightly 放在比較級前面" mark="slightly better">
      <NoteFix
        wrong="The train was later slightly than usual."
        right="The train was slightly later than usual."
        fix="slightly later"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
