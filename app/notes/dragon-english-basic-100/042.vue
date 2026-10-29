<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 042, as slides, in the order of notes/dragon-english-basic-100/042.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="主要動詞是過去式時，子句的動詞通常也用過去式"
      :mark="['thought', 'was joking']"
    >
      <NoteWords
        :size="26"
        :parts="[
          { t: 'At first, I', kind: 'dim' },
          { t: 'thought', role: '主要動詞過去式', kind: 'key' },
          { t: 'Tom', role: '主詞' },
          { t: 'was joking,', role: '子句過去式', kind: 'key', ring: true },
          { t: 'but later I realized he was serious.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="thought、knew、said 後面的子句也用過去式" mark="realized he was">
      <div class="rows is-labeled">
        <div>
          <span class="term">thought</span>
          <span
            ><NoteMark sentence="I thought you were at home." :marks="['were']" /><span
              class="translation"
              >我以為你在家。</span
            ></span
          >
        </div>
        <div>
          <span class="term">knew</span>
          <span
            ><NoteMark sentence="I knew that he was tired." :marks="['was']" /><span
              class="translation"
              >我知道他很累。</span
            ></span
          >
        </div>
        <div>
          <span class="term">said</span>
          <span
            ><NoteMark sentence="Tom said that he was hungry." :marks="['was']" /><span
              class="translation"
              >Tom 說他餓了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句的事比主要動詞更早發生時，子句用過去完成式" mark="realized">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'She', role: '主詞' },
          { t: 'realized', role: '主要動詞過去式' },
          { t: 'she', role: '主詞' },
          { t: 'had left', role: '過去完成式', kind: 'key', ring: true },
          { t: 'her phone on the train.', kind: 'dim' },
        ]"
      />
      <p class="translation">她發現她把手機忘在火車上了。</p>
    </NoteSlide>

    <NoteSlide title="子句前面的 that 常常省略" mark="realized he">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'later I', kind: 'dim' },
          { t: 'realized', role: '主要動詞' },
          { t: 'that', role: '常常省略', kind: 'gone' },
          { t: 'he was serious.', role: '子句', kind: 'key' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="過去進行式表示過去某個時間正在進行的動作" mark="was joking">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'was taking', role: 'was + 動詞-ing', kind: 'key' },
          { t: 'a shower', role: '受詞' },
          { t: 'when you called.', role: '過去某個時間', kind: 'dim' },
        ]"
      />
      <p class="translation">你打電話來的時候我正在洗澡。</p>
      <p class="remark">原句的 <code>was joking</code> 表示 Tom 說話的時候正在開玩笑。</p>
    </NoteSlide>
  </NoteDeck>
</template>
