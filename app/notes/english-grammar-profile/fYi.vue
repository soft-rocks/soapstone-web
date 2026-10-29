<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-adjective-enough-to-infinitive, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide
      title="形容詞 + enough + to 不定詞，說條件夠不夠"
      mark="responsible enough to handle"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She\'s', kind: 'dim' },
          { t: 'experienced enough', role: '形容詞 + enough', kind: 'key' },
          { t: 'to lead the team.', role: 'to 不定詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">她的經驗夠，可以帶領這個團隊。</p>
    </NoteSlide>

    <NoteSlide title="加了 not，表示條件不夠" mark="enough">
      <NoteMark
        sentence="My brother only has a first degree. He isn't qualified enough to teach at the university."
        :marks="['isn\'t qualified enough']"
      />
      <p class="translation">我哥哥只有學士學位。他的資格不夠，不能在大學教書。</p>
    </NoteSlide>

    <NoteSlide title="for + 人放在 to 不定詞前面" mark="to handle">
      <NoteMark
        sentence="The instructions are clear enough for anyone to follow."
        :marks="['for anyone']"
      />
      <p class="translation">說明書夠清楚，誰都看得懂。</p>
    </NoteSlide>

    <NoteSlide title="enough 放在形容詞後面" mark="responsible enough">
      <NoteFix
        wrong="He isn't enough mature to live alone."
        right="He isn't mature enough to live alone."
        fix="mature enough"
      />
    </NoteSlide>

    <NoteSlide title="enough 後面要有 to" mark="to handle">
      <NoteFix
        wrong="My son isn't tall enough reach the top shelf."
        right="My son isn't tall enough to reach the top shelf."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="to 後面用原形動詞" mark="to handle">
      <NoteFix
        wrong="I'm confident enough to giving the speech."
        right="I'm confident enough to give the speech."
        fix="give"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
