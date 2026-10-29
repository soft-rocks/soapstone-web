<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-modal-verb-modal-adverb-hedging, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 情態動詞 + 情態副詞 + 原形動詞" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">情態動詞</span>
          <span>would、should、can、will、might。</span>
        </div>
        <div>
          <span class="term">certainly / surely / definitely</span>
          <span>讓說法更肯定。</span>
        </div>
        <div>
          <span class="term">probably / possibly</span>
          <span>讓說法更委婉。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="委婉的建議">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You should probably bring sun cream."
              :marks="['should probably']"
            /><span class="translation">你大概應該帶防曬乳。</span></span
          >
        </div>
      </div>
      <p class="remark">should probably 讓建議聽起來不那麼強硬。</p>
    </NoteSlide>
    <NoteSlide title="鼓勵對方">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Next year you can surely go somewhere with your friends."
              :marks="['can surely']"
            /><span class="translation">明年你一定可以跟朋友去哪裡玩。</span></span
          >
        </div>
      </div>
      <p class="remark">can surely 用來鼓勵對方。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在情態動詞和主要動詞中間">
      <NoteFix
        wrong="You should bring probably a hat."
        right="You should probably bring a hat."
        :fix="['probably', 'a']"
      />
    </NoteSlide>
    <NoteSlide title="情態動詞後面接原形動詞">
      <NoteFix
        wrong="She would certainly enjoys it."
        right="She would certainly enjoy it."
        :fix="['enjoy']"
      />
    </NoteSlide>
    <NoteSlide title="放在動詞前面要用副詞 surely">
      <NoteFix
        wrong="You can sure go next year."
        right="You can surely go next year."
        :fix="['surely']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
