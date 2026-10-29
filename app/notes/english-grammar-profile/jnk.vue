<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-superlative-adverb-best-clause, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="can 和 could 後面省略了動詞" mark="the best I could">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I\'ll', kind: 'dim' },
          { t: 'do', role: '動詞' },
          { t: 'the best', role: 'the best', kind: 'key' },
          { t: 'I can', role: '主詞 + can', kind: 'key', ring: true },
          { t: 'do', kind: 'gone' },
        ]"
      />
      <p class="translation">我會盡力。</p>
    </NoteSlide>

    <NoteSlide title="現在和未來用 can，過去用 could" mark="could">
      <div class="rows is-labeled">
        <div>
          <span class="term">can</span>
          <span
            ><NoteMark
              sentence="Your driving test is tomorrow. Don't worry. Just do the best you can."
              :marks="['the best you can']"
            /><span class="translation">你明天考駕照。別擔心，盡力就好。</span></span
          >
        </div>
        <div>
          <span class="term">could</span>
          <span
            ><NoteMark
              sentence="The other team had much taller players. We did the best we could, but we lost the game."
              :marks="['the best we could']"
            /><span class="translation"
              >另一隊的球員高很多。我們盡力了，但還是輸了比賽。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="do 以外的動詞也可以用" mark="did the best">
      <NoteMark
        sentence="My dad isn't good at drawing, but he tries the best he can."
        :marks="['tries the best he can']"
      />
      <p class="translation">我爸爸不太會畫畫，但他很盡力。</p>
    </NoteSlide>

    <NoteSlide title="說過去的事用 could" mark="could">
      <NoteFix
        wrong="Yesterday I did the best I can."
        right="Yesterday I did the best I could."
        fix="could"
      />
    </NoteSlide>

    <NoteSlide title="best 前面要加 the" mark="the best">
      <NoteFix
        wrong="We'll do best we can to finish on time."
        right="We'll do the best we can to finish on time."
        fix="the best"
      />
    </NoteSlide>

    <NoteSlide title="the best 後面不加 as" mark="the best I could">
      <NoteFix
        wrong="My son tidied his room the best as he could."
        right="My son tidied his room the best he could."
        fix="the best he could"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
