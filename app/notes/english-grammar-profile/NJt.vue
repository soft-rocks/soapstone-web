<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-suggestions-570, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Shall we + 原形動詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Shall we</span>
          <span>我們要……嗎？我們……好嗎？</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>建議一起做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="先說情況，再建議" mark="Shall we">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It's a lovely day. Shall we eat outside?"
              :marks="['Shall we']"
            /><span class="translation">天氣很好。我們在外面吃好嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">常先說一個情況或消息，再用 Shall we …？ 建議。</p>
    </NoteSlide>
    <NoteSlide title="shall 後面直接接原形動詞" mark="Shall">
      <NoteFix
        wrong="The band is playing in Leeds on Friday. Shall we to go to the concert?"
        right="The band is playing in Leeds on Friday. Shall we go to the concert?"
        :fix="['go']"
      />
    </NoteSlide>
    <NoteSlide title="建議的問句把 shall 放在 we 前面" mark="Shall">
      <NoteFix
        wrong="There's nothing on TV tonight. We shall go to the cinema?"
        right="There's nothing on TV tonight. Shall we go to the cinema?"
        :fix="['Shall we']"
      />
    </NoteSlide>
    <NoteSlide title="主詞用 we，不用 us" mark="we">
      <NoteFix wrong="It's already eight o'clock. Shall us have dinner?" right="It's already eight o'clock. Shall we have dinner?" :fix="['we']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
