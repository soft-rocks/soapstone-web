<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-by-singular, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="by himself 說沒有別人幫忙">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'He', role: '主詞' },
          { t: 'tried to open it', kind: 'dim' },
          { t: 'by himself.', role: 'by + 反身代名詞', kind: 'key' },
        ]"
      />
      <p class="translation">他試著自己把它打開。</p>
    </NoteSlide>

    <NoteSlide title="by 加反身代名詞說沒有別人幫忙，或獨自一個人" mark="by himself.">
      <div class="rows is-labeled">
        <div>
          <span class="term">沒有別人幫忙</span>
          <span
            ><NoteMark sentence="I fixed the bike by myself." :marks="['by myself.']" /><span
              class="translation"
              >我自己把腳踏車修好了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">沒有別人幫忙</span>
          <span
            ><NoteMark
              sentence="My little sister can tie her shoes by herself now."
              :marks="['by herself']"
            /><span class="translation">我妹妹現在會自己綁鞋帶了。</span></span
          >
        </div>
        <div>
          <span class="term">獨自一個人</span>
          <span
            ><NoteMark sentence="My grandfather lives by himself." :marks="['by himself.']" /><span
              class="translation"
              >我爺爺一個人住。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞是 she，用 herself" mark="by himself.">
      <NoteFix
        wrong="She painted the room by himself."
        right="She painted the room by herself."
        fix="herself."
      />
    </NoteSlide>

    <NoteSlide title="by 後面用反身代名詞，不用受格" mark="by himself.">
      <NoteFix
        wrong="I did my homework by me."
        right="I did my homework by myself."
        fix="myself."
      />
    </NoteSlide>

    <NoteSlide title="he 的反身代名詞是 himself" mark="himself.">
      <NoteFix
        wrong="He built the shed by hisself."
        right="He built the shed by himself."
        fix="himself."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
