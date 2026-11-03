<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-est-63, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="cheap 加 -est 是最高級，前面加 the">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It was', role: '主詞 + be', kind: 'dim' },
          { t: 'the cheapest', role: 'the + 形容詞-est', kind: 'key', ring: true },
          { t: 'in this shop!', role: 'in + 範圍', kind: 'slot' },
        ]"
      />
      <p class="translation">那是這家店裡最便宜的！</p>
    </NoteSlide>

    <NoteSlide title="前文說過是什麼，最高級後面可以不接名詞" mark="the cheapest">
      <div class="rows">
        <div>
          <span
            ><NoteMark
              sentence="We tried all the cafés near the office, and this one is the cheapest."
              :marks="['the cheapest']"
            /><span class="translation">我們把辦公室附近的咖啡店都試過了，這家最便宜。</span></span
          >
        </div>
        <div>
          <span
            ><NoteMark
              sentence="My brother plays basketball. He's the tallest in our family."
              :marks="['the tallest']"
            /><span class="translation">我哥哥打籃球。他是我們家最高的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="一般的單音節形容詞直接加 -est" mark="cheapest">
      <div class="rows is-labeled">
        <div>
          <span class="term">old → oldest</span>
          <span
            ><NoteMark
              sentence="People say the oak by the gate is the oldest tree in the park."
              :marks="['oldest']"
            /><span class="translation">大家說門邊那棵橡樹是公園裡最老的樹。</span></span
          >
        </div>
        <div>
          <span class="term">tall → tallest</span>
          <span
            ><NoteMark
              sentence="That's the tallest building in the city."
              :marks="['tallest']"
            /><span class="translation">那是這座城市最高的大樓。</span></span
          >
        </div>
        <div>
          <span class="term">slow → slowest</span>
          <span
            ><NoteMark
              sentence="We took the slowest train, so the trip took six hours."
              :marks="['slowest']"
            /><span class="translation">我們搭了最慢的火車，所以這趟路花了六個小時。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="字尾是 e，只加 -st">
      <div class="rows is-labeled">
        <div>
          <span class="term">nice → nicest</span>
          <span
            ><NoteMark sentence="She was the nicest person on the tour." :marks="['nicest']" /><span
              class="translation"
              >她是這趟旅行裡人最好的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">large → largest</span>
          <span
            ><NoteMark
              sentence="Blue whales are the largest animals in the world."
              :marks="['largest']"
            /><span class="translation">藍鯨是世界上最大的動物。</span></span
          >
        </div>
        <div>
          <span class="term">safe → safest</span>
          <span
            ><NoteMark sentence="That's the safest place for it." :marks="['safest']" /><span
              class="translation"
              >那是放它最安全的地方。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="字尾是一個母音加一個子音，重複子音再加 -est">
      <div class="rows is-labeled">
        <div>
          <span class="term">big → biggest</span>
          <span
            ><NoteMark sentence="Can we book the biggest room?" :marks="['biggest']" /><span
              class="translation"
              >我們可以訂最大的那間嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">hot → hottest</span>
          <span
            ><NoteMark
              sentence="July is usually the hottest month here, so we go to the beach then."
              :marks="['hottest']"
            /><span class="translation">這裡七月通常最熱，所以我們那時候去海邊。</span></span
          >
        </div>
        <div>
          <span class="term">sad → saddest</span>
          <span
            ><NoteMark sentence="It was the saddest part." :marks="['saddest']" /><span
              class="translation"
              >那是最悲傷的一段。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="字尾是子音加 y，y 改成 i 再加 -est">
      <div class="rows is-labeled">
        <div>
          <span class="term">dry → driest</span>
          <span
            ><NoteMark
              sentence="It hardly ever rains in March. That's the driest month of the year."
              :marks="['driest']"
            /><span class="translation">三月幾乎不下雨。那是一年裡最乾的月份。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="good 和 bad 的最高級不加 -est">
      <div class="rows is-labeled">
        <div>
          <span class="term">good → best</span>
          <span
            ><NoteMark sentence="It's the best present I got this year." :marks="['best']" /><span
              class="translation"
              >這是我今年收到最好的禮物。</span
            ></span
          >
        </div>
        <div>
          <span class="term">bad → worst</span>
          <span
            ><NoteMark sentence="It was the worst day of my holiday." :marks="['worst']" /><span
              class="translation"
              >那是我假期裡最糟的一天。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="所有格後面的最高級不加 the">
      <div class="rows">
        <div>
          <span
            ><NoteMark
              sentence="My oldest friend lives in Canada now, so we only talk on the phone."
              :marks="['My oldest']"
            /><span class="translation">我最老的朋友現在住在加拿大，所以我們只講電話。</span></span
          >
        </div>
        <div>
          <span
            ><NoteMark
              sentence="Our youngest daughter starts school in September."
              :marks="['Our youngest']"
            /><span class="translation">我們的小女兒九月開始上學。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加了 -est，前面不加 most" mark="cheapest">
      <NoteFix
        wrong="Lily chose the most cheapest dress in the shop."
        right="Lily chose the cheapest dress in the shop."
        fix="the cheapest"
      />
    </NoteSlide>

    <NoteSlide title="最高級前面要加 the" mark="the cheapest">
      <NoteFix
        wrong="She is youngest person in the office."
        right="She is the youngest person in the office."
        fix="the youngest"
      />
    </NoteSlide>

    <NoteSlide title="單音節形容詞加 -est，不用 most" mark="cheapest">
      <NoteFix
        wrong="That's the most fast car in the race."
        right="That's the fastest car in the race."
        fix="fastest"
      />
    </NoteSlide>

    <NoteSlide title="big 的 g 要重複，再加 -est">
      <NoteFix
        wrong="Tokyo is the bigest city in Japan."
        right="Tokyo is the biggest city in Japan."
        fix="biggest"
      />
    </NoteSlide>

    <NoteSlide title="good 的最高級是 best">
      <NoteFix
        wrong="Mia makes the goodest cakes in our street."
        right="Mia makes the best cakes in our street."
        fix="best"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
