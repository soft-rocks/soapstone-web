<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-use-negative-questons-suggestions, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Why don't we 提議大家一起做一件事">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Why don\'t', role: 'Why don\'t', kind: 'key' },
          { t: 'we', role: '主詞', kind: 'key' },
          { t: 'watch', role: '原形動詞' },
          { t: 'a film?', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我們何不看部電影？</p>
    </NoteSlide>

    <NoteSlide title="Why don't you 建議或邀請對方，Why don't I 主動幫忙" mark="we">
      <div class="rows is-labeled">
        <div>
          <span class="term">Why don't you</span>
          <span
            ><NoteMark sentence="Why don't you come with me?" :marks="['you']" /><span
              class="translation"
              >你何不跟我一起去？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Why don't I</span>
          <span
            ><NoteMark sentence="Why don't I make the dinner tonight?" :marks="['I']" /><span
              class="translation"
              >今晚何不讓我來煮晚餐？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Why not</span>
          <span
            ><NoteMark sentence="Why not take a day off?" :marks="['Why not']" /><span
              class="translation"
              >何不請一天假？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說平常的習慣是問原因，說接下來的事是邀請" mark="Why don't">
      <div class="rows is-labeled">
        <div>
          <span class="term">問原因</span>
          <span
            ><NoteMark sentence="Why don't you eat meat?" :marks="['eat meat']" /><span
              class="translation"
              >你為什麼不吃肉？</span
            ></span
          >
        </div>
        <div>
          <span class="term">邀請</span>
          <span
            ><NoteMark
              sentence="Why don't you eat with us tonight?"
              :marks="['with us tonight']"
            /><span class="translation">你今晚何不跟我們一起吃飯？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="don't 後面不加 to" mark="watch">
      <NoteFix
        wrong="Why don't we to go to the beach?"
        right="Why don't we go to the beach?"
        fix="go"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 we 時用 don't" mark="Why don't">
      <NoteFix
        wrong="Why doesn't we order a pizza?"
        right="Why don't we order a pizza?"
        fix="don't"
      />
    </NoteSlide>

    <NoteSlide title="don't 後面用原形動詞，不用 -ing" mark="watch">
      <NoteFix
        wrong="Why don't you trying the blue one?"
        right="Why don't you try the blue one?"
        fix="try"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
