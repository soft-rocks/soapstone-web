<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-infinitive, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="going to 後面接 be 加過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'is going to', role: 'going to' },
          { t: 'be', role: 'be', kind: 'key' },
          { t: 'shown', role: '過去分詞', kind: 'key' },
          { t: 'this Friday.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">它這個星期五會播出。</p>
    </NoteSlide>

    <NoteSlide title="have to、need to、want to 後面也接 be 加過去分詞" mark="be shown">
      <div class="rows is-labeled">
        <div>
          <span class="term">have to</span>
          <span
            ><NoteMark
              sentence="The form has to be signed by your parents."
              :marks="['be signed']"
            /><span class="translation">這張表格必須讓你爸媽簽名。</span></span
          >
        </div>
        <div>
          <span class="term">need to</span>
          <span
            ><NoteMark sentence="The kitchen needs to be cleaned." :marks="['be cleaned']" /><span
              class="translation"
              >廚房需要打掃了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">want to</span>
          <span
            ><NoteMark
              sentence="He wants to be told about the sales by November."
              :marks="['be told']"
            /><span class="translation">他希望十一月前有人告訴他銷售的情況。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="to 後面要有 be" mark="be">
      <NoteFix
        wrong="It is going to shown this Friday."
        right="It is going to be shown this Friday."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="to 後面永遠用原形 be" mark="be">
      <NoteFix
        wrong="The forms have to are signed."
        right="The forms have to be signed."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="主詞是被做的東西，用被動" mark="be shown">
      <NoteFix
        wrong="My car needs to repair."
        right="My car needs to be repaired."
        fix="be repaired"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
