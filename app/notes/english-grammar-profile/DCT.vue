<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-noun-of-possessive-pronoun, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a colleague of mine 是我的其中一個同事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'A colleague', role: 'a + 名詞', kind: 'key' },
          { t: 'of', role: 'of' },
          { t: 'mine', role: '所有格代名詞', kind: 'key' },
          { t: 'has told me about a Swiss hotel in London.', kind: 'dim' },
        ]"
      />
      <p class="translation">我有個同事跟我說過倫敦有一家瑞士飯店。</p>
      <p class="remark">說話的人有好幾個同事，沒說是哪一個。</p>
    </NoteSlide>

    <NoteSlide title="of 後面用 mine、yours、his、hers、ours 或 theirs" mark="mine">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Some schoolmates', role: 'some + 名詞' },
          { t: 'of', kind: 'dim' },
          { t: 'mine', role: '所有格代名詞', kind: 'key' },
          { t: 'invited me on a cycling holiday.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的幾個同學邀我去騎腳踏車旅行。</p>
    </NoteSlide>

    <NoteSlide
      title="a friend of mine 是第一次提到，my friend 是聽話的人知道的那個"
      mark="A colleague"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">a friend of mine</span>
          <span
            ><NoteMark
              sentence="A friend of mine works at the airport."
              :marks="['A friend of mine']"
            /><span class="translation">我有個朋友在機場上班。</span></span
          >
        </div>
        <div>
          <span class="term">my friend</span>
          <span
            ><NoteMark sentence="My friend Sam works at the airport." :marks="['My friend']" /><span
              class="translation"
              >我朋友 Sam 在機場上班。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 或 that 加這個句型，常帶有說話的人的感覺" mark="A">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'That', role: 'that', kind: 'key' },
          { t: 'dog', role: '名詞' },
          { t: 'of yours', role: 'of + 所有格代名詞' },
          { t: 'is so noisy!', kind: 'dim' },
        ]"
      />
      <p class="translation">你那隻狗好吵！</p>
    </NoteSlide>

    <NoteSlide title="of 後面用 mine，不用 me" mark="mine">
      <NoteFix wrong="She's a friend of me." right="She's a friend of mine." fix="mine" />
    </NoteSlide>

    <NoteSlide title="her 後面要接名詞，這裡用 hers" mark="mine">
      <NoteFix wrong="He's a cousin of her." right="He's a cousin of hers." fix="hers" />
    </NoteSlide>

    <NoteSlide title="a 和 my 不一起用" mark="A">
      <NoteFix
        wrong="My a friend of mine lives in Paris."
        right="A friend of mine lives in Paris."
        fix="A"
      />
    </NoteSlide>

    <NoteSlide title="說其中一個人，名詞前面用 a，不用 the" mark="A">
      <NoteFix
        wrong="The neighbour of ours is a doctor."
        right="A neighbour of ours is a doctor."
        fix="A"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
