<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-friend-of-possessive-determiner-noun, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="of 後面的所有格限定詞和名詞說明是誰的朋友">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'He is', kind: 'dim' },
          { t: 'a friend', role: 'a friend' },
          { t: 'of', role: 'of', kind: 'key' },
          { t: 'my', role: '所有格限定詞', kind: 'key' },
          { t: 'husband.', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">他是我先生的朋友。</p>
    </NoteSlide>

    <NoteSlide title="好幾個朋友用 friends of" mark="a friend">
      <div class="rows is-labeled">
        <div>
          <span class="term">a friend of</span>
          <span
            ><NoteMark sentence="She's a friend of my sister." :marks="['a friend of']" /><span
              class="translation"
              >她是我姊姊的朋友。</span
            ></span
          >
        </div>
        <div>
          <span class="term">friends of</span>
          <span
            ><NoteMark
              sentence="I thought they were friends of my neighbour."
              :marks="['friends of']"
            /><span class="translation">我以為他們是我鄰居的朋友。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="a friend of my husband 是其中一個，my husband's friend 是知道的那一個"
      mark="a friend"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">a friend of my husband<br /><i>其中一個</i></span>
          <span
            ><NoteMark sentence="He is a friend of my husband." :marks="['a friend of']" /><span
              class="translation"
              >他是我先生的朋友。</span
            ></span
          >
        </div>
        <div>
          <span class="term">my husband's friend<br /><i>知道的那一個</i></span>
          <span
            ><NoteMark
              sentence="My husband's friend Tom is staying with us."
              :marks="['My husband\'s friend']"
            /><span class="translation">我先生的朋友 Tom 住在我們家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a friend 和後面的人中間要有 of" mark="of">
      <NoteFix wrong="She's a friend my brother." right="She's a friend of my brother." fix="of" />
    </NoteSlide>

    <NoteSlide title="說是誰的朋友，用 of，不用 from" mark="of">
      <NoteFix wrong="He's a friend from my dad." right="He's a friend of my dad." fix="of" />
    </NoteSlide>

    <NoteSlide title="主詞是複數，用 friends，前面不加 a" mark="a friend">
      <NoteFix
        wrong="They are a friend of my parents."
        right="They are friends of my parents."
        fix="friends"
      />
    </NoteSlide>

    <NoteSlide title="of 後面的單數可數名詞前面要有限定詞" mark="my">
      <NoteFix wrong="She's a friend of sister." right="She's a friend of my sister." fix="my" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
