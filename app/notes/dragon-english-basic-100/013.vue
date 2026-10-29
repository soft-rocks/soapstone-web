<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 013, as slides, in the order of notes/dragon-english-basic-100/013.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="will 可以表示對別人的承諾">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I’ll', role: 'I will', kind: 'key', ring: true },
          { t: 'call', role: '動詞原形', kind: 'key' },
          { t: 'you', role: '聽話的人' },
          { t: 'when I get to Narita Airport.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">
        原句是對聽話的人承諾會打電話。口語常把 <code>will</code> 縮寫成 <code>’ll</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="will 也可以表示說話當下才做的決定" mark="I’ll">
      <div class="rows is-labeled">
        <div>
          <span class="term">電話響了</span>
          <span
            ><NoteMark
              sentence="“The phone is ringing.” “I'll get it.”"
              :marks="['I\'ll get']"
            /><span class="translation">「電話在響。」「我來接。」</span></span
          >
        </div>
        <div>
          <span class="term">覺得冷</span>
          <span
            ><NoteMark sentence="It's cold. I'll close the window." :marks="['I\'ll close']" /><span
              class="translation"
              >好冷，我來關窗戶。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時間子句講未來的事，也用現在式" mark="get">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I’ll call you', role: '主要子句', kind: 'dim' },
          { t: 'when', role: '連接詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'get', role: '現在式', kind: 'key', ring: true },
          { t: 'to Narita Airport.', kind: 'dim' },
        ]"
      />
      <p class="remark">主要子句常用 <code>will</code> 或祈使句。</p>
    </NoteSlide>

    <NoteSlide title="when、before、after、as soon as 帶出時間子句" mark="when">
      <div class="rows is-labeled">
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark sentence="I'll text you when I arrive." :marks="['when I arrive']" /><span
              class="translation"
              >我到的時候會傳訊息給你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">before</span>
          <span
            ><NoteMark
              sentence="I'll clean my room before Mom comes home."
              :marks="['before Mom comes']"
            /><span class="translation">我會在媽媽回家之前把房間打掃好。</span></span
          >
        </div>
        <div>
          <span class="term">after</span>
          <span
            ><NoteMark
              sentence="We'll go to the park after it stops raining."
              :marks="['after it stops']"
            /><span class="translation">雨停了之後我們會去公園。</span></span
          >
        </div>
        <div>
          <span class="term">as soon as</span>
          <span
            ><NoteMark
              sentence="I'll call you as soon as I get to the hotel."
              :marks="['as soon as I get']"
            /><span class="translation">我一到飯店就會打電話給你。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時間子句放在句首時，後面加逗號" mark="when I get to Narita Airport">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'When the rain stops,', role: '時間子句', kind: 'key' },
          { t: 'we\'ll go out.', role: '主要子句' },
        ]"
      />
      <p class="translation">雨停的時候，我們就出去。</p>
    </NoteSlide>

    <NoteSlide title="時間子句的動作先做完時，可以用現在完成式" mark="get">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I\'ll lend you the book', role: '主要子句', kind: 'dim' },
          { t: 'when', role: '連接詞' },
          { t: 'I', role: '主詞' },
          { t: 'have finished', role: '現在完成式', kind: 'key' },
          { t: 'it.', kind: 'dim' },
        ]"
      />
      <p class="translation">我看完這本書會借你。</p>
      <p class="remark">先看完書，主要子句的動作才發生。</p>
    </NoteSlide>
  </NoteDeck>
</template>
