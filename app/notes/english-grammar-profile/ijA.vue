<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-affirmative-interrogative, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Do、Does、Did 放在句首，後面接原形動詞" mark="Do you remember">
      <div class="rows is-labeled">
        <div>
          <span class="term">Do</span>
          <span
            ><NoteMark sentence="Do you like spicy food?" :marks="['Do you like']" /><span
              class="translation"
              >你喜歡吃辣嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Does</span>
          <span
            ><NoteMark
              sentence="Excuse me, driver. Does this bus go to the airport?"
              :marks="['Does this bus go']"
            /><span class="translation">不好意思，司機。這班公車有到機場嗎？</span></span
          >
        </div>
        <div>
          <span class="term">Did</span>
          <span
            ><NoteMark
              sentence="You arrived in Vienna this morning. Did you sleep well on the night train?"
              :marks="['Did you sleep']"
            /><span class="translation">你今天早上到維也納。你在夜車上睡得好嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="簡短回答用 do、does、did" mark="Do">
      <NoteMark
        sentence="A: Does your brother live near here? B: Yes, he does."
        :marks="['Yes, he does']"
      />
      <p class="translation">A：你哥哥住在這附近嗎？B：對，他住這附近。</p>
    </NoteSlide>

    <NoteSlide title="does 後面用原形動詞" mark="remember">
      <NoteFix
        wrong="Does your cat sleeps on your bed?"
        right="Does your cat sleep on your bed?"
        fix="sleep"
      />
    </NoteSlide>

    <NoteSlide title="did 後面用原形動詞" mark="remember">
      <NoteFix
        wrong="Did the plumber fixed the shower?"
        right="Did the plumber fix the shower?"
        fix="fix"
      />
    </NoteSlide>

    <NoteSlide title="一般動詞不能放到主詞前面，要加 do" mark="Do you">
      <NoteFix
        wrong="Plays your son the violin?"
        right="Does your son play the violin?"
        fix="Does your son play"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
