<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-use-focus, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="一串形容詞放在句首，形容主詞" mark="Imaginative, good-humored, friendly">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Tired and hungry,', role: '一串形容詞', kind: 'key', ring: true },
          { t: 'we', role: '主詞', kind: 'key' },
          { t: 'finally reached the hotel.', role: '動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">又累又餓的我們終於到了旅館。</p>
      <p class="remark">形容詞後面加逗號，再接主詞。</p>
    </NoteSlide>

    <NoteSlide title="這串形容詞省略了主詞和 be" mark="he">
      <div class="rows is-labeled">
        <div>
          <span class="term">省略</span>
          <span
            ><NoteMark
              sentence="Tired and hungry, we reached the hotel."
              :marks="['Tired and hungry']"
            /><span class="translation">又累又餓的我們到了旅館。</span></span
          >
        </div>
        <div>
          <span class="term">完整的子句</span>
          <span
            ><NoteMark
              sentence="We were tired and hungry, and we reached the hotel."
              :marks="['We were']"
            /><span class="translation">我們又累又餓，然後到了旅館。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="放在名詞後面，前後加破折號" mark="Imaginative, good-humored, friendly">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The old man', role: '名詞' },
          { t: '– tired, cold and hungry –', role: '一串形容詞', kind: 'key', ring: true },
          { t: 'sat down by the fire.', role: '動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">那個老人又累又冷又餓，在火爐旁坐了下來。</p>
    </NoteSlide>

    <NoteSlide title="句首的形容詞要形容主詞" mark="he">
      <NoteFix
        wrong="Tired and hungry, the food tasted great."
        right="Tired and hungry, we thought the food tasted great."
        fix="we thought"
      >
        累和餓的是我們，不是食物。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="句首的形容詞後面要加逗號" mark="friendly, he">
      <NoteFix
        wrong="Calm and patient she answered every question."
        right="Calm and patient, she answered every question."
        fix="patient,"
      />
    </NoteSlide>

    <NoteSlide title="名詞後面的形容詞前後都要加破折號" mark="Imaginative, good-humored, friendly">
      <NoteFix
        wrong="The old man – tired, cold and hungry sat down."
        right="The old man – tired, cold and hungry – sat down."
        fix="hungry – sat"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
