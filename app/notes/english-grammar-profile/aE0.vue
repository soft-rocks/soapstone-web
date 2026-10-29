<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-expectations, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + should be + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The computer systems', role: '主詞' },
          { t: 'should be', kind: 'key', ring: true },
          { t: 'working', role: '-ing' },
          { t: 'again once you restart them.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="should be + -ing、-ing" mark="working">
      <div class="rows is-labeled">
        <div>
          <span class="term">should be + -&#x2060;ing</span>
          <span>預期某件事會正在發生。</span>
        </div>
        <div>
          <span class="term">-&#x2060;ing</span>
          <span>預期的動作或變化，像 working、improving、waiting、arriving。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說情況會改善">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Sales should be improving by the summer."
              :marks="['should be improving']"
            /><span class="translation">到夏天銷售額應該會好轉。</span></span
          >
        </div>
      </div>
      <p class="remark">報告常用 should be improving 說情況預期會變好。</p>
    </NoteSlide>
    <NoteSlide title="說安排好的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The driver should be waiting outside the airport."
              :marks="['should be waiting']"
            /><span class="translation">司機應該在機場外面等。</span></span
          >
        </div>
      </div>
      <p class="remark">should be waiting 說按照安排，某人應該在某處等。</p>
    </NoteSlide>
    <NoteSlide title="should be 後面接 -ing" mark="should be">
      <NoteFix
        wrong="The system should be work again soon."
        right="The system should be working again soon."
        :fix="['working']"
      />
    </NoteSlide>
    <NoteSlide title="should 和 -ing 中間要有 be" mark="should">
      <NoteFix
        wrong="The situation should improving."
        right="The situation should be improving."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="should 後面接原形 be" mark="should">
      <NoteFix
        wrong="They should are waiting for us."
        right="They should be waiting for us."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
