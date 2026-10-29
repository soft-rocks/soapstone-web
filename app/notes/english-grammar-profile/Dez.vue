<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-620, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + wouldn't + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'wouldn\'t', kind: 'key', ring: true },
          { t: 'believe', role: '原形動詞' },
          { t: 'how much they cost!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="wouldn't、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">wouldn't</span>
          <span>would not 的縮寫。不會。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>想像中不會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="You wouldn't believe" mark="You wouldn't believe">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You wouldn't believe how big their house is!"
              :marks="['You wouldn\'t believe']"
            /><span class="translation">你一定不敢相信他們的房子有多大！</span></span
          >
        </div>
      </div>
      <p class="remark">You wouldn't believe 加疑問詞子句，強調一件很讓人驚訝的事。</p>
    </NoteSlide>
    <NoteSlide title="說想像的情況">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I think we would not need much money." :marks="[]" /><span
              class="translation"
              >我想我們不會需要很多錢。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">I think we wouldn't 或 I don't think we would 說想像中的情況。</p>
    </NoteSlide>
    <NoteSlide title="would 的否定是 would not 或 wouldn't" mark="wouldn't">
      <NoteFix
        wrong="You don't would believe it."
        right="You wouldn't believe it."
        :fix="['wouldn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="wouldn't 後面直接接原形動詞" mark="wouldn't">
      <NoteFix wrong="We wouldn't to need a car." right="We wouldn't need a car." :fix="['need']" />
    </NoteSlide>
    <NoteSlide title="疑問詞後面的子句用直述句的順序">
      <NoteFix
        wrong="You wouldn't believe how much did they cost!"
        right="You wouldn't believe how much they cost!"
        :fix="['they']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
