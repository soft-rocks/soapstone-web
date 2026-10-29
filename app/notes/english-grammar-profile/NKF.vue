<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-object-using-it-to-introduce, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="make 後面用 it 當形式受詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My shyness', role: '主詞', kind: 'dim' },
          { t: 'makes', role: 'make' },
          { t: 'it', role: '形式受詞', kind: 'key' },
          { t: 'hard', role: '形容詞' },
          { t: 'for me', role: 'for + 人', kind: 'dim' },
          { t: 'to speak', role: '真正的受詞', kind: 'key' },
        ]"
      />
      <p class="translation">害羞的個性讓我很難說話</p>
    </NoteSlide>

    <NoteSlide title="有 for 和沒有 for" mark="makes it hard">
      <div class="rows is-labeled">
        <div>
          <span class="term">有 for</span>
          <span
            ><NoteMark
              sentence="The noise made it hard for me to sleep."
              :marks="['for me']"
            /><span class="translation">噪音讓我很難睡著。</span></span
          >
        </div>
        <div>
          <span class="term">沒有 for</span>
          <span
            ><NoteMark
              sentence="The new app makes it easy to pay."
              :marks="['makes it easy']"
            /><span class="translation">新的 app 讓付款變得很容易。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="make 後面要先有 it" mark="it">
      <NoteFix
        wrong="My shyness makes hard for me to speak in public."
        right="My shyness makes it hard for me to speak in public."
        fix="makes it"
      />
    </NoteSlide>

    <NoteSlide title="形式受詞用 it" mark="it">
      <NoteFix
        wrong="The noise made this hard to sleep."
        right="The noise made it hard to sleep."
        fix="it"
      />
    </NoteSlide>

    <NoteSlide title="it 後面接形容詞" mark="hard">
      <NoteFix
        wrong="The app makes it easily to pay."
        right="The app makes it easy to pay."
        fix="easy"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
