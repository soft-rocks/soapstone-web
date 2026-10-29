<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 067, as slides, in the order of notes/dragon-english-basic-100/067.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="some 指一群中的一部分，others 指另一部分" :mark="['some', 'others']">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'In some countries', role: '一部分', kind: 'key' },
          { t: 'people have too much food,', kind: 'dim' },
          { t: 'while', kind: 'dim' },
          { t: 'in others', role: '另一部分', kind: 'key' },
          { t: 'tens of thousands of children are starving.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="others 後面的名詞省略了" mark="others">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'in', role: '介系詞', kind: 'dim' },
          { t: 'others', role: '代名詞', kind: 'key', ring: true },
        ]"
      />
      <p class="remark"><code>others</code> 是 <code>other countries</code>。</p>
    </NoteSlide>

    <NoteSlide title="the others 指剩下的全部" mark="others">
      <div class="rows is-labeled">
        <div>
          <span class="term">others<br /><i>另一部分</i></span>
          <span
            ><NoteMark
              sentence="Some students walk to school, and others take the bus."
              :marks="['others']"
            /><span class="translation">有些學生走路上學，有些搭公車。</span></span
          >
        </div>
        <div>
          <span class="term">the others<br /><i>剩下的全部</i></span>
          <span
            ><NoteMark
              sentence="Some of my friends went home, but the others stayed."
              :marks="['the others']"
            /><span class="translation">我有些朋友回家了，但其他的人都留下來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="while 不表示時間時，表示兩件事的對比" mark="while">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My brother likes sports,', role: '子句' },
          { t: 'while', role: '連接詞（對比）', kind: 'key', ring: true },
          { t: 'I like reading.', role: '子句' },
        ]"
      />
      <p class="translation">我哥哥喜歡運動，而我喜歡看書。</p>
      <p class="remark"><code>while</code> 前面常加逗號。</p>
    </NoteSlide>

    <NoteSlide title="hundreds of 這類說法表示很大但不精確的數量" mark="tens of thousands of">
      <div class="rows is-labeled">
        <div>
          <span class="term">好幾百</span>
          <span
            ><NoteMark
              sentence="There are hundreds of books in my room."
              :marks="['hundreds of']"
            /><span class="translation">我房間裡有好幾百本書。</span></span
          >
        </div>
        <div>
          <span class="term">好幾千</span>
          <span
            ><NoteMark
              sentence="Thousands of people came to the festival."
              :marks="['Thousands of']"
            /><span class="translation">好幾千人來參加慶典。</span></span
          >
        </div>
        <div>
          <span class="term">好幾萬</span>
          <span
            ><NoteMark
              sentence="Tens of thousands of people ran in the Tokyo Marathon."
              :marks="['Tens of thousands of']"
            /><span class="translation">好幾萬人參加了東京馬拉松。</span></span
          >
        </div>
      </div>
      <p class="remark">後面接複數名詞。</p>
    </NoteSlide>

    <NoteSlide
      title="前面有確定的數目時，hundred 和 thousand 不加 -s，也不加 of"
      mark="tens of thousands of"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">thousand</span>
          <span
            ><NoteMark
              sentence="About five thousand people came to the concert."
              :marks="['five thousand people']"
            /><span class="translation">大約五千人來看那場演唱會。</span></span
          >
        </div>
        <div>
          <span class="term">hundred</span>
          <span
            ><NoteMark
              sentence="About three hundred students go to this school."
              :marks="['three hundred students']"
            /><span class="translation">大約三百個學生在這所學校讀書。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
