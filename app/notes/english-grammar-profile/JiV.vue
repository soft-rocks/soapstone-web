<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-polite-criticism, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Might I suggest + (that) + 子句？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Might I suggest</span>
          <span>我可以建議……嗎？</span>
        </div>
        <div>
          <span class="term">Might it not be wise / better</span>
          <span>……難道不是比較明智／比較好嗎？</span>
        </div>
        <div>
          <span class="term">子句或不定詞</span>
          <span>建議的內容。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正式的信件">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Might I suggest that you arrange better seats?" :marks="[]" /><span
              class="translation"
              >我可以建議您安排更好的座位嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這個說法很正式。常用在寫給主管、主辦單位或公司的信。</p>
    </NoteSlide>
    <NoteSlide title="suggest 後面接 -ing 或 that 子句，不接 to" mark="suggest">
      <NoteFix
        wrong="Might I suggest to change the date?"
        right="Might I suggest changing the date?"
        :fix="['changing']"
      />
    </NoteSlide>
    <NoteSlide title="沒有縮寫的時候，not 放在 it 後面">
      <NoteFix
        wrong="Might not it be wise to wait?"
        right="Might it not be wise to wait?"
        :fix="['it', 'be']"
      />
    </NoteSlide>
    <NoteSlide title="suggest 後面接 that 子句，不接 you to" mark="suggest">
      <NoteFix
        wrong="Might I suggest you to book early?"
        right="Might I suggest that you book early?"
        :fix="['that', 'book']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
