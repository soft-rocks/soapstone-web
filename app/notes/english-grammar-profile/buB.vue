<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-negative-questions-with-modals, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="情態動詞加 n't 放在主詞前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Why', role: '疑問詞' },
          { t: 'can\'t', role: '情態動詞 + n\'t', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'do', role: '原形動詞' },
          { t: 'both things?', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">你為什麼不能兩件事都做？</p>
    </NoteSlide>

    <NoteSlide title="Why 後面的情態動詞決定問哪一種原因" mark="can't">
      <div class="rows is-labeled">
        <div>
          <span class="term">won't<br /><i>不肯</i></span>
          <span
            ><NoteMark sentence="Why won't the baby stop crying?" :marks="['won\'t']" /><span
              class="translation"
              >寶寶為什麼一直哭不停？</span
            ></span
          >
        </div>
        <div>
          <span class="term">couldn't<br /><i>過去做不到</i></span>
          <span
            ><NoteMark sentence="Why couldn't the plane land?" :marks="['couldn\'t']" /><span
              class="translation"
              >飛機當時為什麼不能降落？</span
            ></span
          >
        </div>
        <div>
          <span class="term">shouldn't<br /><i>覺得應該可以</i></span>
          <span
            ><NoteMark
              sentence="Why shouldn't students wear trainers?"
              :marks="['shouldn\'t']"
            /><span class="translation">學生為什麼不應該穿運動鞋？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情態動詞放在主詞前面" mark="can't you">
      <NoteFix
        wrong="Why you can't stay for lunch?"
        right="Why can't you stay for lunch?"
        fix="can't you"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞的否定不用 don't" mark="can't">
      <NoteFix
        wrong="Why don't we can use the lift?"
        right="Why can't we use the lift?"
        fix="can't"
      />
    </NoteSlide>

    <NoteSlide title="will not 縮寫成 won't" mark="can't">
      <NoteFix wrong="Why willn't the car start?" right="Why won't the car start?" fix="won't" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
