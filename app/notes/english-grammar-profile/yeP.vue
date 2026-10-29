<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-questions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定疑問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Can't you go with your parents some other time?"
              :marks="[]"
            /><span class="translation">你不能改天再跟你爸媽去嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="附加問句" mark="can't">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She can swim, can't she?" :marks="['can\'t', 'can']" /><span
              class="translation"
              >她會游泳，不是嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You can't drive, can you?" :marks="['can\'t', 'can']" /><span
              class="translation"
              >你不會開車，對吧？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="前面用 can，附加問句也用 can" mark="can">
      <NoteFix
        wrong="You can come, don't you?"
        right="You can come, can't you?"
        :fix="['can\'t']"
      />
    </NoteSlide>
    <NoteSlide title="附加問句的主詞用代名詞">
      <NoteFix
        wrong="Tom can help us, can't Tom?"
        right="Tom can help us, can't he?"
        :fix="['he?']"
      />
    </NoteSlide>
    <NoteSlide title="前面是否定句，附加問句用肯定的 can" mark="can">
      <NoteFix wrong="You can't come, can't you?" right="You can't come, can you?" :fix="['can']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
