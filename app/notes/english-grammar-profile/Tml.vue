<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-likelihood, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + ought to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">ought to</span>
          <span>應該會。根據情況推論。</span>
        </div>
        <div>
          <span class="term">ought not to</span>
          <span>應該不會。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>推論的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="義務和可能性">
      <div class="rows is-labeled">
        <div>
          <span class="term">義務</span>
          <span
            ><NoteMark sentence="It's your grandmother's birthday. You ought to call her." :marks="['ought to']" /><span
              class="translation"
              >今天是你奶奶的生日。你應該打給她。</span
            ></span
          >
        </div>
        <div>
          <span class="term">可能性</span>
          <span
            ><NoteMark sentence="The train left the last station five minutes ago. It ought to be here soon." :marks="['ought to']" /><span
              class="translation"
              >火車五分鐘前從上一站開出。它應該很快就會到。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">ought to 可以說義務，也可以說可能性。</p>
    </NoteSlide>
    <NoteSlide title="說產品或計畫應有的效果">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The new software does the monthly figures by itself. It ought to save us time." :marks="['ought to']" /><span
              class="translation"
              >新軟體會自己算每個月的數字。它應該能幫我們節省時間。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">報告常用 ought to 說一個東西應該能帶來的效果。</p>
    </NoteSlide>
    <NoteSlide title="not 放在 ought 後面" mark="ought">
      <NoteFix
        wrong="You've just had two sandwiches. You not ought to be hungry."
        right="You've just had two sandwiches. You ought not to be hungry."
        :fix="['ought', 'to']"
      />
    </NoteSlide>
    <NoteSlide title="ought 後面要接 to" mark="ought">
      <NoteFix
        wrong="It's ten past nine. The bus ought arrive soon."
        right="It's ten past nine. The bus ought to arrive soon."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix wrong="We've done this test before. It ought to being easy." right="We've done this test before. It ought to be easy." :fix="['be']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
