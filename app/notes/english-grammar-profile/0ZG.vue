<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-let-s-suggestion, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Let's 邀對方跟自己一起做" mark="Let's meet">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Let\'s', role: 'let us', kind: 'key', ring: true },
          { t: 'have lunch', role: '原形動詞', kind: 'key' },
          { t: 'in the park.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們去公園吃午餐吧。</p>
    </NoteSlide>

    <NoteSlide title="不想做時用 Let's not" mark="Let's">
      <NoteMark
        sentence="Let's not take the car. It's hard to park there."
        :marks="['Let\'s not take']"
      />
      <p class="translation">我們別開車了，那裡很難停車。</p>
    </NoteSlide>

    <NoteSlide title="同意時說 Yes, let's" mark="Let's">
      <NoteMark sentence="A: Let's order pizza. B: Yes, let's." :marks="['Yes, let\'s']" />
      <p class="translation">A：我們叫披薩吧。B：好啊。</p>
    </NoteSlide>

    <NoteSlide title="let's 後面不加 to" mark="Let's meet">
      <NoteFix
        wrong="Let's to go home before it gets dark."
        right="Let's go home before it gets dark."
        fix="go"
      />
    </NoteSlide>

    <NoteSlide title="let's 後面的動詞不加 -ing" mark="meet">
      <NoteFix
        wrong="Let's going swimming at the sports centre."
        right="Let's go swimming at the sports centre."
        fix="go"
      />
    </NoteSlide>

    <NoteSlide title="否定用 Let's not，不用 Let's don't" mark="Let's">
      <NoteFix
        wrong="Let's don't stay at the party after midnight."
        right="Let's not stay at the party after midnight."
        fix="Let's not"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
