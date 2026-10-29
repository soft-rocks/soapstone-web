<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-attributive-only-time-adjectives, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="present、future、former 只放在名詞前面" mark="present situation">
      <div class="rows is-labeled">
        <div>
          <span class="term">present（現在的）</span>
          <span
            ><NoteMark
              sentence="We've hired five new people this year. Our present office is too small."
              :marks="['present office']"
            /><span class="translation">我們今年請了五個新人。我們現在的辦公室太小了。</span></span
          >
        </div>
        <div>
          <span class="term">future（未來的）</span>
          <span
            ><NoteMark sentence="What are your future plans?" :marks="['future plans']" /><span
              class="translation"
              >你未來有什麼計畫？</span
            ></span
          >
        </div>
        <div>
          <span class="term">former（以前的）</span>
          <span
            ><NoteMark sentence="He's a former student of mine." :marks="['former student']" /><span
              class="translation"
              >他是我以前的學生。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="present 放在 be 後面，意思是在場" mark="present">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞前面</span>
          <span
            ><NoteMark
              sentence="The present manager is very kind."
              :marks="['present manager']"
            /><span class="translation">現任經理人很好。</span></span
          >
        </div>
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark
              sentence="All the parents were present at the meeting."
              :marks="['were present']"
            /><span class="translation">所有的家長都出席了會議。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說現在的用 present，不用 now" mark="the present situation">
      <NoteFix
        wrong="We are worried about the now situation."
        right="We are worried about the present situation."
        fix="present"
      />
    </NoteSlide>

    <NoteSlide title="former 放在名詞前面" mark="present">
      <NoteFix
        wrong="We visited our school former last week."
        right="We visited our former school last week."
        fix="former school"
      />
    </NoteSlide>

    <NoteSlide title="future 加單數名詞，前面要有 my 這類字" mark="the present">
      <NoteFix
        wrong="I want to meet future wife soon."
        right="I want to meet my future wife soon."
        fix="my future wife"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
