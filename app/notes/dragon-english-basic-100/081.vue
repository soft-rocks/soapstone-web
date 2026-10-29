<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 081, as slides, in the order of notes/dragon-english-basic-100/081.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="vary from A to A 表示每一個都不一樣" mark="vary from country to country">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Ways of greeting', role: '主詞', kind: 'dim' },
          { t: 'vary', role: '動詞', kind: 'key' },
          { t: 'from', role: '介系詞' },
          { t: 'country', role: '單數名詞', kind: 'key' },
          { t: 'to', role: '介系詞' },
          { t: 'country.', role: '同一個名詞', kind: 'key' },
        ]"
      />
      <p class="remark">名詞前面不加冠詞。<code>differ from ... to ...</code> 的意思一樣。</p>
    </NoteSlide>

    <NoteSlide title="from A to A 的其他說法" mark="from country to country">
      <div class="rows">
        <div>
          <span class="term"><b>from time to time</b></span
          ><span class="gloss">偶爾</span>
        </div>
        <div>
          <span class="term"><b>from place to place</b></span
          ><span class="gloss">到處</span>
        </div>
        <div>
          <span class="term"><b>from door to door</b></span
          ><span class="gloss">挨家挨戶</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="from 和 to 後面放不同的名詞時，表示一段範圍" mark="from country to country">
      <NoteFork
        stem="from"
        :branches="[
          { head: 'shop', rest: 'to shop', meaning: '同一個名詞', zh: '每家店都不一樣' },
          { head: 'Monday', rest: 'to Saturday', meaning: '不同的名詞', zh: '星期一到星期六' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="動名詞當主詞時，動詞用單數" mark="bowing is">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'In Japan,', kind: 'dim' },
          { t: 'bowing', role: '動名詞主詞', kind: 'key' },
          { t: 'is', role: '單數動詞', kind: 'key', ring: true },
          { t: 'more common than shaking hands.', kind: 'dim' },
        ]"
      />
      <p class="remark">動詞加 <code>-&#x2060;ing</code> 可以當主詞。</p>
    </NoteSlide>

    <NoteSlide title="比較兩個動作時，than 前後都用動名詞" :mark="['bowing', 'shaking hands']">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'bowing', role: '動名詞', kind: 'key' },
          { t: 'is', kind: 'dim' },
          { t: 'more common', role: '比較級' },
          { t: 'than', role: '連接詞' },
          { t: 'shaking hands.', role: '動名詞', kind: 'key' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="長的形容詞前面加 more，短的加 -er，-y 結尾改 -ier" mark="more common">
      <div class="rows is-labeled">
        <div>
          <span class="term">長的形容詞<br /><i>more</i></span>
          <span
            ><NoteMark
              sentence="Reading books is more interesting than watching TV."
              :marks="['more interesting']"
            /><span class="translation">看書比看電視有趣。</span></span
          >
        </div>
        <div>
          <span class="term">短的形容詞<br /><i>-er</i></span>
          <span
            ><NoteMark
              sentence="Taking the train is faster than taking the bus."
              :marks="['faster']"
            /><span class="translation">搭火車比搭公車快。</span></span
          >
        </div>
        <div>
          <span class="term">-y 結尾的兩音節<br /><i>-ier</i></span>
          <span
            ><NoteMark sentence="Walking is healthier than driving." :marks="['healthier']" /><span
              class="translation"
              >走路比開車健康。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
