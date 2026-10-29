<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-use-or-not, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="or not 代替否定的那一半問句">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Do you want to do that', role: '一般疑問句' },
          { t: 'or not?', role: '= or do you not want to do that', kind: 'key' },
        ]"
      />
      <p class="translation">你到底要不要做那件事？</p>
    </NoteSlide>

    <NoteSlide title="加上 or not，要對方給明確的答案" mark="or not">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般的問題</span>
          <span
            ><NoteMark sentence="Are you coming?" :marks="['coming']" /><span class="translation"
              >你要來嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">不耐煩</span>
          <span
            ><NoteMark sentence="Are you coming or not?" :marks="['or not']" /><span
              class="translation"
              >你到底要不要來？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="間接的問法用 whether or not 或 if ... or not" mark="or not">
      <div class="rows is-labeled">
        <div>
          <span class="term">whether or not</span>
          <span
            ><NoteMark
              sentence="I don't know whether or not he passed."
              :marks="['whether or not']"
            /><span class="translation">我不知道他有沒有及格。</span></span
          >
        </div>
        <div>
          <span class="term">if ... or not</span>
          <span
            ><NoteMark sentence="Tell me if you're coming or not." :marks="['if', 'or not']" /><span
              class="translation"
              >告訴我你到底要不要來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="句尾用 or not，不用 or no" mark="not">
      <NoteFix wrong="Are you coming or no?" right="Are you coming or not?" fix="not" />
    </NoteSlide>

    <NoteSlide title="or not 只接在用 yes 或 no 回答的疑問句後面" mark="Do you">
      <NoteFix
        wrong="Where are you going or not?"
        right="Are you going out or not?"
        fix="Are you"
      />
    </NoteSlide>

    <NoteSlide title="句尾只用 or not，不留下助動詞" mark="or not">
      <NoteFix wrong="Do you want it or don't?" right="Do you want it or not?" fix="not" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
