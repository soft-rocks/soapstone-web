<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-conditions, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Provided 引出條件，意思是只要">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Provided', role: '只要', kind: 'key' },
          { t: 'the weather is fine,', role: '條件子句' },
          { t: 'you could go swimming or take a tour of our beautiful town.', role: '主要子句' },
        ]"
      />
      <p class="translation">只要天氣好，你可以去游泳，或是參觀一下我們美麗的小鎮。</p>
      <p class="remark">說未來的條件，子句用現在式 <code>is</code>。</p>
    </NoteSlide>

    <NoteSlide title="unless 的意思是除非，等於 if ... not" mark="Provided">
      <div class="rows is-labeled">
        <div>
          <span class="term">unless</span>
          <span
            ><NoteMark
              sentence="We'll eat outside unless it gets too cold."
              :marks="['unless']"
            /><span class="translation">我們會在外面吃，除非天氣變得太冷。</span></span
          >
        </div>
        <div>
          <span class="term">= if not</span>
          <span
            ><NoteMark
              sentence="You won't get a seat unless you book early."
              :marks="['unless']"
            /><span class="translation">除非你早點訂，不然不會有位子。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="provided that 比較正式，as long as 比較口語" mark="Provided">
      <div class="rows is-labeled">
        <div>
          <span class="term">provided that</span>
          <span
            ><NoteMark
              sentence="You can borrow my car provided that you bring it back by six."
              :marks="['provided that']"
            /><span class="translation">只要你六點前還回來，就可以借我的車。</span></span
          >
        </div>
        <div>
          <span class="term">as long as</span>
          <span
            ><NoteMark
              sentence="I don't mind where we eat as long as it's not too expensive."
              :marks="['as long as']"
            /><span class="translation">只要不太貴，我不在乎去哪裡吃。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="unless 已經有否定的意思，不再加 not">
      <NoteFix
        wrong="I'll go to the beach unless it doesn't rain."
        right="I'll go to the beach unless it rains."
        fix="rains."
      />
    </NoteSlide>

    <NoteSlide title="說未來的條件，子句用現在式" mark="is">
      <NoteFix
        wrong="You can stay provided you will keep quiet."
        right="You can stay provided you keep quiet."
        fix="keep"
      />
    </NoteSlide>

    <NoteSlide title="連接詞是 as long as">
      <NoteFix
        wrong="You can watch TV as long you do your homework first."
        right="You can watch TV as long as you do your homework first."
        fix="as long as"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
