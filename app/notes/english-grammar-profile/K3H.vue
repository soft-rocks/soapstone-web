<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passive-voice, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep
// the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="已經知道的東西當主詞，by 後面放做這件事的人">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'was', role: 'be' },
          { t: 'written', role: '過去分詞', kind: 'key' },
          { t: 'by an excellent author, Leo Tolstoy.', role: 'by + 做這件事的人', kind: 'key' },
        ]"
      />
      <p class="translation">它是一位很優秀的作家 Leo Tolstoy 寫的。</p>
    </NoteSlide>

    <NoteSlide title="被動句把已經知道的東西放在句首，新的資訊放在句尾" mark="It">
      <div class="rows is-labeled">
        <div>
          <span class="term">主動</span>
          <span
            ><NoteMark sentence="Leo Tolstoy wrote it." :marks="['Leo Tolstoy']" /><span
              class="translation"
              >Leo Tolstoy 寫了它。</span
            ></span
          >
        </div>
        <div>
          <span class="term">被動</span>
          <span
            ><NoteMark sentence="It was written by Leo Tolstoy." :marks="['It']" /><span
              class="translation"
              >它是 Leo Tolstoy 寫的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動語態要有 be" mark="was">
      <NoteFix
        wrong="It written by Leo Tolstoy."
        right="It was written by Leo Tolstoy."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="be 後面接過去分詞" mark="written">
      <NoteFix
        wrong="This song was wrote by my brother."
        right="This song was written by my brother."
        fix="written"
      />
    </NoteSlide>

    <NoteSlide title="做這件事的人放在 by 後面" mark="by">
      <NoteFix
        wrong="This photo was taken from my sister."
        right="This photo was taken by my sister."
        fix="by"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
