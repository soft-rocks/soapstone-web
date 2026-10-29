<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-empty-it-934, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="虛主詞 it 加 appears">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', role: '虛主詞', kind: 'key' },
          { t: 'appears', role: '動詞', kind: 'key' },
          { t: 'that', role: '連接詞' },
          { t: 'there was an error', role: '子句', kind: 'dim' },
        ]"
      />
      <p class="translation">看來出過錯</p>
    </NoteSlide>

    <NoteSlide title="appears、seems、looks 和 feels" mark="It appears">
      <div class="rows is-labeled">
        <div>
          <span class="term">appears</span>
          <span
            ><NoteMark
              sentence="It appears that the package was lost."
              :marks="['It appears']"
            /><span class="translation">看來包裹寄丟了。</span></span
          >
        </div>
        <div>
          <span class="term">seems</span>
          <span
            ><NoteMark
              sentence="It seems that nobody knows the answer."
              :marks="['It seems']"
            /><span class="translation">似乎沒人知道答案。</span></span
          >
        </div>
        <div>
          <span class="term">looks</span>
          <span
            ><NoteMark
              sentence="It looks as if it's going to rain."
              :marks="['It looks as if']"
            /><span class="translation">看起來快下雨了。</span></span
          >
        </div>
        <div>
          <span class="term">feels</span>
          <span
            ><NoteMark
              sentence="It feels like we've known each other for years."
              :marks="['It feels like']"
            /><span class="translation">感覺我們好像認識好幾年了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="句子要有主詞 it" mark="It">
      <NoteFix
        wrong="Appears that there was an error."
        right="It appears that there was an error."
        fix="It appears"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 it，動詞加 -s" mark="appears">
      <NoteFix
        wrong="It seem that nobody is at home."
        right="It seems that nobody is at home."
        fix="seems"
      />
    </NoteSlide>

    <NoteSlide title="seems 後面直接接 that" mark="that">
      <NoteFix
        wrong="It seems to be that you are inside the film."
        right="It seems that you are inside the film."
        fix="seems that"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
