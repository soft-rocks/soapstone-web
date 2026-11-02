<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-many-with-plural-nouns-interrogative, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="問句裡用 many 加複數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Have', role: '助動詞' },
          { t: 'you', role: '主詞' },
          { t: 'got', role: '動詞' },
          { t: 'many', role: 'many', kind: 'key' },
          { t: 'friends', role: '複數名詞', kind: 'key' },
          { t: 'in England?', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">你在英格蘭有很多朋友嗎？</p>
    </NoteSlide>

    <NoteSlide title="Yes / No 問句和 How many 問句" mark="many friends">
      <div class="rows is-labeled">
        <div>
          <span class="term">Yes / No 問句</span>
          <span
            ><NoteMark
              sentence="Have you got many friends in England?"
              :marks="['many friends']"
            /><span class="translation">你在英格蘭有很多朋友嗎？</span></span
          >
        </div>
        <div>
          <span class="term">How many 問句</span>
          <span
            ><NoteMark
              sentence="How many channels are there on British TV?"
              :marks="['How many channels']"
            /><span class="translation">英國電視有幾個頻道？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問句用 many，肯定句用 a lot of" mark="many">
      <div class="rows is-labeled">
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Did many people come?" :marks="['many']" /><span
              class="translation"
              >很多人來嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">肯定句</span>
          <span
            ><NoteMark sentence="A lot of people came." :marks="['A lot of']" /><span
              class="translation"
              >很多人來了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不可數名詞用 much" mark="many">
      <NoteFix
        wrong="How many bread should I buy for the picnic?"
        right="How much bread should I buy for the picnic?"
        fix="much"
      />
    </NoteSlide>

    <NoteSlide title="many 後面接複數名詞" mark="friends">
      <NoteFix
        wrong="Have you got many friend there?"
        right="Have you got many friends there?"
        fix="friends"
      />
    </NoteSlide>

    <NoteSlide title="名詞後面先接助動詞，再接主詞" mark="Have you">
      <NoteFix
        wrong="How many hours you work every week?"
        right="How many hours do you work every week?"
        fix="do you"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
