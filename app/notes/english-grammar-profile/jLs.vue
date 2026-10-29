<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-future-arrangements-416, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + 動詞-ing + 未來的時間" mark="on Friday.">
      <div class="rows is-labeled">
        <div>
          <span class="term">am / is / are + 動詞&#x2060;-&#x2060;ing</span>
          <span>已經安排好的事。人、時間、地點常常都定好了。</span>
        </div>
        <div>
          <span class="term">未來的時間</span>
          <span>像 on Friday、on 5th January、next term。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="常用的動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We're throwing a party on 5th January." :marks="[]" /><span
              class="translation"
              >我們一月五日要辦派對。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說安排好的活動，常用這些動詞。</p>
    </NoteSlide>
    <NoteSlide title="join 後面直接接名詞，不加 to">
      <NoteFix
        wrong="She is joining to the course on Friday."
        right="She is joining the course on Friday."
        :fix="['the']"
      />
    </NoteSlide>
    <NoteSlide title="be 動詞後面接動詞-ing">
      <NoteFix
        wrong="They are hold a meeting next week."
        right="They are holding a meeting next week."
        :fix="['holding']"
      />
    </NoteSlide>
    <NoteSlide title="動詞-ing 前面要有 am、is 或 are" mark="is">
      <NoteFix
        wrong="The band releasing a new album in May."
        right="The band is releasing a new album in May."
        :fix="['is']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
