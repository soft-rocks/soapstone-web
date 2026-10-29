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

    <NoteSlide title="can't 問做不到，won't 問不肯，couldn't 問過去" mark="can't">
      <div class="rows is-labeled">
        <div>
          <span class="term">won't<br /><i>不肯</i></span>
          <span
            ><NoteMark sentence="Why won't he answer the phone?" :marks="['won\'t']" /><span
              class="translation"
              >他為什麼不接電話？</span
            ></span
          >
        </div>
        <div>
          <span class="term">couldn't<br /><i>過去做不到</i></span>
          <span
            ><NoteMark sentence="Why couldn't I control myself?" :marks="['couldn\'t']" /><span
              class="translation"
              >我當時為什麼控制不了自己？</span
            ></span
          >
        </div>
        <div>
          <span class="term">shouldn't<br /><i>覺得應該可以</i></span>
          <span
            ><NoteMark sentence="Why shouldn't I tell her?" :marks="['shouldn\'t']" /><span
              class="translation"
              >我為什麼不應該告訴她？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情態動詞放在主詞前面" mark="can't you">
      <NoteFix wrong="Why you can't come?" right="Why can't you come?" fix="can't you" />
    </NoteSlide>

    <NoteSlide title="情態動詞的否定不用 don't" mark="can't">
      <NoteFix wrong="Why don't you can swim?" right="Why can't you swim?" fix="can't" />
    </NoteSlide>

    <NoteSlide title="will not 縮寫成 won't" mark="can't">
      <NoteFix wrong="Why willn't she talk to me?" right="Why won't she talk to me?" fix="won't" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
