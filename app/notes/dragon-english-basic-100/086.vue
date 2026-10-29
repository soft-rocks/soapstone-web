<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 086, as slides, in the order of notes/dragon-english-basic-100/086.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="There is / There are 表示某個地方有某個東西或人" mark="There are">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'There', kind: 'dim' },
          { t: 'are', role: 'be 動詞', kind: 'key' },
          { t: 'four people', role: '複數名詞', kind: 'key' },
          { t: 'in my family.', role: '地點' },
        ]"
      />
      <p class="remark">
        說家裡有幾個人，用 <code>There are</code> 加數字和 <code>people in my family</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="be 動詞跟著後面的名詞變化" mark="are">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞<br /><i>are</i></span>
          <span
            ><NoteMark
              sentence="There are two parks near my house."
              :marks="['are', 'parks']"
            /><span class="translation">我家附近有兩座公園。</span></span
          >
        </div>
        <div>
          <span class="term">單數名詞<br /><i>is</i></span>
          <span
            ><NoteMark
              sentence="There is a bookstore near the station."
              :marks="['is', 'a bookstore']"
            /><span class="translation">車站附近有一家書店。</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞<br /><i>is</i></span>
          <span
            ><NoteMark sentence="There is some milk in the fridge." :marks="['is', 'milk']" /><span
              class="translation"
              >冰箱裡有一些牛奶。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="過去用 was / were，否定加 not，問句把 be 動詞放到 there 前面"
      mark="There are"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark
              sentence="There was a big earthquake in Kobe in 1995."
              :marks="['was']"
            /><span class="translation">1995 年神戶發生了大地震。</span></span
          >
        </div>
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark sentence="There aren't any buses after ten." :marks="['aren\'t']" /><span
              class="translation"
              >十點以後沒有公車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Is there a bank near here?" :marks="['Is there']" /><span
              class="translation"
              >這附近有銀行嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="序數表示順序，前面通常加 the" mark="the fifth floor">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'on', kind: 'dim' },
          { t: 'the', role: '冠詞', kind: 'key' },
          { t: 'fifth', role: '序數', kind: 'key' },
          { t: 'floor', role: '名詞' },
          { t: 'of this building.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>the fifth floor</code> 是五樓。</p>
    </NoteSlide>

    <NoteSlide title="大部分的序數在數字後面加 -th，first、second、third 不規則" mark="fifth">
      <div class="rows">
        <div>
          <span class="term">four → <b>fourth</b></span
          ><span class="gloss">加 -th</span>
        </div>
        <div>
          <span class="term">ten → <b>tenth</b></span
          ><span class="gloss">加 -th</span>
        </div>
        <div>
          <span class="term">one、two、three → <b>first</b>、<b>second</b>、<b>third</b></span
          ><span class="gloss">不規則</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="five、twelve 把 ve 改成 f，twenty 把 y 改成 ie，再加 -th" mark="fifth">
      <div class="rows">
        <div>
          <span class="term">five → <b>fifth</b></span
          ><span class="gloss">ve 改成 f</span>
        </div>
        <div>
          <span class="term">twelve → <b>twelfth</b></span
          ><span class="gloss">ve 改成 f</span>
        </div>
        <div>
          <span class="term">twenty → <b>twentieth</b></span
          ><span class="gloss">y 改成 ie</span>
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
