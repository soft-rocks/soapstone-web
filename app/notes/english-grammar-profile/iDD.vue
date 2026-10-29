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
          { t: 'didn\'t', role: 'didn\'t', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'say', role: '原形動詞', kind: 'key' },
          { t: 'something about it?', kind: 'dim' },
        ]"
      />
      <p class="translation">這件事你為什麼都不說點什麼？</p>
    </NoteSlide>

    <NoteSlide title="現在用 don't，到現在還沒做用 haven't" mark="didn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">don't<br /><i>現在</i></span>
          <span
            ><NoteMark sentence="Why don't you go to your doctor?" :marks="['don\'t']" /><span
              class="translation"
              >你為什麼不去看醫生？</span
            ></span
          >
        </div>
        <div>
          <span class="term">haven't<br /><i>到現在</i></span>
          <span
            ><NoteMark
              sentence="Why haven't you told me before?"
              :marks="['haven\'t', 'told']"
            /><span class="translation">你為什麼之前都沒告訴我？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Why don't you 說接下來的事是建議，Why didn't you 常帶著責備" mark="didn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">建議</span>
          <span
            ><NoteMark
              sentence="You still have a headache. Why don't you go to your doctor?"
              :marks="['don\'t']"
            /><span class="translation">你還在頭痛。你為什麼不去看醫生？</span></span
          >
        </div>
        <div>
          <span class="term">責備</span>
          <span
            ><NoteMark sentence="Why didn't you tell me?" :marks="['didn\'t']" /><span
              class="translation"
              >你為什麼不告訴我？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="didn't 後面用原形動詞" mark="say">
      <NoteFix wrong="Why didn't you told me?" right="Why didn't you tell me?" fix="tell" />
    </NoteSlide>

    <NoteSlide title="didn't 放在主詞前面" mark="didn't you">
      <NoteFix wrong="Why you didn't call?" right="Why didn't you call?" fix="didn't you" />
    </NoteSlide>

    <NoteSlide title="主詞是 she 時用 doesn't" mark="didn't">
      <NoteFix wrong="Why don't she answer?" right="Why doesn't she answer?" fix="doesn't" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
