<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-concessions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I + must admit + (that) + 子句" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">I must admit</span>
          <span>我必須承認。承認和自己原本想法不同的事。</span>
        </div>
        <div>
          <span class="term">you must admit</span>
          <span>你必須承認。請對方接受一件事。</span>
        </div>
        <div>
          <span class="term">that 子句</span>
          <span>承認的事。that 可以省略。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="議論文的讓步">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You must admit that ready-made meals are not always healthy."
              :marks="['You must admit']"
            /><span class="translation">你必須承認，即食餐點不一定健康。</span></span
          >
        </div>
      </div>
      <p class="remark">議論文常用 you must admit 提出反方的論點。</p>
    </NoteSlide>
    <NoteSlide title="前面常加連接詞" mark="However,">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="On the other hand, I must admit it was fun."
              :marks="['On the other hand,']"
            /><span class="translation">另一方面，我必須承認那很好玩。</span></span
          >
        </div>
      </div>
      <p class="remark">這個說法常跟 however、on the other hand、but 一起用。</p>
    </NoteSlide>
    <NoteSlide title="admit 後面直接接 that 子句" mark="admit">
      <NoteFix
        wrong="I must admit to that I was wrong."
        right="I must admit that I was wrong."
        :fix="['that']"
      />
    </NoteSlide>
    <NoteSlide title="must 後面接原形動詞" mark="must">
      <NoteFix
        wrong="You must admitting that it's cheap."
        right="You must admit that it's cheap."
        :fix="['admit']"
      />
    </NoteSlide>
    <NoteSlide title="must 後面直接接原形動詞" mark="must">
      <NoteFix
        wrong="You've checked the map twice. I must to admit that your way is shorter."
        right="You've checked the map twice. I must admit that your way is shorter."
        :fix="['admit']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
