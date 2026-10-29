<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-fixed-plans-with-will, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will + 原形動詞 + 時間或日期">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The work', role: '主詞' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'start', role: '原形動詞' },
          { t: 'at 8 a.m.', role: '時間或日期' },
          { t: 'and finish at 2 p.m.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will + 原形動詞、時間或日期" mark="at 8 a.m.">
      <div class="rows is-labeled">
        <div>
          <span class="term">will + 原形動詞</span>
          <span>排定的事。</span>
        </div>
        <div>
          <span class="term">時間或日期</span>
          <span>像 at 8 a.m.、on 1 June、from Monday to Friday。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="否定">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I won't be able to get there at the time we agreed."
              :marks="[]"
            /><span class="translation">我沒辦法在我們約好的時間到。</span></span
          >
        </div>
      </div>
      <p class="remark">說排定的事不會照原來的時間進行。</p>
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="will">
      <NoteFix
        wrong="The meeting will starting at ten."
        right="The meeting will start at ten."
        :fix="['start']"
      />
    </NoteSlide>
    <NoteSlide title="日期前面用 on">
      <NoteFix
        wrong="The course will begin in 3 May."
        right="The course will begin on 3 May."
        :fix="['on']"
      />
    </NoteSlide>
    <NoteSlide title="幾點幾分前面用 at" mark="at">
      <NoteFix
        wrong="The shop will close on 6 p.m. today."
        right="The shop will close at 6 p.m. today."
        :fix="['at']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
