<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-predictions-with-shall, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / we + shall + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', kind: 'key', ring: true },
          { t: 'hope we', kind: 'dim' },
          { t: 'shall', kind: 'key', ring: true },
          { t: 'meet', role: '原形動詞' },
          { t: 'in November.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="I / we、shall、原形動詞" mark="I hope">
      <div class="rows is-labeled">
        <div>
          <span class="term">I / we</span>
          <span>這個用法的 shall 只接這兩個主詞。</span>
        </div>
        <div>
          <span class="term">shall</span>
          <span>說話者認為未來會發生的事。意思和 will 相同，語氣比較正式。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>預測的內容。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="否定">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'm afraid we shall not arrive in time." :marks="[]" /><span
              class="translation"
              >恐怕我們沒辦法準時到。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="肯定句裡，probably 放在 shall 後面" mark="shall">
      <NoteFix
        wrong="We probably shall see them next week."
        right="We shall probably see them next week."
        :fix="['shall', 'see']"
      />
    </NoteSlide>
    <NoteSlide title="hope 後面接子句時，不加 to" mark="hope">
      <NoteFix
        wrong="I hope to we shall meet soon."
        right="I hope we shall meet soon."
        :fix="['we']"
      />
    </NoteSlide>
    <NoteSlide title="說一種狀態時，shall 後面接 be" mark="shall">
      <NoteFix wrong="I think we shall late." right="I think we shall be late." :fix="['be']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
