<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-use-closings, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="結尾的祈使句是友善的請求或祝福" mark="Write to me soon">
      <div class="rows is-labeled">
        <div>
          <span class="term">請對方聯絡</span>
          <span
            ><NoteMark
              sentence="It was great to meet you. Keep in touch!"
              :marks="['Keep in touch']"
            /><span class="translation">很高興認識你，保持聯絡！</span></span
          >
        </div>
        <div>
          <span class="term">請對方來</span>
          <span
            ><NoteMark
              sentence="Our new house has a spare room. Come and see us next summer."
              :marks="['Come and see us']"
            /><span class="translation">我們的新家有一間客房。明年夏天來看我們。</span></span
          >
        </div>
        <div>
          <span class="term">轉達問候</span>
          <span
            ><NoteMark
              sentence="I heard she's back from hospital. Give my love to your mother."
              :marks="['Give my love']"
            /><span class="translation">我聽說她出院了。代我向你媽媽問好。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="幾句祈使句可以接在一起" mark="Write">
      <NoteMark sentence="Good luck tomorrow. Let me know how it goes." :marks="['Let me know']" />
      <p class="translation">明天祝你好運，結果如何要告訴我。</p>
    </NoteSlide>

    <NoteSlide title="祈使句的動詞不加 -s" mark="Write">
      <NoteFix
        wrong="Phones me when the plane lands."
        right="Phone me when the plane lands."
        fix="Phone"
      />
    </NoteSlide>

    <NoteSlide title="一趟旅程用 trip" mark="soon">
      <NoteFix wrong="Have a good travel to Japan!" right="Have a good trip to Japan!" fix="trip" />
    </NoteSlide>

    <NoteSlide title="轉達問候用 say hello to" mark="to me">
      <NoteFix
        wrong="Say hello for your grandparents in Tainan."
        right="Say hello to your grandparents in Tainan."
        fix="to"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
