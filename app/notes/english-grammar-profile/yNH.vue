<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-modal-verbs, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="情態動詞放在主詞前面，後面接原形動詞">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'How', role: '疑問詞' },
          { t: 'will', role: '情態動詞', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'get', role: '原形動詞', kind: 'key' },
          { t: 'here?', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">你要怎麼過來這裡？</p>
    </NoteSlide>

    <NoteSlide title="不同的情態動詞問不同的事" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">can<br /><i>可能、允許</i></span>
          <span
            ><NoteMark sentence="When can we meet?" :marks="['can']" /><span class="translation"
              >我們什麼時候可以見面？</span
            ></span
          >
        </div>
        <div>
          <span class="term">should<br /><i>建議</i></span>
          <span
            ><NoteMark sentence="What should I wear?" :marks="['should']" /><span
              class="translation"
              >我應該穿什麼？</span
            ></span
          >
        </div>
        <div>
          <span class="term">shall<br /><i>提議</i></span>
          <span
            ><NoteMark sentence="What shall we do tonight?" :marks="['shall']" /><span
              class="translation"
              >我們今晚做什麼好？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="How can I help you? 是店員和客服的固定說法" mark="How">
      <NoteWords
        :size="32"
        :parts="[{ t: 'How can I help you?', role: '有什麼需要幫忙的嗎', kind: 'key' }]"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞放在主詞前面" mark="will you">
      <NoteFix wrong="Where I can buy stamps?" right="Where can I buy stamps?" fix="can I" />
    </NoteSlide>

    <NoteSlide title="有情態動詞的疑問句不加 do" mark="will">
      <NoteFix wrong="What do you can do?" right="What can you do?" fix="can" />
    </NoteSlide>

    <NoteSlide title="情態動詞後面不加 to" mark="get">
      <NoteFix wrong="When can we to meet?" right="When can we meet?" fix="meet" />
    </NoteSlide>

    <NoteSlide title="情態動詞後面的動詞不加 -s" mark="get">
      <NoteFix wrong="Where will she stays?" right="Where will she stay?" fix="stay" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
