<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-use-or-something-else-vague, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="or something else 放在選項最後，代表沒說出來的選項">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Shall we buy him', role: '疑問句' },
          { t: 'a book,', role: '選項 A' },
          { t: 'a CD', role: '選項 B' },
          { t: 'or something else?', role: '其他選項', kind: 'key' },
        ]"
      />
      <p class="translation">我們要買書、CD，還是別的東西給他？</p>
    </NoteSlide>

    <NoteSlide title="人用 someone else，地方用 somewhere else" mark="something else">
      <div class="rows is-labeled">
        <div>
          <span class="term">人</span>
          <span
            ><NoteMark
              sentence="Should we ask Tom or someone else?"
              :marks="['someone else']"
            /><span class="translation">我們該問 Tom 還是別人？</span></span
          >
        </div>
        <div>
          <span class="term">地方</span>
          <span
            ><NoteMark
              sentence="Do you want to eat here or somewhere else?"
              :marks="['somewhere else']"
            /><span class="translation">你要在這裡吃還是去別的地方？</span></span
          >
        </div>
        <div>
          <span class="term">動作</span>
          <span
            ><NoteMark
              sentence="Shall we watch a film or do something else?"
              :marks="['do something else']"
            /><span class="translation">我們要看電影，還是做點別的？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說話時可以只說選項" mark="something else">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Poetry,', role: '選項 A' },
          { t: 'history', role: '選項 B' },
          { t: 'or something else?', role: '其他選項', kind: 'key' },
        ]"
      />
      <p class="translation">詩、歷史，還是別的？</p>
    </NoteSlide>

    <NoteSlide title="別的東西說 something else" mark="something else">
      <NoteFix
        wrong="Do you want pizza or other thing?"
        right="Do you want pizza or something else?"
        fix="something else"
      />
    </NoteSlide>

    <NoteSlide title="else 放在 something 後面" mark="something else">
      <NoteFix
        wrong="Shall we buy a book or else something?"
        right="Shall we buy a book or something else?"
        fix="something else"
      />
    </NoteSlide>

    <NoteSlide title="指人用 someone else" mark="something">
      <NoteFix
        wrong="Should we invite Anna or something else?"
        right="Should we invite Anna or someone else?"
        fix="someone"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
