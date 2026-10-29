<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-imperatives, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="祈使動詞放在句首，叫讀者注意受詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Notice', role: '祈使動詞', kind: 'key' },
          { t: 'the difference in salary.', role: '受詞' },
        ]"
      />
      <p class="translation">請注意薪水的差別。</p>
      <p class="remark">句子沒有主詞。讀者就是動作的人。</p>
    </NoteSlide>

    <NoteSlide title="每個祈使動詞叫讀者做不同的事" mark="Notice">
      <div class="rows is-labeled">
        <div>
          <span class="term">Note<br /><i>記住</i></span>
          <span
            ><NoteMark sentence="Note the closing date for applications." :marks="['Note']" /><span
              class="translation"
              >請留意申請的截止日期。</span
            ></span
          >
        </div>
        <div>
          <span class="term">Notice<br /><i>看出差別</i></span>
          <span
            ><NoteMark sentence="Notice how the prices rise in winter." :marks="['Notice']" /><span
              class="translation"
              >請注意價格在冬天怎麼上漲。</span
            ></span
          >
        </div>
        <div>
          <span class="term">See<br /><i>去看別處</i></span>
          <span
            ><NoteMark sentence="See page 12 for more details." :marks="['See']" /><span
              class="translation"
              >詳情請見第 12 頁。</span
            ></span
          >
        </div>
        <div>
          <span class="term">Look at<br /><i>看圖表</i></span>
          <span
            ><NoteMark
              sentence="Look at the figures in the table below."
              :marks="['Look at']"
            /><span class="translation">請看下表的數字。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞可以是名詞片語、that 子句或 wh- 子句" mark="the difference in salary.">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark
              sentence="Note the disadvantages of this plan."
              :marks="['the disadvantages']"
            /><span class="translation">請注意這個計畫的缺點。</span></span
          >
        </div>
        <div>
          <span class="term">that 子句</span>
          <span
            ><NoteMark
              sentence="Note that the office is closed on Mondays."
              :marks="['that']"
            /><span class="translation">請注意辦公室星期一不開。</span></span
          >
        </div>
        <div>
          <span class="term">wh- 子句</span>
          <span
            ><NoteMark
              sentence="Notice how quickly the numbers fall."
              :marks="['how quickly']"
            /><span class="translation">請注意數字下降得多快。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="祈使句的動詞用原形" mark="Notice">
      <NoteFix
        wrong="Notes the difference in salary."
        right="Note the difference in salary."
        fix="Note"
      />
    </NoteSlide>

    <NoteSlide title="See 後面直接接受詞" mark="Notice">
      <NoteFix
        wrong="See to page 5 for the full list."
        right="See page 5 for the full list."
        fix="See page"
      />
      <p class="remark"><code>see to</code> 是另一個片語，意思是處理。</p>
    </NoteSlide>

    <NoteSlide title="how quickly 放在子句開頭，後面接主詞和動詞">
      <NoteFix
        wrong="Notice the numbers fall how quickly."
        right="Notice how quickly the numbers fall."
        fix="how quickly"
      />
    </NoteSlide>

    <NoteSlide title="祈使句不加 to，句首直接用原形動詞" mark="Notice">
      <NoteFix
        wrong="To note the change in the opening hours."
        right="Note the change in the opening hours."
        fix="Note"
      />
    </NoteSlide>

    <NoteSlide title="Please 讓語氣比較客氣，後面一樣用原形動詞" mark="Notice">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Please', role: 'Please', kind: 'key' },
          { t: 'note', role: '原形動詞', kind: 'key' },
          { t: 'that the price does not include tax.', role: 'that 子句' },
        ]"
      />
      <p class="translation">請注意價格不含稅。</p>
    </NoteSlide>

    <NoteSlide title="指出重點的祈使句叫讀者注意文章裡的內容">
      <div class="rows is-labeled">
        <div>
          <span class="term">指出重點</span>
          <span
            ><NoteMark sentence="Notice the difference in salary." :marks="['Notice']" /><span
              class="translation"
              >請注意薪水的差別。</span
            ></span
          >
        </div>
        <div>
          <span class="term">平常的命令</span>
          <span
            ><NoteMark sentence="Close the door." :marks="['Close']" /><span class="translation"
              >把門關上。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
