<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-be-adjective-that, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + is / was + obvious / likely / certain + that + 子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">obvious</span>
          <span>明顯的。</span>
        </div>
        <div>
          <span class="term">likely</span>
          <span>很可能的。</span>
        </div>
        <div>
          <span class="term">certain</span>
          <span>確定的。</span>
        </div>
        <div>
          <span class="term">sure</span>
          <span>確定。主詞常用人，像 I am sure。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="時態要一致" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark sentence="It is obvious that we will be late." :marks="['that']" /><span
              class="translation"
              >很明顯我們會遲到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark
              sentence="It was obvious that we would be late."
              :marks="['would', 'that']"
            /><span class="translation">那時很明顯我們會遲到。</span></span
          >
        </div>
      </div>
      <p class="remark">主要子句用過去式時，that 子句說以後的事用 would。</p>
    </NoteSlide>
    <NoteSlide title="句子要有主詞，這裡用形式主詞 it" mark="It">
      <NoteFix
        wrong="Was obvious that the bus wasn't coming."
        right="It was obvious that the bus wasn't coming."
        :fix="['It was']"
      />
    </NoteSlide>
    <NoteSlide title="主要子句是過去式，子句裡用 would" mark="would">
      <NoteFix
        wrong="It was obvious that I will be late."
        right="It was obvious that I would be late."
        :fix="['would']"
      />
    </NoteSlide>
    <NoteSlide title="sure 是形容詞，前面要有 be 動詞" mark="be">
      <NoteFix
        wrong="I sure that you will like it."
        right="I am sure that you will like it."
        :fix="['am']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
