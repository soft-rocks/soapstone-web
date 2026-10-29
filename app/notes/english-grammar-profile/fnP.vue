<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-of-noun-phrase-s, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="of 加名詞片語再加 's">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'the owner is', role: '主詞和動詞', kind: 'dim' },
          { t: 'a friend', role: 'a + 名詞' },
          { t: 'of', role: 'of', kind: 'key' },
          { t: 'my father\'s.', role: '名詞片語 + \'s', kind: 'key' },
        ]"
      />
      <p class="translation">老闆是我爸爸的朋友。</p>
    </NoteSlide>

    <NoteSlide title="很多人中的一個" mark="a friend of my father's">
      <div class="rows is-labeled">
        <div>
          <span class="term">特定的人</span>
          <span
            ><NoteMark
              sentence="My father's friend is coming to dinner."
              :marks="['My father\'s friend']"
            /><span class="translation">我爸爸的那位朋友要來吃晚餐。</span></span
          >
        </div>
        <div>
          <span class="term">很多人中的一個</span>
          <span
            ><NoteMark
              sentence="A friend of my father's is coming to dinner."
              :marks="['A friend of my father\'s']"
            /><span class="translation">我爸爸的一個朋友要來吃晚餐。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="代名詞用 mine、yours" mark="of my father's">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="She's a friend of my sister's."
              :marks="['of my sister\'s']"
            /><span class="translation">她是我姊姊的一個朋友。</span></span
          >
        </div>
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark sentence="He's a friend of mine." :marks="['of mine']" /><span
              class="translation"
              >他是我的一個朋友。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面接 mine" mark="of">
      <NoteFix wrong="He's a friend of me." right="He's a friend of mine." fix="mine" />
    </NoteSlide>

    <NoteSlide title="名詞前面只放一個限定詞" mark="a friend">
      <NoteFix
        wrong="She's my a cousin of Tom's."
        right="She's a cousin of Tom's."
        fix="a cousin"
      />
    </NoteSlide>

    <NoteSlide title="中間要加 of" mark="of">
      <NoteFix
        wrong="He's a colleague my father's."
        right="He's a colleague of my father's."
        fix="of"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
