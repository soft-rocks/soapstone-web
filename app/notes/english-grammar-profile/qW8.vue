<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-different-with-another, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="another 換成別的一個" mark="another hotel.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I think it is better to stay at', role: '主要子句 + 動詞', kind: 'dim' },
          { t: 'another', role: '另一個', kind: 'key' },
          { t: 'hotel.', role: '單數名詞' },
        ]"
      />
      <p class="translation">我覺得住別家飯店比較好。</p>
    </NoteSlide>

    <NoteSlide title="再一個和換一個" mark="another">
      <div class="rows is-labeled">
        <div>
          <span class="term">再一個</span>
          <span
            ><NoteMark
              sentence="This cake is delicious. Can I have another piece?"
              :marks="['another piece?']"
            /><span class="translation">這個蛋糕很好吃。我可以再吃一塊嗎？</span></span
          >
        </div>
        <div>
          <span class="term">換一個</span>
          <span
            ><NoteMark
              sentence="This knife is blunt. Can you give me another knife?"
              :marks="['another knife?']"
            /><span class="translation">這把刀很鈍。可以給我另一把刀嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見的說法" mark="another hotel.">
      <div class="rows is-labeled">
        <div>
          <span class="term">another day、another time</span>
          <span>改天、下次</span>
        </div>
        <div>
          <span class="term">another way</span>
          <span>別的方法</span>
        </div>
        <div>
          <span class="term">another place</span>
          <span>別的地方</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單數名詞前面用 another" mark="another hotel.">
      <NoteFix
        wrong="Let's go to other restaurant."
        right="Let's go to another restaurant."
        fix="another restaurant."
      />
    </NoteSlide>

    <NoteSlide title="改天說 another day">
      <NoteFix
        wrong="I can't go today. I'll go other day."
        right="I can't go today. I'll go another day."
        fix="another day."
      />
    </NoteSlide>

    <NoteSlide title="複數名詞前面用 other">
      <NoteFix
        wrong="Do you have this shirt in another colours?"
        right="Do you have this shirt in other colours?"
        fix="other colours?"
      />
    </NoteSlide>

    <NoteSlide title="兩個裡面剩下的用 the other">
      <NoteFix
        wrong="I have two brothers. One is a doctor, and another is a teacher."
        right="I have two brothers. One is a doctor, and the other is a teacher."
        fix="the other"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
