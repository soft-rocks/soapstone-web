<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-auxiliary-verb-do-past, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="過去簡單式的否定在原形動詞前面加 didn't">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'didn\'t', role: 'didn\'t', kind: 'key' },
          { t: 'spend', role: '原形動詞', kind: 'key' },
          { t: 'a lot of money.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我沒花很多錢。</p>
      <p class="remark">過去的時間由 <code>did</code> 表示。每個主詞都用 <code>didn't</code>。</p>
    </NoteSlide>

    <NoteSlide title="正式的文章用 did not" mark="didn't">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The hospital', role: '主詞' },
          { t: 'did not', role: 'did not', kind: 'key' },
          { t: 'charge', role: '原形動詞' },
          { t: 'us for the visit.', kind: 'dim' },
        ]"
      />
      <p class="translation">醫院沒有向我們收看診的費用。</p>
    </NoteSlide>

    <NoteSlide title="didn't 後面的動詞用原形，不用過去式" mark="spend">
      <NoteFix
        wrong="I didn't went to school yesterday."
        right="I didn't go to school yesterday."
        fix="go"
      />
    </NoteSlide>

    <NoteSlide title="說過去的事用 didn't，不用 don't" mark="didn't">
      <NoteFix
        wrong="Last night I don't sleep well."
        right="Last night I didn't sleep well."
        fix="didn't"
      />
    </NoteSlide>

    <NoteSlide title="not 前面要有 did" mark="didn't">
      <NoteFix
        wrong="She not came to the party."
        right="She didn't come to the party."
        fix="didn't come"
      />
    </NoteSlide>

    <NoteSlide title="be 的過去否定是 wasn't 或 weren't" mark="didn't">
      <NoteFix
        wrong="The hotel didn't be very clean."
        right="The hotel wasn't very clean."
        fix="wasn't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
