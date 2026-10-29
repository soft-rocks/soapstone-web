<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-with-adverbs-638, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + would + 副詞 + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The construction of such a centre', role: '主詞' },
          { t: 'would', kind: 'key', ring: true },
          { t: 'undoubtedly', role: '副詞' },
          { t: 'improve', role: '原形動詞' },
          { t: 'our quality of life.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="would undoubtedly / obviously、would significantly、would possibly">
      <div class="rows is-labeled">
        <div>
          <span class="term">would undoubtedly / obviously</span>
          <span>無疑會、顯然會。</span>
        </div>
        <div>
          <span class="term">would significantly</span>
          <span>會大大地。</span>
        </div>
        <div>
          <span class="term">would possibly</span>
          <span>可能會。</span>
        </div>
        <div>
          <span class="term">would eventually / inevitably</span>
          <span>最後會、必然會。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說影響的大小">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="This would significantly increase membership."
              :marks="['significantly']"
            /><span class="translation">這會大大增加會員人數。</span></span
          >
        </div>
      </div>
      <p class="remark">報告常用 significantly 說影響很大。</p>
    </NoteSlide>
    <NoteSlide title="說個人的看法">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I would personally choose the smaller school."
              :marks="['I would personally']"
            /><span class="translation">我個人會選比較小的學校。</span></span
          >
        </div>
      </div>
      <p class="remark">I would personally 強調這是自己的看法。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 would 和原形動詞中間" mark="would">
      <NoteFix
        wrong="This would increase significantly membership."
        right="This would significantly increase membership."
        :fix="['significantly', 'membership.']"
      />
    </NoteSlide>
    <NoteSlide title="放在動詞前面要用副詞">
      <NoteFix
        wrong="It would obvious help the town."
        right="It would obviously help the town."
        :fix="['obviously']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面接原形動詞" mark="would">
      <NoteFix
        wrong="The plan would eventually costs more."
        right="The plan would eventually cost more."
        :fix="['cost']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
