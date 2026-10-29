<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 052, as slides, in the order of notes/dragon-english-basic-100/052.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="主詞相同時，while 子句省略主詞和 be 動詞" mark="While traveling">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'While', role: '連接詞', kind: 'key' },
          { t: 'I was', role: '省略', kind: 'gone' },
          { t: 'traveling in Europe,', role: '動詞-ing', kind: 'key' },
          { t: 'I was disappointed', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>while traveling</code> 就是 <code>while I was traveling</code>。</p>
    </NoteSlide>

    <NoteSlide title="when 子句也可以省略主詞和 be 動詞" mark="While traveling">
      <div class="rows is-labeled">
        <div>
          <span class="term">while</span>
          <span
            ><NoteMark
              sentence="Don't use your phone while driving."
              :marks="['while driving']"
            /><span class="translation">開車的時候不要用手機。</span></span
          >
        </div>
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark sentence="Be careful when using a knife." :marks="['when using']" /><span
              class="translation"
              >用刀子的時候要小心。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情緒形容詞後面的 that 子句說明情緒的原因" mark="disappointed that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I was', kind: 'dim' },
          { t: 'disappointed', role: '情緒形容詞', kind: 'key' },
          { t: 'that', role: '連接詞' },
          { t: 'wherever I went, there were many Japanese tourists.', role: '原因' },
        ]"
      />
      <p class="translation">不管我去哪裡都有很多日本觀光客，讓我很失望。</p>
    </NoteSlide>

    <NoteSlide title="surprised 和 happy 後面也可以接 that 子句" mark="disappointed">
      <div class="rows is-labeled">
        <div>
          <span class="term">surprised</span>
          <span
            ><NoteMark
              sentence="We were surprised that the hotel was so cheap."
              :marks="['surprised that']"
            /><span class="translation">我們很驚訝那家旅館那麼便宜。</span></span
          >
        </div>
        <div>
          <span class="term">happy</span>
          <span
            ><NoteMark
              sentence="My parents were happy that I passed the exam."
              :marks="['happy that']"
            /><span class="translation">我爸媽很高興我通過了考試。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="wherever 的意思是不管到哪裡，帶出副詞子句" mark="wherever I went">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'wherever', role: '連接詞', kind: 'key' },
          { t: 'I went,', role: '主詞 + 動詞' },
          { t: 'there were many Japanese tourists.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">不管我去哪裡都有很多日本觀光客。</p>
    </NoteSlide>

    <NoteSlide title="wherever 子句可以放在主要子句的前面或後面" mark="wherever">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面</span>
          <span
            ><NoteMark
              sentence="Wherever we went in Kyoto, there were many people."
              :marks="['Wherever we went']"
            /><span class="translation">我們在京都不管走到哪裡都有很多人。</span></span
          >
        </div>
        <div>
          <span class="term">後面</span>
          <span
            ><NoteMark
              sentence="My dog follows me wherever I go."
              :marks="['wherever I go']"
            /><span class="translation">不管我去哪裡，我的狗都跟著我。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="whenever 的意思是每次，用法和 wherever 相同" mark="wherever">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面</span>
          <span
            ><NoteMark
              sentence="Whenever it rains, the trains are late."
              :marks="['Whenever it rains']"
            /><span class="translation">每次下雨，火車都會誤點。</span></span
          >
        </div>
        <div>
          <span class="term">後面</span>
          <span
            ><NoteMark
              sentence="My little brother cries whenever he sees a dog."
              :marks="['whenever he sees']"
            /><span class="translation">我弟弟每次看到狗都會哭。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
