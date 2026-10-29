<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-affirmative-interrogative-with-auxiliary-be-have, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="助動詞 be 放在主詞前面，後面接動詞-ing" mark="Are you going">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Are', role: '助動詞 be', kind: 'key', ring: true },
          { t: 'you', role: '主詞', kind: 'key' },
          { t: 'coming', role: '動詞-ing' },
          { t: 'to Ken\'s barbecue on Sunday?', kind: 'dim' },
        ]"
      />
      <p class="translation">你星期天要來 Ken 的烤肉會嗎？</p>
    </NoteSlide>

    <NoteSlide title="have 放在主詞前面，後面接過去分詞或 got" mark="Are you">
      <div class="rows is-labeled">
        <div>
          <span class="term">have + 過去分詞</span>
          <span
            ><NoteMark
              sentence="Have you finished the book I lent you?"
              :marks="['Have you finished']"
            /><span class="translation">我借你的那本書你看完了嗎？</span></span
          >
        </div>
        <div>
          <span class="term">have + got</span>
          <span
            ><NoteMark
              sentence="I need to sign this form. Have you got a pen I can borrow?"
              :marks="['Have you got']"
            /><span class="translation">我要簽這張表格。你有筆可以借我嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="已經有助動詞 be，不再加 do" mark="Are">
      <NoteFix
        wrong="Do you are moving to a new flat?"
        right="Are you moving to a new flat?"
        fix="Are you"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 she，用 has" mark="Are">
      <NoteFix wrong="Have she finished her lunch?" right="Has she finished her lunch?" fix="Has" />
    </NoteSlide>

    <NoteSlide title="have 後面用過去分詞" mark="going">
      <NoteFix wrong="Have you ate yet?" right="Have you eaten yet?" fix="eaten" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
