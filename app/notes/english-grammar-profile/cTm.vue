<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-manner-modifying-verbs-119, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="情狀副詞可以放在動詞前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My smile', role: '主詞', kind: 'dim' },
          { t: 'slowly', role: '情狀副詞', kind: 'key' },
          { t: 'disappeared', role: '動詞' },
          { t: 'as I finished reading.', role: '時間子句', kind: 'dim' },
        ]"
      />
      <p class="translation">讀完的時候，我臉上的笑容慢慢消失了。</p>
    </NoteSlide>

    <NoteSlide title="情狀副詞最常放在動詞後面，有受詞就放在受詞後面" mark="slowly">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞後面</span>
          <span
            ><NoteMark
              sentence="You have to choose carefully."
              :marks="['choose carefully']"
            /><span class="translation">你得小心選。</span></span
          >
        </div>
        <div>
          <span class="term">受詞後面</span>
          <span
            ><NoteMark
              sentence="The doctor explained the results clearly."
              :marks="['the results clearly']"
            /><span class="translation">醫生把檢查結果解釋得很清楚。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="有助動詞時，情狀副詞放在助動詞和動詞中間" mark="slowly disappeared">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The weather', role: '主詞', kind: 'dim' },
          { t: 'will', role: '助動詞' },
          { t: 'gradually', role: '情狀副詞', kind: 'key' },
          { t: 'improve.', role: '動詞' },
        ]"
      />
      <p class="translation">天氣會漸漸好轉。</p>
    </NoteSlide>

    <NoteSlide title="fast、hard、well、late 只放在動詞後面">
      <NoteFix wrong="My brother well cooks." right="My brother cooks well." fix="cooks well." />
    </NoteSlide>

    <NoteSlide title="情狀副詞不放在動詞和受詞中間" mark="slowly">
      <NoteFix
        wrong="He answered politely the question."
        right="He answered the question politely."
        fix="the question politely."
      />
    </NoteSlide>

    <NoteSlide title="修飾動詞用副詞，不用形容詞">
      <NoteFix
        wrong="She looked at me serious."
        right="She looked at me seriously."
        fix="seriously."
      />
    </NoteSlide>

    <NoteSlide title="表示努力用 hard，hardly 是幾乎不">
      <NoteFix wrong="He works hardly every day." right="He works hard every day." fix="hard" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
