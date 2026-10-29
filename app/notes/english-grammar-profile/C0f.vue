<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-questions-with-be, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be 動詞問句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Is', role: 'be 動詞', kind: 'key' },
          { t: 'it', role: '代名詞', kind: 'key' },
          { t: 'OK?', role: '補語' },
        ]"
      />
      <p class="translation">這樣可以嗎？</p>
    </NoteSlide>

    <NoteSlide title="you 和 it" mark="Is it">
      <div class="rows is-labeled">
        <div>
          <span class="term">you</span>
          <span
            ><NoteMark sentence="Are you tired?" :marks="['Are you']" /><span class="translation"
              >你累了嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">it</span>
          <span
            ><NoteMark sentence="Is it far?" :marks="['Is it']" /><span class="translation"
              >很遠嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="直述句和問句" mark="Is it">
      <div class="rows is-labeled">
        <div>
          <span class="term">直述句</span>
          <span
            ><NoteMark sentence="It is OK." :marks="['It is']" /><span class="translation"
              >這樣可以。</span
            ></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Is it OK?" :marks="['Is it']" /><span class="translation"
              >這樣可以嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="it 緊接在 be 動詞後面" mark="Is it">
      <NoteFix wrong="Is OK it?" right="Is it OK?" fix="Is it" />
    </NoteSlide>

    <NoteSlide title="you 用 are" mark="Is">
      <NoteFix wrong="Is you ready?" right="Are you ready?" fix="Are" />
    </NoteSlide>

    <NoteSlide title="be 動詞問句不加 do" mark="Is">
      <NoteFix wrong="Do you are hungry?" right="Are you hungry?" fix="Are you" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
