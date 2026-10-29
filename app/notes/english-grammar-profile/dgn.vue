<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-unless-exceptions, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="unless 說例外" mark="unless">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I cycle to school every day', role: '平常的習慣', kind: 'dim' },
          { t: 'unless', role: '除非', kind: 'key' },
          { t: 'there\'s snow on the roads.', role: '現在簡單式' },
        ]"
      />
      <p class="translation">我每天騎腳踏車上學，除非路上有積雪。</p>
    </NoteSlide>

    <NoteSlide title="說現在或未來都用現在簡單式" mark="accept">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在的習慣</span>
          <span
            ><NoteMark
              sentence="My grandmother goes to the market every morning unless she feels unwell."
              :marks="['unless she feels unwell.']"
            /><span class="translation">我奶奶每天早上都去市場，除非她身體不舒服。</span></span
          >
        </div>
        <div>
          <span class="term">未來的計畫</span>
          <span
            ><NoteMark
              sentence="We're going to drive to the coast unless the weather turns bad."
              :marks="['unless the weather turns bad.']"
            /><span class="translation">我們打算開車去海邊，除非天氣變壞。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加逗號補充例外" mark="cash,">
      <div class="rows is-labeled">
        <div>
          <span class="term">後來才想到<br /><i>前面加逗號</i></span>
          <span
            ><NoteMark
              sentence="You can stay at our flat, unless you prefer a hotel."
              :marks="['flat, unless']"
            /><span class="translation">你可以住我們的公寓，除非你比較想住飯店。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="unless 子句放在前面">
      <div class="rows is-labeled">
        <div>
          <span class="term">放在前面<br /><i>後面加逗號</i></span>
          <span
            ><NoteMark
              sentence="Unless the bus is late, I'll be home by six."
              :marks="['Unless the bus is late,']"
            /><span class="translation">除非公車誤點，不然我六點前會到家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：付錢前才想到例外" mark="unless you accept credit cards.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I think I am going to pay in cash,', role: '打算做的事', kind: 'dim' },
          { t: 'unless', role: '除非', kind: 'key' },
          { t: 'you accept credit cards.', role: '現在簡單式' },
        ]"
      />
      <p class="translation">我想我會付現金，除非你們收信用卡。</p>
      <p class="remark">說話的人說完才想到例外，所以 <code>unless</code> 前面加逗號。</p>
    </NoteSlide>

    <NoteSlide title="unless 子句不用 will" mark="accept">
      <NoteFix
        wrong="I'll take the bus unless my dad will drive me."
        right="I'll take the bus unless my dad drives me."
        fix="drives"
      />
    </NoteSlide>

    <NoteSlide title="unless 後面不再加 not" mark="unless">
      <NoteFix
        wrong="We'll go swimming unless the pool isn't open."
        right="We'll go swimming unless the pool is closed."
        fix="is closed."
      />
    </NoteSlide>

    <NoteSlide title="要說如果就用 if" mark="unless">
      <NoteFix
        wrong="I'll be happy unless I pass the exam."
        right="I'll be happy if I pass the exam."
        fix="if"
      />
    </NoteSlide>

    <NoteSlide title="unless 等於 if ... not">
      <div class="rows is-labeled">
        <div>
          <span class="term">unless</span>
          <span
            ><NoteMark
              sentence="I'll leave the window open unless you feel cold."
              :marks="['unless']"
            /><span class="translation">我會開著窗，除非你覺得冷。</span></span
          >
        </div>
        <div>
          <span class="term">if ... not</span>
          <span
            ><NoteMark
              sentence="I'll turn the heating on if you don't feel warm enough."
              :marks="['if', 'don\'t']"
            /><span class="translation">如果你覺得不夠暖，我就開暖氣。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="except 後面接名詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">except<br /><i>名詞</i></span>
          <span
            ><NoteMark
              sentence="The shop opens every day except Sunday."
              :marks="['except Sunday.']"
            /><span class="translation">那家店除了星期天，每天都開。</span></span
          >
        </div>
        <div>
          <span class="term">unless<br /><i>子句</i></span>
          <span
            ><NoteMark
              sentence="The shop opens every day unless there's a holiday."
              :marks="['unless there\'s a holiday.']"
            /><span class="translation">那家店每天都開，除非遇到假日。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
