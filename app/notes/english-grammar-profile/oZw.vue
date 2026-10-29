<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-it-be-adjective-for-object-infinitive, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + is / was + 形容詞 + for + 受詞 + to + 原形動詞" mark="impossible">
      <div class="rows is-labeled">
        <div>
          <span class="term">it</span>
          <span>形式主詞，指後面的 to 不定詞。</span>
        </div>
        <div>
          <span class="term">形容詞</span>
          <span>判斷，像 important、impossible、essential、easy、difficult。</span>
        </div>
        <div>
          <span class="term">for + 受詞</span>
          <span>做這件事的人。受詞用 me、you、him、her、us、them 或名詞。</span>
        </div>
        <div>
          <span class="term">to + 原形動詞</span>
          <span>那件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="for 是介系詞，後面用受格 me" mark="for">
      <NoteFix
        wrong="It's impossible for I to come at six."
        right="It's impossible for me to come at six."
        :fix="['me']"
      />
    </NoteSlide>
    <NoteSlide title="說誰去做那件事，用 for 加受詞" mark="for">
      <NoteFix
        wrong="It's important to you to come early."
        right="It's important for you to come early."
        :fix="['for']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="It's hard for him to finding a job."
        right="It's hard for him to find a job."
        :fix="['find']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
