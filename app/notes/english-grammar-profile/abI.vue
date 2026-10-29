<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-passive, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + can be + 過去分詞 + (that) + 子句" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">it</span>
          <span>形式主詞，指後面的 that 子句。</span>
        </div>
        <div>
          <span class="term">can be + 過去分詞</span>
          <span>被動語態，表示「可以這樣說、這樣看」。</span>
        </div>
        <div>
          <span class="term">that 子句</span>
          <span>作者的看法或結論。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="被動語態是 can be 加過去分詞" mark="can be">
      <NoteFix
        wrong="It can concluded that the plan works."
        right="It can be concluded that the plan works."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="be 後面接過去分詞" mark="be">
      <NoteFix
        wrong="It can be say that prices are too high."
        right="It can be said that prices are too high."
        :fix="['said']"
      />
    </NoteSlide>
    <NoteSlide title="句子要有主詞" mark="it">
      <NoteFix
        wrong="Can be argued that the company should change."
        right="It can be argued that the company should change."
        :fix="['It can']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
