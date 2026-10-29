<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-negative-interrogative, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定疑問句表示驚訝、希望對方同意或提醒" mark="Don't you">
      <div class="rows is-labeled">
        <div>
          <span class="term">驚訝</span>
          <span
            ><NoteMark
              sentence="Don't you recognize me? I used to live next door."
              :marks="['Don\'t you']"
            /><span class="translation">你認不出我嗎？我以前住你隔壁。</span></span
          >
        </div>
        <div>
          <span class="term">希望對方同意</span>
          <span
            ><NoteMark
              sentence="Look at that blue sky. Isn't it a beautiful day?"
              :marks="['Isn\'t']"
            /><span class="translation">你看那片藍天。今天天氣不是很好嗎？</span></span
          >
        </div>
        <div>
          <span class="term">提醒</span>
          <span
            ><NoteMark
              sentence="I passed my driving test. Didn't I tell you?"
              :marks="['Didn\'t I']"
            /><span class="translation">我考過駕照了，我沒跟你說嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="回答看事實，不看問題是否定" mark="like">
      <NoteMark
        sentence="A: Don't you drink coffee? B: Yes, I do. Just not at night."
        :marks="['Yes, I do']"
      />
      <p class="translation">A：你不喝咖啡嗎？B：喝啊，只是晚上不喝。</p>
    </NoteSlide>

    <NoteSlide title="n't 跟著助動詞放在句首" mark="Don't">
      <NoteFix wrong="Not you like pizza?" right="Don't you like pizza?" fix="Don't" />
    </NoteSlide>

    <NoteSlide title="doesn't 後面用原形動詞" mark="like">
      <NoteFix wrong="Doesn't she speaks French?" right="Doesn't she speak French?" fix="speak" />
    </NoteSlide>

    <NoteSlide title="餓就說 Yes，回答看事實" mark="you">
      <NoteFix
        wrong="A: Aren't you hungry? B: No, I am."
        right="A: Aren't you hungry? B: Yes, I am."
        fix="Yes"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
