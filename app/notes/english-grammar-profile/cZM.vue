<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-ellipted-if-not-alternative, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if not 提出另一個選擇" mark="If not,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Do you have a pen?', role: '是非問句', kind: 'dim' },
          { t: 'If not,', role: '省略的條件子句', kind: 'key' },
          { t: 'you can use a pencil.', role: '另一個選擇' },
        ]"
      />
      <p class="translation">你有筆嗎？如果沒有，你可以用鉛筆。</p>
      <p class="remark"><code>If not</code> 是 <code>If you don't have a pen</code> 的省略。</p>
    </NoteSlide>

    <NoteSlide title="前面是直接問句或間接問句" mark="Is the hotel OK for you?">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接問句</span>
          <span
            ><NoteMark
              sentence="Are you hungry? If not, we can eat later."
              :marks="['Are you hungry?']"
            /><span class="translation">你餓了嗎？如果不餓，我們可以晚點再吃。</span></span
          >
        </div>
        <div>
          <span class="term">間接問句<br /><i>whether / if</i></span>
          <span
            ><NoteMark
              sentence="Let me know whether Friday suits you. If not, we'll find another day."
              :marks="['whether Friday suits you.']"
            /><span class="translation"
              >告訴我星期五你方不方便。如果不方便，我們再找別天。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前面是說期望或猜測的句子">
      <div class="rows is-labeled">
        <div>
          <span class="term">I hope</span>
          <span
            ><NoteMark
              sentence="I hope you like the book. If not, you can exchange it at the shop."
              :marks="['I hope']"
            /><span class="translation">希望你喜歡這本書。如果不喜歡，你可以去店裡換。</span></span
          >
        </div>
        <div>
          <span class="term">I assume</span>
          <span
            ><NoteMark
              sentence="I assume you've already got a visa. If not, apply for one now."
              :marks="['I assume']"
            /><span class="translation">我想你已經拿到簽證了。如果還沒，現在就去申請。</span></span
          >
        </div>
      </div>
      <p class="remark">說話的人覺得答案應該是肯定的。<code>if not</code> 說萬一不是的做法。</p>
    </NoteSlide>

    <NoteSlide title="and, if not, 放在句中">
      <div class="rows is-labeled">
        <div>
          <span class="term">前後加逗號</span>
          <span
            ><NoteMark
              sentence="We need to know whether the bridge is safe and, if not, how long the repairs will take."
              :marks="['and, if not,']"
            /><span class="translation"
              >我們需要知道那座橋安不安全，如果不安全，修理要多久。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：飯店不行就打電話" mark="If not,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Is the hotel OK for you?', role: '是非問句', kind: 'dim' },
          { t: 'If not,', role: '省略的條件子句', kind: 'key' },
          { t: 'call me as soon as possible.', role: '另一個選擇（祈使句）' },
        ]"
      />
      <p class="translation">這家飯店你覺得可以嗎？如果不行，請盡快打給我。</p>
      <p class="remark">
        <code>If not</code> 是 <code>If the hotel is not OK for you</code> 的省略。
      </p>
    </NoteSlide>

    <NoteSlide title="if 後面直接接 not" mark="If not,">
      <NoteFix
        wrong="Do you like fish? If don't, I'll cook chicken."
        right="Do you like fish? If not, I'll cook chicken."
        fix="If not,"
      />
    </NoteSlide>

    <NoteSlide title="not 後面不加 so" mark="If not,">
      <NoteFix
        wrong="Is the room ready? If not so, we'll wait in the bar."
        right="Is the room ready? If not, we'll wait in the bar."
        fix="If not,"
      />
    </NoteSlide>

    <NoteSlide title="if not 前面要是是非問句" mark="Is the hotel OK for you?">
      <NoteFix
        wrong="What time does the film start? If not, we'll go tomorrow."
        right="Does the film start before eight? If not, we'll go tomorrow."
        fix="Does the film start"
      />
    </NoteSlide>

    <NoteSlide title="if so 接肯定時的做法">
      <div class="rows is-labeled">
        <div>
          <span class="term">if so<br /><i>肯定</i></span>
          <span
            ><NoteMark
              sentence="Did you get my email? If so, please reply today."
              :marks="['If so,']"
            /><span class="translation"
              >你收到我的電子郵件了嗎？如果收到了，請今天回覆。</span
            ></span
          >
        </div>
        <div>
          <span class="term">if not<br /><i>否定</i></span>
          <span
            ><NoteMark
              sentence="Did you get my email? If not, I'll send it again."
              :marks="['If not,']"
            /><span class="translation"
              >你收到我的電子郵件了嗎？如果沒收到，我再寄一次。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="兩個數量中間的 if not 是甚至">
      <div class="rows is-labeled">
        <div>
          <span class="term">甚至</span>
          <span
            ><NoteMark
              sentence="The repairs will take weeks, if not months."
              :marks="['if not months.']"
            /><span class="translation">修理要花好幾週，甚至好幾個月。</span></span
          >
        </div>
        <div>
          <span class="term">另一個選擇</span>
          <span
            ><NoteMark
              sentence="The repairs might take months. If not, we can move back in June."
              :marks="['If not,']"
            /><span class="translation"
              >修理可能要花好幾個月。如果不用，我們六月就可以搬回去。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
