<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-past-negative-deductions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + can't / cannot + have + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">can't / cannot have</span>
          <span>推斷過去某件事不可能發生過。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>不可能發生過的事。</span>
        </div>
        <div>
          <span class="term">have been + 動詞&#x2060;-&#x2060;ing</span>
          <span>不可能一直在進行的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="推斷的依據" mark="as">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We can't have used so much electricity. We were away for two weeks."
              :marks="[]"
            /><span class="translation">我們不可能用了那麼多電，我們有兩個星期不在家。</span></span
          >
        </div>
      </div>
      <p class="remark">推斷的依據常放在 as、because 後面，或放在前後的句子裡。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="He can't have forget my birthday."
        right="He can't have forgotten my birthday."
        :fix="['forgotten']"
      />
    </NoteSlide>
    <NoteSlide title="推斷過去的事，用 can't have 加過去分詞">
      <NoteFix
        wrong="She can't went home already."
        right="She can't have gone home already."
        :fix="['have gone']"
      />
    </NoteSlide>
    <NoteSlide title="cannot 後面接原形 have" mark="cannot">
      <NoteFix
        wrong="It cannot has been easy for her."
        right="It cannot have been easy for her."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
