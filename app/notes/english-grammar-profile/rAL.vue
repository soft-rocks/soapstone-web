<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-negative-questions-modal-verbs, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Wouldn't you like 是熱情的邀請">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Wouldn\'t', role: '情態動詞 + n\'t', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'like to come?', role: 'like + to + 原形動詞' },
        ]"
      />
      <p class="translation">你不想來嗎？</p>
    </NoteSlide>

    <NoteSlide title="Won't you 邀請，Can't you 不耐煩，Shouldn't we 覺得應該" mark="Wouldn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">Won't you</span>
          <span
            ><NoteMark sentence="Won't you come with us?" :marks="['Won\'t']" /><span
              class="translation"
              >你不跟我們一起來嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Can't you</span>
          <span
            ><NoteMark sentence="Can't you make both?" :marks="['Can\'t']" /><span
              class="translation"
              >你不能兩個都做嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Shouldn't we</span>
          <span
            ><NoteMark sentence="Shouldn't we call first?" :marks="['Shouldn\'t']" /><span
              class="translation"
              >我們不是應該先打電話嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Couldn't we 委婉地提出另一個做法" mark="Wouldn't">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Couldn\'t we', role: '委婉', kind: 'key' },
          { t: 'take a taxi?', role: '另一個做法' },
        ]"
      />
      <p class="translation">我們不能搭計程車嗎？</p>
    </NoteSlide>

    <NoteSlide title="n't 和情態動詞連在一起" mark="Wouldn't">
      <NoteFix
        wrong="Would you n't like some cake?"
        right="Wouldn't you like some cake?"
        fix="Wouldn't"
      />
    </NoteSlide>

    <NoteSlide title="will not 縮寫成 won't" mark="Wouldn't">
      <NoteFix wrong="Willn't you stay?" right="Won't you stay?" fix="Won't" />
    </NoteSlide>

    <NoteSlide title="情態動詞的否定不用 don't" mark="Wouldn't">
      <NoteFix wrong="Don't you can help me?" right="Can't you help me?" fix="Can't" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
