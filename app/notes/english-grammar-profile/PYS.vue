<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-complex-ordering-of-past-events, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="only to 接出沒料到的結果" mark="only to find out">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'I bought your product,', role: '第一件事' },
          { t: 'only to', role: '沒料到的結果', kind: 'key', ring: true },
          { t: 'find out', role: '原形動詞', kind: 'key' },
          {
            t: 'that its quality did not match your advertisement.',
            role: 'that 子句',
            kind: 'dim',
          },
        ]"
      />
      <p class="translation">我買了你們的產品，結果發現品質跟廣告說的不一樣。</p>
      <p class="remark">說話者寫信投訴咖啡機。</p>
    </NoteSlide>

    <NoteSlide title="After having 加過去分詞，說先完成的事" mark="I bought">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'After having read your article,', role: '第一件事', kind: 'key', ring: true },
          { t: 'I decided to write to you.', role: '過去簡單式' },
        ]"
      />
      <p class="translation">我讀了你的文章以後，決定寫信給你。</p>
    </NoteSlide>

    <NoteSlide title="分詞片語和 Following 加名詞" mark="I bought">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark
              sentence="Opening the box, I saw that the screen was broken."
              :marks="['Opening the box,']"
            /><span class="translation">我打開箱子，看到螢幕破了。</span></span
          >
        </div>
        <div>
          <span class="term">Following</span>
          <span
            ><NoteMark
              sentence="Following advice from a friend, I bought the English version of your product."
              :marks="['Following advice from a friend,']"
            /><span class="translation">我聽了朋友的建議，買了你們產品的英文版。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="which 代替前面整件事" mark="I bought your product,">
      <NoteMark
        sentence="My flight was cancelled, which ruined the first day of my holiday."
        :marks="['which ruined']"
      />
      <p class="translation">我的班機取消了，假期的第一天就這樣毀了。</p>
    </NoteSlide>

    <NoteSlide title="only to 後面接原形動詞" mark="find">
      <NoteFix
        wrong="We hurried to the cinema, only to found that the film had started."
        right="We hurried to the cinema, only to find that the film had started."
        fix="find"
      />
    </NoteSlide>

    <NoteSlide title="分詞片語的主詞和主句相同" mark="I bought">
      <NoteFix
        wrong="Walking into the room, the lights went out."
        right="Walking into the room, I saw the lights go out."
        fix="I saw"
      />
    </NoteSlide>

    <NoteSlide title="主句用過去簡單式" mark="I bought">
      <NoteFix
        wrong="After having looked at three flats, we choose the one near the park."
        right="After having looked at three flats, we chose the one near the park."
        fix="chose"
      />
    </NoteSlide>

    <NoteSlide title="正面的結果用 and" mark="only to">
      <NoteFix
        wrong="I studied hard, only to pass the exam easily."
        right="I studied hard and passed the exam easily."
        fix="and passed"
      />
    </NoteSlide>

    <NoteSlide title="表示目的的 to 和 only to" mark="only to">
      <div class="rows is-labeled">
        <div>
          <span class="term">目的</span>
          <span
            ><NoteMark
              sentence="We needed something for breakfast. I went to the shop to buy some bread."
              :marks="['to buy']"
            /><span class="translation">我們需要早餐吃的東西。我去店裡買麵包。</span></span
          >
        </div>
        <div>
          <span class="term">結果</span>
          <span
            ><NoteMark
              sentence="It was a holiday. I went to the shop, only to find that it was closed."
              :marks="['only to find']"
            /><span class="translation">那天是假日。我去了店裡，結果發現店沒開。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="after 已經說出先後" mark="I bought">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去完成式</span>
          <span
            ><NoteMark
              sentence="The waiter added a dessert to our bill. After I had paid, I noticed the mistake."
              :marks="['had paid,']"
            /><span class="translation"
              >服務生在我們的帳單上多加了一份甜點。我付完錢以後才發現錯了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark
              sentence="The shop charged me twice for the milk. After paying, I noticed the mistake."
              :marks="['paying,']"
            /><span class="translation"
              >店家的牛奶多算了我一次錢。付完錢以後，我才發現錯了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
