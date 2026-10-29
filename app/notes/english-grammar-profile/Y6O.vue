<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-negative-wh-interrogative, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="疑問詞 + 助動詞加 n't + 主詞" mark="Why didn't you">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Why', role: '疑問詞', kind: 'key' },
          { t: 'didn\'t', role: '助動詞 + n\'t', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'answer', role: '原形動詞' },
          { t: 'the door last night?', kind: 'dim' },
        ]"
      />
      <p class="translation">你昨晚為什麼沒來應門？</p>
    </NoteSlide>

    <NoteSlide title="Why don't we / you ...? 是提出建議" mark="Why">
      <div class="rows is-labeled">
        <div>
          <span class="term">Why don't we</span>
          <span
            ><NoteMark
              sentence="Why don't we eat outside? It's a lovely day."
              :marks="['Why don\'t we']"
            /><span class="translation">我們何不在外面吃？天氣很好。</span></span
          >
        </div>
        <div>
          <span class="term">Why don't you</span>
          <span
            ><NoteMark
              sentence="You look exhausted. Why don't you take a day off?"
              :marks="['Why don\'t you']"
            /><span class="translation">你看起來累壞了。你何不請一天假？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="疑問詞後面先接助動詞，再接主詞" mark="didn't you">
      <NoteFix
        wrong="Why your parents didn't come to the play?"
        right="Why didn't your parents come to the play?"
        fix="didn't your parents"
      />
    </NoteSlide>

    <NoteSlide title="didn't 後面用原形動詞" mark="come">
      <NoteFix
        wrong="Why didn't you brought your swimsuit?"
        right="Why didn't you bring your swimsuit?"
        fix="bring"
      />
    </NoteSlide>

    <NoteSlide title="not 跟著助動詞，縮寫成 didn't" mark="didn't">
      <NoteFix
        wrong="Why not did the bus stop for us?"
        right="Why didn't the bus stop for us?"
        fix="didn't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
