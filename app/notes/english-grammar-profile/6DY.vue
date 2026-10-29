<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-intentions, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be going to 說已經決定好的打算" mark="I'm going to use">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: '\'m going to', role: 'be going to', kind: 'key', ring: true },
          { t: 'use', role: '原形動詞' },
          { t: 'pink paint.', kind: 'dim' },
        ]"
      />
      <p class="translation">我要用粉紅色的油漆。</p>
      <p class="remark">用粉紅色是 Ann 說話前就決定好的事。</p>
    </NoteSlide>

    <NoteSlide title="說自己和別人的打算" mark="going to">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'My mum', role: '主詞' },
          { t: 'is going to', role: 'be going to', kind: 'key', ring: true },
          { t: 'take us by car.', role: '原形動詞' },
        ]"
      />
      <p class="translation">我媽媽要開車載我們去。</p>
    </NoteSlide>

    <NoteSlide title="把 be 動詞放在主詞前面，問別人的打算" mark="going to">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'What time', role: 'wh- 疑問詞' },
          { t: 'are', role: 'be 動詞', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'going to come?', role: 'going to + 原形動詞' },
        ]"
      />
      <p class="translation">你打算幾點來？</p>
    </NoteSlide>

    <NoteSlide title="說話前就決定用 be going to，說話時才決定用 will" mark="I'm going to">
      <div class="rows is-labeled">
        <div>
          <span class="term">be going to</span>
          <span
            ><NoteMark sentence="I'm going to call Tom tonight." :marks="['I\'m going to']" /><span
              class="translation"
              >我今晚要打給 Tom。說話前就決定了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark sentence="The phone's ringing. I'll answer it." :marks="['I\'ll']" /><span
              class="translation"
              >電話響了，我來接。說話的時候才決定。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="going 後面要有 to" mark="going to">
      <NoteFix
        wrong="I'm going paint my room on Saturday."
        right="I'm going to paint my room on Saturday."
        fix="going to"
      />
    </NoteSlide>

    <NoteSlide title="going to 後面要接原形動詞" mark="use">
      <NoteFix wrong="I'm going to pink paint." right="I'm going to use pink paint." fix="use" />
    </NoteSlide>

    <NoteSlide title="疑問句裡，be 動詞放在主詞前面" mark="I'm">
      <NoteFix
        wrong="What you are going to bring?"
        right="What are you going to bring?"
        fix="are you"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
