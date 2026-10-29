<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-question-tags, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + should + 原形動詞 + …, shouldn't + 代名詞？" mark="shouldn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面的句子</span>
          <span>肯定句，用 should。</span>
        </div>
        <div>
          <span class="term">附加問句</span>
          <span>用否定的 shouldn't 加代名詞。</span>
        </div>
        <div>
          <span class="term">代名詞</span>
          <span>跟前面的主詞一樣，像 we、I、you。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="問意見">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I should call her, shouldn't I?" :marks="[]" /><span
              class="translation"
              >我應該打給她，對吧？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">I should …, shouldn't I? 用來問對方，自己的想法對不對。</p>
    </NoteSlide>
    <NoteSlide title="附加問句的代名詞用主格 we" mark="we">
      <NoteFix
        wrong="We should go, shouldn't us?"
        right="We should go, shouldn't we?#2"
        :fix="['we?']"
      />
    </NoteSlide>
    <NoteSlide title="附加問句用代名詞">
      <NoteFix
        wrong="Tom should come, shouldn't Tom?"
        right="Tom should come, shouldn't he?"
        :fix="['he?']"
      />
    </NoteSlide>
    <NoteSlide title="附加問句重複 should，不用 do" mark="should">
      <NoteFix
        wrong="I should write about our history, don't I?"
        right="I should write about our history, shouldn't I?"
        :fix="['shouldn\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
