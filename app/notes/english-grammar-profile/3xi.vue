<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-much-with-uncountable-nouns-interrogative, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="How much 加不可數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'How much', role: 'How much', kind: 'key' },
          { t: 'television', role: '不可數名詞', kind: 'key' },
          { t: 'do', role: '助動詞' },
          { t: 'you', role: '主詞' },
          { t: 'watch?', role: '動詞' },
        ]"
      />
      <p class="translation">你平常電視看多少？</p>
    </NoteSlide>

    <NoteSlide title="How much 問句和 Yes / No 問句" mark="How much television">
      <div class="rows is-labeled">
        <div>
          <span class="term">How much 問句</span>
          <span
            ><NoteMark
              sentence="How much television do you watch?"
              :marks="['How much television']"
            /><span class="translation">你平常電視看多少？</span></span
          >
        </div>
        <div>
          <span class="term">Yes / No 問句</span>
          <span
            ><NoteMark sentence="Do you watch much TV?" :marks="['much TV']" /><span
              class="translation"
              >你常看電視嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問句用 much，肯定句用 a lot of" mark="much">
      <div class="rows is-labeled">
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Do you have much homework?" :marks="['much']" /><span
              class="translation"
              >你功課多嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">肯定句</span>
          <span
            ><NoteMark sentence="I have a lot of homework." :marks="['a lot of']" /><span
              class="translation"
              >我功課很多。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="可數名詞用 many" mark="much">
      <NoteFix
        wrong="How much books have you got?"
        right="How many books have you got?"
        fix="many"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞不加 -s" mark="television">
      <NoteFix
        wrong="How much homeworks do you have?"
        right="How much homework do you have?"
        fix="homework"
      />
    </NoteSlide>

    <NoteSlide title="名詞後面先接助動詞，再接主詞" mark="do you">
      <NoteFix wrong="How much money you need?" right="How much money do you need?" fix="do you" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
