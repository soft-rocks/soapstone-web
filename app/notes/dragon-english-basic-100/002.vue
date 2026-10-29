<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 002, as slides, in the order of notes/dragon-english-basic-100/002.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="句首的 it 只佔主詞的位置，真正的主詞在後面">
      <NoteWords
        :size="24"
        :move="{ from: 2, to: 0 }"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'key' },
          { t: 'is very dangerous', kind: 'dim' },
          {
            t: 'to cross a busy street before the light turns green.',
            role: '真正的主詞',
            kind: 'key',
          },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">真正的主詞是 <code>to</code> 不定詞片段。</p>
    </NoteSlide>

    <NoteSlide title="時間子句講一般的情況，用現在式" mark="turns">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'before', role: '連接詞', kind: 'key' },
          { t: 'the light', role: '主詞' },
          { t: 'turns', role: '現在式', kind: 'key', ring: true },
          { t: 'green.', kind: 'dim' },
        ]"
      />
      <p class="remark">
        <code>before</code>、<code>after</code>、<code>when</code>、<code>until</code>、<code
          >as soon as</code
        >
        帶出時間子句。
      </p>
    </NoteSlide>

    <NoteSlide title="時間子句講未來的事，動詞也用現在式，不用 will" mark="turns">
      <div class="rows is-labeled">
        <div>
          <span class="term">until</span>
          <span
            ><NoteMark sentence="Wait here until the light turns green." :marks="['turns']" /><span
              class="translation"
              >在這裡等到燈號變綠。</span
            ></span
          >
        </div>
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark sentence="I'll call you when I get home." :marks="['get']" /><span
              class="translation"
              >我到家的時候會打電話給你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">as soon as</span>
          <span
            ><NoteMark
              sentence="We will start the meeting as soon as everyone arrives."
              :marks="['arrives']"
            /><span class="translation">每個人一到，我們就開始開會。</span></span
          >
        </div>
      </div>
      <p class="remark">
        主要子句可以用 <code>will</code>、<code>can</code>、<code>let's</code> 或祈使句。
      </p>
    </NoteSlide>

    <NoteSlide title="turn 後面接形容詞，表示狀態改變" mark="turns green">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'the light', role: '主詞' },
          { t: 'turns', role: '連綴動詞', kind: 'key' },
          { t: 'green.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="remark">形容詞描述主詞變成什麼樣子。</p>
    </NoteSlide>

    <NoteSlide title="顏色、天氣、臉色、食物的變化常用 turn" mark="turns green">
      <div class="rows is-labeled">
        <div>
          <span class="term">變紅</span>
          <span
            ><NoteMark
              sentence="The light turned red, so all the cars stopped."
              :marks="['turned red']"
            /><span class="translation">燈號變紅了，所以所有的車都停下來。</span></span
          >
        </div>
        <div>
          <span class="term">變黃</span>
          <span
            ><NoteMark sentence="The leaves turn yellow in autumn." :marks="['turn yellow']" /><span
              class="translation"
              >葉子到了秋天會變黃。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">講天氣時，主詞用 <code>it</code>。</p>
    </NoteSlide>
  </NoteDeck>
</template>
