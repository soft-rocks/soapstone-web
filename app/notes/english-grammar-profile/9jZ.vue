<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-place-end-position, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="地點副詞放在動詞後面" mark="live there">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My parents', role: '主詞' },
          { t: 'live', role: '動詞' },
          { t: 'there.', role: '地點副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我爸媽住在那裡。</p>
    </NoteSlide>

    <NoteSlide title="受詞放在動詞後面、地點副詞前面" mark="there">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'have', role: '動詞' },
          { t: 'many friends', role: '受詞' },
          { t: 'there.', role: '地點副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我在那裡有很多朋友。</p>
    </NoteSlide>

    <NoteSlide title="地點在前面，時間在後面" mark="there">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'ll meet you', role: '主詞 + 動詞 + 受詞', kind: 'dim' },
          { t: 'there', role: '地點副詞', kind: 'key' },
          { t: 'at six.', role: '時間' },
        ]"
      />
      <p class="translation">我六點在那裡跟你碰面。</p>
    </NoteSlide>

    <NoteSlide title="句尾的地點副詞" mark="there">
      <div class="rows is-labeled">
        <div>
          <span class="term">here、there</span>
          <span>這裡、那裡</span>
        </div>
        <div>
          <span class="term">home</span>
          <span>家，回家</span>
        </div>
        <div>
          <span class="term">outside、inside</span>
          <span>外面、裡面</span>
        </div>
        <div>
          <span class="term">upstairs、downstairs</span>
          <span>樓上、樓下</span>
        </div>
        <div>
          <span class="term">abroad、nearby、everywhere</span>
          <span>國外、附近、到處</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="地點副詞不放在動詞和受詞中間">
      <NoteFix
        wrong="I have there many friends."
        right="I have many friends there."
        fix="many friends there"
      />
    </NoteSlide>

    <NoteSlide title="地點副詞不放在動詞前面" mark="live there">
      <NoteFix
        wrong="My grandparents there live."
        right="My grandparents live there."
        fix="live there"
      />
    </NoteSlide>

    <NoteSlide title="地點放在時間前面">
      <NoteFix
        wrong="I'll see you tomorrow there."
        right="I'll see you there tomorrow."
        fix="there tomorrow"
      />
    </NoteSlide>

    <NoteSlide title="home 前面不加 to">
      <NoteFix wrong="I want to go to home now." right="I want to go home now." fix="go home" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
