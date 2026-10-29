<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-which-whose, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="which 在幾個裡面選一個" mark="Which coat">
      <div class="rows is-labeled">
        <div>
          <span class="term">Which + 名詞</span>
          <span
            ><NoteMark
              sentence="There are two buses at the stop. Which bus goes to the hospital?"
              :marks="['Which bus']"
            /><span class="translation">公車站有兩班公車。哪一班公車到醫院？</span></span
          >
        </div>
        <div>
          <span class="term">Which of</span>
          <span
            ><NoteMark
              sentence="There are five coats on the chair. Which of these coats is yours?"
              :marks="['Which of these coats']"
            /><span class="translation">椅子上有五件外套。這些外套裡哪一件是你的？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="whose 問東西是誰的" mark="whose">
      <div class="rows is-labeled">
        <div>
          <span class="term">Whose + 名詞</span>
          <span
            ><NoteMark
              sentence="Please turn off your phones in the cinema. Whose phone is that?"
              :marks="['Whose phone']"
            /><span class="translation">電影院裡請把手機關掉。那是誰的手機？</span></span
          >
        </div>
        <div>
          <span class="term">Whose 單獨用</span>
          <span
            ><NoteMark
              sentence="A blue scarf was left in the classroom. Whose is this scarf?"
              :marks="['Whose is']"
            /><span class="translation">有一條藍色圍巾留在教室裡。這條圍巾是誰的？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問是誰的用 whose，who's 是 who is" mark="whose">
      <NoteFix wrong="Who's bag is this?" right="Whose bag is this?" fix="Whose" />
    </NoteSlide>

    <NoteSlide title="在幾個裡面選，用 which of" mark="Which">
      <NoteFix
        wrong="What of these cakes do you want?"
        right="Which of these cakes do you want?"
        fix="Which"
      />
    </NoteSlide>

    <NoteSlide title="whose 後面直接接名詞" mark="whose is">
      <NoteFix wrong="Whose the car is outside?" right="Whose car is outside?" fix="Whose car" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
