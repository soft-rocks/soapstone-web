<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-affirmative-will, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will + 原形動詞" mark="I'll">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span>表示未來。每個人稱都用 will，不加 -&#x2060;s。</span>
        </div>
        <div>
          <span class="term">'ll</span>
          <span
            >will 的縮寫，接在代名詞後面，像
            I'll、you'll、he'll、she'll、it'll、we'll、they'll。</span
          >
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>未來要發生的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞">
      <NoteFix wrong="She will comes tomorrow." right="She will come tomorrow." :fix="['come']" />
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞，不加 to">
      <NoteFix wrong="I will to see you soon." right="I will see you soon." :fix="['see']" />
    </NoteSlide>
    <NoteSlide title="will 後面的 be 用原形">
      <NoteFix
        wrong="I will am at home tonight."
        right="I will be at home tonight."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="will 不隨主詞變化">
      <NoteFix wrong="He wills help you." right="He will help you." :fix="['will']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
