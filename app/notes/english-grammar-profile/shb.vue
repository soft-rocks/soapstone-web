<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-affirmative-shall, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / we + shall + 原形動詞" mark="shall">
      <div class="rows is-labeled">
        <div>
          <span class="term">I / we</span>
          <span>未來式的 shall 只接這兩個主詞。</span>
        </div>
        <div>
          <span class="term">shall</span>
          <span>表示未來，意思和 will 相同。這是英式英語比較正式的說法。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>未來要發生的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="shall 和 will" mark="shall">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We shall go together next year." :marks="['shall', 'We']" /><span
              class="translation"
              >我們明年會一起去。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We will go together next year." :marks="['will', 'We']" /><span
              class="translation"
              >我們明年將會一起去。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">主詞是 I 或 we 時，shall 和 will 都可以用。</p>
    </NoteSlide>
    <NoteSlide title="shall 是情態動詞，後面直接接原形動詞" mark="shall">
      <NoteFix wrong="I shall to come with you." right="I shall come with you." :fix="['come']" />
    </NoteSlide>
    <NoteSlide title="shall 後面接原形動詞" mark="shall">
      <NoteFix wrong="We shall takes the train." right="We shall take the train." :fix="['take']" />
    </NoteSlide>
    <NoteSlide title="shall 後面的 be 用原形" mark="shall">
      <NoteFix
        wrong="I shall am at home tonight."
        right="I shall be at home tonight."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
