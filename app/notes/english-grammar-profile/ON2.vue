<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-comparative-clauses-with-mine-yours, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="第二個 as 後面用 yours，不用再說一次名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My bedroom', role: '主詞' },
          { t: 'is not as big as', role: '沒有那麼大' },
          { t: 'yours,', role: '= your bedroom', kind: 'key' },
          { t: 'but it is lovely.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的臥室沒有你的大，但是很可愛。</p>
    </NoteSlide>

    <NoteSlide title="as ... as 是一樣，not as ... as 是沒有那麼" mark="yours,">
      <div class="rows is-labeled">
        <div>
          <span class="term">as ... as</span>
          <span
            ><NoteMark sentence="My phone is as old as yours." :marks="['as old as yours.']" /><span
              class="translation"
              >我的手機跟你的一樣舊。</span
            ></span
          >
        </div>
        <div>
          <span class="term">not as ... as</span>
          <span
            ><NoteMark
              sentence="Your garden isn't as big as mine."
              :marks="['isn\'t as big as mine.']"
            /><span class="translation">你的花園沒有我的大。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as ... as 中間也可以放副詞" mark="as big as">
      <div class="rows is-labeled">
        <div>
          <span class="term">副詞</span>
          <span
            ><NoteMark
              sentence="Does your watch keep time as well as mine?"
              :marks="['as well as mine?']"
            /><span class="translation">你的錶跟我的一樣準嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="比較的是東西，用 yours，不用 you" mark="yours,">
      <NoteFix wrong="My car is as fast as you." right="My car is as fast as yours." fix="yours." />
    </NoteSlide>

    <NoteSlide title="as ... as 前後都用 as" mark="as big as">
      <NoteFix
        wrong="Her cake isn't as sweet than mine."
        right="Her cake isn't as sweet as mine."
        fix="as#2"
      />
    </NoteSlide>

    <NoteSlide title="as ... as 中間用形容詞的原形" mark="big">
      <NoteFix
        wrong="My room is as bigger as yours."
        right="My room is as big as yours."
        fix="big"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
