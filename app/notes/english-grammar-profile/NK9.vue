<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-semi-modal-auxiliary-verbs-have-got, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="have got to 表示必須，後面接原形動詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'You\'ve got to', role: 'You + have got to', kind: 'key' },
          { t: 'bring', role: '原形動詞', kind: 'key' },
          { t: 'paintbrushes, paper and paint.', role: '受詞' },
        ]"
      />
      <p class="translation">你得帶畫筆、紙和顏料。</p>
    </NoteSlide>

    <NoteSlide title="have got to 只說現在，過去用 had to" mark="You've got">
      <div class="rows is-labeled">
        <div>
          <span class="term">have to<br /><i>所有時態</i></span>
          <span
            ><NoteMark sentence="I have to work on Saturday." :marks="['have to']" /><span
              class="translation"
              >我星期六得上班。</span
            ></span
          >
        </div>
        <div>
          <span class="term">have got to<br /><i>現在，口語</i></span>
          <span
            ><NoteMark
              sentence="I've got to go now. My bus is coming."
              :marks="['I\'ve got to']"
            /><span class="translation">我現在得走了。我的公車來了。</span></span
          >
        </div>
        <div>
          <span class="term">had to<br /><i>過去</i></span>
          <span
            ><NoteMark sentence="I had to wait an hour for the doctor." :marks="['had to']" /><span
              class="translation"
              >我等了醫生一個小時。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="don't have to 表示不必做" mark="You've got">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', kind: 'dim' },
          { t: 'don\'t have to', role: '不必', kind: 'key', ring: true },
          { t: 'bring', role: '原形動詞' },
          { t: 'anything except your clothes.', kind: 'dim' },
        ]"
      />
      <p class="translation">除了衣服，你什麼都不用帶。</p>
    </NoteSlide>

    <NoteSlide title="have to 的問句用 do，have got to 的問句把 have 放到前面" mark="You've">
      <div class="rows is-labeled">
        <div>
          <span class="term">have to</span>
          <span
            ><NoteMark sentence="Do I have to pay now?" :marks="['Do']" /><span class="translation"
              >我現在就得付錢嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">have got to</span>
          <span
            ><NoteMark sentence="Have we got to finish this today?" :marks="['Have']" /><span
              class="translation"
              >我們今天就得把這個做完嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have to 後面接原形動詞" mark="bring">
      <NoteFix wrong="I have to going now." right="I have to go now." fix="go" />
    </NoteSlide>

    <NoteSlide title="主詞是單數名詞，用 has to" mark="You've">
      <NoteFix
        wrong="My sister have to wear a uniform."
        right="My sister has to wear a uniform."
        fix="has to"
      />
    </NoteSlide>

    <NoteSlide title="過去用 had to，不用 had got to" mark="got">
      <NoteFix
        wrong="Yesterday I had got to stay late at work."
        right="Yesterday I had to stay late at work."
        fix="had to"
      />
    </NoteSlide>

    <NoteSlide title="have to 的問句用 do">
      <NoteFix
        wrong="Have I to bring my passport?"
        right="Do I have to bring my passport?"
        fix="Do"
      />
    </NoteSlide>

    <NoteSlide title="寫作時 have got to 的 have 不省略" mark="You've">
      <NoteFix
        wrong="I got to leave early today."
        right="I've got to leave early today."
        fix="I've"
      />
    </NoteSlide>

    <NoteSlide title="don't have to 是不必，mustn't 是禁止">
      <NoteFork
        stem="You"
        :branches="[
          { head: 'don\'t have to', rest: 'come.', meaning: '不必', zh: '你不必來。' },
          { head: 'mustn\'t', rest: 'come.', meaning: '禁止', zh: '你不可以來。' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="have got 後面接名詞時，意思是有" mark="got">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ve got', role: '有', kind: 'key' },
          { t: 'a new phone.', role: '名詞' },
        ]"
      />
      <p class="translation">我有一支新手機。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
