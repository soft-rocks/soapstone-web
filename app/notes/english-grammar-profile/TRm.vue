<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-of-theirs-hers-his, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a 加名詞加 of hers，說她的某一個人">
      <NoteWords
        :size="34"
        :parts="[
          { t: 'I was', kind: 'dim' },
          { t: 'a great admirer', role: 'a + 名詞' },
          { t: 'of hers.', role: '她的', kind: 'key' },
        ]"
      />
      <p class="translation">我以前非常欣賞她。</p>
    </NoteSlide>

    <NoteSlide title="表示關係的名詞加 of his，說一個人和他的關係" mark="of hers.">
      <div class="rows is-labeled">
        <div>
          <span class="term">of his</span>
          <span
            ><NoteMark
              sentence="A cousin of his is a famous singer."
              :marks="['A cousin of his']"
            /><span class="translation">他的一個表親是有名的歌手。</span></span
          >
        </div>
        <div>
          <span class="term">of his</span>
          <span
            ><NoteMark
              sentence="I've always been a big fan of his."
              :marks="['a big fan of his.']"
            /><span class="translation">我一直都是他的大粉絲。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="表示東西的名詞，說他很多東西之中的一樣" mark="of hers.">
      <div class="rows is-labeled">
        <div>
          <span class="term">東西</span>
          <span
            ><NoteMark sentence="He read us a poem of his." :marks="['a poem of his.']" /><span
              class="translation"
              >他唸了他寫的一首詩給我們聽。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of theirs 可以放在較長的名詞片語裡" mark="of hers.">
      <div class="rows is-labeled">
        <div>
          <span class="term">of theirs</span>
          <span
            ><NoteMark
              sentence="We stayed with the parents of a friend of theirs."
              :marks="['a friend of theirs.']"
            /><span class="translation">我們住在他們一個朋友的爸媽家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面用所有格代名詞 theirs，不用 them" mark="of hers.">
      <NoteFix
        wrong="He's a close friend of them."
        right="He's a close friend of theirs."
        fix="theirs."
      />
    </NoteSlide>

    <NoteSlide title="a 和 his 不能一起放在名詞前面" mark="a great admirer">
      <NoteFix
        wrong="A his colleague called me."
        right="A colleague of his called me."
        fix="A colleague of his"
      />
    </NoteSlide>

    <NoteSlide title="hers 沒有撇號" mark="hers.">
      <NoteFix wrong="I'm a fan of her's." right="I'm a fan of hers." fix="hers." />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
