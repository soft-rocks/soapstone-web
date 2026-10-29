<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-predicative-with-be-47, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be 後面的形容詞說狀態、感覺或個性" mark="am free">
      <div class="rows is-labeled">
        <div>
          <span class="term">狀態</span>
          <span
            ><NoteMark sentence="Dinner is ready! Come and eat." :marks="['is ready']" /><span
              class="translation"
              >晚餐好了！來吃吧。</span
            ></span
          >
        </div>
        <div>
          <span class="term">感覺</span>
          <span
            ><NoteMark
              sentence="The kids couldn't sleep the night before the zoo trip. They were too excited."
              :marks="['were too excited']"
            /><span class="translation">去動物園的前一晚，孩子們睡不著。他們太興奮了。</span></span
          >
        </div>
        <div>
          <span class="term">個性</span>
          <span
            ><NoteMark
              sentence="Ken is shy, so he doesn't talk much in class."
              :marks="['is shy']"
            /><span class="translation">Ken 很害羞，所以他上課不太說話。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="-ed 說人的感覺，-ing 說帶給別人的感覺" mark="free">
      <div class="rows is-labeled">
        <div>
          <span class="term">-ed</span>
          <span
            ><NoteMark sentence="Are you bored? We can play a game." :marks="['bored']" /><span
              class="translation"
              >你覺得無聊嗎？我們可以玩遊戲。</span
            ></span
          >
        </div>
        <div>
          <span class="term">-ing</span>
          <span
            ><NoteMark
              sentence="The museum was boring, so we left early."
              :marks="['boring']"
            /><span class="translation">博物館很無聊，所以我們提早離開了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞和形容詞中間要有 be" mark="am">
      <NoteFix wrong="I free on Monday." right="I am free on Monday." fix="am" />
    </NoteSlide>

    <NoteSlide title="說自己的感覺用 -ed" mark="free">
      <NoteFix
        wrong="My geography homework is bored. It's just copying maps."
        right="My geography homework is boring. It's just copying maps."
        fix="boring"
      />
    </NoteSlide>

    <NoteSlide title="be 後面要用形容詞，不用名詞" mark="free">
      <NoteFix
        wrong="Don't be fear. The dog is friendly."
        right="Don't be afraid. The dog is friendly."
        fix="afraid"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
