<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-superlative-adjective-that, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="子句可以用 can、could 這類助動詞" mark="that can ever happen">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Losing my passport was', kind: 'dim' },
          { t: 'the worst thing', role: '最高級 + 名詞', kind: 'key' },
          { t: 'that could happen', role: 'that + could + 動詞', kind: 'key', ring: true },
          { t: 'on the trip.', kind: 'dim' },
        ]"
      />
      <p class="translation">弄丟護照是這趟旅行可能遇到最糟的事。</p>
    </NoteSlide>

    <NoteSlide title="that 當子句的主詞時，不能省略" mark="that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This is', kind: 'dim' },
          { t: 'the lightest laptop', role: '最高級 + 名詞', kind: 'key' },
          { t: 'that', role: '子句的主詞', kind: 'key', ring: true },
          { t: 'exists right now.', role: '動詞' },
        ]"
      />
      <p class="translation">這是目前最輕的筆電。</p>
    </NoteSlide>

    <NoteSlide title="that 當受詞時可以省略" mark="the worst thing">
      <NoteMark
        sentence="He carried me on his shoulders at the zoo. That's the earliest thing I can remember about my grandfather."
        :marks="['thing I can remember']"
      />
      <p class="translation">他在動物園讓我騎在他肩膀上。那是我對爺爺最早的記憶。</p>
    </NoteSlide>

    <NoteSlide title="that 是主詞，不能省略" mark="that can">
      <NoteFix
        wrong="It's the fastest train goes to the airport."
        right="It's the fastest train that goes to the airport."
        fix="that goes"
      />
    </NoteSlide>

    <NoteSlide title="關係代名詞用 that，不用 what" mark="that">
      <NoteFix
        wrong="That's the clearest thing what I can remember."
        right="That's the clearest thing that I can remember."
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="that 已經是受詞，不再加 it" mark="happen">
      <NoteFix
        wrong="It's the nicest gift that he could give me it."
        right="It's the nicest gift that he could give me."
        fix="give me"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
