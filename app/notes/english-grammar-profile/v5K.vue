<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-it-be-adjective-infinitive-hedging, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + is / was + 形容詞 + to + 原形動詞" mark="to">
      <div class="rows is-labeled">
        <div>
          <span class="term">it</span>
          <span>形式主詞，指後面的 to 不定詞。</span>
        </div>
        <div>
          <span class="term">形容詞</span>
          <span>說話者的判斷。</span>
        </div>
        <div>
          <span class="term">to + 原形動詞</span>
          <span>被判斷的那件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="表示必要：語氣比較強">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It is necessary to improve their language skills."
              :marks="[]"
            /><span class="translation">他們必須加強語言能力。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="表示可能和不可能">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It was impossible to install the system." :marks="[]" /><span
              class="translation"
              >那個系統裝不起來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="表示難易：語氣比較委婉">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It might be better to wait until Monday."
              :marks="['might be']"
            /><span class="translation">也許等到星期一比較好。</span></span
          >
        </div>
      </div>
      <p class="remark">might be、may be 讓判斷更委婉。</p>
    </NoteSlide>
    <NoteSlide title="句子要有主詞">
      <NoteFix
        wrong="Is necessary to book a table."
        right="It is necessary to book a table."
        :fix="['It is']"
      />
    </NoteSlide>
    <NoteSlide title="形容詞後面接 to 和原形動詞" mark="to">
      <NoteFix
        wrong="It's essential do your homework."
        right="It's essential to do your homework."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="It was impossible to installing the system."
        right="It was impossible to install the system."
        :fix="['install']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
