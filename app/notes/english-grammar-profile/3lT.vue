<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-fronting-adverbs, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="副詞放在句首，主詞和動詞的順序不變">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Suddenly,', role: '副詞', kind: 'key' },
          { t: 'the door', role: '主詞' },
          { t: 'opened.', role: '動詞' },
        ]"
      />
      <p class="translation">突然，門開了。</p>
    </NoteSlide>

    <NoteSlide title="句首的副詞說出時間、地點、方式或頻率" mark="Suddenly">
      <div class="rows is-labeled">
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark sentence="Then I remembered her name." :marks="['Then']" /><span
              class="translation"
              >然後我想起了她的名字。</span
            ></span
          >
        </div>
        <div>
          <span class="term">地點</span>
          <span
            ><NoteMark sentence="Outside, it was raining hard." :marks="['Outside']" /><span
              class="translation"
              >外面雨下得很大。</span
            ></span
          >
        </div>
        <div>
          <span class="term">方式</span>
          <span
            ><NoteMark sentence="Quickly, she picked up the phone." :marks="['Quickly']" /><span
              class="translation"
              >她很快地拿起了電話。</span
            ></span
          >
        </div>
        <div>
          <span class="term">頻率</span>
          <span
            ><NoteMark sentence="Sometimes I walk to work." :marks="['Sometimes']" /><span
              class="translation"
              >有時候我走路上班。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="放在句首先說出地點，放在句尾先說出發生的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark sentence="Upstairs, the baby was crying." :marks="['Upstairs']" /><span
              class="translation"
              >樓上，寶寶在哭。</span
            ></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="The baby was crying upstairs." :marks="['upstairs']" /><span
              class="translation"
              >寶寶在樓上哭。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="故事裡用句首的副詞帶出下一件事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We waited for an hour.', kind: 'dim' },
          { t: 'Finally,', role: '副詞', kind: 'key' },
          { t: 'the bus came.', role: '下一件事' },
        ]"
      />
      <p class="translation">我們等了一個小時。公車終於來了。</p>
    </NoteSlide>

    <NoteSlide title="句首用副詞，不用形容詞" mark="Suddenly">
      <NoteFix wrong="Sudden, the door opened." right="Suddenly, the door opened." fix="Suddenly" />
    </NoteSlide>

    <NoteSlide title="時間、地點、方式的副詞放在句首時不倒裝">
      <NoteFix
        wrong="Slowly did the man stand up."
        right="Slowly, the man stood up."
        fix="the man stood"
      />
    </NoteSlide>

    <NoteSlide title="副詞放在句首，句子裡不再重複">
      <NoteFix
        wrong="Quickly I opened quickly the envelope."
        right="Quickly, I opened the envelope."
        fix="opened the"
      />
    </NoteSlide>

    <NoteSlide title="always 不放在句首，放在主詞後面">
      <NoteFix wrong="Always I get up at six." right="I always get up at six." fix="I always" />
    </NoteSlide>

    <NoteSlide title="Here 後面接 come，主詞放在動詞後面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Here', role: 'Here' },
          { t: 'comes', role: '動詞', kind: 'key' },
          { t: 'the bus.', role: '主詞', kind: 'key' },
        ]"
      />
      <p class="translation">公車來了。</p>
    </NoteSlide>

    <NoteSlide title="否定的副詞放在句首，後面倒裝">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Never', role: '否定的副詞' },
          { t: 'have', role: '助動詞', kind: 'key' },
          { t: 'I', role: '主詞', kind: 'key' },
          { t: 'seen so much snow.', kind: 'dim' },
        ]"
      />
      <p class="translation">我從來沒看過這麼多雪。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
