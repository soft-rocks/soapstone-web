<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-negative-declarative-lexical-verbs, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="he、she、it 用 doesn't，後面接原形動詞" mark="don't have">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Our cat', role: '主詞' },
          { t: 'doesn\'t', role: 'doesn\'t', kind: 'key', ring: true },
          { t: 'like', role: '原形動詞', kind: 'key' },
          { t: 'the rain.', role: '受詞' },
        ]"
      />
      <p class="translation">我們的貓不喜歡下雨。</p>
    </NoteSlide>

    <NoteSlide title="過去的事，所有主詞都用 didn't" mark="don't">
      <NoteMark sentence="We didn't go out last night." :marks="['didn\'t go']" />
      <p class="translation">我們昨天晚上沒出門。</p>
    </NoteSlide>

    <NoteSlide title="一般動詞的否定要加 don't" mark="don't">
      <NoteFix
        wrong="My kids not eat broccoli or carrots."
        right="My kids don't eat broccoli or carrots."
        fix="don't"
      />
    </NoteSlide>

    <NoteSlide title="doesn't 後面用原形動詞" mark="have">
      <NoteFix wrong="Ann doesn't speaks Spanish." right="Ann doesn't speak Spanish." fix="speak" />
    </NoteSlide>

    <NoteSlide title="主詞是單數名詞，用 doesn't" mark="don't">
      <NoteFix
        wrong="The printer in my office don't work."
        right="The printer in my office doesn't work."
        fix="doesn't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
