<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-yours-as-subject, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="yours 放在子句開頭當主詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I really needed some extra information,', role: '第一個子句', kind: 'dim' },
          { t: 'and', kind: 'dim' },
          { t: 'yours', role: '= your information', kind: 'key' },
          { t: 'was very useful.', role: '動詞' },
        ]"
      />
      <p class="translation">我那時真的很需要多一點資訊，你給的資訊很有用。</p>
    </NoteSlide>

    <NoteSlide title="yours 常放在 and、but、because 後面，前面先說一次名詞" mark="yours">
      <div class="rows is-labeled">
        <div>
          <span class="term">but</span>
          <span
            ><NoteMark
              sentence="My train was late, but yours was on time."
              :marks="['yours was']"
            /><span class="translation">我的火車誤點了，可是你的準時。</span></span
          >
        </div>
        <div>
          <span class="term">and</span>
          <span
            ><NoteMark
              sentence="My answer was wrong, and yours was right."
              :marks="['yours was']"
            /><span class="translation">我的答案錯了，你的對了。</span></span
          >
        </div>
        <div>
          <span class="term">because</span>
          <span
            ><NoteMark
              sentence="We bought you a new kettle because yours is very old."
              :marks="['yours is']"
            /><span class="translation">我們買了一個新水壺給你，因為你的很舊了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Yours 也可以放在句首，前一句先說一次名詞" mark="yours">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="Thanks for the letter. Yours was the only one I got this week."
              :marks="['letter.', 'Yours']"
            /><span class="translation">謝謝你的信。這個禮拜我只收到你的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="yours 沒有撇號" mark="yours">
      <NoteFix
        wrong="Mine is broken, but your's works."
        right="Mine is broken, but yours works."
        fix="yours"
      />
    </NoteSlide>

    <NoteSlide title="後面沒有名詞時用 yours 當主詞" mark="yours">
      <NoteFix
        wrong="My essay is short, but your is long."
        right="My essay is short, but yours is long."
        fix="yours"
      />
    </NoteSlide>

    <NoteSlide title="對方不知道說的是什麼東西時，要說出名詞">
      <NoteFix
        wrong="Yours is on the table."
        right="Your coffee is on the table."
        fix="Your coffee"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
