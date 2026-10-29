<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-time-105, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="shortly 放在句尾，表示不久之後">
      <NoteWords
        :size="34"
        :parts="[
          { t: 'The bus', role: '主詞', kind: 'dim' },
          { t: 'will arrive', role: '助動詞 + 動詞' },
          { t: 'shortly.', role: '時間副詞', kind: 'key' },
        ]"
      />
      <p class="translation">公車馬上就到了。</p>
    </NoteSlide>

    <NoteSlide title="instantly 也可以放在一般動詞前面" mark="shortly">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She', role: '主詞', kind: 'dim' },
          { t: 'instantly', role: '時間副詞', kind: 'key' },
          { t: 'recognised', role: '一般動詞' },
          { t: 'her mother\'s laugh.', role: '受詞' },
        ]"
      />
      <p class="translation">她馬上就認出那是她媽媽的笑聲。</p>
    </NoteSlide>

    <NoteSlide title="in advance 和 beforehand 表示事先，放在句尾">
      <div class="rows is-labeled">
        <div>
          <span class="term">in advance</span>
          <span
            ><NoteMark
              sentence="We booked our tickets two months in advance."
              :marks="['in advance']"
            /><span class="translation">我們提前兩個月訂了票。</span></span
          >
        </div>
        <div>
          <span class="term">beforehand</span>
          <span
            ><NoteMark
              sentence="I always check the weather beforehand."
              :marks="['beforehand']"
            /><span class="translation">我總是事先查天氣。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="previously 表示以前，simultaneously 表示同時">
      <div class="rows is-labeled">
        <div>
          <span class="term">previously</span>
          <span
            ><NoteMark
              sentence="She previously worked as a teacher."
              :marks="['previously']"
            /><span class="translation">她以前當過老師。</span></span
          >
        </div>
        <div>
          <span class="term">simultaneously</span>
          <span
            ><NoteMark
              sentence="The two phones rang simultaneously."
              :marks="['simultaneously']"
            /><span class="translation">兩支電話同時響了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="in advance 前面不加 before">
      <NoteFix
        wrong="You have to book before in advance."
        right="You have to book in advance."
        fix="book in advance"
      />
    </NoteSlide>

    <NoteSlide title="in advance 的 in 不能省略">
      <NoteFix wrong="Please pay advance." right="Please pay in advance." fix="in advance" />
    </NoteSlide>

    <NoteSlide title="放在動詞前面要用副詞 instantly">
      <NoteFix
        wrong="She instant recognised her mother's voice on the phone."
        right="She instantly recognised her mother's voice on the phone."
        fix="instantly"
      />
    </NoteSlide>

    <NoteSlide title="beforehand 後面不接名詞">
      <NoteFix
        wrong="Please phone the hotel beforehand your arrival."
        right="Please phone the hotel before your arrival."
        fix="before"
      />
    </NoteSlide>

    <NoteSlide title="temporarily 表示之後會恢復，permanently 表示不會再改變">
      <div class="rows is-labeled">
        <div>
          <span class="term">temporarily</span>
          <span
            ><NoteMark
              sentence="The bakery on our street is temporarily closed for repairs."
              :marks="['temporarily']"
            /><span class="translation">我們這條街上的麵包店因為整修暫時關閉。</span></span
          >
        </div>
        <div>
          <span class="term">permanently</span>
          <span
            ><NoteMark
              sentence="The old bookshop by the station is permanently closed."
              :marks="['permanently']"
            /><span class="translation">車站旁邊那家老書店永久停業了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
