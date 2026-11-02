<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-ellipsis-599, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="used to 後面省略前面說過的動詞" mark="to.">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She', role: '主詞', kind: 'dim' },
          { t: 'doesn\'t travel', role: '動詞', kind: 'key' },
          { t: 'as much as', kind: 'dim' },
          { t: 'she', role: '主詞', kind: 'dim' },
          { t: 'used to', role: 'used to', kind: 'key', ring: true },
          { t: 'travel.', role: '省略的動詞', kind: 'gone' },
        ]"
      />
      <p class="translation">她旅行沒有以前那麼多了。</p>
    </NoteSlide>
    <NoteSlide title="比較級 + than 的句子也在 used to 結束" mark="to.">
      <div class="rows is-labeled">
        <div>
          <span class="term">比較級 + than</span>
          <span
            ><NoteMark
              sentence="He reads much faster than he used to."
              :marks="['faster than', 'used to.']"
            /><span class="translation">他讀得比以前快多了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="any more, but 後面也在 used to 結束" mark="to.">
      <div class="rows is-labeled">
        <div>
          <span class="term">any more, but</span>
          <span
            ><NoteMark
              sentence="I don't smoke any more, but I used to."
              :marks="['any more, but', 'used to.']"
            /><span class="translation">我現在不抽菸了，可是我以前抽。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="回答問題時，答句在 used to 結束" mark="to.">
      <div class="rows is-labeled">
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Do you play the piano?" :marks="[]" /><span class="translation"
              >你彈鋼琴嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">答句</span>
          <span
            ><NoteMark sentence="Not now, but I used to." :marks="['used to.']" /><span
              class="translation"
              >現在不彈了，可是我以前彈。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="省略動詞的時候，to 要留下來" mark="to.">
      <NoteFix
        wrong="She doesn't travel as much as she used."
        right="She doesn't travel as much as she used to."
        :fix="['used to.']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面的動詞省略，不用 it 代替" mark="to.">
      <NoteFix
        wrong="He doesn't run as often as he used to it."
        right="He doesn't run as often as he used to."
        :fix="['to.']"
      />
    </NoteSlide>
    <NoteSlide title="肯定的子句寫成 used to" mark="used to.">
      <NoteFix
        wrong="I don't sing in the shower as much as I use to."
        right="I don't sing in the shower as much as I used to."
        :fix="['used']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
