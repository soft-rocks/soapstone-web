<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-as-if-non-finite-clause, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="as if + to 不定詞，猜動作的目的" mark="as if to push">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He raised his hand', role: '看得到的動作', kind: 'dim' },
          { t: 'as if', role: 'as if', kind: 'key' },
          { t: 'to speak.', role: 'to 不定詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">他舉起手，好像要說話。</p>
    </NoteSlide>

    <NoteSlide title="as if + 動詞-ing，看起來好像正在做什麼" mark="as if">
      <NoteMark
        sentence="The cat looked up as if listening to something."
        :marks="['as if listening']"
      />
      <p class="translation">那隻貓抬起頭，好像在聽什麼。</p>
    </NoteSlide>

    <NoteSlide title="非限定子句省略了主詞和動詞" mark="as if to push">
      <div class="rows is-labeled">
        <div>
          <span class="term">非限定子句</span>
          <span><code>as if to speak</code></span>
        </div>
        <div>
          <span class="term">完整子句</span>
          <span><code>as if he wanted to speak</code></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as if to 後面用原形動詞" mark="to push">
      <NoteFix
        wrong="She waved as if to saying goodbye."
        right="She waved as if to say goodbye."
        fix="say"
      />
    </NoteSlide>

    <NoteSlide title="as if 後面不直接接原形動詞" mark="as if">
      <NoteFix
        wrong="The cat looked up as if listen to something."
        right="The cat looked up as if listening to something."
        fix="listening"
      />
    </NoteSlide>

    <NoteSlide title="表示好像要做什麼，用 as if to" mark="as if to">
      <NoteFix
        wrong="She tapped the table as to get our attention."
        right="She tapped the table as if to get our attention."
        fix="as if to"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
