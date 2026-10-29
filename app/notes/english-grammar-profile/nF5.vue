<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-516, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + might not + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'might not', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'very fashionable, but that\'s the way I like it.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="might not、mightn't、原形動詞" mark="might not">
      <div class="rows is-labeled">
        <div>
          <span class="term">might not</span>
          <span>可能不。</span>
        </div>
        <div>
          <span class="term">mightn't</span>
          <span>might not 的縮寫，主要用在英式英文。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>可能不會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="先承認，再說自己的看法">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It might not be cheap, but it's good." :marks="[]" /><span
              class="translation"
              >它可能不便宜，可是很好。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">might not … but 常用來先承認一個缺點，再說自己的看法。</p>
    </NoteSlide>
    <NoteSlide title="寫作裡的小心說法" mark="might not">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="This might not be such a good idea." :marks="['might not']" /><span
              class="translation"
              >這可能不是什麼好主意。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">寫作常用 might not 讓看法聽起來不那麼肯定。</p>
    </NoteSlide>
    <NoteSlide title="might 的否定是 might not" mark="might not">
      <NoteFix wrong="I don't might go." right="I might not go." :fix="['might', 'not']" />
    </NoteSlide>
    <NoteSlide title="not 放在 might 後面" mark="might">
      <NoteFix wrong="He not might come." right="He might not come." :fix="['might', 'come.']" />
    </NoteSlide>
    <NoteSlide title="might not 後面直接接原形動詞" mark="might not">
      <NoteFix wrong="She might not to know." right="She might not know." :fix="['know.']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
