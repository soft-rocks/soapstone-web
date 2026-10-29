<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 066, as slides, in the order of notes/dragon-english-basic-100/066.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="不滿的內容是完整的子句時，用 complain that" mark="complain that">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'A lot of housewives', role: '主詞', kind: 'dim' },
          { t: 'complain', role: '動詞', kind: 'key' },
          { t: 'that', role: '連接詞', kind: 'key' },
          { t: 'prices are too high.', role: '不滿的內容（子句）' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark"><code>complain</code> 表示說出自己不滿意的事。</p>
    </NoteSlide>

    <NoteSlide title="complain about 接名詞，complain to 接抱怨的對象" mark="complain">
      <div class="rows is-labeled">
        <div>
          <span class="term">that + 子句</span>
          <span
            ><NoteMark
              sentence="My brother always complains that he has too much homework."
              :marks="['complains that']"
            /><span class="translation">我弟弟總是抱怨他功課太多。</span></span
          >
        </div>
        <div>
          <span class="term">about + 名詞</span>
          <span
            ><NoteMark
              sentence="The guests complained about the noise."
              :marks="['complained about']"
            /><span class="translation">客人抱怨噪音。</span></span
          >
        </div>
        <div>
          <span class="term">to + 人</span>
          <span
            ><NoteMark
              sentence="My father complained to the waiter about the soup."
              :marks="['complained to']"
            /><span class="translation">我爸爸跟服務生抱怨那碗湯。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="too 放在形容詞前面，表示程度超過能接受的範圍" mark="too high">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'prices', role: '主詞' },
          { t: 'are', role: 'be 動詞' },
          { t: 'too', role: '程度太高', kind: 'key', ring: true },
          { t: 'high.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="remark"><code>too</code> 帶有不好的意思。</p>
    </NoteSlide>

    <NoteSlide title="too 加形容詞後面可以接 to 加動詞原形或 for 加人" mark="too high">
      <div class="rows is-labeled">
        <div>
          <span class="term">to + 動詞原形<br /><i>做不到</i></span>
          <span
            ><NoteMark
              sentence="This soup is too salty to eat."
              :marks="['too salty', 'to eat']"
            /><span class="translation">這碗湯太鹹了，沒辦法喝。</span></span
          >
        </div>
        <div>
          <span class="term">for + 人</span>
          <span
            ><NoteMark
              sentence="The shoes are too small for me."
              :marks="['too small', 'for me']"
            /><span class="translation">這雙鞋對我來說太小了。</span></span
          >
        </div>
        <div>
          <span class="term">for + 人 + to</span>
          <span
            ><NoteMark
              sentence="This book is too difficult for my son to read."
              :marks="['too difficult', 'for my son to read']"
            /><span class="translation">這本書對我兒子來說太難了，他看不懂。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
