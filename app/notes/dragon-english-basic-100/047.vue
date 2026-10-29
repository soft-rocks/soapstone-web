<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 047, as slides, in the order of notes/dragon-english-basic-100/047.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="現在完成進行式表示動作從過去一直持續到現在" mark="has been decreasing">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'the birth rate', role: '主詞' },
          { t: 'has been decreasing', role: 'has been + 動詞-ing', kind: 'key' },
          { t: 'since 1985.', role: 'since + 時間' },
        ]"
      />
      <p class="translation">日本的出生率從 1985 年開始一直在下降。</p>
    </NoteSlide>

    <NoteSlide title="since 後面接時間點，for 後面接時間長度" mark="since 1985">
      <div class="rows is-labeled">
        <div>
          <span class="term">since</span>
          <span
            ><NoteMark
              sentence="It has been raining since this morning."
              :marks="['since this morning']"
            /><span class="translation">從今天早上開始一直在下雨。</span></span
          >
        </div>
        <div>
          <span class="term">for</span>
          <span
            ><NoteMark
              sentence="I have been waiting for you for an hour."
              :marks="['for an hour']"
            /><span class="translation">我已經等你等了一個小時。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="It costs 的 it 是形式主詞，真正的主詞是 to 不定詞片段" mark="it costs">
      <NoteWords
        :size="26"
        :move="{ from: 2, to: 0 }"
        :parts="[
          { t: 'it', role: '形式主詞', kind: 'key' },
          { t: 'costs a lot of money', role: 'cost + 金額' },
          { t: 'to raise children.', role: '真正的主詞', kind: 'key' },
        ]"
      />
      <p class="translation">養小孩要花很多錢。</p>
    </NoteSlide>

    <NoteSlide title="花錢的人放在 cost 和金額中間" mark="costs a lot of money">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It', kind: 'dim' },
          { t: 'cost', role: '動詞' },
          { t: 'me', role: '花錢的人', kind: 'key', ring: true },
          { t: '300 yen', role: '金額' },
          { t: 'to take the bus.', kind: 'dim' },
        ]"
      />
      <p class="translation">搭公車花了我三百日圓。</p>
      <p class="remark"><code>cost</code> 的過去式也是 <code>cost</code>。</p>
    </NoteSlide>

    <NoteSlide title="partly because 表示這只是原因的一部分" mark="partly because">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'This decrease', role: '主詞' },
          { t: 'is', role: '動詞' },
          { t: 'partly because', kind: 'key' },
          { t: 'it costs a lot of money to raise children.', role: '子句' },
        ]"
      />
      <p class="translation">下降的部分原因是養小孩要花很多錢。</p>
      <p class="remark"><code>this decrease</code> 指前一句講的出生率下降。</p>
    </NoteSlide>

    <NoteSlide title="mainly because 表示這是主要的原因" mark="partly">
      <div class="rows is-labeled">
        <div>
          <span class="term">partly because<br /><i>原因的一部分</i></span>
          <span
            ><NoteMark
              sentence="I was late partly because there was a lot of traffic."
              :marks="['partly because']"
            /><span class="translation">我遲到的部分原因是路上很塞。</span></span
          >
        </div>
        <div>
          <span class="term">mainly because<br /><i>主要的原因</i></span>
          <span
            ><NoteMark
              sentence="The town is quiet mainly because many young people have left."
              :marks="['mainly because']"
            /><span class="translation">這個小鎮很安靜，主要是因為很多年輕人離開了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
