<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-the-one-s-that-for, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="The one that + 子句當主詞" mark="The one that impressed me most">
      <NoteWords
        :size="18"
        :parts="[
          { t: 'The one that impressed me most', role: '主詞', kind: 'key' },
          { t: 'was', role: 'be 動詞' },
          { t: 'the Chinese New Year Carnival', role: '重點', kind: 'key' },
        ]"
      />
      <p class="translation">讓我印象最深的，是香港的農曆新年嘉年華。</p>
    </NoteSlide>

    <NoteSlide title="that 當主詞不能省略，當受詞可以省略" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">當主詞</span>
          <span
            ><NoteMark
              sentence="The one that won the prize was a small French film."
              :marks="['that won']"
            /><span class="translation">得獎的是一部法國小片。</span></span
          >
        </div>
        <div>
          <span class="term">當受詞</span>
          <span
            ><NoteMark
              sentence="The one I really wanted was the red one."
              :marks="['The one I']"
            /><span class="translation">我真正想要的是紅色那個。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the one 用單數，the ones 用複數" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">the one</span>
          <span
            ><NoteMark
              sentence="The one that I remember best is our first holiday together."
              :marks="['is']"
            /><span class="translation">我記得最清楚的是我們第一次一起去度假。</span></span
          >
        </div>
        <div>
          <span class="term">the ones</span>
          <span
            ><NoteMark
              sentence="The ones that sold out first were the cheapest seats."
              :marks="['were']"
            /><span class="translation">最先賣光的是最便宜的位子。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the ones 用複數動詞">
      <NoteFix
        wrong="The ones that I liked best was the little shops by the harbour."
        right="The ones that I liked best were the little shops by the harbour."
        fix="were"
      />
    </NoteSlide>

    <NoteSlide title="當主詞的 that 不能省略" mark="that">
      <NoteFix
        wrong="The one surprised me most was the price."
        right="The one that surprised me most was the price."
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="子句裡不再加 it">
      <NoteFix
        wrong="The one that I enjoyed it most was the boat trip."
        right="The one that I enjoyed most was the boat trip."
        fix="enjoyed most"
      />
    </NoteSlide>

    <NoteSlide title="指人用 who，不用 what">
      <NoteFix
        wrong="The one what helped me most was my teacher."
        right="The one who helped me most was my teacher."
        fix="who"
      />
    </NoteSlide>

    <NoteSlide title="what 開頭的句子">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'What impressed me most', role: '主詞', kind: 'key' },
          { t: 'was', kind: 'dim' },
          { t: 'the music.', role: '重點', kind: 'key' },
        ]"
      />
      <p class="translation">讓我印象最深的是音樂。</p>
    </NoteSlide>

    <NoteSlide title="it 分裂句：重點放在前面">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It was', kind: 'dim' },
          { t: 'the carnival', role: '重點', kind: 'key' },
          { t: 'that impressed me most.', role: 'that 子句' },
        ]"
      />
      <p class="translation">讓我印象最深的是那個嘉年華。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
