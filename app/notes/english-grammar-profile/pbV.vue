<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-with-adverbs, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + can / can't + 副詞 + 原形動詞" mark="can't">
      <div class="rows is-labeled">
        <div>
          <span class="term">副詞</span>
          <span>放在 can 或 can't 後面。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>主要動詞，放在副詞後面。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="can't really">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I can't really afford it." :marks="['can\'t really']" /><span
              class="translation"
              >我不太負擔得起。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">can't really 說得比較委婉，意思是「不太能」。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 can't 後面" mark="can't">
      <NoteFix
        wrong="I even can't remember her face."
        right="I can't even remember her face."
        :fix="['can\'t', 'remember']"
      />
    </NoteSlide>
    <NoteSlide title="副詞放在 can 和動詞中間">
      <NoteFix
        wrong="You can write also postcards."
        right="You can also write postcards."
        :fix="['also', 'postcards.']"
      />
    </NoteSlide>
    <NoteSlide title="can 後面隔著副詞，還是直接接原形動詞">
      <NoteFix
        wrong="I can only to tell you what I think."
        right="I can only tell you what I think."
        :fix="['tell']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
