<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 080, as slides, in the order of notes/dragon-english-basic-100/080.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="It is said that 表示一般人都這樣說，不說是誰說的" mark="It is said that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'key' },
          { t: 'is said', role: '被動', kind: 'key' },
          {
            t: 'that seven out of ten young Japanese people don’t believe in religion.',
            role: '說的內容',
          },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="子句的主詞移到句首時，改成 is said to 加動詞原形" mark="It is said that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This temple', role: '子句的主詞', kind: 'key' },
          { t: 'is said', kind: 'dim' },
          { t: 'to be', role: 'to + 動詞原形', kind: 'key' },
          { t: 'a thousand years old.', kind: 'dim' },
        ]"
      />
      <p class="translation">這間廟據說有一千年的歷史。</p>
      <p class="remark">原來是 <code>It is said that this temple is a thousand years old.</code></p>
    </NoteSlide>

    <NoteSlide title="數字 out of 數字表示在全部之中的幾個" mark="seven out of ten">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'seven', role: '幾個', kind: 'key' },
          { t: 'out of', kind: 'key' },
          { t: 'ten', role: '全部', kind: 'key' },
          { t: 'young Japanese people', role: '複數名詞' },
        ]"
      />
      <p class="remark">十個裡面有七個。這個說法常用在調查結果。</p>
    </NoteSlide>

    <NoteSlide title="說考試分數時，out of 後面不接名詞" mark="seven out of ten">
      <div class="rows is-labeled">
        <div>
          <span class="term">接名詞</span>
          <span
            ><NoteMark
              sentence="Nine out of ten students have a smartphone."
              :marks="['students']"
            /><span class="translation">十個學生裡有九個有智慧型手機。</span></span
          >
        </div>
        <div>
          <span class="term">考試分數</span>
          <span
            ><NoteMark
              sentence="I got eight out of ten on the quiz."
              :marks="['got eight out of ten']"
            /><span class="translation">我小考十題對了八題。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="believe in 表示相信某樣東西存在或有價值" mark="believe in religion">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Do you', kind: 'dim' },
          { t: 'believe in', role: '相信存在', kind: 'key' },
          { t: 'ghosts?', role: '名詞', alts: ['religion', 'luck', 'God'] },
        ]"
      />
      <p class="translation">你相信有鬼嗎？</p>
    </NoteSlide>

    <NoteSlide title="believe 直接接人或話，表示相信說的是真的" mark="believe">
      <div class="rows is-labeled">
        <div>
          <span class="term">believe + 人</span>
          <span
            ><NoteMark sentence="I believe you." :marks="['believe you']" /><span
              class="translation"
              >我相信你說的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">believe + 話</span>
          <span
            ><NoteMark sentence="Nobody believed his story." :marks="['believed his story']" /><span
              class="translation"
              >沒有人相信他說的事。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
