<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-plural-s, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="複數的 -&#x2060;s 加在主要名詞上">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'We play', kind: 'dim' },
          { t: 'computer', role: '不加 -s' },
          { t: 'games.', role: 'game + s', kind: 'key' },
        ]"
      />
      <p class="translation">我們玩電腦遊戲。</p>
    </NoteSlide>

    <NoteSlide title="數字二以上、some、these 和一般的說法用複數" mark="games.">
      <div class="rows is-labeled">
        <div>
          <span class="term">數字二以上</span>
          <span>two books, five minutes</span>
        </div>
        <div>
          <span class="term">some / a lot of</span>
          <span>some friends, a lot of flowers</span>
        </div>
        <div>
          <span class="term">these / those</span>
          <span>these shoes, those books</span>
        </div>
        <div>
          <span class="term">一般的說法</span>
          <span
            ><NoteMark sentence="I like cats." :marks="['cats']" /><span class="translation"
              >我喜歡貓。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞當主詞，動詞用複數" mark="games.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My friends', role: '複數名詞', kind: 'key' },
          { t: 'are', role: '複數動詞', kind: 'key' },
          { t: 'from Poland.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的朋友是波蘭人。</p>
    </NoteSlide>

    <NoteSlide title="數字二以上，名詞加 -&#x2060;s" mark="games.">
      <NoteFix
        wrong="You have to walk five minute down the road."
        right="You have to walk five minutes down the road."
        fix="minutes"
      />
    </NoteSlide>

    <NoteSlide title="a lot of 後面的可數名詞用複數" mark="games.">
      <NoteFix
        wrong="There are a lot of flower in the park."
        right="There are a lot of flowers in the park."
        fix="flowers"
      />
    </NoteSlide>

    <NoteSlide title="主詞是複數，動詞用 are">
      <NoteFix wrong="My brothers is at school." right="My brothers are at school." fix="are" />
    </NoteSlide>

    <NoteSlide title="a 後面用單數名詞">
      <NoteFix wrong="I have a cats." right="I have a cat." fix="cat" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
