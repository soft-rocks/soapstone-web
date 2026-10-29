<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-timetables-and-plans, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 現在簡單式 + 時間" mark="at 8 o'clock">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span>有固定時刻表的事，像 the film、the class、the train、the shop。</span>
        </div>
        <div>
          <span class="term">現在簡單式</span>
          <span>主詞是單數時，動詞加 -&#x2060;s。</span>
        </div>
        <div>
          <span class="term">時間</span>
          <span>像 at 8 o'clock、on Monday、tomorrow。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="問時刻表">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="What time does the train leave?" :marks="[]" /><span
              class="translation"
              >火車幾點開？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="主詞是單數，現在簡單式的動詞加 -s">
      <NoteFix
        wrong="The film begin at eight."
        right="The film begins at eight."
        :fix="['begins']"
      />
    </NoteSlide>
    <NoteSlide title="鐘點前面用 at" mark="at">
      <NoteFix
        wrong="It begins on 8 o'clock in the evening."
        right="It begins at 8 o'clock in the evening."
        :fix="['at']"
      />
    </NoteSlide>
    <NoteSlide title="does 後面接原形動詞">
      <NoteFix
        wrong="What time does the bus leaves?"
        right="What time does the bus leave?"
        :fix="['leave?']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
