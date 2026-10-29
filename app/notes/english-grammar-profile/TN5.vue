<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-use-invitation, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="come and + 原形動詞，邀請對方來做某件事" mark="Come and stay">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Come', role: '原形動詞', kind: 'key' },
          { t: 'and', role: 'and', kind: 'key', ring: true },
          { t: 'visit', role: '原形動詞', kind: 'key' },
          { t: 'us in the spring.', kind: 'dim' },
        ]"
      />
      <p class="translation">春天來看我們。</p>
    </NoteSlide>

    <NoteSlide title="邀請加入和提供東西也用祈使句" mark="Come">
      <div class="rows is-labeled">
        <div>
          <span class="term">邀請加入</span>
          <span
            ><NoteMark
              sentence="The whole team is going to the Thai place. Join us for lunch tomorrow."
              :marks="['Join us']"
            /><span class="translation"
              >整個團隊都要去那家泰國餐廳。明天跟我們一起吃午餐。</span
            ></span
          >
        </div>
        <div>
          <span class="term">提供東西</span>
          <span
            ><NoteMark
              sentence="Have a piece of cake. I made it this morning."
              :marks="['Have a piece']"
            /><span class="translation">吃塊蛋糕吧，我今天早上做的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="come 後面不直接接動詞-ing" mark="Come and stay">
      <NoteFix
        wrong="Come staying with us at the farm."
        right="Come and stay with us at the farm."
        fix="and stay"
      />
    </NoteSlide>

    <NoteSlide title="and 後面也用原形動詞" mark="stay">
      <NoteFix wrong="Come and sees our new house." right="Come and see our new house." fix="see" />
    </NoteSlide>

    <NoteSlide title="join 後面直接接人" mark="with us">
      <NoteFix wrong="Join with us for dinner." right="Join us for dinner." fix="Join us" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
