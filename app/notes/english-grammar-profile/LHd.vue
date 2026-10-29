<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-degree-with-adjectives, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞放在形容詞前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'The weather', role: '主詞', kind: 'dim' },
          { t: 'was', role: 'be' },
          { t: 'too', role: '程度副詞', kind: 'key', alts: ['so', 'quite'] },
          { t: 'hot.', role: '形容詞' },
        ]"
      />
      <p class="translation">天氣太熱了。</p>
    </NoteSlide>

    <NoteSlide title="so 是非常，quite 是相當，too 是太過" mark="too">
      <div class="rows is-labeled">
        <div>
          <span class="term">so<br /><i>非常</i></span>
          <span
            ><NoteMark sentence="Your baby is so cute!" :marks="['so']" /><span class="translation"
              >你的寶寶好可愛！</span
            ></span
          >
        </div>
        <div>
          <span class="term">quite<br /><i>相當、還算</i></span>
          <span
            ><NoteMark sentence="The film was quite good." :marks="['quite']" /><span
              class="translation"
              >那部電影還滿好看的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">too<br /><i>超過想要的程度</i></span>
          <span
            ><NoteMark sentence="These shoes are too small for me." :marks="['too']" /><span
              class="translation"
              >這雙鞋我穿太小了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="quite 可以放在 a 前面修飾名詞" mark="too">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'It\'s', kind: 'dim' },
          { t: 'quite', role: '程度副詞', kind: 'key', ring: true },
          { t: 'a', role: '冠詞' },
          { t: 'long way', role: '形容詞 + 名詞' },
          { t: 'to the station.', kind: 'dim' },
        ]"
      />
      <p class="translation">到車站的路滿遠的。</p>
    </NoteSlide>

    <NoteSlide title="稱讚東西用 so 或 very，不用 too" mark="too">
      <NoteFix
        wrong="Your garden is too beautiful!"
        right="Your garden is so beautiful!"
        fix="so"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面不用 so，用 such a">
      <NoteFix wrong="It was a so nice day." right="It was such a nice day." fix="such a" />
    </NoteSlide>

    <NoteSlide title="quite 不放在 a 和形容詞中間">
      <NoteFix wrong="It's a quite big house." right="It's quite a big house." fix="quite a" />
    </NoteSlide>

    <NoteSlide title="表示太過的副詞拼成 too" mark="too">
      <NoteFix wrong="The box is to heavy." right="The box is too heavy." fix="too" />
    </NoteSlide>

    <NoteSlide title="too 和 so 後面可以接結果" mark="too">
      <div class="rows is-labeled">
        <div>
          <span class="term">too + to<br /><i>做不到的事</i></span>
          <span
            ><NoteMark
              sentence="The water is too cold to swim in."
              :marks="['too', 'to swim in']"
            /><span class="translation">水太冷了，不能游泳。</span></span
          >
        </div>
        <div>
          <span class="term">so + that<br /><i>造成的結果</i></span>
          <span
            ><NoteMark
              sentence="I was so tired that I fell asleep on the bus."
              :marks="['so', 'that']"
            /><span class="translation">我累到在公車上睡著了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
