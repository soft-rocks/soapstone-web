<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-determiner-noun-652, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a lot of 說明數量很多">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I visited', kind: 'dim' },
          { t: 'a lot of', role: '限定詞', kind: 'key' },
          { t: 'museums,', role: '複數可數名詞' },
          { t: 'and I went shopping.', kind: 'dim' },
        ]"
      />
      <p class="translation">我參觀了很多博物館，也去逛了街。</p>
    </NoteSlide>

    <NoteSlide title="限定詞決定後面接哪一種名詞" mark="a lot of">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數可數名詞</span>
          <span>many shops, a few friends, both parents</span>
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span>much time, a little milk</span>
        </div>
        <div>
          <span class="term">兩種都接</span>
          <span>a lot of, lots of, no</span>
        </div>
        <div>
          <span class="term">單數可數名詞</span>
          <span>every day, each room, another piece</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="so many 接複數名詞，so much 接不可數名詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">so many</span>
          <span
            ><NoteMark sentence="There are so many shops here." :marks="['so many shops']" /><span
              class="translation"
              >這裡有好多店。</span
            ></span
          >
        </div>
        <div>
          <span class="term">so much</span>
          <span
            ><NoteMark
              sentence="I had so much fun at the beach today!"
              :marks="['so much fun']"
            /><span class="translation">我今天在海邊玩得好開心！</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不可數名詞用 much，不用 many">
      <NoteFix
        wrong="I don't have many money this month."
        right="I don't have much money this month."
        fix="much"
      />
    </NoteSlide>

    <NoteSlide title="every 後面接單數可數名詞">
      <NoteFix wrong="I go to the gym every days." right="I go to the gym every day." fix="day" />
    </NoteSlide>

    <NoteSlide title="a lot 放在名詞前面要加 of" mark="a lot of">
      <NoteFix
        wrong="There were a lot people at the beach."
        right="There were a lot of people at the beach."
        fix="of"
      />
    </NoteSlide>

    <NoteSlide title="both 後面接複數名詞">
      <NoteFix
        wrong="Both my parent work in a hospital."
        right="Both my parents work in a hospital."
        fix="parents"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
