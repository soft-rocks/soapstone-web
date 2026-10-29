<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-set-to-assertion, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + set to + 原形動詞" mark="increase">
      <div class="rows is-labeled">
        <div>
          <span class="term">be set to</span>
          <span>預計會、勢必會。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>預計發生的變化，常用 increase、rise、fall、grow、become、continue。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="常用在新聞和報告">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Rents in the city centre are set to climb by ten per cent."
              :marks="[]"
            /><span class="translation">市中心的房租預計會上漲百分之十。</span></span
          >
        </div>
      </div>
      <p class="remark">新聞標題和報告常用 be set to 預測數字和趨勢。</p>
    </NoteSlide>
    <NoteSlide title="說即將發生的事件">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The new president is set to take office in January."
              :marks="[]"
            /><span class="translation">新總統預定一月就職。</span></span
          >
        </div>
      </div>
      <p class="remark">be set to 也說已經準備好、即將發生的事。</p>
    </NoteSlide>
    <NoteSlide title="set 的過去分詞還是 set" mark="set">
      <NoteFix wrong="Prices are setted to rise." right="Prices are set to rise." :fix="['set']" />
    </NoteSlide>
    <NoteSlide title="set 前面要有 be 動詞" mark="set">
      <NoteFix
        wrong="The population set to fall by 2050."
        right="The population is set to fall by 2050."
        :fix="['is']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="Our sales are set to growing next year."
        right="Our sales are set to grow next year."
        :fix="['grow']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
