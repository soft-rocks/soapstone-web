<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-991, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不定代名詞 + 單數動詞" mark="nobody answered.">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I tried to call for help, but', kind: 'dim' },
          { t: 'nobody', role: '不定代名詞', kind: 'key' },
          { t: 'answered.', role: '單數動詞', kind: 'key' },
        ]"
      />
      <p class="translation">我試著呼救，可是沒有人回應。</p>
    </NoteSlide>

    <NoteSlide title="現在式、現在進行式">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark sentence="Nobody lives in that old house." :marks="['lives']" /><span
              class="translation"
              >那間老房子沒有人住。</span
            ></span
          >
        </div>
        <div>
          <span class="term">現在進行式</span>
          <span
            ><NoteMark sentence="Something is happening outside." :marks="['is happening']" /><span
              class="translation"
              >外面在發生什麼事。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在完成式、過去式" mark="answered.">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成式</span>
          <span
            ><NoteMark sentence="Somebody has eaten my sandwich." :marks="['has eaten']" /><span
              class="translation"
              >有人吃了我的三明治。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark sentence="Something fell off the shelf." :marks="['fell']" /><span
              class="translation"
              >有東西從架子上掉下來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="something 和 nobody" mark="nobody">
      <div class="rows is-labeled">
        <div>
          <span class="term">something</span>
          <span
            ><NoteMark sentence="Something was wrong with the car." :marks="['Something']" /><span
              class="translation"
              >車子出了點問題。</span
            ></span
          >
        </div>
        <div>
          <span class="term">nobody</span>
          <span
            ><NoteMark sentence="Nobody came to help." :marks="['Nobody came']" /><span
              class="translation"
              >沒有人來幫忙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去式用 was">
      <NoteFix
        wrong="Something were wrong with my bike yesterday."
        right="Something was wrong with my bike yesterday."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="出了狀況：happen to">
      <NoteFix
        wrong="Something has happened with my phone."
        right="Something has happened to my phone."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="肯定句用 something">
      <NoteFix
        wrong="Anything fell out of your pocket just now."
        right="Something fell out of your pocket just now."
        fix="Something"
      />
    </NoteSlide>

    <NoteSlide title="some + 複數名詞，動詞用複數">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Some people', role: '複數名詞', kind: 'key' },
          { t: 'were', role: '複數動詞', kind: 'key' },
          { t: 'waiting outside.', kind: 'dim' },
        ]"
      />
      <p class="translation">有一些人在外面等。</p>
    </NoteSlide>

    <NoteSlide title="anybody 當受詞" mark="nobody">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'didn\'t see', role: '否定動詞', kind: 'key' },
          { t: 'anybody.', role: '受詞', kind: 'key' },
        ]"
      />
      <p class="translation">我誰都沒看到。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
