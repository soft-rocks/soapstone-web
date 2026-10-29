<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-this-already-mentioned, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this 指前面說過的東西" mark="this house,">
      <div class="rows is-labeled">
        <div>
          <span class="term">前一句</span>
          <span
            ><NoteMark
              sentence="The house is in a quiet street near the park."
              :marks="['The house']"
            /><span class="translation">這間房子在公園附近一條安靜的街上。</span></span
          >
        </div>
        <div>
          <span class="term">後一句</span>
          <span
            ><NoteMark
              sentence="If you are interested in this house, please call me on my mobile phone."
              :marks="['this house,']"
            /><span class="translation">如果您對這間房子有興趣，請打我的手機。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="第一次用 a，再提到用 this" mark="this house,">
      <div class="rows is-labeled">
        <div>
          <span class="term">第一次</span>
          <span
            ><NoteMark
              sentence="There is a problem with my heating."
              :marks="['a problem']"
            /><span class="translation">我家的暖氣有問題。</span></span
          >
        </div>
        <div>
          <span class="term">再提到</span>
          <span
            ><NoteMark
              sentence="Could you send someone to check this problem?"
              :marks="['this problem?']"
            /><span class="translation">可以請您派人來看看這個問題嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 指前面說過的一件事" mark="this">
      <div class="rows is-labeled">
        <div>
          <span class="term">情況</span>
          <span
            ><NoteMark
              sentence="We are very unhappy about this situation."
              :marks="['this situation.']"
            /><span class="translation">我們對這個情況很不滿。</span></span
          >
        </div>
        <div>
          <span class="term">主意</span>
          <span
            ><NoteMark sentence="What do you think of this idea?" :marks="['this idea?']" /><span
              class="translation"
              >你覺得這個主意怎麼樣？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句拆解" mark="this house,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If you are interested in', role: '條件', kind: 'dim' },
          { t: 'this house,', role: '前面說過的東西', kind: 'key' },
          { t: 'please call me', role: '主要子句', kind: 'dim' },
          { t: 'on my mobile phone.', role: '方法', kind: 'dim' },
        ]"
      />
      <p class="translation">如果您對這間房子有興趣，請打我的手機。</p>
    </NoteSlide>

    <NoteSlide title="再提到同一個東西用 this" mark="this">
      <NoteFix
        wrong="I bought a new lamp. A lamp is very bright."
        right="I bought a new lamp. This lamp is very bright."
        fix="This lamp"
      />
    </NoteSlide>

    <NoteSlide title="interested 後面接 in" mark="interested in">
      <NoteFix
        wrong="If you are interested this house, please call me."
        right="If you are interested in this house, please call me."
        fix="interested in"
      />
    </NoteSlide>

    <NoteSlide title="先說出問題，再用 this" mark="this">
      <NoteFix
        wrong="This problem is very serious. Please help me."
        right="My computer won't start. This problem is very serious. Please help me."
        fix="My computer won't start."
      />
    </NoteSlide>

    <NoteSlide title="前面是複數，後面用 these">
      <NoteFix
        wrong="I found two old letters in the box. This letter is from my grandfather."
        right="I found two old letters in the box. These letters are from my grandfather."
        fix="These letters are"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
