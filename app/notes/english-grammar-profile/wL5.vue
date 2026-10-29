<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-est, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="短母音加一個子音，重複子音再加 -est" mark="biggest">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'July is the', kind: 'dim' },
          { t: 'hottest', role: 'hot + t + -est', kind: 'key', ring: true },
          { t: 'month here.', kind: 'dim' },
        ]"
      />
      <p class="translation">七月是這裡最熱的月份。</p>
    </NoteSlide>

    <NoteSlide title="big 重複子音，old 直接加 -est" mark="oldest">
      <div class="rows is-labeled">
        <div>
          <span class="term">big → biggest</span>
          <span
            ><NoteMark
              sentence="Elephants are the biggest animals on land."
              :marks="['biggest']"
            /><span class="translation">大象是陸地上最大的動物。</span></span
          >
        </div>
        <div>
          <span class="term">old → oldest</span>
          <span
            ><NoteMark
              sentence="Rome has some of the biggest and oldest churches in Europe."
              :marks="['oldest']"
            /><span class="translation">羅馬有一些歐洲最大也最古老的教堂。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="兩個最高級共用一個 the" mark="the biggest and oldest">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'This is', kind: 'dim' },
          { t: 'the', role: '共用的 the', kind: 'key', ring: true },
          { t: 'hottest and driest', role: '最高級 + and + 最高級', kind: 'key' },
          { t: 'part of the country.', kind: 'dim' },
        ]"
      />
      <p class="translation">這是這個國家最熱也最乾的地區。</p>
    </NoteSlide>

    <NoteSlide title="big 要重複 g" mark="biggest">
      <NoteFix
        wrong="It's the bigest city in the country."
        right="It's the biggest city in the country."
        fix="biggest"
      />
    </NoteSlide>

    <NoteSlide title="tall 的字尾已經是兩個子音" mark="oldest">
      <NoteFix
        wrong="He's the talllest boy in the class."
        right="He's the tallest boy in the class."
        fix="tallest"
      />
    </NoteSlide>

    <NoteSlide title="加了 -est 就不加 most" mark="biggest">
      <NoteFix
        wrong="August is the most hottest month."
        right="August is the hottest month."
        fix="the hottest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
