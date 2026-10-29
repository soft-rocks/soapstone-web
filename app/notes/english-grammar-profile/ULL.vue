<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-fixed-expressions-fronting, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="固定說法放在句首，後面加逗號">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'At the end of the day,', role: '固定說法', kind: 'key' },
          { t: 'everything', role: '主詞' },
          { t: 'is', role: '動詞' },
          { t: 'up to you.', role: '補語' },
        ]"
      />
      <p class="translation">說到底，一切都由你決定。</p>
    </NoteSlide>

    <NoteSlide title="固定說法先說出後面那句話的作用" mark="At the end of the day,">
      <div class="rows is-labeled">
        <div>
          <span class="term">總結</span>
          <span
            ><NoteMark
              sentence="All things considered, I'd recommend the third proposal."
              :marks="['All things considered,']"
            /><span class="translation">全面考量之後，我會推薦第三個提案。</span></span
          >
        </div>
        <div>
          <span class="term">真正的重點</span>
          <span
            ><NoteMark
              sentence="When it comes down to it, everyone likes a surprise."
              :marks="['When it comes down to it,']"
            /><span class="translation">說穿了，每個人都喜歡驚喜。</span></span
          >
        </div>
        <div>
          <span class="term">讓步</span>
          <span
            ><NoteMark
              sentence="Having said that, the hotel was very clean."
              :marks="['Having said that,']"
            /><span class="translation">話雖如此，那家飯店很乾淨。</span></span
          >
        </div>
        <div>
          <span class="term">請對方想一想</span>
          <span
            ><NoteMark
              sentence="When you think about it, the rent here is very high."
              :marks="['When you think about it,']"
            /><span class="translation">你想想看，這裡的房租很高。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="固定說法後面也可以接問句" mark="everything is">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When it comes down to it,', role: '固定說法', kind: 'dim' },
          { t: 'who doesn\'t like a holiday?', role: '問句', kind: 'key' },
        ]"
      />
      <p class="translation">說穿了，誰不喜歡放假？</p>
    </NoteSlide>

    <NoteSlide title="固定說法的字不能換" mark="end">
      <NoteFix
        wrong="At the finish of the day, it's your decision."
        right="At the end of the day, it's your decision."
        fix="end"
      />
    </NoteSlide>

    <NoteSlide title="固定說法的字不能少" mark="the">
      <NoteFix
        wrong="At end of the day, money isn't everything."
        right="At the end of the day, money isn't everything."
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="主要子句是直述句，主詞放在動詞前面" mark="everything is">
      <NoteFix
        wrong="All in all, was the week a success."
        right="All in all, the week was a success."
        fix="the week was"
      />
    </NoteSlide>

    <NoteSlide title="All in all 用來總結，說第一點用 To begin with" mark="At the end of the day,">
      <NoteFix
        wrong="All in all, the first thing we need is a map."
        right="To begin with, the first thing we need is a map."
        fix="To begin with,"
      />
    </NoteSlide>

    <NoteSlide title="放在句尾的 at the end of the day 是時間" mark="At the end of the day,">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首<br /><i>說到底</i></span>
          <span
            ><NoteMark
              sentence="At the end of the day, everything is up to you."
              :marks="['At the end of the day,']"
            /><span class="translation">說到底，一切都由你決定。</span></span
          >
        </div>
        <div>
          <span class="term">句尾<br /><i>一天結束時</i></span>
          <span
            ><NoteMark
              sentence="We got home at the end of the day."
              :marks="['at the end of the day.']"
            /><span class="translation">我們在一天結束時回到家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="In the end 表示一段時間之後的結果" mark="At the end of the day,">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'In the end,', role: '結果', kind: 'key' },
          { t: 'we took a taxi.', kind: 'dim' },
        ]"
      />
      <p class="translation">最後我們搭了計程車。</p>
      <p class="remark"><code>At the end of the day</code> 表示說話的人的結論。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
