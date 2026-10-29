<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-what-a, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="What a 加形容詞加單數名詞" mark="What a great afternoon">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'What a', role: 'What a / an', kind: 'key', ring: true },
          { t: 'beautiful', role: '形容詞' },
          { t: 'view!', role: '單數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">好美的景色！</p>
    </NoteSlide>

    <NoteSlide title="母音開頭用 an，也可以不加形容詞" mark="What a">
      <div class="rows is-labeled">
        <div>
          <span class="term">What an</span>
          <span
            ><NoteMark
              sentence="We saw dolphins and a rainbow. What an amazing trip!"
              :marks="['What an']"
            /><span class="translation">我們看到海豚和彩虹，這趟旅行太棒了！</span></span
          >
        </div>
        <div>
          <span class="term">不加形容詞</span>
          <span
            ><NoteMark
              sentence="Toys everywhere and paint on the wall. What a mess!"
              :marks="['What a mess']"
            /><span class="translation">到處都是玩具，牆上還有顏料，好亂！</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="後面接子句，主詞在動詞前面" mark="I had yesterday">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'What a nice present', role: '名詞片語', kind: 'dim' },
          { t: 'you', role: '主詞', kind: 'key', ring: true },
          { t: 'gave', role: '動詞', kind: 'key' },
          { t: 'me!', kind: 'dim' },
        ]"
      />
      <p class="translation">你送我的禮物真好！</p>
    </NoteSlide>

    <NoteSlide title="複數和不可數名詞前面不加 a" mark="What">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark sentence="What lovely flowers!" :marks="['What lovely flowers']" /><span
              class="translation"
              >好漂亮的花！</span
            ></span
          >
        </div>
        <div>
          <span class="term">不可數</span>
          <span
            ><NoteMark sentence="What terrible weather!" :marks="['What terrible weather']" /><span
              class="translation"
              >天氣真糟！</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單數可數名詞前面要加 a" mark="What a">
      <NoteFix wrong="What nice day!" right="What a nice day!" fix="What a" />
    </NoteSlide>

    <NoteSlide title="子句不倒裝" mark="I had">
      <NoteFix
        wrong="What a nice room did they give us!"
        right="What a nice room they gave us!"
        fix="they gave"
      />
    </NoteSlide>

    <NoteSlide title="weather 是不可數名詞，不加 a" mark="What">
      <NoteFix
        wrong="What a terrible weather!"
        right="What terrible weather!"
        fix="What terrible"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
