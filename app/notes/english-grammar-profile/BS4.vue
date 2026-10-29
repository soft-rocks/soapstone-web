<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-degree-with-verbs-97, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a little 放在動詞後面，表示程度不高">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I don\'t speak very well,', role: '第一個子句', kind: 'dim' },
          { t: 'but', role: '連接詞', kind: 'dim' },
          { t: 'I can understand and speak', role: '主詞 + 助動詞 + 動詞' },
          { t: 'a little.', role: '程度副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我講得不太好，不過我聽得懂，也會講一點。</p>
    </NoteSlide>

    <NoteSlide title="動詞有受詞時，a little 放在受詞後面" mark="a little">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞 + 受詞 + a little</span>
          <span
            ><NoteMark
              sentence="I read my book a little before bed."
              :marks="['my book a little']"
            /><span class="translation">我睡前看一下書。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a little 和 a bit 也可以表示時間不長" mark="a little">
      <div class="rows is-labeled">
        <div>
          <span class="term">程度不高</span>
          <span
            ><NoteMark sentence="My leg hurts a little." :marks="['a little']" /><span
              class="translation"
              >我的腿有點痛。</span
            ></span
          >
        </div>
        <div>
          <span class="term">時間不長</span>
          <span
            ><NoteMark sentence="Can you wait a bit?" :marks="['a bit']" /><span class="translation"
              >你可以等一下嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a little 不放在動詞前面" mark="a little">
      <NoteFix
        wrong="I a little understand Spanish."
        right="I understand Spanish a little."
        fix="a little"
      />
    </NoteSlide>

    <NoteSlide title="a bit 的 a 不能省略">
      <NoteFix
        wrong="She cried bit when she left."
        right="She cried a bit when she left."
        fix="a bit"
      />
    </NoteSlide>

    <NoteSlide title="a bit 的 bit 不加 s">
      <NoteFix wrong="Can you wait a bits?" right="Can you wait a bit?" fix="bit?" />
    </NoteSlide>

    <NoteSlide title="a bit 不放在動詞和受詞中間">
      <NoteFix
        wrong="He moved a bit the chair."
        right="He moved the chair a bit."
        fix="the chair a bit"
      />
    </NoteSlide>

    <NoteSlide title="a little 表示有一點，very little 表示幾乎沒有" mark="a little">
      <div class="rows is-labeled">
        <div>
          <span class="term">a little</span>
          <span
            ><NoteMark sentence="I eat a little in the morning." :marks="['a little']" /><span
              class="translation"
              >我早上吃一點東西。</span
            ></span
          >
        </div>
        <div>
          <span class="term">very little</span>
          <span
            ><NoteMark sentence="I eat very little in the morning." :marks="['very little']" /><span
              class="translation"
              >我早上幾乎不吃東西。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
