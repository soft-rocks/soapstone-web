<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-present-simple-if-clause-will, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="可能的條件和很可能的結果" mark="will be happy">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If we take a taxi,', role: '現在簡單式', kind: 'key' },
          { t: 'we\'ll get there on time.', role: 'will + 原形動詞' },
        ]"
      />
      <p class="translation">如果我們搭計程車，就會準時到。</p>
    </NoteSlide>

    <NoteSlide title="if 子句放在前面或後面" mark="if you go with them.">
      <div class="rows is-labeled">
        <div>
          <span class="term">放在前面<br /><i>後面加逗號</i></span>
          <span
            ><NoteMark
              sentence="If she sends the form today, she'll get an answer next week."
              :marks="['If she sends the form today,']"
            /><span class="translation">如果她今天寄出表格，下週就會收到回覆。</span></span
          >
        </div>
        <div>
          <span class="term">放在後面<br /><i>前面不加逗號</i></span>
          <span
            ><NoteMark
              sentence="You'll feel better if you get some sleep."
              :marks="['if you get some sleep.']"
            /><span class="translation">如果你睡一下，就會覺得好一點。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定用 don't 和 won't">
      <div class="rows is-labeled">
        <div>
          <span class="term">don't<br /><i>won't</i></span>
          <span
            ><NoteMark
              sentence="If you don't water the plants, they won't survive the summer."
              :marks="['don\'t water', 'won\'t survive']"
            /><span class="translation">如果你不幫植物澆水，它們熬不過夏天。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="疑問句的 will 放在主詞前面">
      <div class="rows is-labeled">
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark
              sentence="What will you do if the flight is cancelled?"
              :marks="['What will you do']"
            /><span class="translation">如果班機取消了，你會怎麼辦？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加 I'm sure、I think 或 probably" mark="I'm sure">
      <div class="rows is-labeled">
        <div>
          <span class="term">I think<br /><i>沒那麼確定</i></span>
          <span
            ><NoteMark
              sentence="I think the shop will give you a refund if you show the receipt."
              :marks="['I think']"
            /><span class="translation">我想如果你出示收據，店家會退錢給你。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>probably</code> 也說沒那麼確定。</p>
    </NoteSlide>

    <NoteSlide title="原句：跟爸媽去，他們會高興" mark="go">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I\'m sure', role: '很確定' },
          { t: 'your parents will be happy', role: 'will + 原形動詞' },
          { t: 'if you go with them.', role: '現在簡單式', kind: 'key' },
        ]"
      />
      <p class="translation">我相信如果你跟你爸媽一起去，他們會很高興。</p>
    </NoteSlide>

    <NoteSlide title="if 子句不用 will" mark="go">
      <NoteFix
        wrong="If it will be sunny tomorrow, we'll go to the lake."
        right="If it's sunny tomorrow, we'll go to the lake."
        fix="it's"
      />
    </NoteSlide>

    <NoteSlide title="主要子句要用 will" mark="will be">
      <NoteFix
        wrong="If the bus is late tomorrow, I miss my meeting."
        right="If the bus is late tomorrow, I'll miss my meeting."
        fix="I'll miss"
      />
    </NoteSlide>

    <NoteSlide title="疑問句不用直述句的語序">
      <NoteFix
        wrong="Where you will stay if your flight is delayed?"
        right="Where will you stay if your flight is delayed?"
        fix="will you"
      />
    </NoteSlide>

    <NoteSlide title="零條件句說每次都成立的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">零條件句<br /><i>每次都成立</i></span>
          <span
            ><NoteMark
              sentence="If you heat water to 100 degrees, it boils."
              :marks="['boils.']"
            /><span class="translation">如果把水加熱到一百度，水就會沸騰。</span></span
          >
        </div>
        <div>
          <span class="term">第一條件句<br /><i>未來某一次</i></span>
          <span
            ><NoteMark
              sentence="If you leave the ice cream in the sun, it will melt."
              :marks="['will melt.']"
            /><span class="translation">如果你把冰淇淋放在太陽下，它會融化。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="when 說確定會發生的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">when<br /><i>確定會發生</i></span>
          <span
            ><NoteMark sentence="When I get home, I'll call you." :marks="['When']" /><span
              class="translation"
              >我到家的時候會打給你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">if<br /><i>不一定會發生</i></span>
          <span
            ><NoteMark sentence="If I get home before ten, I'll call you." :marks="['If']" /><span
              class="translation"
              >如果我十點前到家，會打給你。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
