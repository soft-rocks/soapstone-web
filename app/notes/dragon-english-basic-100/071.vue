<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 071, as slides, in the order of notes/dragon-english-basic-100/071.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="however 子句的條件不會改變主要子句的結果" mark="However much">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'However much', role: '不管多少', kind: 'key' },
          { t: 'exercise', role: '不可數名詞' },
          { t: 'you get,', role: '主詞 + 動詞' },
          {
            t: 'you won’t lose weight unless you count your calories.',
            role: '主要子句',
            kind: 'dim',
          },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="however 後面接形容詞、副詞或 many，意思是不管多麼" mark="However">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="However tired you are, you should brush your teeth."
              :marks="['However tired']"
            /><span class="translation">不管你多累，你都應該刷牙。</span></span
          >
        </div>
        <div>
          <span class="term">副詞</span>
          <span
            ><NoteMark
              sentence="However hard I try, I can't get up early."
              :marks="['However hard']"
            /><span class="translation">不管我多努力，我都沒辦法早起。</span></span
          >
        </div>
        <div>
          <span class="term">many + 複數名詞</span>
          <span
            ><NoteMark
              sentence="However many people come, there will be enough food."
              :marks="['However many people']"
            /><span class="translation">不管來多少人，食物都會夠。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="however much 後面可以接不可數名詞，也可以不接名詞"
      mark="However much exercise"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark
              sentence="However much money you have, you can't buy happiness."
              :marks="['However much money']"
            /><span class="translation">不管你有多少錢，你都買不到快樂。</span></span
          >
        </div>
        <div>
          <span class="term">不接名詞</span>
          <span
            ><NoteMark
              sentence="However much I eat, I'm still hungry."
              :marks="['However much']"
            /><span class="translation">不管我吃多少，我還是餓。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="no matter how 的意思和用法跟 however 一樣" mark="However">
      <div class="rows is-labeled">
        <div>
          <span class="term">副詞</span>
          <span
            ><NoteMark
              sentence="No matter how hard he works, his boss is never happy."
              :marks="['No matter how hard']"
            /><span class="translation">不管他多努力工作，他的老闆從來都不滿意。</span></span
          >
        </div>
        <div>
          <span class="term">many + 複數名詞</span>
          <span
            ><NoteMark
              sentence="No matter how many times I call her, she doesn't answer."
              :marks="['No matter how many times']"
            /><span class="translation">不管我打給她幾次，她都不接。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="unless 的意思是除非，等於 if ... not" mark="unless">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'you won’t lose weight', role: '主要子句', kind: 'dim' },
          { t: 'unless', role: '除非', kind: 'key', ring: true },
          { t: 'you count your calories.', role: '主詞 + 現在式' },
        ]"
      />
      <p class="remark">如果你不計算卡路里，就不會變瘦。</p>
    </NoteSlide>

    <NoteSlide title="unless 子句講未來的事，動詞也用現在式" mark="count">
      <div class="rows is-labeled">
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="I'll go to the beach unless it rains." :marks="['rains']" /><span
              class="translation"
              >除非下雨，不然我會去海邊。</span
            ></span
          >
        </div>
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="Unless you hurry, you'll miss the train."
              :marks="['hurry']"
            /><span class="translation">除非你快一點，不然你會趕不上火車。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>unless</code> 子句放在句首時，後面加逗號。</p>
    </NoteSlide>

    <NoteSlide title="exercise 表示運動這件事時是不可數名詞" mark="exercise">
      <div class="rows is-labeled">
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark
              sentence="You should get some exercise every day."
              :marks="['get some exercise']"
            /><span class="translation">你應該每天做一些運動。</span></span
          >
        </div>
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark
              sentence="How much exercise do you get every week?"
              :marks="['How much exercise', 'get']"
            /><span class="translation">你每個星期做多少運動？</span></span
          >
        </div>
        <div>
          <span class="term">do</span>
          <span
            ><NoteMark
              sentence="My sister does a lot of exercise, but she doesn't lose weight."
              :marks="['does a lot of exercise']"
            /><span class="translation">我姊姊做很多運動，但她沒有變瘦。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>exercise</code> 前面不加 <code>an</code>，後面不加 <code>-&#x2060;s</code>。
      </p>
    </NoteSlide>
  </NoteDeck>
</template>
