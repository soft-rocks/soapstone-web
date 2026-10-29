<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-plans-and-intentions-608, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Will you + 原形動詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Will you</span>
          <span>你會……嗎？問對方的打算。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>對方可能會做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="問計畫的細節">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Will you come with any friends?" :marks="[]" /><span
              class="translation"
              >你會帶朋友一起來嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">問計畫時，常問交通、時間和一起來的人。</p>
    </NoteSlide>
    <NoteSlide title="和 Are you going to 比較" mark="Will you">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Are you going to come by bus?"
              :marks="['Are you going to']"
            /><span class="translation">你打算搭公車來嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞" mark="Will">
      <NoteFix wrong="Will you to come by train?" right="Will you come by train?" :fix="['come']" />
    </NoteSlide>
    <NoteSlide title="問句把 will 放在主詞前面" mark="Will">
      <NoteFix
        wrong="You will come with friends?"
        right="Will you come with friends?"
        :fix="['Will you']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="Will">
      <NoteFix
        wrong="Will you bringing your sister?"
        right="Will you bring your sister?"
        :fix="['bring']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
