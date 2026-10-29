<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-reporting-verbs-888, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="學術寫作用 demonstrates 說資料證明的事">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'The popularity of this TV game in Russia', role: '主詞' },
          { t: 'clearly', role: '副詞', kind: 'dim' },
          { t: 'demonstrates', role: '轉述動詞', kind: 'key', ring: true },
          { t: 'the nature of human fears and dreams.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">
        這個電視遊戲節目在俄羅斯這麼受歡迎，清楚顯示了人類恐懼和夢想的本質。
      </p>
    </NoteSlide>
    <NoteSlide title="轉述動詞後面接名詞或 that 子句" mark="demonstrates">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="The chart illustrates the number of students in each class."
              :marks="['illustrates']"
            /><span class="translation">這張圖表呈現每一班的學生人數。</span></span
          >
        </div>
        <div>
          <span class="term">that</span>
          <span
            ><NoteMark
              sentence="The results suggest that sleep improves memory."
              :marks="['suggest that']"
            /><span class="translation">結果顯示睡眠能增進記憶力。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="有的轉述動詞說資料證明了多少" mark="demonstrates">
      <div class="rows is-labeled">
        <div>
          <span class="term">demonstrate</span>
          <span>清楚證明一件事</span>
        </div>
        <div>
          <span class="term">indicate / suggest</span>
          <span>資料指向一個結論，但沒有完全證明</span>
        </div>
        <div>
          <span class="term">confirm</span>
          <span>證實已經有人提出的看法</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="有的轉述動詞說作者怎麼呈現內容" mark="demonstrates">
      <div class="rows is-labeled">
        <div>
          <span class="term">illustrate</span>
          <span>用圖表或例子呈現</span>
        </div>
        <div>
          <span class="term">reveal</span>
          <span>讓原本不知道的事被看見</span>
        </div>
        <div>
          <span class="term">argue / claim</span>
          <span>作者提出一個看法</span>
        </div>
        <div>
          <span class="term">highlight</span>
          <span>特別指出一件重要的事</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="主詞的中心是 popularity，動詞加 -s" mark="demonstrates">
      <NoteFix
        wrong="The popularity of these games demonstrate our fears."
        right="The popularity of these games demonstrates our fears."
        :fix="['demonstrates']"
      />
    </NoteSlide>
    <NoteSlide title="suggest 後面接 that 子句" mark="demonstrates">
      <NoteFix
        wrong="The results suggest people to sleep more."
        right="The results suggest that people should sleep more."
        :fix="['that', 'should']"
      />
    </NoteSlide>
    <NoteSlide title="argue 後面直接接 that 子句" mark="demonstrates">
      <NoteFix
        wrong="The author argues about that cities need more parks."
        right="The author argues that cities need more parks."
        :fix="['argues that']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
