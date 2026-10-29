<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// ed-participle-clause, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="過去分詞子句放在句首，先說出比較的對象">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Compared', role: '過去分詞', kind: 'key' },
          { t: 'to the campsite job,', role: '介系詞片語' },
          { t: 'this one has its advantages.', role: '主要子句' },
        ]"
      />
      <p class="translation">跟營地的工作比起來，這份工作有它的好處。</p>
    </NoteSlide>

    <NoteSlide title="Based on、Given 和 Compared to 說依據、考慮和比較" mark="Compared">
      <div class="rows is-labeled">
        <div>
          <span class="term">Based on</span>
          <span
            ><NoteMark
              sentence="Based on these figures, we expect sales to grow next year."
              :marks="['Based on']"
            /><span class="translation">根據這些數字，我們預期明年的銷售會成長。</span></span
          >
        </div>
        <div>
          <span class="term">Given</span>
          <span
            ><NoteMark
              sentence="Given the weather, the match was cancelled."
              :marks="['Given']"
            /><span class="translation">考慮到天氣，比賽取消了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Located、Built、Written 說明主要子句的主詞，帶有被動的意思" mark="Compared">
      <div class="rows is-labeled">
        <div>
          <span class="term">Located in</span>
          <span
            ><NoteMark
              sentence="Located in the city center, the hotel is close to everything."
              :marks="['Located', 'the hotel']"
            /><span class="translation">這家飯店位於市中心，到哪裡都很近。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="和……比起來用 Compared to，不用動詞-ing" mark="Compared">
      <NoteFix
        wrong="Comparing to last year, prices are much higher."
        right="Compared to last year, prices are much higher."
        fix="Compared"
      />
    </NoteSlide>

    <NoteSlide title="過去分詞說明的對象要是主要子句的主詞">
      <NoteFix
        wrong="Built in 1890, I visited the old church."
        right="Built in 1890, the old church is the oldest building in town."
        fix="the old church"
      >
        <code>Built in 1890</code> 說明的是教堂。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="根據的意思是 Based on">
      <NoteFix
        wrong="Based the survey, most customers are happy."
        right="Based on the survey, most customers are happy."
        fix="on"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
