<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-with-adverbs-534, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + must + 副詞 + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'must', kind: 'key', ring: true },
          { t: 'also', role: '副詞' },
          { t: 'do', role: '原形動詞' },
          { t: 'the practice test because I will have the exam soon.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="must also、must always、must never">
      <div class="rows is-labeled">
        <div>
          <span class="term">must also</span>
          <span>也必須。</span>
        </div>
        <div>
          <span class="term">must always</span>
          <span>一定要一直、每次都必須。</span>
        </div>
        <div>
          <span class="term">must never</span>
          <span>絕對不可以。</span>
        </div>
        <div>
          <span class="term">must first</span>
          <span>必須先。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="副詞的位置" mark="must">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You must always check the time." :marks="['must']" /><span
              class="translation"
              >你每次都必須確認時間。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">副詞放在 must 後面，不放在 must 前面。</p>
    </NoteSlide>
    <NoteSlide title="must never 和 mustn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You must never tell anyone." :marks="['must never']" /><span
              class="translation"
              >你絕對不可以告訴任何人。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">must never 比 mustn't 更強調，意思是「絕對不可以、永遠不可以」。</p>
    </NoteSlide>
    <NoteSlide title="also 放在 must 和原形動詞中間" mark="also">
      <NoteFix
        wrong="I must do also my homework."
        right="I must also do my homework."
        :fix="['also', 'my']"
      />
    </NoteSlide>
    <NoteSlide title="副詞後面直接接原形動詞">
      <NoteFix
        wrong="You must always to wear a helmet."
        right="You must always wear a helmet."
        :fix="['wear']"
      />
    </NoteSlide>
    <NoteSlide title="must 後面接原形動詞" mark="must">
      <NoteFix
        wrong="She must never leaves the door open."
        right="She must never leave the door open."
        :fix="['leave']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
