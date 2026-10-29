<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-with-adverbs-of-indefinite-frequency, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="always 放在主要動詞 make 前面">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'They', role: '主詞' },
          { t: 'always', role: '頻率副詞', kind: 'key', ring: true },
          { t: 'make', role: '主要動詞', kind: 'key' },
          { t: 'special things', role: '受詞', kind: 'dim' },
          { t: 'for their celebrations.', role: '目的', kind: 'dim' },
        ]"
      />
      <p class="translation">他們總是會為他們的慶祝活動做一些特別的東西。</p>
    </NoteSlide>
    <NoteSlide title="頻率副詞說一件事多常發生" mark="always">
      <div class="rows is-labeled">
        <div>
          <span class="term">always</span>
          <span>每次都</span>
        </div>
        <div>
          <span class="term">usually</span>
          <span>通常</span>
        </div>
        <div>
          <span class="term">often</span>
          <span>常常</span>
        </div>
        <div>
          <span class="term">sometimes</span>
          <span>有時候</span>
        </div>
        <div>
          <span class="term">rarely</span>
          <span>很少</span>
        </div>
        <div>
          <span class="term">never</span>
          <span>從來不</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="be 的句子，頻率副詞放在 be 後面" mark="always">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞</span>
          <span
            ><NoteMark sentence="I usually walk to school." :marks="['usually', 'walk']" /><span
              class="translation"
              >我通常走路上學。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be</span>
          <span
            ><NoteMark sentence="She is never late." :marks="['is', 'never']" /><span
              class="translation"
              >她從來不遲到。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="否定句放在 don't 後面，疑問句放在主詞後面" mark="always">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark sentence="I don't often eat meat." :marks="['don\'t', 'often']" /><span
              class="translation"
              >我不常吃肉。</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問</span>
          <span
            ><NoteMark sentence="Do you usually cook at home?" :marks="['you', 'usually']" /><span
              class="translation"
              >你通常在家煮飯嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="頻率副詞不放在主要動詞後面" mark="always">
      <NoteFix
        wrong="I eat always breakfast at seven."
        right="I always eat breakfast at seven."
        :fix="['always', 'eat']"
      />
    </NoteSlide>
    <NoteSlide title="be 的句子，頻率副詞不放在 be 前面" mark="always">
      <NoteFix
        wrong="He usually is tired after work."
        right="He is usually tired after work."
        :fix="['is', 'usually']"
      />
    </NoteSlide>
    <NoteSlide title="never 已經是否定，不加 don't" mark="always">
      <NoteFix wrong="I don't never drink coffee." right="I never drink coffee." :fix="['never']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
