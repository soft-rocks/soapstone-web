<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-main-clause-main-clause, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="and、but、or 連接兩個主要子句" mark="but">
      <div class="rows is-labeled">
        <div>
          <span class="term">and：加上另一件事</span>
          <span
            ><NoteMark
              sentence="My father is a doctor and my mother is a teacher."
              :marks="['and']"
            /><span class="translation">我爸爸是醫生，我媽媽是老師。</span></span
          >
        </div>
        <div>
          <span class="term">but：不一樣的事</span>
          <span
            ><NoteMark sentence="I want to go out, but it's raining." :marks="['but']" /><span
              class="translation"
              >我想出門，但是在下雨。</span
            ></span
          >
        </div>
        <div>
          <span class="term">or：選一件</span>
          <span
            ><NoteMark
              sentence="The museum is two kilometres away. We can take the bus or we can walk."
              :marks="['or']"
            /><span class="translation">博物館在兩公里外。我們可以搭公車，或是走路。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="三個以上的子句用逗號隔開，最後加 and 或 or" mark="but">
      <NoteMark
        sentence="Everyone helps at home. My mother cooks, my father cleans and I wash the dishes."
        :marks="['and']"
      />
      <p class="translation">家裡每個人都會幫忙。我媽媽煮飯，我爸爸打掃，我洗碗。</p>
    </NoteSlide>

    <NoteSlide title="兩個主要子句要用連接詞連起來" mark="but">
      <NoteFix
        wrong="I like tea, I don't like coffee."
        right="I like tea, but I don't like coffee."
        fix="but"
      />
    </NoteSlide>

    <NoteSlide title="but 前面不再加 although" mark="but">
      <NoteFix
        wrong="Although the shop was closed, but the owner let us in."
        right="The shop was closed, but the owner let us in."
        fix="The shop was closed"
      />
    </NoteSlide>

    <NoteSlide title="每個主要子句都要有主詞" mark="I don't like">
      <NoteFix
        wrong="I want to go out, but is raining."
        right="I want to go out, but it's raining."
        fix="it's"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
