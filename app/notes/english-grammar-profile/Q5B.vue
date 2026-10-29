<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-same-subject-and-object-singular, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="ask yourself：主詞和受詞是同一個人">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'First,', kind: 'dim' },
          { t: 'you', role: '主詞' },
          { t: 'should ask', role: '動詞' },
          { t: 'yourself', role: '受詞 = you', kind: 'key' },
          { t: 'if you have enough money for the journey.', role: '問自己的問題', kind: 'dim' },
        ]"
      />
      <p class="translation">首先，你應該問問自己，你的錢夠不夠去這趟旅行。</p>
    </NoteSlide>

    <NoteSlide title="introduce、blame、tell 這類動詞常接反身代名詞" mark="yourself">
      <div class="rows is-labeled">
        <div>
          <span class="term">introduce</span>
          <span
            ><NoteMark
              sentence="Let me introduce myself. I'm the new manager."
              :marks="['introduce myself.']"
            /><span class="translation">我來自我介紹一下。我是新來的經理。</span></span
          >
        </div>
        <div>
          <span class="term">blame</span>
          <span
            ><NoteMark
              sentence="Don't blame yourself. It wasn't your fault."
              :marks="['blame yourself.']"
            /><span class="translation">別怪自己，那不是你的錯。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞是東西或動物，用 itself" mark="yourself">
      <div class="rows is-labeled">
        <div>
          <span class="term">itself</span>
          <span
            ><NoteMark
              sentence="The cat was washing itself in the sun."
              :marks="['washing itself']"
            /><span class="translation">那隻貓在陽光下舔自己的毛。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞和受詞是同一個人，用 herself" mark="yourself">
      <NoteFix
        wrong="She taught her to play the guitar."
        right="She taught herself to play the guitar."
        fix="herself"
      >
        想說的是她自學吉他。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="主詞是 he，用 himself" mark="yourself">
      <NoteFix
        wrong="He told myself to stay calm."
        right="He told himself to stay calm."
        fix="himself"
      />
    </NoteSlide>

    <NoteSlide title="it 的反身代名詞是 itself">
      <NoteFix
        wrong="The machine turns itsself off."
        right="The machine turns itself off."
        fix="itself"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
