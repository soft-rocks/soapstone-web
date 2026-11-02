<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-negative-questions-with-main-verbs, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Why didn't 問過去為什麼沒做">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Why', role: '疑問詞' },
          { t: 'didn\'t', role: '助動詞過去否定', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'say', role: '原形動詞', kind: 'key' },
          { t: 'something about it?', kind: 'dim' },
        ]"
      />
      <p class="translation">這件事你為什麼都不說點什麼？</p>
    </NoteSlide>

    <NoteSlide title="現在用 don't，到現在還沒做用 haven't 或 hasn't" mark="didn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">don't<br /><i>現在</i></span>
          <span
            ><NoteMark sentence="Why don't you take a day off?" :marks="['don\'t']" /><span
              class="translation"
              >你為什麼不請一天假？</span
            ></span
          >
        </div>
        <div>
          <span class="term">hasn't<br /><i>到現在</i></span>
          <span
            ><NoteMark sentence="Why hasn't the bus come yet?" :marks="['hasn\'t', 'come']" /><span
              class="translation"
              >公車為什麼還沒來？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Why don't you 提出建議，Why didn't you 常帶著責備" mark="didn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">建議</span>
          <span
            ><NoteMark
              sentence="You look tired. Why don't you lie down for an hour?"
              :marks="['don\'t']"
            /><span class="translation">你看起來很累。你為什麼不躺一個小時？</span></span
          >
        </div>
        <div>
          <span class="term">責備</span>
          <span
            ><NoteMark sentence="Why didn't you lock the back door?" :marks="['didn\'t']" /><span
              class="translation"
              >你為什麼沒鎖後門？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="didn't 後面用原形動詞" mark="say">
      <NoteFix
        wrong="Why didn't you answered my email last week?"
        right="Why didn't you answer my email last week?"
        fix="answer"
      />
    </NoteSlide>

    <NoteSlide title="didn't 放在主詞前面" mark="didn't you">
      <NoteFix
        wrong="Why you didn't wear a coat in the snow?"
        right="Why didn't you wear a coat in the snow?"
        fix="didn't you"
      />
    </NoteSlide>

    <NoteSlide title="現在式的主詞是第三人稱單數時用 doesn't" mark="didn't">
      <NoteFix wrong="Why don't she answer?" right="Why doesn't she answer?" fix="doesn't" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
