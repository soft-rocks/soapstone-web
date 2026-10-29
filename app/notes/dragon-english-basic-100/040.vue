<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 040, as slides, in the order of notes/dragon-english-basic-100/040.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="would like to 加動詞原形，表示想要做某件事" mark="I’d like to work">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I’d', role: 'I would 的縮寫', kind: 'key', ring: true },
          { t: 'like to', role: '想要', kind: 'key' },
          { t: 'work', role: '動詞原形' },
          { t: 'as a volunteer.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>would like to</code> 比 <code>want to</code> 客氣。</p>
    </NoteSlide>

    <NoteSlide title="問句 Would you like to 用來邀請別人" mark="like to">
      <div class="rows is-labeled">
        <div>
          <span class="term">come</span
          ><span
            ><NoteMark
              sentence="Would you like to come to my party?"
              :marks="['Would you like to']"
            /><span class="translation">你想來我的派對嗎？</span></span
          >
        </div>
        <div>
          <span class="term">join</span
          ><span
            ><NoteMark
              sentence="Would you like to join us for dinner?"
              :marks="['Would you like to']"
            /><span class="translation">你想跟我們一起吃晚餐嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞-ing 片段放在名詞後面，修飾這個名詞" mark="a volunteer helping victims">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'a volunteer', role: '名詞', kind: 'key' },
          { t: 'helping victims', role: '動詞-ing 片段', kind: 'key' },
          { t: 'of natural disasters', kind: 'dim' },
        ]"
      />
      <p class="remark">意思是幫助受災者的志工。</p>
    </NoteSlide>

    <NoteSlide title="動詞-ing 片段說明這個人或東西做什麼，或正在做什麼" mark="helping">
      <div class="rows is-labeled">
        <div>
          <span class="term">正在做</span>
          <span
            ><NoteMark
              sentence="The woman cooking in the kitchen is my aunt."
              :marks="['cooking in the kitchen']"
            /><span class="translation">在廚房煮飯的那個女人是我阿姨。</span></span
          >
        </div>
        <div>
          <span class="term">正在做</span>
          <span
            ><NoteMark
              sentence="There are many volunteers cleaning the beach."
              :marks="['cleaning the beach']"
            /><span class="translation">有很多志工在清理海灘。</span></span
          >
        </div>
        <div>
          <span class="term">做什麼</span>
          <span
            ><NoteMark
              sentence="My uncle is a volunteer teaching English to children."
              :marks="['teaching English to children']"
            /><span class="translation">我叔叔是教小孩英文的志工。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="such as 放在名詞後面，舉出屬於這個名詞的例子"
      mark="such as floods or earthquakes"
    >
      <NoteWords
        :size="28"
        :parts="[
          { t: 'natural disasters,', role: '名詞', kind: 'key' },
          { t: 'such as', role: '舉例' },
          { t: 'floods', role: '例子', kind: 'key' },
          { t: 'or', role: '連接詞' },
          { t: 'earthquakes', role: '例子', kind: 'key' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="兩個例子用 and 或 or 連接，or 表示任何一種" mark="or">
      <div class="rows is-labeled">
        <div>
          <span class="term">or</span>
          <span
            ><NoteMark
              sentence="Don't eat snacks such as chips or candy before dinner."
              :marks="['chips or candy']"
            /><span class="translation">晚餐前不要吃洋芋片或糖果這類零食。</span></span
          >
        </div>
        <div>
          <span class="term">and</span>
          <span
            ><NoteMark
              sentence="In winter you need warm clothes such as coats and gloves."
              :marks="['coats and gloves']"
            /><span class="translation">冬天你需要外套和手套這類保暖的衣服。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
