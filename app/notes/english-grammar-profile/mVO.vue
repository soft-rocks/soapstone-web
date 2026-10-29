<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-ours-as-object, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="ours 等於 our 加名詞，當動詞的受詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Can we rent windsurf boards, or should we', kind: 'dim' },
          { t: 'bring', role: '動詞' },
          { t: 'ours', role: '= our windsurf boards', kind: 'key' },
          { t: 'with us?', kind: 'dim' },
        ]"
      />
      <p class="translation">我們可以租風浪板嗎？還是我們該帶自己的去？</p>
    </NoteSlide>

    <NoteSlide title="ours 放在動詞、be 或介系詞後面" mark="ours">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞後面</span>
          <span
            ><NoteMark
              sentence="They lost their map, so we gave them ours."
              :marks="['ours.']"
            /><span class="translation">他們的地圖弄丟了，所以我們把我們的給他們。</span></span
          >
        </div>
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark sentence="The white house on the hill is ours." :marks="['ours.']" /><span
              class="translation"
              >山丘上那棟白色的房子是我們的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">介系詞後面</span>
          <span
            ><NoteMark
              sentence="A big road shouldn't run through a small town like ours."
              :marks="['like ours.']"
            /><span class="translation">大馬路不應該穿過像我們這樣的小鎮。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as if 子句裡也可以用 ours" mark="ours">
      <div class="rows is-labeled">
        <div>
          <span class="term">as if</span>
          <span
            ><NoteMark
              sentence="We looked after the puppy as if it were ours."
              :marks="['as if it were ours.']"
            /><span class="translation">我們照顧那隻小狗，就好像牠是我們自己的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="ours 沒有撇號" mark="ours">
      <NoteFix wrong="The blue tent is our's." right="The blue tent is ours." fix="ours." />
    </NoteSlide>

    <NoteSlide title="比較的是花園，用 ours，不用 us" mark="ours">
      <NoteFix
        wrong="Their garden is bigger than us."
        right="Their garden is bigger than ours."
        fix="ours."
      />
    </NoteSlide>

    <NoteSlide title="名詞前面用 our，ours 後面不接名詞">
      <NoteFix wrong="This is ours car." right="This is our car." fix="our" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
