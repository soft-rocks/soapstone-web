<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-ellipsis-590, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + should.">
      <div class="rows is-labeled">
        <div>
          <span class="term">should / shouldn't</span>
          <span>後面的動詞省略。</span>
        </div>
        <div>
          <span class="term">省略的部分</span>
          <span>前面已經說過，聽的人知道是什麼。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用在故事裡">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="He wanted to call her, but he knew he shouldn't."
              :marks="['he knew he shouldn\'t.']"
            /><span class="translation">他想打給她，可是他知道他不應該打。</span></span
          >
        </div>
      </div>
      <p class="remark">故事常用 he knew he shouldn't 寫人物心裡的掙扎。</p>
    </NoteSlide>
    <NoteSlide title="回答問題" mark="should.">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence='"Should I tell him?" "Yes, you should."'
              :marks="['Should I', 'Should']"
            /><span class="translation">「我該告訴他嗎？」「對，你應該說。」</span></span
          >
        </div>
      </div>
      <p class="remark">回答 Should I …？ 時，常只說 should 或 shouldn't。</p>
    </NoteSlide>
    <NoteSlide title="should 後面不接 to" mark="should.">
      <NoteFix wrong="I think you should to." right="I think you should." :fix="['should.']" />
    </NoteSlide>
    <NoteSlide title="用 should 問，就用 should 回答" mark="should.">
      <NoteFix
        wrong='"Should I go?" "Yes, you do."'
        right='"Should I go?" "Yes, you should."'
        :fix="['should.']"
      />
    </NoteSlide>
    <NoteSlide title="動詞省略以後，句子在 shouldn't 結束">
      <NoteFix
        wrong="He wanted to reply, but he knew he shouldn't it."
        right="He wanted to reply, but he knew he shouldn't."
        :fix="['shouldn\'t.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
