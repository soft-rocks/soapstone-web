<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 034, as slides, in the order of notes/dragon-english-basic-100/034.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="wish 後面的子句講現在做不到的事，用 could 加動詞原形"
      mark="wish they could live"
    >
      <NoteWords
        :size="26"
        :parts="[
          { t: 'People', role: '主詞', kind: 'dim' },
          { t: 'wish', role: '動詞', kind: 'key' },
          { t: 'they', role: '主詞' },
          { t: 'could live', role: 'could + 動詞原形', kind: 'key' },
          { t: 'forever.', kind: 'dim' },
        ]"
      />
      <p class="remark">人們想永遠活著，但這件事做不到。</p>
    </NoteSlide>

    <NoteSlide title="假設句的主要子句可以用 there would be 加名詞" mark="there would be">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'if this wish came true,', role: 'if + 過去式', kind: 'dim' },
          { t: 'there would be', role: '假設的結果', kind: 'key' },
          { t: 'too many people', role: '名詞' },
          { t: 'on the earth.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>there would be</code> 表示那時候會有某樣東西。</p>
    </NoteSlide>

    <NoteSlide title="if 子句的過去式也可以講有可能發生的事" mark="if this wish came true">
      <div class="rows is-labeled">
        <div>
          <span class="term">有可能發生</span>
          <span
            ><NoteMark
              sentence="If everyone came, there would be no seats left."
              :marks="['everyone came']"
            /><span class="translation">如果每個人都來，就不會有空位了。</span></span
          >
        </div>
        <div>
          <span class="term">現在不是這樣</span>
          <span
            ><NoteMark
              sentence="If there were no trains, there would be more cars on the road."
              :marks="['there were no trains']"
            /><span class="translation">如果沒有火車，路上就會有更多車。</span></span
          >
        </div>
      </div>
      <p class="remark">說話的人把這兩個情況都當成假設來說。</p>
    </NoteSlide>

    <NoteSlide title="too many 接可數名詞複數，too much 接不可數名詞" mark="too many people">
      <div class="rows is-labeled">
        <div>
          <span class="term">too many<br /><i>可數名詞複數</i></span>
          <span
            ><NoteMark
              sentence="There are too many people on this train."
              :marks="['too many people']"
            /><span class="translation">這班火車上人太多了。</span></span
          >
        </div>
        <div>
          <span class="term">too much<br /><i>不可數名詞</i></span>
          <span
            ><NoteMark
              sentence="I drank too much coffee today."
              :marks="['too much coffee']"
            /><span class="translation">我今天喝了太多咖啡。</span></span
          >
        </div>
      </div>
      <p class="remark">
        數量超過需要，造成問題。原句的 <code>people</code> 是可數名詞複數，所以用
        <code>too many</code>。
      </p>
    </NoteSlide>
  </NoteDeck>
</template>
