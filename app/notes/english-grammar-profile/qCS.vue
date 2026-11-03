<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-noun-and-to-infinitive, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="最高級加名詞，後面接 to 不定詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'For people who can\'t afford a car, a bicycle is perhaps', kind: 'dim' },
          { t: 'the cheapest', role: 'the + 最高級', kind: 'key' },
          { t: 'way', role: '名詞' },
          { t: 'to travel in the city.', role: 'to 不定詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">對買不起車的人來說，腳踏車大概是在市區移動最便宜的方式。</p>
    </NoteSlide>

    <NoteSlide title="名詞也可以是 place、time、thing">
      <div class="rows is-labeled">
        <div>
          <span class="term">place to</span>
          <span
            ><NoteMark
              sentence="Where's the safest place to swim?"
              :marks="['safest place to swim']"
            /><span class="translation">在哪裡游泳最安全？</span></span
          >
        </div>
        <div>
          <span class="term">time to</span>
          <span
            ><NoteMark
              sentence="The cheapest time to fly is in February."
              :marks="['cheapest time to fly']"
            /><span class="translation">二月是搭飛機最便宜的時候。</span></span
          >
        </div>
        <div>
          <span class="term">thing to</span>
          <span
            ><NoteMark
              sentence="At the end, the hardest thing to do was say goodbye."
              :marks="['hardest thing to do']"
            /><span class="translation">到最後，最難做的事是說再見。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="多音節的形容詞用 the most">
      <div class="rows">
        <div>
          <span
            ><NoteMark
              sentence="The most important thing to remember is your passport."
              :marks="['most important']"
            /><span class="translation">最要記得帶的是你的護照。</span></span
          >
        </div>
        <div>
          <span
            ><NoteMark
              sentence="What's the most useful word to learn in Japanese?"
              :marks="['most useful']"
            /><span class="translation">日文裡最值得學的字是哪一個？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the best 和 the worst 也接名詞和 to 不定詞">
      <div class="rows">
        <div>
          <span
            ><NoteMark
              sentence="When you're lost, the best thing to do is ask for help."
              :marks="['the best']"
            /><span class="translation">迷路的時候，最好的做法是找人幫忙。</span></span
          >
        </div>
        <div>
          <span
            ><NoteMark
              sentence="Friday afternoon is the worst time to drive into the city."
              :marks="['the worst']"
            /><span class="translation">星期五下午是開車進城最糟的時間。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="way of 後面不接原形動詞" mark="way to travel">
      <NoteFix
        wrong="The cheapest way of send money home is online."
        right="The cheapest way to send money home is online."
        fix="to send"
      />
    </NoteSlide>

    <NoteSlide title="to 後面用原形動詞" mark="to travel">
      <NoteFix
        wrong="That was the fastest way to went home."
        right="That was the fastest way to go home."
        fix="go"
      />
    </NoteSlide>

    <NoteSlide title="最高級前面要加 the" mark="the cheapest">
      <NoteFix
        wrong="Cycling is cheapest way to travel."
        right="Cycling is the cheapest way to travel."
        fix="the cheapest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
