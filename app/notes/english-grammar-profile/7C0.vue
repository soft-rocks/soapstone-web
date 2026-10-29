<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-suggestions-with-shall, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Shall we + 原形動詞 ...?">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Shall we', kind: 'key', ring: true },
          { t: 'go', role: '原形動詞 ...' },
          { t: 'there together?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Shall we、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">Shall we</span>
          <span>建議對方和說話者一起做某件事。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>建議做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="wh- 疑問詞 + shall we">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="What time shall we leave?" :marks="[]" /><span class="translation"
              >我們幾點出發好？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">問對方的意見，一起決定細節。</p>
    </NoteSlide>
    <NoteSlide title="回答">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Yes, let's. / Good idea." :marks="[]" /><span class="translation"
              >好啊，走吧。／好主意。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="No, let's not. / I'd rather stay at home." :marks="[]" /><span
              class="translation"
              >還是不要吧。／我比較想待在家。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="shall 後面直接接原形動詞" mark="Shall">
      <NoteFix wrong="Shall we to have lunch?" right="Shall we have lunch?" :fix="['have']" />
    </NoteSlide>
    <NoteSlide title="建議一起做的事，主詞用 we" mark="we">
      <NoteFix
        wrong="Shall you come to the park with me?"
        right="Shall we go to the park?"
        :fix="['we go', 'park?']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面接原形動詞" mark="Shall">
      <NoteFix wrong="Shall we going home?" right="Shall we go home?" :fix="['go']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
