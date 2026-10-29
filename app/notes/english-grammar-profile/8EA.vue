<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-ordering-of-past-events, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="照發生的順序寫" mark="and then">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'waited', role: '第一件事', kind: 'key' },
          { t: 'for the suitcase for two days,', kind: 'dim' },
          { t: 'and then', role: '下一件事', kind: 'key', ring: true },
          { t: 'we', role: '主詞' },
          { t: 'bought', role: '第二件事', kind: 'key' },
          { t: 'new clothes.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們等行李箱等了兩天，後來就去買了新衣服。</p>
      <p class="remark">航空公司弄丟了說話者的行李箱。</p>
    </NoteSlide>

    <NoteSlide title="依序列出過去的事" mark="waited">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'I' },
          { t: 'got up,', role: '第一件事', kind: 'key' },
          { t: 'had', role: '第二件事', kind: 'key' },
          { t: 'a quick shower', kind: 'dim' },
          { t: 'and', role: '連接' },
          { t: 'caught', role: '第三件事', kind: 'key', ring: true },
          { t: 'the bus.', kind: 'dim' },
        ]"
      />
      <p class="translation">我起床，快速沖了澡，然後搭上公車。</p>
    </NoteSlide>

    <NoteSlide title="說出順序的詞" mark="and then">
      <div class="rows is-labeled">
        <div>
          <span class="term">first</span>
          <span><NoteMark sentence="First, we checked into the hotel." :marks="['First']" /></span>
        </div>
        <div>
          <span class="term">later</span>
          <span><NoteMark sentence="A week later, she called." :marks="['A week later']" /></span>
        </div>
        <div>
          <span class="term">in the end</span>
          <span
            ><NoteMark sentence="In the end, we called the dog Max." :marks="['In the end']"
          /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="每件事都用過去簡單式" mark="bought">
      <NoteFix
        wrong="We arrived at the hotel and then we go to the beach."
        right="We arrived at the hotel and then we went to the beach."
        fix="went"
      />
    </NoteSlide>

    <NoteSlide title="第一件事用 first" mark="and then">
      <NoteFix
        wrong="At first, we visited the museum."
        right="First, we visited the museum."
        fix="First"
      />
    </NoteSlide>

    <NoteSlide title="最後的結果用 in the end" mark="and then">
      <NoteFix
        wrong="At the end, we decided to stay at home."
        right="In the end, we decided to stay at home."
        fix="In the end"
      />
    </NoteSlide>

    <NoteSlide title="過去簡單式和過去完成式" mark="waited">
      <div class="rows is-labeled">
        <div>
          <span class="term">之後</span>
          <span
            ><NoteMark
              sentence="When I got to the station, the train left."
              :marks="['left']"
            /><span class="translation">我到車站的時候，火車才開走。</span></span
          >
        </div>
        <div>
          <span class="term">之前</span>
          <span
            ><NoteMark
              sentence="When I got to the station, the train had left."
              :marks="['had left']"
            /><span class="translation">我到車站的時候，火車已經開走了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="first 和 at first" mark="and then">
      <div class="rows is-labeled">
        <div>
          <span class="term">順序</span>
          <span
            ><NoteMark sentence="First, we called the hotel." :marks="['First']" /><span
              class="translation"
              >我們先打給飯店。</span
            ></span
          >
        </div>
        <div>
          <span class="term">一開始</span>
          <span
            ><NoteMark sentence="At first, the hotel seemed fine." :marks="['At first']" /><span
              class="translation"
              >一開始飯店看起來還好。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
