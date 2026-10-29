<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-events-in-progress-856, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="getting 加比較級，說正在慢慢改變的事">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'It\'s June,', kind: 'dim' },
          { t: 'and', kind: 'dim' },
          { t: 'it\'s', role: '主詞 + be' },
          { t: 'getting', role: '動詞-ing', kind: 'key' },
          { t: 'warmer.', role: '比較級', kind: 'key' },
        ]"
      />
      <p class="translation">現在是六月，天氣越來越暖和了。</p>
    </NoteSlide>
    <NoteSlide title="get、become、grow 後面接比較級" mark="getting">
      <div class="rows is-labeled">
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark sentence="It's getting dark." :marks="['getting', 'dark']" /><span
              class="translation"
              >天色暗下來了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">become</span>
          <span
            ><NoteMark
              sentence="Life is becoming more expensive."
              :marks="['becoming', 'more', 'expensive']"
            /><span class="translation">生活越來越貴了。</span></span
          >
        </div>
        <div>
          <span class="term">grow</span>
          <span
            ><NoteMark
              sentence="The children are growing taller every year."
              :marks="['growing', 'taller']"
            /><span class="translation">孩子們一年比一年高。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="improve 本身有變化的意思，不接比較級" mark="getting">
      <div class="rows is-labeled">
        <div>
          <span class="term">improve</span>
          <span
            ><NoteMark sentence="Your English is improving." :marks="['improving']" /><span
              class="translation"
              >你的英文越來越好了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正在發生的變化用現在進行式" mark="getting">
      <NoteFix
        wrong="Look, it gets dark. Let's go home."
        right="Look, it's getting dark. Let's go home."
        :fix="['it\'s', 'getting']"
      />
    </NoteSlide>
    <NoteSlide title="越來越暖要重複比較級" mark="warmer">
      <NoteFix
        wrong="The weather is getting warm and warm."
        right="The weather is getting warmer and warmer."
        :fix="['warmer', 'warmer#2']"
      />
    </NoteSlide>
    <NoteSlide title="現在進行式要有 am、is 或 are" mark="getting">
      <NoteFix
        wrong="Prices going up every month."
        right="Prices are going up every month."
        :fix="['are']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
