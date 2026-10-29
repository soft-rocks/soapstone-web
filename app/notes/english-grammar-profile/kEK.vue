<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-infinitive, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + going to + have to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">going to have to</span>
          <span>將來必須。</span>
        </div>
        <div>
          <span class="term">sorry to have to</span>
          <span>很抱歉必須。</span>
        </div>
        <div>
          <span class="term">hate to have to</span>
          <span>真不想得。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>必須做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="為什麼不用 must" mark="have to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I'm going to have to leave early."
              :marks="['have to', 'to']"
            /><span class="translation">我將必須提早離開。</span></span
          >
        </div>
      </div>
      <p class="remark">must 沒有不定詞形式，不能放在 to 後面。to 後面要用 have to。</p>
    </NoteSlide>
    <NoteSlide title="用在動詞後面" mark="to have to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I don't want to have to ask him again."
              :marks="['to have to', 'want']"
            /><span class="translation">我不想又得問他一次。</span></span
          >
        </div>
      </div>
      <p class="remark">want、need、expect 這類動詞後面也可以接 to have to。</p>
    </NoteSlide>
    <NoteSlide title="must 不能放在 to 後面" mark="have to">
      <NoteFix
        wrong="I'm going to must buy new curtains."
        right="I'm going to have to buy new curtains."
        :fix="['have to']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面要接 to 和原形動詞" mark="have">
      <NoteFix
        wrong="I'm sorry to have change the plan."
        right="I'm sorry to have to change the plan."
        :fix="['to#2']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形 have" mark="have">
      <NoteFix
        wrong="He doesn't want to has to move."
        right="He doesn't want to have to move."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
