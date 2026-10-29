<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-ellipted-if-so-confirming, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if so 承接是非問句" mark="If so,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Are you free on Saturday?', role: '是非問句', kind: 'dim' },
          { t: 'If so,', role: '省略的條件子句', kind: 'key' },
          { t: 'let\'s go to the beach.', role: '主要子句' },
        ]"
      />
      <p class="translation">你星期六有空嗎？如果有空，我們去海邊吧。</p>
      <p class="remark">意思是如果答案是肯定的。</p>
    </NoteSlide>

    <NoteSlide title="so 代替問句的內容" mark="so,">
      <div class="rows is-labeled">
        <div>
          <span class="term">完整的子句</span>
          <span
            ><NoteMark
              sentence="If you are free on Saturday, let's go to the beach."
              :marks="['you are free on Saturday,']"
            /><span class="translation">如果你星期六有空，我們去海邊吧。</span></span
          >
        </div>
        <div>
          <span class="term">省略</span>
          <span
            ><NoteMark sentence="If so, let's go to the beach." :marks="['so,']" /><span
              class="translation"
              >如果有空，我們去海邊吧。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前面是直接問句或間接問句" mark="Is it possible to pay by credit card?">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接問句</span>
          <span
            ><NoteMark
              sentence="Does the hotel have a pool? If so, don't forget your swimsuit."
              :marks="['Does the hotel have a pool?']"
            /><span class="translation">飯店有游泳池嗎？如果有，別忘了帶泳衣。</span></span
          >
        </div>
        <div>
          <span class="term">間接問句<br /><i>whether / if</i></span>
          <span
            ><NoteMark
              sentence="Please tell me whether you need a lift. If so, I'll pick you up at six."
              :marks="['whether you need a lift.']"
            /><span class="translation"
              >請告訴我你需不需要人載。如果需要，我六點去接你。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要子句是問句" mark="which ones do you take?">
      <div class="rows is-labeled">
        <div>
          <span class="term">疑問句的語序</span>
          <span
            ><NoteMark
              sentence="Have you been to Japan before? If so, which cities did you visit?"
              :marks="['which cities did you visit?']"
            /><span class="translation">你以前去過日本嗎？如果去過，你去了哪些城市？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="and, if so, 放在句中">
      <div class="rows is-labeled">
        <div>
          <span class="term">前後加逗號</span>
          <span
            ><NoteMark
              sentence="The form asks whether you have ever lived abroad and, if so, for how long."
              :marks="['and, if so,']"
            /><span class="translation">表格問你有沒有在國外住過，如果有，住了多久。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：先問可不可以，再問哪幾種" mark="If so,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Is it possible to pay by credit card?', role: '是非問句', kind: 'dim' },
          { t: 'If so,', role: '省略的條件子句', kind: 'key' },
          { t: 'which ones do you take?', role: '主要子句（問句）' },
        ]"
      />
      <p class="translation">可以刷信用卡嗎？如果可以，你們收哪幾種卡？</p>
      <p class="remark">
        <code>If so</code> 是 <code>If it is possible to pay by credit card</code> 的省略。<code
          >ones</code
        >
        指信用卡。
      </p>
    </NoteSlide>

    <NoteSlide title="if 後面直接接 so" mark="If so,">
      <NoteFix
        wrong="Is it possible to pay by card? If it so, which cards do you accept?"
        right="Is it possible to pay by card? If so, which cards do you accept?"
        fix="If so,"
      />
    </NoteSlide>

    <NoteSlide title="問句的助動詞放在主詞前面" mark="do you take?">
      <NoteFix
        wrong="Do you sell stamps? If so, how much one costs?"
        right="Do you sell stamps? If so, how much does one cost?"
        fix="does one cost?"
      />
    </NoteSlide>

    <NoteSlide title="if so 前面要是是非問句" mark="Is it possible">
      <NoteFix
        wrong="Where do you live? If so, I'll visit you."
        right="Do you live near here? If so, I'll visit you."
        fix="Do you live near here?"
      />
    </NoteSlide>

    <NoteSlide title="if not 接否定時要做的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">if so<br /><i>肯定</i></span>
          <span
            ><NoteMark
              sentence="Is the café still open? If so, let's get a coffee."
              :marks="['If so,']"
            /><span class="translation">咖啡店還開著嗎？如果開著，我們去喝杯咖啡。</span></span
          >
        </div>
        <div>
          <span class="term">if not<br /><i>否定</i></span>
          <span
            ><NoteMark
              sentence="Is the café still open? If not, let's go home."
              :marks="['If not,']"
            /><span class="translation">咖啡店還開著嗎？如果沒開，我們就回家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="連接詞 so 說已經確定的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">so<br /><i>所以</i></span>
          <span
            ><NoteMark
              sentence="My phone battery was low, so I borrowed my sister's charger."
              :marks="['so']"
            /><span class="translation">我的手機快沒電了，所以我跟我妹借了充電器。</span></span
          >
        </div>
        <div>
          <span class="term">if so<br /><i>條件</i></span>
          <span
            ><NoteMark sentence="Is it raining? If so, we'll stay in." :marks="['If so,']" /><span
              class="translation"
              >在下雨嗎？如果在下雨，我們就待在家裡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
