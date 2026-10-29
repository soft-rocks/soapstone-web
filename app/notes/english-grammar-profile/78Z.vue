<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-may-well, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + may well + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'may well', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'that after leaving school they become our employees.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="may well、原形動詞" mark="may">
      <div class="rows is-labeled">
        <div>
          <span class="term">may well</span>
          <span>很有可能。比 may 更有把握。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>很可能發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="It may well be that" mark="It may well be that">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It may well be that the old method is better."
              :marks="['It may well be that']"
            /><span class="translation">很有可能舊的方法比較好。</span></span
          >
        </div>
      </div>
      <p class="remark">
        It may well be that 加子句，常用在報告和議論文，提出一個對方沒想到的可能。
      </p>
    </NoteSlide>
    <NoteSlide title="well 放在 may 後面" mark="well">
      <NoteFix wrong="They well may come." right="They may well come." :fix="['may', 'come.']" />
    </NoteSlide>
    <NoteSlide title="may well 後面直接接原形動詞" mark="may well">
      <NoteFix wrong="It may well to rain." right="It may well rain." :fix="['rain.']" />
    </NoteSlide>
    <NoteSlide title="這個說法用副詞 well，不用形容詞 good" mark="well">
      <NoteFix wrong="She may good be right." right="She may well be right." :fix="['well']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
