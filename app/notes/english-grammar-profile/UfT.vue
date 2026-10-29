<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-experiences, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="現在完成式說這輩子到現在的經驗" mark="I've seen">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ve seen', role: 'have + 過去分詞', kind: 'key', ring: true },
          { t: 'the British Museum.', role: '受詞' },
        ]"
      />
      <p class="translation">我去看過大英博物館。</p>
      <p class="remark">說話者沒有說是哪一年去的。</p>
    </NoteSlide>

    <NoteSlide title="說經驗常加 ever、never、次數" mark="I've seen">
      <div class="rows is-labeled">
        <div>
          <span class="term">ever<br /><i>問句</i></span>
          <span
            ><NoteMark
              sentence="There's a new restaurant on our street. Have you ever eaten Thai food?"
              :marks="['ever']"
            /><span class="translation">我們這條街開了一家新餐廳。你吃過泰國菜嗎？</span></span
          >
        </div>
        <div>
          <span class="term">never<br /><i>從來沒有</i></span>
          <span
            ><NoteMark
              sentence="I'd love to see Paris. I've never been to France."
              :marks="['never']"
            /><span class="translation">我好想去看看巴黎。我從來沒去過法國。</span></span
          >
        </div>
        <div>
          <span class="term">次數<br /><i>句尾</i></span>
          <span
            ><NoteMark
              sentence="I love the shows on Broadway. I've been to New York twice."
              :marks="['twice.']"
            /><span class="translation">我很愛百老匯的表演。我去過紐約兩次。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="been to 去過，gone to 去了還沒回來" mark="I've seen">
      <div class="rows is-labeled">
        <div>
          <span class="term">been to<br /><i>已經回來</i></span>
          <span
            ><NoteMark
              sentence="Ask my mum about Tokyo. She's been to Japan."
              :marks="['been to']"
            /><span class="translation">去問我媽媽東京的事。她去過日本。</span></span
          >
        </div>
        <div>
          <span class="term">gone to<br /><i>還在那裡</i></span>
          <span
            ><NoteMark
              sentence="My mum isn't home this week. She's gone to Japan."
              :marks="['gone to']"
            /><span class="translation">我媽媽這個禮拜不在家。她去日本了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說出過去的時間，用過去簡單式" mark="I've seen">
      <NoteFix
        wrong="My parents have visited the Louvre in 2019."
        right="My parents visited the Louvre in 2019."
        fix="visited"
      />
    </NoteSlide>

    <NoteSlide title="去過、已經回來，用 been to" mark="I've seen">
      <NoteFix
        wrong="My boss has gone to Paris three times."
        right="My boss has been to Paris three times."
        fix="been to"
      />
    </NoteSlide>

    <NoteSlide title="never 已經是否定，不加 not" mark="I've seen">
      <NoteFix
        wrong="My dad hasn't never tried Korean food."
        right="My dad has never tried Korean food."
        fix="has never"
      />
    </NoteSlide>

    <NoteSlide title="先說有經驗，再用過去簡單式說細節" mark="I've seen">
      <div class="rows is-labeled">
        <div>
          <span class="term">經驗</span>
          <span
            ><NoteMark sentence="I've been to Rome." :marks="['I\'ve been']" /><span
              class="translation"
              >我去過羅馬。</span
            ></span
          >
        </div>
        <div>
          <span class="term">細節</span>
          <span
            ><NoteMark
              sentence="I went there with my school in 2018."
              :marks="['went', 'in 2018.']"
            /><span class="translation">我二〇一八年跟學校一起去的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加 just 說剛發生的一件事" mark="I've seen">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ve', kind: 'dim' },
          { t: 'just', role: '剛剛', kind: 'key', ring: true },
          { t: 'seen your brother at the bus stop.', kind: 'dim' },
          { t: 'He\'s waiting for you.', kind: 'dim' },
        ]"
      />
      <p class="translation">我剛在公車站看到你哥。他在等你。</p>
    </NoteSlide>

    <NoteSlide title="已經去世的人的經驗，用過去簡單式" mark="I've seen">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My late grandfather loved to travel.', role: '已經去世', kind: 'dim' },
          { t: 'He', kind: 'dim' },
          { t: 'visited', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'China twice.', kind: 'dim' },
        ]"
      />
      <p class="translation">我已故的爺爺很愛旅行。他去過中國兩次。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
