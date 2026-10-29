<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-plural-noun-s, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="複數名詞只加撇號">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'at', role: '介系詞', kind: 'dim' },
          { t: 'my parents\'', role: '複數名詞 + \'', kind: 'key' },
          { t: 'house', role: '名詞', kind: 'key' },
          { t: 'near the sea.', role: '補充', kind: 'dim' },
        ]"
      />
      <p class="translation">在我爸媽家，就在海邊附近。</p>
    </NoteSlide>

    <NoteSlide title="撇號的位置說出一個還是好幾個" mark="parents'">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark sentence="my sister's room" :marks="['sister\'s']" /><span
              class="translation"
              >我姊姊的房間（一個姊姊）</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark sentence="my sisters' room" :marks="['sisters\'']" /><span
              class="translation"
              >我姊姊們的房間（好幾個姊姊）</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="字尾不是 s 的複數加 's" mark="parents'">
      <div class="rows is-labeled">
        <div>
          <span class="term">字尾是 s</span>
          <span
            ><NoteMark sentence="the boys' toilets" :marks="['boys\'']" /><span class="translation"
              >男生廁所</span
            ></span
          >
        </div>
        <div>
          <span class="term">字尾不是 s</span>
          <span
            ><NoteMark sentence="the children's toys" :marks="['children\'s']" /><span
              class="translation"
              >孩子們的玩具</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="字尾是 s，只加撇號" mark="parents'">
      <NoteFix
        wrong="I stayed at my parents's house."
        right="I stayed at my parents' house."
        fix="parents'"
      />
    </NoteSlide>

    <NoteSlide title="好幾個人，撇號放在 s 後面" mark="parents'">
      <NoteFix
        wrong="The two student's bags were in the hall."
        right="The two students' bags were in the hall."
        fix="students'"
      />
    </NoteSlide>

    <NoteSlide title="children 加 's" mark="parents'">
      <NoteFix
        wrong="The childrens' books are on the second floor."
        right="The children's books are on the second floor."
        fix="children's"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
