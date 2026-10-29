<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-how-adverb-clause, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="How 加副詞，後面接主詞和動詞" mark="How differently we were brought up">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'How beautifully', role: 'How + 副詞', kind: 'key', ring: true },
          { t: 'she', role: '主詞' },
          { t: 'sings!', role: '動詞', kind: 'key' },
        ]"
      />
      <p class="translation">她唱得多好聽啊！</p>
    </NoteSlide>

    <NoteSlide title="副詞說動作，形容詞說人或東西" mark="differently">
      <div class="rows is-labeled">
        <div>
          <span class="term">副詞</span>
          <span
            ><NoteMark sentence="How quickly he runs!" :marks="['quickly']" /><span
              class="translation"
              >他跑得好快！</span
            ></span
          >
        </div>
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="How quick he is!" :marks="['quick']" /><span class="translation"
              >他好快！</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="修飾動詞要用副詞" mark="differently">
      <NoteFix
        wrong="How beautiful she sings!"
        right="How beautifully she sings!"
        fix="beautifully"
      />
    </NoteSlide>

    <NoteSlide title="不加 do，主詞在動詞前面" mark="we were">
      <NoteFix wrong="How quickly does time go!" right="How quickly time goes!" fix="time goes" />
    </NoteSlide>

    <NoteSlide title="副詞緊接在 How 後面" mark="How differently">
      <NoteFix wrong="How she speaks clearly!" right="How clearly she speaks!" fix="How clearly" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
