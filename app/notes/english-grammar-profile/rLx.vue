<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-there-is, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="there is 後面接一個人或一個東西">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'In my college', role: '地點', kind: 'dim' },
          { t: 'there is', role: 'there + be', kind: 'key' },
          { t: 'a big library.', role: '單數名詞片語', kind: 'key' },
        ]"
      />
      <p class="translation">我們學校有一座很大的圖書館。</p>
    </NoteSlide>

    <NoteSlide title="地點可以放在句尾，也可以放在句首" mark="In my college">
      <div class="rows is-labeled">
        <div>
          <span class="term">地點在句尾</span>
          <span
            ><NoteMark
              sentence="There is a small shop at the end of our road."
              :marks="['at the end of our road']"
            /><span class="translation">我們這條路的盡頭有一家小店。</span></span
          >
        </div>
        <div>
          <span class="term">地點在句首</span>
          <span
            ><NoteMark
              sentence="In our village there is a small church."
              :marks="['In our village']"
            /><span class="translation">我們村子裡有一座小教堂。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="口語常把 There is 縮寫成 There's" mark="there is">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'There\'s', role: 'There is', kind: 'key', ring: true },
          { t: 'a pharmacy', role: '單數名詞片語' },
          { t: 'next to the school.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">學校旁邊有一家藥局。</p>
    </NoteSlide>

    <NoteSlide title="說某個地方有東西，用 there is，不用 have" mark="there is">
      <NoteFix
        wrong="In my town have a big park."
        right="In my town there is a big park."
        fix="there is"
      />
    </NoteSlide>

    <NoteSlide title="句子要有 there" mark="there">
      <NoteFix
        wrong="Is a parcel for you by the front door."
        right="There is a parcel for you by the front door."
        fix="There"
      />
    </NoteSlide>

    <NoteSlide title="可數的單數名詞前面要有 a、an 或 one" mark="a">
      <NoteFix
        wrong="There is big supermarket near my flat."
        right="There is a big supermarket near my flat."
        fix="a"
      />
    </NoteSlide>

    <NoteSlide title="單數名詞用 there is" mark="is">
      <NoteFix
        wrong="There are a hospital in my village."
        right="There is a hospital in my village."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="兩個以上的東西用 there are" mark="there is">
      <NoteMark
        sentence="There are three swimming pools in the sports centre."
        :marks="['There are', 'three swimming pools']"
      />
      <p class="translation">運動中心有三座游泳池。</p>
    </NoteSlide>

    <NoteSlide title="說那個東西怎麼樣，用 it is" mark="there is">
      <NoteMark sentence="There's a park near my house. It's very big." :marks="['It\'s']" />
      <p class="translation">我家附近有一座公園。公園很大。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
