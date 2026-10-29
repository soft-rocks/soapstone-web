<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-use-non-finite-clauses, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="being 加過去分詞的子句當主詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Being invited', role: 'being + 過去分詞', kind: 'key' },
          { t: 'by your boss', role: 'by + 做動作的人', kind: 'dim' },
          { t: 'makes', role: '動詞' },
          { t: 'you feel noticed.', role: '受詞和補語', kind: 'dim' },
        ]"
      />
      <p class="translation">老闆請你吃午餐，會讓你覺得自己被注意到了。</p>
    </NoteSlide>

    <NoteSlide title="當主詞，或放在句首交代原因" mark="Being invited">
      <div class="rows is-labeled">
        <div>
          <span class="term">當主詞</span>
          <span
            ><NoteMark
              sentence="Being chosen for the team was a great feeling."
              :marks="['Being chosen']"
            /><span class="translation">被選進隊裡的感覺很棒。</span></span
          >
        </div>
        <div>
          <span class="term">交代原因</span>
          <span
            ><NoteMark
              sentence="Being born in Mexico, she knows the country well."
              :marks="['Being born']"
            /><span class="translation">她在墨西哥出生，所以很了解這個國家。</span></span
          >
        </div>
        <div>
          <span class="term">省略 being</span>
          <span
            ><NoteMark
              sentence="Born in Mexico, she knows the country well."
              :marks="['Born']"
            /><span class="translation">她在墨西哥出生，所以很了解這個國家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要子句的主詞要是被做這件事的人" mark="you">
      <NoteFix
        wrong="Being chosen for the team, my parents were very proud."
        right="Being chosen for the team, I felt very proud."
        fix="I"
      />
    </NoteSlide>

    <NoteSlide title="being 子句當主詞，動詞用單數" mark="makes">
      <NoteFix
        wrong="Being given so many presents make me feel shy."
        right="Being given so many presents makes me feel shy."
        fix="makes"
      />
    </NoteSlide>

    <NoteSlide title="被做的事用 being 加過去分詞" mark="Being invited">
      <NoteFix
        wrong="Inviting by your boss makes you feel noticed."
        right="Being invited by your boss makes you feel noticed."
        fix="Being invited"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
