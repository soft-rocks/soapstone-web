<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-rather-a, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="rather 放在 a 前面，語氣正式" mark="rather a">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'My parents live', kind: 'dim' },
          { t: 'rather', role: 'rather', kind: 'key', ring: true },
          { t: 'a', role: 'a / an', kind: 'key', ring: true },
          { t: 'long way', role: '形容詞 + 名詞' },
          { t: 'from the station.', kind: 'dim' },
        ]"
      />
      <p class="translation">我爸媽住的地方離車站相當遠。</p>
    </NoteSlide>

    <NoteSlide title="rather 也可以放在 a 後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">rather a / an</span>
          <span
            ><NoteMark sentence="It was rather an odd request." :marks="['rather an odd']" /><span
              class="translation"
              >那是一個相當奇怪的要求。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a rather</span>
          <span
            ><NoteMark sentence="He's a rather quiet person." :marks="['a rather quiet']" /><span
              class="translation"
              >他是個相當安靜的人。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數和不可數名詞前面不加 a">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark
              sentence="The exam had rather difficult questions."
              :marks="['rather difficult questions.']"
            /><span class="translation">那次考試的題目相當難。</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark
              sentence="The hotel served rather plain food."
              :marks="['rather plain food.']"
            /><span class="translation">那家旅館的菜相當清淡。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="rather 前面用 a">
      <NoteFix
        wrong="It was an rather old house."
        right="It was a rather old house."
        fix="a rather"
      />
    </NoteSlide>

    <NoteSlide title="rather 在前面時，a 或 an 看形容詞的發音" mark="rather a poor">
      <NoteFix wrong="That's rather an big problem." right="That's rather a big problem." fix="a" />
    </NoteSlide>

    <NoteSlide title="複數名詞前面不加 a">
      <NoteFix
        wrong="They were rather a difficult questions."
        right="They were rather difficult questions."
        fix="rather difficult"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
