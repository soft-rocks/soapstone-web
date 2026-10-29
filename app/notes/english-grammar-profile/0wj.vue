<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-contrast, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Although 子句說一件事，主要子句說出乎意料的結果">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Although', role: '雖然', kind: 'key' },
          { t: 'he was famous,', role: '主詞 + 動詞' },
          { t: 'I didn\'t like him.', role: '主要子句' },
        ]"
      />
      <p class="translation">雖然他很有名，我還是不喜歡他。</p>
    </NoteSlide>

    <NoteSlide title="子句在前面加逗號，也可以放在主要子句後面" mark="Although">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面</span>
          <span
            ><NoteMark
              sentence="Although it was raining, we went for a walk."
              :marks="['Although', 'raining,']"
            /><span class="translation">雖然在下雨，我們還是去散步了。</span></span
          >
        </div>
        <div>
          <span class="term">後面</span>
          <span
            ><NoteMark
              sentence="I still enjoy my job, although it's very tiring."
              :marks="['although']"
            /><span class="translation">雖然工作很累，我還是很喜歡。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="although 最常用，though 比較口語，even though 語氣比較強" mark="Although">
      <div class="rows is-labeled">
        <div>
          <span class="term">although</span>
          <span>口語和書面語都可以</span>
        </div>
        <div>
          <span class="term">though</span>
          <span>比較口語</span>
        </div>
        <div>
          <span class="term">even though</span>
          <span
            ><NoteMark
              sentence="Even though she was exhausted, she finished the race."
              :marks="['Even though']"
            /><span class="translation">雖然她累壞了，還是跑完了比賽。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="一句話只用 although 或 but 其中一個">
      <NoteFix
        wrong="Although the hotel was cheap, but it was clean."
        right="Although the hotel was cheap, it was clean."
        fix="it was clean."
      />
    </NoteSlide>

    <NoteSlide title="although 後面接子句，只接名詞用 despite" mark="he was famous,">
      <NoteFix
        wrong="Although the rain, we played tennis."
        right="Although it was raining, we played tennis."
        fix="it was raining,"
      >
        只接名詞要寫 <code>despite the rain</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="連接子句要用 even though，不能只用 even">
      <NoteFix
        wrong="Even it was late, he kept working."
        right="Even though it was late, he kept working."
        fix="Even though"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
