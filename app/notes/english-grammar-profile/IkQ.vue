<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-inversion, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Not only + must + 主詞 + 原形動詞, but + 主詞 + must also + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">not only … but also</span>
          <span>不只……也……。</span>
        </div>
        <div>
          <span class="term">never</span>
          <span>絕對不可以。</span>
        </div>
        <div>
          <span class="term">nor</span>
          <span>也不可以。接在前一個否定的句子後面。</span>
        </div>
        <div>
          <span class="term">on no account / under no circumstances</span>
          <span>在任何情況下都不可以。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="一般的順序和倒裝">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般</span>
          <span
            ><NoteMark sentence="You must never forget this." :marks="[]" /><span
              class="translation"
              >你絕對不可以忘記這件事。</span
            ></span
          >
        </div>
        <div>
          <span class="term">倒裝</span>
          <span
            ><NoteMark sentence="Never must you forget this." :marks="[]" /><span
              class="translation"
              >這件事你絕對不可以忘記。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">倒裝的句子比一般的句子更強調，常用在演講和正式的寫作。</p>
    </NoteSlide>
    <NoteSlide title="nor 接在否定句後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We mustn't ignore the cost. Nor must we forget the risks."
              :marks="['Nor must we']"
            /><span class="translation">我們不可以忽略成本。我們也不可以忘記風險。</span></span
          >
        </div>
      </div>
      <p class="remark">Nor must we 接在另一個否定句後面，再加上一件不可以做的事。</p>
    </NoteSlide>
    <NoteSlide title="not only 放在句首時，must 放在主詞前面" mark="Not only">
      <NoteFix
        wrong="Not only you must study hard, but you must also rest."
        right="Not only must you study hard, but you must also rest."
        :fix="['must', 'study']"
      />
    </NoteSlide>
    <NoteSlide title="nor 放在句首時，must 放在主詞前面" mark="must">
      <NoteFix
        wrong="Nor we must forget our history."
        right="Nor must we forget our history."
        :fix="['must', 'forget']"
      />
    </NoteSlide>
    <NoteSlide title="倒裝直接把 must 移到主詞前面，不加 do" mark="must">
      <NoteFix
        wrong="Never do we must give up."
        right="Never must we give up."
        :fix="['must', 'give']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
