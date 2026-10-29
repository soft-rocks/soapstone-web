<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 004, as slides, in the order of notes/dragon-english-basic-100/004.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="most 接名詞指一般的一群，most of 指特定的一群" mark="Most">
      <div class="rows is-labeled">
        <div>
          <span class="term">most + 名詞</span
          ><span
            ><NoteMark sentence="Most children like ice cream." :marks="['Most children']" /><span
              class="translation"
              >大部分的小孩喜歡冰淇淋。</span
            ></span
          >
        </div>
        <div>
          <span class="term">most of + the + 名詞</span
          ><span
            ><NoteMark
              sentence="Most of the students in my class live near the school."
              :marks="['Most of the students']"
            /><span class="translation">我們班上大部分的學生住在學校附近。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="most 直接接複數名詞或不可數名詞" mark="Most Japanese high school students">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark
              sentence="Most stores close at nine on Sundays."
              :marks="['Most stores']"
            /><span class="translation">大部分的店星期天九點關門。</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark sentence="Most fruit is cheaper in summer." :marks="['Most fruit']" /><span
              class="translation"
              >大部分的水果夏天比較便宜。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        原句的 <code>most Japanese high school students</code> 指日本的高中生整體。
      </p>
    </NoteSlide>

    <NoteSlide title="most of 後面接 the 或所有格加名詞，或接 us、them" mark="Most">
      <div class="rows is-labeled">
        <div>
          <span class="term">the + 名詞</span>
          <span
            ><NoteMark sentence="Most of the passengers were asleep." :marks="['of the']" /><span
              class="translation"
              >大部分的乘客都睡著了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">所有格 + 名詞</span>
          <span
            ><NoteMark sentence="Most of my friends have a smartphone." :marks="['of my']" /><span
              class="translation"
              >我大部分的朋友都有智慧型手機。</span
            ></span
          >
        </div>
        <div>
          <span class="term">us、them</span>
          <span
            ><NoteMark
              sentence="Tom has many comics, and he has read most of them."
              :marks="['most of them']"
            /><span class="translation">Tom 有很多漫畫，他大部分都看過了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="句尾的 to 不定詞說明做前面動作的目的" mark="to prepare">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Most Japanese high school students', kind: 'dim' },
          { t: 'go to a cram school', role: '動作' },
          { t: 'to prepare for the college entrance exam.', role: '目的', kind: 'key' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="prepare for 接即將發生的事，prepare 直接接要備好的東西" mark="prepare for">
      <div class="rows is-labeled">
        <div>
          <span class="term">prepare for<br /><i>為那件事做準備</i></span>
          <span
            ><NoteMark
              sentence="I'm preparing for a job interview."
              :marks="['preparing for']"
            /><span class="translation">我正在準備一場工作面試。</span></span
          >
        </div>
        <div>
          <span class="term">prepare<br /><i>把東西做好或備好</i></span>
          <span
            ><NoteMark
              sentence="My mother is preparing dinner in the kitchen."
              :marks="['preparing dinner']"
            /><span class="translation">我媽媽正在廚房準備晚餐。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
