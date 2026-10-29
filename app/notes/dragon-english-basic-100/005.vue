<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 005, as slides, in the order of notes/dragon-english-basic-100/005.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="when 後面省略主詞和 be 動詞，直接接動詞-ing" mark="When waiting">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When', role: '連接詞', kind: 'key' },
          { t: 'they', role: '主詞', kind: 'gone' },
          { t: 'are', role: 'be 動詞', kind: 'gone' },
          { t: 'waiting', role: '動詞-ing', kind: 'key' },
          { t: 'for the elevator to come or the traffic light to change,', kind: 'dim' },
        ]"
      />
      <p class="remark">這是時間子句的省略形式。<code>while</code> 也可以這樣省略。</p>
    </NoteSlide>

    <NoteSlide title="省略的主詞跟主要子句的主詞相同" mark="most Japanese people">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'While', kind: 'dim' },
          { t: 'I was', role: '省略', kind: 'gone' },
          { t: 'waiting for the bus,', role: '動詞-ing' },
          { t: 'I', role: '主要子句的主詞', kind: 'key', ring: true },
          { t: 'read a book.', kind: 'dim' },
        ]"
      />
      <p class="translation">等公車的時候，我看了一本書。</p>
      <p class="remark">原句省略的主詞是 <code>most Japanese people</code>。</p>
    </NoteSlide>

    <NoteSlide
      title="wait for 後面先接受詞，再接 to 不定詞"
      mark="waiting for the elevator to come"
    >
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We', kind: 'dim' },
          { t: 'waited for', role: '動詞', kind: 'key' },
          { t: 'the rain', role: '受詞' },
          { t: 'to stop.', role: 'to + 動詞原形', kind: 'key' },
        ]"
      />
      <p class="translation">我們等雨停。</p>
      <p class="remark">受詞是等待的對象。<code>to</code> 不定詞說明那個對象要做的事。</p>
    </NoteSlide>

    <NoteSlide title="兩組受詞和 to 不定詞共用 waiting for" mark="the traffic light to change">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'waiting for', kind: 'key' },
          { t: 'the elevator', role: '受詞' },
          { t: 'to come', role: 'to + 動詞原形' },
          { t: 'or', role: '連接詞' },
          { t: 'waiting for', role: '不再放', kind: 'gone' },
          { t: 'the traffic light', role: '受詞' },
          { t: 'to change,', role: 'to + 動詞原形' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="連綴動詞 become 後面接形容詞，表示進入一種狀態" mark="become irritated">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'most Japanese people', role: '主詞' },
          { t: 'become', role: '連綴動詞', kind: 'key' },
          { t: 'irritated', role: '形容詞', kind: 'key' },
          { t: 'in only thirty seconds.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="表示人的感覺的形容詞常用 -ed 結尾" mark="irritated">
      <div class="rows is-labeled">
        <div>
          <span class="term">無聊</span>
          <span
            ><NoteMark
              sentence="I became bored halfway through the movie."
              :marks="['became bored']"
            /><span class="translation">電影看到一半我就覺得無聊了。</span></span
          >
        </div>
        <div>
          <span class="term">擔心</span>
          <span
            ><NoteMark
              sentence="My mother became worried when I didn't come home."
              :marks="['became worried']"
            /><span class="translation">我沒回家的時候，我媽媽開始擔心。</span></span
          >
        </div>
        <div>
          <span class="term">不耐煩</span>
          <span
            ><NoteMark
              sentence="The passengers became irritated when the train stopped again."
              :marks="['became irritated']"
            /><span class="translation">火車又停下來的時候，乘客開始不耐煩。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
