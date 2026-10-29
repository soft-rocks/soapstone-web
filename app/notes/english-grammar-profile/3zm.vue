<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-interrogative-adverb, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="副詞放在主詞和主要動詞中間" mark="you still remember">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Do', role: '助動詞', kind: 'dim' },
          { t: 'you', role: '主詞' },
          { t: 'usually', role: '副詞', kind: 'key', ring: true },
          { t: 'cycle', role: '主要動詞', kind: 'key' },
          { t: 'to the office?', kind: 'dim' },
        ]"
      />
      <p class="translation">你通常騎腳踏車去辦公室嗎？</p>
    </NoteSlide>

    <NoteSlide title="有疑問詞時，副詞的位置不變" mark="still">
      <NoteMark
        sentence="What kind of music do you usually listen to in the car?"
        :marks="['you usually listen']"
      />
      <p class="translation">你在車上通常聽哪一類的音樂？</p>
    </NoteSlide>

    <NoteSlide title="常見的句中副詞：ever、still、already" mark="still">
      <div class="rows is-labeled">
        <div>
          <span class="term">ever</span>
          <span
            ><NoteMark
              sentence="You've lived in Taipei for a month. Have you ever been to the night market in Shilin?"
              :marks="['you ever been']"
            /><span class="translation">你在台北住了一個月。你去過士林夜市嗎？</span></span
          >
        </div>
        <div>
          <span class="term">already</span>
          <span
            ><NoteMark
              sentence="It's Mum's birthday dinner. Have you already booked the restaurant for Friday?"
              :marks="['you already booked']"
            /><span class="translation"
              >那是媽媽的生日晚餐。你已經訂好星期五的餐廳了嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="副詞不放在句首" mark="Do you still">
      <NoteFix
        wrong="Ever have you been to Marseille?"
        right="Have you ever been to Marseille?"
        fix="you ever"
      />
    </NoteSlide>

    <NoteSlide title="still 不放在句尾" mark="still remember">
      <NoteFix
        wrong="Do you remember my name still?"
        right="Do you still remember my name?"
        fix="still remember"
      />
    </NoteSlide>

    <NoteSlide title="副詞放在主詞後面" mark="you still">
      <NoteFix
        wrong="Do usually you drink coffee after dinner?"
        right="Do you usually drink coffee after dinner?"
        fix="you usually"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
