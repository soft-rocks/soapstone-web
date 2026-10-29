<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-use-with-adverbs-of-indefinite-frequency-861, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="頻率副詞放在 be 和動詞-ing 中間">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Scientists', role: '主詞' },
          { t: 'are', role: 'be' },
          { t: 'constantly', role: '副詞', kind: 'key', ring: true },
          { t: 'studying and reading', role: '動詞-ing', kind: 'key' },
          { t: 'books.', kind: 'dim' },
        ]"
      />
      <p class="translation">科學家總是不停地在做研究、看書。</p>
    </NoteSlide>
    <NoteSlide title="每個副詞說的頻率不一樣" mark="constantly">
      <div class="rows is-labeled">
        <div>
          <span class="term">constantly</span>
          <span
            ><NoteMark
              sentence="He's constantly checking his email."
              :marks="['constantly']"
            /><span class="translation">他一直在看 email。</span></span
          >
        </div>
        <div>
          <span class="term">continually</span>
          <span
            ><NoteMark
              sentence="The neighbours are continually complaining about the noise."
              :marks="['continually']"
            /><span class="translation">鄰居一再抱怨噪音。</span></span
          >
        </div>
        <div>
          <span class="term">continuously</span>
          <span
            ><NoteMark
              sentence="The machine is continuously recording the temperature."
              :marks="['continuously']"
            /><span class="translation">這台機器不間斷地記錄溫度。</span></span
          >
        </div>
        <div>
          <span class="term">forever</span>
          <span
            ><NoteMark sentence="She's forever losing her glasses." :marks="['forever']" /><span
              class="translation"
              >她老是弄丟眼鏡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="副詞放在 be 後面" mark="constantly">
      <NoteFix
        wrong="He constantly is changing his plans."
        right="He is constantly changing his plans."
        :fix="['is', 'constantly']"
      />
    </NoteSlide>
    <NoteSlide title="修飾動詞用副詞 constantly，不用形容詞" mark="constantly">
      <NoteFix
        wrong="She is constant asking for help."
        right="She is constantly asking for help."
        :fix="['constantly']"
      />
    </NoteSlide>
    <NoteSlide title="be + 副詞後面的動詞加 -ing" mark="studying">
      <NoteFix
        wrong="We are continually try new ideas."
        right="We are continually trying new ideas."
        :fix="['trying']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
