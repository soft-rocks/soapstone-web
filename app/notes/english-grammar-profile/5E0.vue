<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-possession-with-plural-nouns, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="以 -&#x2060;s 結尾的複數名詞只加撇號">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'He had promised that he would go to', kind: 'dim' },
          { t: 'his grandparents\'', role: '複數名詞 + \'', kind: 'key' },
          { t: 'house', role: '名詞' },
          { t: 'that afternoon.', kind: 'dim' },
        ]"
      />
      <p class="translation">他之前答應過，那天下午要去他爺爺奶奶家。</p>
    </NoteSlide>

    <NoteSlide title="撇號的位置說明是一個人還是好幾個人" mark="grandparents'">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數 + 's<br /><i>一個姊姊</i></span>
          <span
            ><NoteMark sentence="My sister's room is next to mine." :marks="['sister\'s']" /><span
              class="translation"
              >我姊姊的房間在我隔壁。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數 + '<br /><i>好幾個姊姊</i></span>
          <span
            ><NoteMark
              sentence="My sisters' room is upstairs. They share it."
              :marks="['sisters\'']"
            /><span class="translation">我姊姊們的房間在樓上，她們共用一間。</span></span
          >
        </div>
        <div>
          <span class="term">children + 's</span>
          <span
            ><NoteMark
              sentence="The children's toys are all over the floor."
              :marks="['children\'s']"
            /><span class="translation">孩子們的玩具丟得滿地都是。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數的時間名詞說明長度時也加撇號" mark="grandparents'">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Our company has', kind: 'dim' },
          { t: '15 years\'', role: '時間 + \'', kind: 'key' },
          { t: 'experience.', role: '名詞' },
        ]"
      />
      <p class="translation">我們公司有十五年的經驗。</p>
    </NoteSlide>

    <NoteSlide title="parents 以 -&#x2060;s 結尾，只加撇號" mark="grandparents'">
      <NoteFix
        wrong="We had lunch at my parents's house."
        right="We had lunch at my parents' house."
        fix="parents'"
      />
    </NoteSlide>

    <NoteSlide title="children 不以 -&#x2060;s 結尾，加 's">
      <NoteFix
        wrong="The childrens' books are on the top shelf."
        right="The children's books are on the top shelf."
        fix="children's"
      />
    </NoteSlide>

    <NoteSlide title="少了撇號，students 就不是所有格" mark="grandparents'">
      <NoteFix
        wrong="The students essays were very good."
        right="The students' essays were very good."
        fix="students'"
      />
    </NoteSlide>

    <NoteSlide title="weeks 說明假期的長度，後面要加撇號">
      <NoteFix
        wrong="I've got two weeks holiday in August."
        right="I've got two weeks' holiday in August."
        fix="weeks'"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
