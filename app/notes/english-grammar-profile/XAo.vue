<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-use-summaries-and-evaluations, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="it 加情態動詞的被動，再接 that 子句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'it', role: '虛主詞' },
          { t: 'can', role: '情態動詞' },
          { t: 'be seen', role: 'be + 過去分詞', kind: 'key' },
          { t: 'that the bicycle is more suitable', role: 'that 子句', kind: 'dim' },
        ]"
      />
      <p class="translation">可以看出腳踏車比較適合。</p>
    </NoteSlide>

    <NoteSlide title="總結、建議、有保留的評估" mark="it can be seen that">
      <div class="rows is-labeled">
        <div>
          <span class="term">總結</span>
          <span
            ><NoteMark
              sentence="It can be seen that cycling is cheaper."
              :marks="['It can be seen that']"
            /><span class="translation">可以看出騎腳踏車比較便宜。</span></span
          >
        </div>
        <div>
          <span class="term">建議</span>
          <span
            ><NoteMark sentence="Something must be done about it." :marks="['must be done']" /><span
              class="translation"
              >必須想辦法處理。</span
            ></span
          >
        </div>
        <div>
          <span class="term">有保留</span>
          <span
            ><NoteMark
              sentence="It could be argued that cars are safer."
              :marks="['It could be argued that']"
            /><span class="translation">也有人會說汽車比較安全。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="句子要有虛主詞 it" mark="it">
      <NoteFix
        wrong="In conclusion, can be seen that the bicycle is better."
        right="In conclusion, it can be seen that the bicycle is better."
        fix="it"
      />
    </NoteSlide>

    <NoteSlide title="be 後面接過去分詞" mark="seen">
      <NoteFix
        wrong="It can be see that the bicycle is better."
        right="It can be seen that the bicycle is better."
        fix="seen"
      />
    </NoteSlide>

    <NoteSlide title="something 是被處理的事，用被動" mark="can be seen">
      <NoteFix
        wrong="Something must do about the dirty streets."
        right="Something must be done about the dirty streets."
        fix="be done"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
