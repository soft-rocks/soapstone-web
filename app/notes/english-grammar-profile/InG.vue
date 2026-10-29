<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-allowed-to-permission, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are / was / were + (not) allowed to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">be allowed to</span>
          <span>被准許。</span>
        </div>
        <div>
          <span class="term">not allowed to</span>
          <span>不被准許。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>被准許或禁止的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說規定">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Dogs aren't allowed in the restaurant." :marks="[]" /><span
              class="translation"
              >餐廳裡不准帶狗。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">公共場所的規定常用 be allowed to。</p>
    </NoteSlide>
    <NoteSlide title="allowed 後面要有 to，再接原形動詞" mark="allowed">
      <NoteFix
        wrong="I wasn't allowed go by myself."
        right="I wasn't allowed to go by myself."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="這是被動的形式，要用過去分詞 allowed" mark="allowed">
      <NoteFix
        wrong="We are not allow to smoke here."
        right="We are not allowed to smoke here."
        :fix="['allowed']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="You won't be allowed to doing what you want."
        right="You won't be allowed to do what you want."
        :fix="['do']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
