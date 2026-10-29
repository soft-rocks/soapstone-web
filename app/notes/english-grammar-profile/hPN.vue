<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-whether-or-not-formal, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="whether or not 引出條件子句，主要子句在兩種情況下都成立">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Whether or not', role: '連接詞', kind: 'key' },
          { t: 'you agree,', role: '條件子句' },
          { t: 'the meeting will go ahead.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">不管你同不同意，會議都會照常舉行。</p>
      <p class="remark">條件子句說未來的事時用現在式，不用 <code>will</code>。</p>
    </NoteSlide>

    <NoteSlide title="條件子句的位置和 or not 的位置">
      <div class="rows is-labeled">
        <div>
          <span class="term">主要子句前面</span>
          <span
            ><NoteMark
              sentence="Whether or not the weather improves, the ceremony will take place outdoors."
              :marks="['Whether or not']"
            /><span class="translation">不管天氣會不會好轉，典禮都會在戶外舉行。</span></span
          >
        </div>
        <div>
          <span class="term">主要子句後面</span>
          <span
            ><NoteMark
              sentence="We will play the match whether or not it rains."
              :marks="['whether or not']"
            /><span class="translation">不管下不下雨，我們都會比賽。</span></span
          >
        </div>
        <div>
          <span class="term">or not 在子句後面</span>
          <span
            ><NoteMark
              sentence="Whether you like it or not, the rules apply to everyone."
              :marks="['Whether', 'or not,']"
            /><span class="translation">不管你喜不喜歡，規定對每個人都適用。</span></span
          >
        </div>
      </div>
      <p class="remark">條件子句放在前面時，後面加逗號。</p>
    </NoteSlide>

    <NoteSlide title="whether or not 引出名詞子句，意思是是不是" mark="Whether or not">
      <div class="rows is-labeled">
        <div>
          <span class="term">當主詞</span>
          <span
            ><NoteMark
              sentence="Whether or not the changes are permanent is still unclear."
              :marks="['Whether or not']"
            /><span class="translation">這些改變是不是永久的，目前還不清楚。</span></span
          >
        </div>
        <div>
          <span class="term">當受詞</span>
          <span
            ><NoteMark
              sentence="The committee will decide whether or not the school should close."
              :marks="['whether or not']"
            /><span class="translation">委員會會決定這所學校是否應該關閉。</span></span
          >
        </div>
        <div>
          <span class="term">當受詞<br /><i>用 will</i></span>
          <span
            ><NoteMark
              sentence="Please let us know whether or not you will attend the conference."
              :marks="['whether or not', 'will']"
            /><span class="translation">請告訴我們您是否會出席研討會。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：whether or not 子句是句子的主詞" mark="Whether or not">
      <NoteWords
        :size="20"
        :parts="[
          {
            t: 'Whether or not it is better to educate boys and girls in separate schools',
            role: '主詞（名詞子句）',
            kind: 'key',
          },
          { t: 'has been', role: '動詞' },
          { t: 'a widely discussed issue in recent years.', role: '補語', kind: 'dim' },
        ]"
      />
      <p class="translation">男女分校是不是比較好，是近年來大家廣泛討論的問題。</p>
      <p class="remark">整個子句是主詞，動詞 <code>has been</code> 用單數。</p>
    </NoteSlide>

    <NoteSlide title="or not 不接在 if 後面" mark="Whether or not">
      <NoteFix
        wrong="If or not it's sunny, we'll have the picnic."
        right="Whether or not it's sunny, we'll have the picnic."
        fix="Whether or not"
      />
    </NoteSlide>

    <NoteSlide title="條件子句說未來的事用現在式">
      <NoteFix
        wrong="Whether or not it will rain tomorrow, we will play the match."
        right="Whether or not it rains tomorrow, we will play the match."
        fix="rains"
      />
    </NoteSlide>

    <NoteSlide title="主要子句前面不再加 but 或 so">
      <NoteFix
        wrong="Whether or not you like it, but you have to go."
        right="Whether or not you like it, you have to go."
        fix="you have"
      />
    </NoteSlide>

    <NoteSlide title="whether 後面接兩個選項時，or 後面是另一個選項">
      <div class="rows is-labeled">
        <div>
          <span class="term">by bus or by train</span>
          <span
            ><NoteMark
              sentence="Whether you go by bus or by train, the journey takes two hours."
              :marks="['Whether', 'or']"
            /><span class="translation">不管你搭公車還是搭火車，都要兩個小時。</span></span
          >
        </div>
        <div>
          <span class="term">win or lose</span>
          <span
            ><NoteMark
              sentence="Whether we win or lose, we'll celebrate after the match."
              :marks="['Whether', 'or']"
            /><span class="translation">不管我們贏還是輸，比賽完都要慶祝。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="even if 只說一種情況：就算這件事發生">
      <div class="rows is-labeled">
        <div>
          <span class="term">even if</span>
          <span
            ><NoteMark
              sentence="Even if it rains, we will play the match."
              :marks="['Even if']"
            /><span class="translation">就算下雨，我們也會比賽。</span></span
          >
        </div>
        <div>
          <span class="term">even if</span>
          <span
            ><NoteMark
              sentence="Even if you apologise, she won't forgive you."
              :marks="['Even if']"
            /><span class="translation">就算你道歉，她也不會原諒你。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>whether or not</code> 包括發生和不發生兩種情況。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
