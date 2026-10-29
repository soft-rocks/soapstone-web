<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-of-noun, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="of + 名詞說明在哪一組裡最怎麼樣" mark="of the year">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Surfing was', kind: 'dim' },
          { t: 'the best', role: 'the + 最高級', kind: 'key' },
          { t: 'part', role: '名詞' },
          { t: 'of the trip.', role: 'of + 一件事', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">衝浪是這趟旅行最棒的部分。</p>
    </NoteSlide>

    <NoteSlide title="of 後面接一段時間或一組東西" mark="of the year">
      <div class="rows is-labeled">
        <div>
          <span class="term">of + 一段時間</span>
          <span
            ><NoteMark
              sentence="Monday is the busiest day of the week."
              :marks="['of the week']"
            /><span class="translation">星期一是一週裡最忙的一天。</span></span
          >
        </div>
        <div>
          <span class="term">of all / of the three</span>
          <span
            ><NoteMark
              sentence="I'll take the blue bag. It's the cheapest of the three."
              :marks="['of the three']"
            /><span class="translation">我要藍色那個包包，它是三個裡面最便宜的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="字尾 y 改成 i 再加 -est" mark="best">
      <NoteFix
        wrong="That was the funnyest scene of the whole film."
        right="That was the funniest scene of the whole film."
        fix="funniest"
      />
    </NoteSlide>

    <NoteSlide title="year 前面要加 the" mark="of the year">
      <NoteFix
        wrong="This is the best song of year."
        right="This is the best song of the year."
        fix="the year"
      />
    </NoteSlide>

    <NoteSlide title="最高級前面用 the" mark="the best">
      <NoteFix
        wrong="That was a worst meal of our holiday."
        right="That was the worst meal of our holiday."
        fix="the worst"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
