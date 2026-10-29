<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-non-defining-with-whose, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="whose 加名詞，給前面的人補充資料">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'At the concert, I met a friend of mine,', role: '人', kind: 'dim' },
          { t: 'whose job', role: 'whose + 名詞', kind: 'key' },
          { t: 'is to organize shows like that.', role: '動詞 + 補語' },
        ]"
      />
      <p class="translation">我在演唱會上遇到一個朋友，他的工作就是籌辦那類的演出。</p>
      <p class="remark">逗號表示後面是補充資料。</p>
    </NoteSlide>

    <NoteSlide title="whose 加名詞可以當子句的主詞或受詞" mark="whose job">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark
              sentence="I called Mrs. Tsai, whose son is in my class."
              :marks="['whose son']"
            /><span class="translation">我打電話給蔡太太，她兒子跟我同班。</span></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark
              sentence="We met Paula Ríos, whose novels I've read many times."
              :marks="['whose novels']"
            /><span class="translation">我們見到了 Paula Ríos，她的小說我讀過很多遍。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="whose 也可以指地方，子句在中間時前後都加逗號" mark="whose job">
      <div class="rows is-labeled">
        <div>
          <span class="term">地方</span>
          <span
            ><NoteMark
              sentence="We stayed in Lukang, whose old streets are full of temples."
              :marks="['whose old streets']"
            /><span class="translation">我們住在鹿港，那裡的老街到處都是廟。</span></span
          >
        </div>
        <div>
          <span class="term">句子中間</span>
          <span
            ><NoteMark
              sentence="My neighbor, whose dog barks all night, has finally moved."
              :marks="['whose dog barks all night,']"
            /><span class="translation">我的鄰居終於搬走了，他的狗整晚都在叫。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說誰的東西用 whose，不用 who's" mark="whose">
      <NoteFix
        wrong="I met Anna, who's brother is a pilot."
        right="I met Anna, whose brother is a pilot."
        fix="whose"
      />
    </NoteSlide>

    <NoteSlide title="whose 已經表示他的，不再加 his" mark="whose">
      <NoteFix
        wrong="I talked to Mr. Lin, who his daughter is a doctor."
        right="I talked to Mr. Lin, whose daughter is a doctor."
        fix="whose"
      />
    </NoteSlide>

    <NoteSlide title="whose 後面直接接名詞，不加 the" mark="whose job">
      <NoteFix
        wrong="We visited Lisa, whose the house is by the lake."
        right="We visited Lisa, whose house is by the lake."
        fix="whose house"
      />
    </NoteSlide>

    <NoteSlide title="子句是補充資料，前面要加逗號" mark="mine,">
      <NoteFix
        wrong="I phoned my sister whose car had broken down."
        right="I phoned my sister, whose car had broken down."
        fix="sister,"
      >
        說話的人只有一個姊姊。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
