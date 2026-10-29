<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-offers-569, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Shall I + 原形動詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Shall I</span>
          <span>要我……嗎？主動提出幫忙。</span>
        </div>
        <div>
          <span class="term">go and + 原形動詞</span>
          <span>去做某件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="加上 for you" mark="Shall I">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="That box looks heavy. Shall I carry it to the car for you?"
              :marks="['Shall I', 'for you?']"
            /><span class="translation">那個箱子看起來很重。要我幫你搬到車上嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">Shall I 後面常加 for you，說明是替對方做。</p>
    </NoteSlide>
    <NoteSlide title="Shall 放在句首，不用 do" mark="Shall">
      <NoteFix
        wrong="I'm going to the station anyway. Do I shall buy you a ticket for Friday?"
        right="I'm going to the station anyway. Shall I buy you a ticket for Friday?"
        :fix="['Shall', 'buy']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面接原形動詞" mark="Shall">
      <NoteFix wrong="Your aunt is coming for tea. Shall I getting some cake?" right="Your aunt is coming for tea. Shall I get some cake?" :fix="['get']" />
    </NoteSlide>
    <NoteSlide title="shall 後面的主詞用 I" mark="Shall">
      <NoteFix wrong="You've hurt your wrist. Shall me carry your bag?" right="You've hurt your wrist. Shall I carry your bag?" :fix="['I']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
