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
    <NoteSlide title="主詞 + 動詞 + as much / often + as + 主詞 + used to.">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She', role: '主詞' },
          { t: 'doesn\'t', role: '動詞' },
          { t: 'travel', kind: 'dim' },
          { t: 'as much', kind: 'key', ring: true },
          { t: 'as', kind: 'key', ring: true },
          { t: 'she', role: '主詞' },
          { t: 'used to.', role: 'used to.' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="used to、省略的動詞" mark="to.">
      <div class="rows is-labeled">
        <div>
          <span class="term">used to</span>
          <span>句子在 to 結束，後面的動詞省略。</span>
        </div>
        <div>
          <span class="term">省略的動詞</span>
          <span>前面已經說過，聽的人知道是什麼。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="to 要留下來" mark="to.">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I don't eat as much as I used to." :marks="['to.']" /><span
              class="translation"
              >我吃得沒有以前多。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">省略的時候，to 要留下來。</p>
    </NoteSlide>
    <NoteSlide title="比較過去和現在">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="They sound much better than they used to." :marks="[]" /><span
              class="translation"
              >他們聽起來比以前好多了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這個句型常用來比較過去和現在。</p>
    </NoteSlide>
    <NoteSlide title="省略動詞的時候，to 要留下來" mark="to.">
      <NoteFix
        wrong="She doesn't travel as much as she used."
        right="She doesn't travel as much as she used to."
        :fix="['used to.']"
      />
    </NoteSlide>
    <NoteSlide title="省略的動詞不用 do it 代替">
      <NoteFix
        wrong="He doesn't run as often as he used to do it."
        right="He doesn't run as often as he used to."
        :fix="['to.']"
      />
    </NoteSlide>
    <NoteSlide title="肯定的子句寫成 used to" mark="used to.">
      <NoteFix
        wrong="I don't sing as much as I use to."
        right="I don't sing as much as I used to."
        :fix="['used']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
