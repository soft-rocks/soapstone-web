<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-due-to-be-to-schedules, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are / was / were + due to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">be due to</span>
          <span>預定、照計畫會。</span>
        </div>
        <div>
          <span class="term">be to</span>
          <span>照安排要做。比較正式，常用在新聞、公告和商業信件。</span>
        </div>
        <div>
          <span class="term">過去式</span>
          <span>說過去的安排。這個安排有時候沒有實現。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="現在式：說未來的安排">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The new law is due to come into force in 2028." :marks="[]" /><span
              class="translation"
              >新法律預定在 2028 年生效。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The minister is to visit the school next week." :marks="[]" /><span
              class="translation"
              >部長下星期要訪問這間學校。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="過去式：說原本的安排">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The plane was due to land at six, but it was late."
              :marks="[]"
            /><span class="translation">飛機原定六點降落，可是誤點了。</span></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I was to take exams in two weeks." :marks="[]" /><span
              class="translation"
              >我兩個星期後要考試。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="due 後面要有 to，再接原形動詞" mark="due">
      <NoteFix
        wrong="The train is due arrive at ten."
        right="The train is due to arrive at ten."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="to 前面要有 be 動詞" mark="to">
      <NoteFix
        wrong="I to go on a business trip next week."
        right="I am to go on a business trip next week."
        :fix="['am']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="The show was due to starting at noon."
        right="The show was due to start at noon."
        :fix="['start']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
