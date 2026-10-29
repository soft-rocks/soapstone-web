<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-with-by-the-time, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="By the time + 主詞 + 現在簡單式, 主詞 + will + 原形動詞" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">by the time</span>
          <span>到……的時候。後面接一個未來的時間點。</span>
        </div>
        <div>
          <span class="term">by the time 子句</span>
          <span>動詞用現在簡單式，不用 will。</span>
        </div>
        <div>
          <span class="term">will + 原形動詞</span>
          <span>到了那個時間點的狀態。</span>
        </div>
        <div>
          <span class="term">will have + 過去分詞</span>
          <span>到那個時間點之前已經完成的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="那個時間點的狀態">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="By the time we arrive, the shops will be closed."
              :marks="[]"
            /><span class="translation">等我們到的時候，店都關了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="那個時間點之前已經完成的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="By the time you read this, I will have left." :marks="[]" /><span
              class="translation"
              >等你讀到這封信的時候，我已經走了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="by the time 說未來的時間點時，後面用現在簡單式" mark="By the time">
      <NoteFix
        wrong="By the time he will get home, he will be tired."
        right="By the time he gets home, he will be tired."
        :fix="['gets']"
      />
    </NoteSlide>
    <NoteSlide title="在那個時間點之前已經完成的事，用 will have 加過去分詞">
      <NoteFix
        wrong="By the time we get there, the film will start already."
        right="By the time we get there, the film will have started."
        :fix="['have started.']"
      />
    </NoteSlide>
    <NoteSlide title="這個連接詞是 by the time，中間的 the 不能省略" mark="By the time">
      <NoteFix
        wrong="By time you arrive, I'll be asleep."
        right="By the time you arrive, I'll be asleep."
        :fix="['the']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
