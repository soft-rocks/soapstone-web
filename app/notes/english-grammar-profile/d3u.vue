<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-requests-610, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Will you + 原形動詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Will you</span>
          <span>你會……嗎？請對方做事。</span>
        </div>
        <div>
          <span class="term">Will you be able to</span>
          <span>你能……嗎？比較客氣。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>請對方做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="讓請求更客氣" mark="Will you">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Will you close the door, please?"
              :marks="['Will you', 'please?']"
            /><span class="translation">請你關一下門好嗎？</span></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Would you close the door, please?"
              :marks="['Would you', 'please?']"
            /><span class="translation">可以請你關一下門嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">Will you 加 please 比較客氣。Would you 更客氣。</p>
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞" mark="Will">
      <NoteFix wrong="Will you to come with me?" right="Will you come with me?" :fix="['come']" />
    </NoteSlide>
    <NoteSlide title="be able 後面要接 to" mark="be able">
      <NoteFix
        wrong="Will you be able help me?"
        right="Will you be able to help me?"
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="Will">
      <NoteFix
        wrong="Will you helping me carry this box?"
        right="Will you help me carry this box?"
        :fix="['help']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
