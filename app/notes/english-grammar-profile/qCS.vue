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
    <NoteSlide title="to 不定詞說明是做什麼事最怎麼樣" mark="the cheapest way to travel">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The quickest', role: 'the + 最高級', kind: 'key' },
          { t: 'way', role: '名詞' },
          { t: 'to get there', role: 'to 不定詞', kind: 'key', ring: true },
          { t: 'is by train.', kind: 'dim' },
        ]"
      />
      <p class="translation">去那裡最快的方法是搭火車。</p>
    </NoteSlide>

    <NoteSlide title="名詞也可以是 place、time、thing" mark="way">
      <div class="rows is-labeled">
        <div>
          <span class="term">place to</span>
          <span
            ><NoteMark
              sentence="Don't carry your passport around the city. The safest place to keep it is the hotel safe."
              :marks="['safest place to keep']"
            /><span class="translation"
              >別帶著護照在市區走。放護照最安全的地方是飯店的保險箱。</span
            ></span
          >
        </div>
        <div>
          <span class="term">time to</span>
          <span
            ><NoteMark
              sentence="Book your trip to Spain for the winter. The cheapest time to fly is in February."
              :marks="['cheapest time to fly']"
            /><span class="translation"
              >你去西班牙的行程訂在冬天吧。二月是搭飛機最便宜的時候。</span
            ></span
          >
        </div>
        <div>
          <span class="term">the most + thing to</span>
          <span
            ><NoteMark
              sentence="The most important thing to remember is your passport."
              :marks="['most important thing']"
            /><span class="translation">最要記得帶的是你的護照。</span></span
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
