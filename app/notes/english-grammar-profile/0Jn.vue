<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-noun-phrase-with-possessive-s-without, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="前面說過的名詞，'s 後面可以省略">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I think it would be better to include', kind: 'dim' },
          { t: 'a student\'s view of the college,', role: '前面的名詞片語' },
          { t: 'not only', kind: 'dim' },
          { t: 'a teacher\'s', role: '名詞 + \'s', kind: 'key' },
          { t: 'view of the college.', role: '省略', kind: 'gone' },
        ]"
      />
      <p class="translation">我覺得最好也納入學生對這所學院的看法，而不只是老師的看法。</p>
    </NoteSlide>

    <NoteSlide title="以 -&#x2060;s 結尾的複數名詞只留下撇號" mark="teacher's">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Our prices', role: '前面的名詞片語' },
          { t: 'are lower than', kind: 'dim' },
          { t: 'our competitors\'.', role: '複數名詞 + \'', kind: 'key' },
        ]"
      />
      <p class="translation">我們的價格比競爭對手的低。</p>
    </NoteSlide>

    <NoteSlide title="省略常出現在 than、not、as … as 的句子裡" mark="not only">
      <div class="rows is-labeled">
        <div>
          <span class="term">than</span>
          <span
            ><NoteMark
              sentence="Her results are better than her brother's."
              :marks="['than her brother\'s']"
            /><span class="translation">她的成績比她哥哥的好。</span></span
          >
        </div>
        <div>
          <span class="term">not</span>
          <span
            ><NoteMark
              sentence="It's my decision, not my parents'."
              :marks="['not my parents\'']"
            /><span class="translation">這是我的決定，不是我爸媽的。</span></span
          >
        </div>
        <div>
          <span class="term">as … as</span>
          <span
            ><NoteMark
              sentence="My salary is as high as my manager's."
              :marks="['as my manager\'s']"
            /><span class="translation">我的薪水跟我經理的一樣高。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="比的是兩台車，brother 後面要加 's" mark="teacher's">
      <NoteFix
        wrong="My car is older than my brother."
        right="My car is older than my brother's."
        fix="brother's"
      />
    </NoteSlide>

    <NoteSlide title="competitors 以 -&#x2060;s 結尾，只加撇號">
      <NoteFix
        wrong="Our service is faster than our competitors's."
        right="Our service is faster than our competitors'."
        fix="competitors'"
      />
    </NoteSlide>

    <NoteSlide title="省略名詞時，擁有的人加 's，前面不加 of" mark="teacher's">
      <NoteFix
        wrong="Her English is better than of her brother."
        right="Her English is better than her brother's."
        fix="her brother's"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
