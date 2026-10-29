<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-instructions-and-directions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="you turn 是指路，說對方下一步要做的事">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Then', role: '順序', kind: 'dim' },
          { t: 'you', role: '主詞', ring: true },
          { t: 'turn', role: '原形動詞', kind: 'key', ring: true },
          { t: 'right,', role: '方向' },
          { t: 'and my house is on your left.', kind: 'dim' },
        ]"
      />
      <p class="translation">然後你右轉，我家就在你的左手邊。</p>
    </NoteSlide>
    <NoteSlide title="現在簡單式可以指路，也可以說明步驟" mark="turn">
      <div class="rows is-labeled">
        <div>
          <span class="term">指路</span>
          <span
            ><NoteMark
              sentence="You go straight on for about fifty metres."
              :marks="['You', 'go']"
            /><span class="translation">你直走大約五十公尺。</span></span
          >
        </div>
        <div>
          <span class="term">步驟</span>
          <span
            ><NoteMark
              sentence="You press this button, and the machine starts."
              :marks="['You', 'press']"
            /><span class="translation">你按這個鈕，機器就會啟動。</span></span
          >
        </div>
        <div>
          <span class="term">結果</span>
          <span
            ><NoteMark
              sentence="You turn left, and the station is in front of you."
              :marks="['is']"
            /><span class="translation">你左轉，車站就在你前面。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="First 和 Then 說出步驟的順序" mark="Then">
      <div class="rows is-labeled">
        <div>
          <span class="term">First</span>
          <span
            ><NoteMark sentence="First you take the number 5 bus." :marks="['First']" /><span
              class="translation"
              >首先你搭五號公車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">Then</span>
          <span
            ><NoteMark sentence="Then you get off at the park." :marks="['Then']" /><span
              class="translation"
              >然後你在公園下車。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">用 you 加現在簡單式，口氣比祈使句輕鬆。</p>
    </NoteSlide>
    <NoteSlide title="指路常用這些說法" mark="turn">
      <div class="rows is-labeled">
        <div>
          <span class="term">turn left / right</span>
          <span>左轉、右轉</span>
        </div>
        <div>
          <span class="term">go straight on</span>
          <span>直走</span>
        </div>
        <div>
          <span class="term">go past</span>
          <span>經過</span>
        </div>
        <div>
          <span class="term">cross</span>
          <span>穿過</span>
        </div>
        <div>
          <span class="term">on your left / right</span>
          <span>在你的左手邊、右手邊</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="一步一步的指示不用 will" mark="turn">
      <NoteFix
        wrong="Then you will turn right at the bank."
        right="Then you turn right at the bank."
        :fix="['turn']"
      />
    </NoteSlide>
    <NoteSlide title="左手邊用 on" mark="turn">
      <NoteFix wrong="The café is in your left." right="The café is on your left." :fix="['on']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
