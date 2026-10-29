<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-affirmative-786, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 動詞的過去式" mark="spent">
      <div class="rows is-labeled">
        <div>
          <span class="term">規則動詞</span>
          <span>加 -&#x2060;ed，像 liked、stayed、tried。</span>
        </div>
        <div>
          <span class="term">不規則動詞</span>
          <span>要一個一個記，像 spent、forgot、won。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="spent + 錢 / 時間 + on" mark="spent">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The maths was very hard last night. I spent two hours on my homework."
              :marks="['spent']"
            /><span class="translation">昨晚的數學很難。我花了兩個小時寫功課。</span></span
          >
        </div>
      </div>
      <p class="remark">spent 說花了多少錢或時間在某件事上。</p>
    </NoteSlide>
    <NoteSlide title="spend 的過去式是 spent" mark="spent">
      <NoteFix
        wrong="I spended all my pocket money at the fair."
        right="I spent all my pocket money at the fair."
        :fix="['spent']"
      />
    </NoteSlide>
    <NoteSlide title="buy 的過去式是 bought">
      <NoteFix
        wrong="My mum buyed a new coat for the winter."
        right="My mum bought a new coat for the winter."
        :fix="['bought']"
      />
    </NoteSlide>
    <NoteSlide title="win 的過去式是 won">
      <NoteFix
        wrong="Our team winned the match against the city school."
        right="Our team won the match against the city school."
        :fix="['won']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
