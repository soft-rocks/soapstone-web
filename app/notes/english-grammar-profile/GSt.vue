<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-subject-be-adjective-to-infinitive, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + 形容詞 + to + 原形動詞" mark="unlikely">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span>人或事情，像 they、we、some problems。</span>
        </div>
        <div>
          <span class="term">形容詞</span>
          <span>likely、unlikely、sure、certain、bound。</span>
        </div>
        <div>
          <span class="term">to + 原形動詞</span>
          <span>可能發生的事。</span>
        </div>
        <div>
          <span class="term">to have + 過去分詞</span>
          <span>可能已經發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="可能已經發生的事：to have + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If you see a film today, it is likely to have been made with computers."
              :marks="[]"
            /><span class="translation"
              >如果你今天看一部電影，它很可能是用電腦做出來的。（被動）</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="主詞是人或事情時，形容詞後面接 to 和原形動詞" mark="to">
      <NoteFix
        wrong="They are unlikely that arrive on Friday."
        right="They are unlikely to arrive on Friday."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="Prices are likely to rising."
        right="Prices are likely to rise."
        :fix="['rise.']"
      />
    </NoteSlide>
    <NoteSlide title="說已經發生的事，用 to have 加過去分詞">
      <NoteFix
        wrong="He is likely to forgot the meeting yesterday."
        right="He is likely to have forgotten the meeting yesterday."
        :fix="['have forgotten']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
