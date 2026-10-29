<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-wh-interrogative-subject, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="疑問詞當主詞，後面直接接動詞，不加 do" mark="What happened">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Who', role: '疑問詞 = 主詞', kind: 'key', ring: true },
          { t: 'took', role: '動詞', kind: 'key' },
          { t: 'my umbrella from the hall?', kind: 'dim' },
        ]"
      />
      <p class="translation">誰從玄關拿走了我的傘？</p>
    </NoteSlide>

    <NoteSlide title="疑問詞當主詞和當受詞，意思不一樣" mark="What">
      <div class="rows is-labeled">
        <div>
          <span class="term">當主詞</span>
          <span
            ><NoteMark sentence="Who called you?" :marks="['Who called']" /><span
              class="translation"
              >誰打給你？</span
            ></span
          >
        </div>
        <div>
          <span class="term">當受詞</span>
          <span
            ><NoteMark sentence="Who did you call?" :marks="['Who did you call']" /><span
              class="translation"
              >你打給誰？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Which + 名詞也可以當主詞" mark="What happened">
      <NoteMark
        sentence="There are three buses at this stop. Which bus goes to the airport?"
        :marks="['Which bus goes']"
      />
      <p class="translation">這個站有三班公車。哪一班公車到機場？</p>
    </NoteSlide>

    <NoteSlide title="what 就是主詞，不再加 did 和 it" mark="happened">
      <NoteFix wrong="What did it happen?" right="What happened?" fix="happened" />
    </NoteSlide>

    <NoteSlide title="who 當主詞時，動詞通常加 -s" mark="happened">
      <NoteFix wrong="Who live in that house?" right="Who lives in that house?" fix="lives" />
    </NoteSlide>

    <NoteSlide title="who 後面直接接動詞，不再放主詞" mark="What">
      <NoteFix wrong="Who she called you?" right="Who called you?" fix="Who called" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
