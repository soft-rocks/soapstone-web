<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-questions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Was / Were + 主詞 + -ing + …？" mark="Why">
      <div class="rows is-labeled">
        <div>
          <span class="term">Was</span>
          <span>主詞是 I、he、she、it。</span>
        </div>
        <div>
          <span class="term">Were</span>
          <span>主詞是 you、we、they。</span>
        </div>
        <div>
          <span class="term">疑問詞</span>
          <span>what、why、where、who 放在句首。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="What were you doing？">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="What were you doing at eight last night?"
              :marks="['What were you doing']"
            /><span class="translation">你昨天晚上八點在做什麼？</span></span
          >
        </div>
      </div>
      <p class="remark">What were you doing? 問對方過去某個時間在做什麼。</p>
    </NoteSlide>
    <NoteSlide title="過去進行式的問句用 was 或 were" mark="was">
      <NoteFix wrong="What did you doing?" right="What were you doing?" :fix="['were']" />
    </NoteSlide>
    <NoteSlide title="問句把 were 放在主詞前面">
      <NoteFix
        wrong="Where you were going?"
        right="Where were you going?"
        :fix="['were', 'going?']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 you，用 were">
      <NoteFix wrong="Was you sleeping?" right="Were you sleeping?" :fix="['Were']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
