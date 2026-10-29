<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-using-it-to-introduce, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="it 當形式主詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'key' },
          { t: '\'s', role: 'be 動詞' },
          { t: 'boring', role: '形容詞' },
          { t: 'to be at home', role: '真正的主詞', kind: 'key' },
        ]"
      />
      <p class="translation">待在家很無聊</p>
    </NoteSlide>

    <NoteSlide title="長的主詞放到後面" mark="It's boring">
      <div class="rows is-labeled">
        <div>
          <span class="term">長的主詞在前面</span>
          <span
            ><NoteMark
              sentence="To be at home when you have free time is boring."
              :marks="['To be at home']"
            /><span class="translation">空閒的時候待在家很無聊。（不自然）</span></span
          >
        </div>
        <div>
          <span class="term">用 it</span>
          <span
            ><NoteMark
              sentence="It's boring to be at home when you have free time."
              :marks="['It\'s']"
            /><span class="translation">空閒的時候待在家很無聊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="to 加動詞和 that 子句" mark="to be at home">
      <div class="rows is-labeled">
        <div>
          <span class="term">to + 動詞</span>
          <span
            ><NoteMark
              sentence="It is best to spend your time in the countryside."
              :marks="['to spend']"
            /><span class="translation">最好是把時間花在鄉下。</span></span
          >
        </div>
        <div>
          <span class="term">that 子句</span>
          <span
            ><NoteMark
              sentence="It's normal that your parents want you to go with them."
              :marks="['that']"
            /><span class="translation">你爸媽想要你跟他們一起去，這很正常。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="句子要有主詞" mark="It's">
      <NoteFix wrong="Is boring to be at home." right="It's boring to be at home." fix="It's" />
    </NoteSlide>

    <NoteSlide title="形式主詞用 it" mark="It's">
      <NoteFix
        wrong="This is important that you come early."
        right="It is important that you come early."
        fix="It"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="to be">
      <NoteFix
        wrong="It's easy to making friends here."
        right="It's easy to make friends here."
        fix="make"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
