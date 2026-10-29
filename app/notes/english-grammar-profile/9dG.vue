<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-questions-879, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞是 he，問句用 does，know 用原形">
      <NoteWords
        :size="40"
        :parts="[
          { t: 'How', role: '疑問詞' },
          { t: 'does', role: 'does', kind: 'key', ring: true },
          { t: 'he', role: '主詞' },
          { t: 'know', role: '原形動詞', kind: 'key' },
          { t: 'my name?', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">他怎麼知道我的名字？</p>
    </NoteSlide>
    <NoteSlide title="單數主詞用 does，複數主詞用 do" mark="does">
      <div class="rows is-labeled">
        <div>
          <span class="term">does</span>
          <span
            ><NoteMark sentence="Does your brother go with your parents?" :marks="['Does']" /><span
              class="translation"
              >你哥哥會跟你爸媽一起去嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">do</span>
          <span
            ><NoteMark
              sentence="Where do they want to spend their holidays?"
              :marks="['do']"
            /><span class="translation">他們想去哪裡度假？</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="who 當主詞時不用 does" mark="does">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark sentence="Who lives in that house?" :marks="['lives']" /><span
              class="translation"
              >誰住在那間房子？</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="Who does your sister live with?" :marks="['does']" /><span
              class="translation"
              >你姊姊跟誰住？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="does 後面的動詞用原形" mark="know">
      <NoteFix
        wrong="How does he knows my name?"
        right="How does he know my name?"
        :fix="['know']"
      />
    </NoteSlide>
    <NoteSlide title="單數名詞的主詞用 does" mark="does">
      <NoteFix
        wrong="Do your sister like jazz?"
        right="Does your sister like jazz?"
        :fix="['Does']"
      />
    </NoteSlide>
    <NoteSlide title="疑問詞後面要有 do" mark="does">
      <NoteFix wrong="Where your parents live?" right="Where do your parents live?" :fix="['do']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
