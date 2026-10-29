<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-present-simple-if-clause-imperative, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="可能的情況加上要對方做的事" mark="call me.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If you see a mistake,', role: '現在簡單式' },
          { t: 'tell me.', role: '祈使句', kind: 'key' },
        ]"
      />
      <p class="translation">如果你看到錯誤，就告訴我。</p>
    </NoteSlide>

    <NoteSlide title="肯定和否定的祈使句" mark="call">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定</span>
          <span
            ><NoteMark
              sentence="If you get there first, save me a seat."
              :marks="['save me a seat.']"
            /><span class="translation">如果你先到，幫我留個位子。</span></span
          >
        </div>
        <div>
          <span class="term">否定<br /><i>don't</i></span>
          <span
            ><NoteMark sentence="If the dog barks, don't worry." :marks="['don\'t worry.']" /><span
              class="translation"
              >如果狗叫，別擔心。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加 please 或 just">
      <div class="rows is-labeled">
        <div>
          <span class="term">please</span>
          <span
            ><NoteMark
              sentence="If you're late, please call the school."
              :marks="['please']"
            /><span class="translation">如果你會遲到，請打電話給學校。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>please</code> 讓要求比較客氣。<code>just</code> 說這件事很簡單。</p>
    </NoteSlide>

    <NoteSlide title="if 子句用否定" mark="find">
      <div class="rows is-labeled">
        <div>
          <span class="term">don't</span>
          <span
            ><NoteMark
              sentence="If you don't have a ticket, buy one on the bus."
              :marks="['don\'t have']"
            /><span class="translation">如果你沒有票，就在公車上買。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="祈使句放在前面">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面不加逗號</span>
          <span
            ><NoteMark
              sentence="Text me if you change your plans."
              :marks="['if you change your plans.']"
            /><span class="translation">如果你改計畫，傳訊息給我。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：找到就打給我" mark="call me.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If you find it,', role: '現在簡單式' },
          { t: 'call me.', role: '祈使句', kind: 'key' },
        ]"
      />
      <p class="translation">如果你找到它，就打電話給我。</p>
      <p class="remark"><code>it</code> 指說話的人弄丟的手錶。</p>
    </NoteSlide>

    <NoteSlide title="祈使句前面不加 to" mark="call">
      <NoteFix
        wrong="If you get lost, to ask a police officer."
        right="If you get lost, ask a police officer."
        fix="ask"
      />
    </NoteSlide>

    <NoteSlide title="否定的祈使句用 don't">
      <NoteFix
        wrong="If the road is icy, not drive."
        right="If the road is icy, don't drive."
        fix="don't drive"
      />
    </NoteSlide>

    <NoteSlide title="if 子句的動詞要加 -s" mark="find">
      <NoteFix
        wrong="If the parcel arrive, put it in the garage."
        right="If the parcel arrives, put it in the garage."
        fix="arrives"
      />
    </NoteSlide>

    <NoteSlide title="when 說確定會發生的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">when<br /><i>確定會發生</i></span>
          <span
            ><NoteMark sentence="When you get home, text me." :marks="['When']" /><span
              class="translation"
              >你到家的時候，傳訊息給我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">if<br /><i>不一定會發生</i></span>
          <span
            ><NoteMark sentence="If you see Jack, text me." :marks="['If']" /><span
              class="translation"
              >如果你見到 Jack，傳訊息給我。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="should 是建議">
      <div class="rows is-labeled">
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark sentence="If you're tired, rest." :marks="['rest.']" /><span
              class="translation"
              >如果你累了，就休息。</span
            ></span
          >
        </div>
        <div>
          <span class="term">should</span>
          <span
            ><NoteMark
              sentence="If you're tired, you should rest."
              :marks="['you should rest.']"
            /><span class="translation">如果你累了，應該休息。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
