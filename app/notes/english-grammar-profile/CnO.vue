<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-use-such-a-adjective-noun, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="such 加強名詞片語裡的形容詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Thank you for giving me', kind: 'dim' },
          { t: 'such', role: '加強', kind: 'key' },
          { t: 'a', role: '冠詞' },
          { t: 'fantastic', role: '形容詞' },
          { t: 'birthday present.', role: '名詞' },
        ]"
      />
      <p class="translation">謝謝你送我這麼棒的生日禮物。</p>
    </NoteSlide>

    <NoteSlide title="複數名詞和不可數名詞前面不加 a" mark="a">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數可數名詞</span>
          <span
            ><NoteMark sentence="It was such a hot day." :marks="['such a']" /><span
              class="translation"
              >那天好熱。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark sentence="They're such nice people." :marks="['such']" /><span
              class="translation"
              >他們人真好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark sentence="We had such lovely weather." :marks="['such']" /><span
              class="translation"
              >我們遇到的天氣真好。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="such 接名詞片語，so 直接接形容詞" mark="such">
      <div class="rows is-labeled">
        <div>
          <span class="term">such + 名詞片語</span>
          <span
            ><NoteMark sentence="It was such a hot day." :marks="['such a hot day']" /><span
              class="translation"
              >那天好熱。</span
            ></span
          >
        </div>
        <div>
          <span class="term">so + 形容詞</span>
          <span
            ><NoteMark sentence="The day was so hot." :marks="['so hot']" /><span
              class="translation"
              >那一天熱得要命。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="such 的名詞片語後面可以接 that 子句，說明結果" mark="such">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It was', kind: 'dim' },
          { t: 'such a long film', role: 'such + 名詞片語', kind: 'key' },
          { t: 'that I fell asleep.', role: '結果' },
        ]"
      />
      <p class="translation">那部電影長到我睡著了。</p>
    </NoteSlide>

    <NoteSlide title="a 放在 such 後面" mark="such a">
      <NoteFix wrong="It was a such nice party." right="It was such a nice party." fix="such a" />
    </NoteSlide>

    <NoteSlide title="單數可數名詞前面要有 a 或 an" mark="a">
      <NoteFix wrong="She's such kind person." right="She's such a kind person." fix="a" />
    </NoteSlide>

    <NoteSlide title="weather 是不可數名詞，前面不加 a">
      <NoteFix
        wrong="We had such a terrible weather."
        right="We had such terrible weather."
        fix="such terrible"
      />
    </NoteSlide>

    <NoteSlide title="名詞片語前面用 such，不用 so" mark="such">
      <NoteFix wrong="It was so a good film." right="It was such a good film." fix="such" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
