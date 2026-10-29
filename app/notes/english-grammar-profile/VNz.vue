<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-questions-788, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Did + 主詞 + 原形動詞 + …？" mark="Did">
      <div class="rows is-labeled">
        <div>
          <span class="term">Did</span>
          <span>放在主詞前面，表示過去。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>did 後面的動詞用原形。</span>
        </div>
        <div>
          <span class="term">疑問詞</span>
          <span>what、when、where、why 放在句首。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="疑問詞的問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Your fridge is empty. When did you last go to the supermarket?"
              :marks="['did']"
            /><span class="translation">你的冰箱空空的。你上次去超市是什麼時候？</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="did 後面接原形動詞" mark="Did">
      <NoteFix
        wrong="Did you posted my letter to the bank this morning?"
        right="Did you post my letter to the bank this morning?"
        :fix="['post']"
      />
    </NoteSlide>
    <NoteSlide title="一般動詞的問句要用 did" mark="Did">
      <NoteFix
        wrong="Where you parked the car this morning?"
        right="Where did you park the car this morning?"
        :fix="['did', 'park']"
      />
    </NoteSlide>
    <NoteSlide title="簡答用 did" mark="Did">
      <NoteFix
        wrong='"Did you find your keys?" "Yes, I found."'
        right='"Did you find your keys?" "Yes, I did."'
        :fix="['did.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
