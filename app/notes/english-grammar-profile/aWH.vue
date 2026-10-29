<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-after-if-clauses, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="If + 主詞 + 現在式, + I / we + shall + 原形動詞" mark="we">
      <div class="rows is-labeled">
        <div>
          <span class="term">if 子句</span>
          <span>條件，用現在式。</span>
        </div>
        <div>
          <span class="term">shall</span>
          <span>會。主要跟 I 和 we 一起用，比 will 正式。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>條件成立時會做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="警告">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If the bill is not paid, we shall cut off the electricity."
              :marks="[]"
            /><span class="translation">如果帳單沒付，我們會停止供電。</span></span
          >
        </div>
      </div>
      <p class="remark">正式的警告信常用 if … we shall 說會採取的行動。</p>
    </NoteSlide>
    <NoteSlide title="預測結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If we do nothing, we shall face serious problems."
              :marks="[]"
            /><span class="translation">如果我們什麼都不做，我們會面臨嚴重的問題。</span></span
          >
        </div>
      </div>
      <p class="remark">演講和議論文常用 if … we shall 說可能的結果。</p>
    </NoteSlide>
    <NoteSlide title="if 子句用現在式，不用 shall" mark="shall">
      <NoteFix
        wrong="If we shall not receive a reply, we shall go to court."
        right="If we do not receive a reply, we shall go to court."
        :fix="['do']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面直接接原形動詞" mark="shall">
      <NoteFix
        wrong="The sports day is on Friday. If it rains, we shall to hold it in the hall."
        right="The sports day is on Friday. If it rains, we shall hold it in the hall."
        :fix="['stay']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面接原形動詞" mark="shall">
      <NoteFix
        wrong="If prices rise, we shall having problems."
        right="If prices rise, we shall have problems."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
