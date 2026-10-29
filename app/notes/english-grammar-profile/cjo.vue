<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-empty-it, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="虛主詞 it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', role: '虛主詞', kind: 'key' },
          { t: '\'s', role: 'be 動詞' },
          { t: 'warm and windy.', role: '天氣' },
        ]"
      />
      <p class="translation">天氣很暖和，風也很大。</p>
    </NoteSlide>

    <NoteSlide title="常見的用法" mark="It's">
      <div class="rows is-labeled">
        <div>
          <span class="term">天氣</span>
          <span
            ><NoteMark sentence="It's warm and windy." :marks="['It\'s']" /><span
              class="translation"
              >天氣很暖和，風也很大。</span
            ></span
          >
        </div>
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark sentence="It's three o'clock." :marks="['It\'s']" /><span class="translation"
              >現在三點。</span
            ></span
          >
        </div>
        <div>
          <span class="term">日期</span>
          <span
            ><NoteMark sentence="It's Monday today." :marks="['It\'s']" /><span class="translation"
              >今天星期一。</span
            ></span
          >
        </div>
        <div>
          <span class="term">距離</span>
          <span
            ><NoteMark sentence="It's two kilometres to the beach." :marks="['It\'s']" /><span
              class="translation"
              >到海邊有兩公里。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="英文句子要有主詞" mark="It's">
      <NoteFix wrong="Is very cold today." right="It's very cold today." fix="It's" />
    </NoteSlide>

    <NoteSlide title="rain 的主詞用 it" mark="It's">
      <NoteFix wrong="The weather is raining." right="It's raining." fix="It's" />
    </NoteSlide>

    <NoteSlide title="說時間用 it" mark="It's">
      <NoteFix wrong="This is ten o'clock now." right="It's ten o'clock now." fix="It's" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
