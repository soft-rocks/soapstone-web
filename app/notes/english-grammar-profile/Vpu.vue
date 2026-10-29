<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-use-many-a-with-singular-nouns, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="many a 加單數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'climbed', role: '動詞', kind: 'dim' },
          { t: 'many a', role: 'many a', kind: 'key' },
          { t: 'mountain.', role: '單數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">爬過很多座山。</p>
    </NoteSlide>

    <NoteSlide title="many a 比 many 正式、強調" mark="many a mountain">
      <div class="rows is-labeled">
        <div>
          <span class="term">many a</span>
          <span
            ><NoteMark
              sentence="Many a student has failed this test."
              :marks="['Many a student has']"
            /><span class="translation">很多學生都沒通過這個考試。</span></span
          >
        </div>
        <div>
          <span class="term">many</span>
          <span
            ><NoteMark
              sentence="Many students have failed this test."
              :marks="['Many students have']"
            /><span class="translation">有很多學生沒通過這個考試。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見的說法" mark="many a">
      <div class="rows is-labeled">
        <div>
          <span class="term">many a time</span>
          <span
            ><NoteMark
              sentence="I've told you many a time to lock the door!"
              :marks="['many a time']"
            /><span class="translation">我已經跟你說過很多次要鎖門了！</span></span
          >
        </div>
        <div>
          <span class="term">many an hour</span>
          <span
            ><NoteMark
              sentence="I spent many an hour in that library."
              :marks="['many an hour']"
            /><span class="translation">我在那間圖書館待過很多個小時。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞用單數" mark="mountain">
      <NoteFix
        wrong="We have climbed many a mountains."
        right="We have climbed many a mountain."
        fix="mountain"
      />
    </NoteSlide>

    <NoteSlide title="當主詞時動詞用單數" mark="many a">
      <NoteFix
        wrong="Many a student have failed this test."
        right="Many a student has failed this test."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="母音前面用 many an" mark="many a">
      <NoteFix
        wrong="It has raised many a issue."
        right="It has raised many an issue."
        fix="many an"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
