<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-present-continuous-if-clause-plans, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="先說對方的計畫，再給建議" mark="are looking for">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If you\'re travelling by train,', role: '現在進行式', kind: 'key' },
          { t: 'you should book a seat.', role: '建議' },
        ]"
      />
      <p class="translation">如果你要搭火車，應該先訂位。</p>
    </NoteSlide>

    <NoteSlide title="現在進行式說計畫或正在找的事" mark="are looking for">
      <div class="rows is-labeled">
        <div>
          <span class="term">計畫</span>
          <span
            ><NoteMark
              sentence="If you're staying in Paris next week, you must visit the market."
              :marks="['you\'re staying', 'next week,']"
            /><span class="translation">如果你下週要待在巴黎，一定要去逛那個市場。</span></span
          >
        </div>
        <div>
          <span class="term">正在找</span>
          <span
            ><NoteMark
              sentence="If you're looking for a quiet hotel, try the one by the river."
              :marks="['you\'re looking for']"
            /><span class="translation">如果你在找安靜的飯店，試試河邊那家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="也可以用 be going to">
      <div class="rows is-labeled">
        <div>
          <span class="term">be going to</span>
          <span
            ><NoteMark
              sentence="If you're going to paint the kitchen, buy enough paint first."
              :marks="['you\'re going to paint']"
            /><span class="translation">如果你打算粉刷廚房，先買夠油漆。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="I'd 說自己會怎麼做" mark="I would">
      <div class="rows is-labeled">
        <div>
          <span class="term">I'd<br /><i>I would</i></span>
          <span
            ><NoteMark
              sentence="If you're thinking of buying a bike, I'd get a second-hand one."
              :marks="['I\'d get']"
            /><span class="translation">如果你在考慮買腳踏車，我會買二手的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：你要刺激，我會選城市" mark="I would go for the city.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If you are looking for fun and excitement,', role: '現在進行式', kind: 'key' },
          { t: 'I would go for the city.', role: '建議' },
        ]"
      />
      <p class="translation">如果你想找樂子和刺激，我會選城市。</p>
      <p class="remark"><code>go for</code> 的意思是選擇。</p>
    </NoteSlide>

    <NoteSlide title="if 子句說計畫不用 will" mark="are looking for">
      <NoteFix
        wrong="If you will travel abroad, you should get some local money."
        right="If you're travelling abroad, you should get some local money."
        fix="you're travelling"
      />
    </NoteSlide>

    <NoteSlide title="現在進行式要有 be 動詞" mark="are">
      <NoteFix
        wrong="If you going to the party, wear something warm."
        right="If you're going to the party, wear something warm."
        fix="you're"
      />
    </NoteSlide>

    <NoteSlide title="should 後面不加 to" mark="would go">
      <NoteFix
        wrong="If you are going to move, you should to visit both schools first."
        right="If you are going to move, you should visit both schools first."
        fix="should visit"
      />
    </NoteSlide>

    <NoteSlide title="現在簡單式說一般的條件">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在簡單式<br /><i>一般的條件</i></span>
          <span
            ><NoteMark
              sentence="If you study abroad, you'll learn the language fast."
              :marks="['study']"
            /><span class="translation">如果你出國讀書，會很快學會那個語言。</span></span
          >
        </div>
        <div>
          <span class="term">現在進行式<br /><i>計畫好的事</i></span>
          <span
            ><NoteMark
              sentence="If you're studying abroad next year, you need to apply for a visa."
              :marks="['you\'re studying']"
            /><span class="translation">如果你明年要出國讀書，就要申請簽證。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在進行式也說正在發生的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">正在發生</span>
          <span
            ><NoteMark
              sentence="If you're feeling sick, go and lie down."
              :marks="['you\'re feeling']"
            /><span class="translation">如果你覺得不舒服，就去躺一下。</span></span
          >
        </div>
        <div>
          <span class="term">計畫</span>
          <span
            ><NoteMark
              sentence="If you're leaving early tomorrow, set an alarm."
              :marks="['you\'re leaving', 'tomorrow,']"
            /><span class="translation">如果你明天要早點出門，就設個鬧鐘。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
