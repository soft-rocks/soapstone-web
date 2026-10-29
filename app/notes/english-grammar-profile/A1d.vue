<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-579, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Should + 主詞 + 原形動詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Should I / we</span>
          <span>我／我們應該……嗎？</span>
        </div>
        <div>
          <span class="term">疑問詞</span>
          <span>what、where、when、how 放在句首。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>問的那件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="問該怎麼做" mark="Should">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="What should I wear to the party?" :marks="['should']" /><span
              class="translation"
              >我去派對應該穿什麼？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">疑問詞放在 should 前面，問具體的做法。</p>
    </NoteSlide>
    <NoteSlide title="should 的問句不用 do" mark="Should">
      <NoteFix
        wrong="Do I should wear a tie?"
        right="Should I wear a tie?"
        :fix="['Should', 'wear']"
      />
    </NoteSlide>
    <NoteSlide title="疑問詞後面先放 should，再放主詞" mark="Should">
      <NoteFix
        wrong="What I should bring?"
        right="What should I bring?"
        :fix="['should', 'bring?']"
      />
    </NoteSlide>
    <NoteSlide title="should 後面直接接原形動詞" mark="Should">
      <NoteFix wrong="Should we to go by train?" right="Should we go by train?" :fix="['go']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
