<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-use-formal-850, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="on account of 說原因，比 because of 正式">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'I think the car industry will develop cars', role: '主要子句', kind: 'dim' },
          { t: 'that run on solar energy', role: '關係子句', kind: 'dim' },
          { t: 'on account of', role: '複合介系詞', kind: 'key' },
          { t: 'the levels of pollution in big cities.', role: '名詞片語' },
        ]"
      />
      <p class="translation">我認為，由於大城市的污染程度，汽車業會開發用太陽能跑的車。</p>
    </NoteSlide>

    <NoteSlide title="正式的複合介系詞和常用的說法" mark="on account of">
      <div class="rows is-labeled">
        <div>
          <span class="term">on account of</span>
          <span>= because of</span>
        </div>
        <div>
          <span class="term">in view of</span>
          <span>= considering</span>
        </div>
        <div>
          <span class="term">with regard to</span>
          <span>= about</span>
        </div>
        <div>
          <span class="term">in accordance with</span>
          <span>= following</span>
        </div>
        <div>
          <span class="term">by means of</span>
          <span>= by using</span>
        </div>
        <div>
          <span class="term">in the event of</span>
          <span
            ><NoteMark
              sentence="In the event of fire, use the stairs."
              :marks="['In the event of']"
            /><span class="translation">萬一發生火災，請走樓梯。</span></span
          >
        </div>
        <div>
          <span class="term">ahead of</span>
          <span>ahead of schedule</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="報告和正式信件用 with regard to" mark="on account of">
      <div class="rows is-labeled">
        <div>
          <span class="term">正式</span>
          <span
            ><NoteMark
              sentence="With regard to your request, we are unable to help."
              :marks="['With regard to']"
            /><span class="translation">關於您的請求，我們無法提供協助。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="on account of 後面接名詞片語，不接子句"
      mark="the levels of pollution in big cities."
    >
      <NoteFix
        wrong="The flight left late on account of it was foggy."
        right="The flight left late on account of the fog."
        fix="the fog"
      />
    </NoteSlide>

    <NoteSlide title="with regard to 的 regard 不加 s">
      <NoteFix
        wrong="I am writing with regards to your email."
        right="I am writing with regard to your email."
        fix="regard"
      />
    </NoteSlide>

    <NoteSlide title="in accordance with 的 with 不能省略">
      <NoteFix
        wrong="Please complete the form in accordance the instructions."
        right="Please complete the form in accordance with the instructions."
        fix="with"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
