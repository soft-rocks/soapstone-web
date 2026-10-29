<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-much-noun, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="much 加比較級放在名詞前面" mark="a much cheaper hotel">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We need', kind: 'dim' },
          { t: 'a', role: '限定詞' },
          { t: 'much', role: 'much', kind: 'key', ring: true },
          { t: 'bigger', role: '比較級', kind: 'key' },
          { t: 'car', role: '名詞' },
          { t: 'for the trip.', kind: 'dim' },
        ]"
      />
      <p class="translation">這趟旅行我們需要一輛大很多的車。</p>
    </NoteSlide>

    <NoteSlide title="複數和不可數名詞前面不加 a" mark="much cheaper">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark
              sentence="The new phones have much bigger screens."
              :marks="['much bigger screens']"
            /><span class="translation">新的手機螢幕大很多。</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark
              sentence="Our grandparents had much fresher vegetables."
              :marks="['much fresher vegetables']"
            /><span class="translation">我們的祖父母那時候吃的蔬菜新鮮很多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a 和 an 看 much 的發音" mark="a much">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It was', kind: 'dim' },
          { t: 'a', role: '看 much 的發音', kind: 'key', ring: true },
          { t: 'much older', role: 'much + 比較級', kind: 'key' },
          { t: 'house than ours.', kind: 'dim' },
        ]"
      />
      <p class="translation">那是一棟比我們家老很多的房子。</p>
    </NoteSlide>

    <NoteSlide title="修飾比較級用 much，不用 very" mark="much">
      <NoteFix
        wrong="She found a very better job in Taichung."
        right="She found a much better job in Taichung."
        fix="much"
      />
    </NoteSlide>

    <NoteSlide title="限定詞放在 much 前面" mark="a much">
      <NoteFix
        wrong="We stayed in much a bigger room."
        right="We stayed in a much bigger room."
        fix="a much"
      />
    </NoteSlide>

    <NoteSlide title="much 是子音開頭，前面用 a" mark="a much">
      <NoteFix wrong="He bought an much older car." right="He bought a much older car." fix="a" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
