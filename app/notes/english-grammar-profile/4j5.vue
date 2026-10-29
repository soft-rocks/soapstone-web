<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-the-noun-who-that-focus, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="The thing that 加子句當主詞，重點放在 is 後面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The thing that', role: '主詞', kind: 'key' },
          { t: 'I love most', role: '子句' },
          { t: 'is', role: '主要動詞' },
          { t: 'going to the shops.', role: '重點', kind: 'key' },
        ]"
      />
      <p class="translation">我最喜歡的事就是去逛街。</p>
    </NoteSlide>

    <NoteSlide
      title="說人用 the person who，說事情用 the thing that，the one 都可以"
      mark="The thing that"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">the person who</span>
          <span
            ><NoteMark
              sentence="The person who helped me most was my sister."
              :marks="['The person who']"
            /><span class="translation">幫我最多的人是我姊姊。</span></span
          >
        </div>
        <div>
          <span class="term">the one who</span>
          <span
            ><NoteMark
              sentence="The one who always remembers my birthday is my grandmother."
              :marks="['The one who']"
            /><span class="translation">總是記得我生日的人是我奶奶。</span></span
          >
        </div>
        <div>
          <span class="term">the thing that</span>
          <span
            ><NoteMark
              sentence="The thing that surprised me was the price."
              :marks="['The thing that']"
            /><span class="translation">讓我驚訝的是價錢。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加上 only，強調只有這一個" mark="The thing that">
      <div class="rows is-labeled">
        <div>
          <span class="term">the only one</span>
          <span
            ><NoteMark
              sentence="You're the only one who understands me."
              :marks="['the only one who']"
            /><span class="translation">你是唯一懂我的人。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="重點可以是名詞片語、動詞-ing、to 不定詞或 that 子句"
      mark="going to the shops."
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">that 子句</span>
          <span
            ><NoteMark
              sentence="The thing that worries me is that nobody has called."
              :marks="['that nobody has called.']"
            /><span class="translation">讓我擔心的是一直沒人打來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說人用 the person who，不用 thing">
      <NoteFix
        wrong="The thing that cooked dinner was my brother."
        right="The person who cooked dinner was my brother."
        fix="The person who"
      />
    </NoteSlide>

    <NoteSlide title="that 已經是受詞，子句裡不再加 it" mark="I love most">
      <NoteFix
        wrong="The thing that I hate it is waiting."
        right="The thing that I hate is waiting."
        fix="hate is"
      />
    </NoteSlide>

    <NoteSlide title="關係子句後面要接主要動詞" mark="is">
      <NoteFix
        wrong="The person who called me my best friend."
        right="The person who called me was my best friend."
        fix="was"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
