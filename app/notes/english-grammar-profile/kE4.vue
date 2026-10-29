<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-subordinating-conjunctions-conditions, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="只要條件成立，主要子句的事就發生" mark="As long as">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'As long as', role: '連接詞' },
          { t: 'you water the plant once a week,', role: '現在簡單式', kind: 'key' },
          { t: 'it will grow well.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">只要你每週澆一次水，這盆植物會長得很好。</p>
      <p class="remark">條件子句說未來的事，但不用 <code>will</code>。</p>
    </NoteSlide>

    <NoteSlide title="意思都是只要" mark="As long as">
      <div class="rows is-labeled">
        <div>
          <span class="term">as long as<br /><i>口語</i></span>
          <span
            ><NoteMark
              sentence="We'll go camping this weekend as long as it doesn't rain."
              :marks="['as long as']"
            /><span class="translation">只要不下雨，我們這個週末就去露營。</span></span
          >
        </div>
        <div>
          <span class="term">provided (that)<br /><i>正式</i></span>
          <span
            ><NoteMark
              sentence="Provided that the train is on time, we'll arrive before lunch."
              :marks="['Provided that']"
            /><span class="translation">只要火車準時，我們午餐前會到。</span></span
          >
        </div>
        <div>
          <span class="term">providing (that)<br /><i>正式</i></span>
          <span
            ><NoteMark
              sentence="You can take the day off providing you finish the report first."
              :marks="['providing']"
            /><span class="translation">只要你先把報告寫完，就可以請一天假。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>that</code> 可以省略。</p>
    </NoteSlide>

    <NoteSlide title="現在進行式說安排好的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">provided</span>
          <span
            ><NoteMark
              sentence="Provided you're staying for the whole week, the hotel will give you a discount."
              :marks="['you\'re staying']"
            /><span class="translation">只要你住滿一整週，飯店會給你折扣。</span></span
          >
        </div>
        <div>
          <span class="term">as long as</span>
          <span
            ><NoteMark
              sentence="As long as you're driving tomorrow, I'll leave my car at home."
              :marks="['you\'re driving']"
            /><span class="translation">只要你明天會開車，我就把我的車留在家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="條件子句的位置和逗號" mark="children,">
      <div class="rows is-labeled">
        <div>
          <span class="term">放在前面<br /><i>後面加逗號</i></span>
          <span
            ><NoteMark
              sentence="Providing the doctor agrees, Grandpa can come home on Monday."
              :marks="['Providing the doctor agrees,']"
            /><span class="translation">只要醫生同意，爺爺星期一就可以回家。</span></span
          >
        </div>
        <div>
          <span class="term">放在後面<br /><i>前面通常不加逗號</i></span>
          <span
            ><NoteMark
              sentence="Visitors may take photos provided that they don't use a flash."
              :marks="['provided that']"
            /><span class="translation">只要不用閃光燈，參觀者可以拍照。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：客氣地說樂意做" mark="I'd be delighted">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'As long as', role: '連接詞' },
          { t: 'it involves children,', role: '現在簡單式', kind: 'key' },
          {
            t: 'I\'d be delighted to work for you during the summer.',
            role: '主要子句',
            kind: 'dim',
          },
        ]"
      />
      <p class="translation">只要工作跟小孩有關，我很樂意夏天替你工作。</p>
      <p class="remark"><code>it</code> 指那份工作。<code>I'd</code> 是 <code>I would</code>。</p>
    </NoteSlide>

    <NoteSlide title="條件子句不用 will" mark="involves">
      <NoteFix
        wrong="You can borrow the camera as long as you will be careful with it."
        right="You can borrow the camera as long as you're careful with it."
        fix="you're careful"
      />
    </NoteSlide>

    <NoteSlide title="連接詞是 provided，不是 provide">
      <NoteFix
        wrong="Provide that you book early, you'll get a good seat."
        right="Provided that you book early, you'll get a good seat."
        fix="Provided"
      />
    </NoteSlide>

    <NoteSlide title="long 前後各有一個 as" mark="As long as">
      <NoteFix
        wrong="As long you tell the truth, I won't be angry."
        right="As long as you tell the truth, I won't be angry."
        fix="As long as"
      />
    </NoteSlide>

    <NoteSlide title="unless 說條件成立就不發生">
      <div class="rows is-labeled">
        <div>
          <span class="term">as long as</span>
          <span
            ><NoteMark
              sentence="We'll eat outside as long as it stays dry."
              :marks="['as long as']"
            /><span class="translation">只要天氣保持乾燥，我們就在外面吃。</span></span
          >
        </div>
        <div>
          <span class="term">unless</span>
          <span
            ><NoteMark sentence="We'll eat outside unless it rains." :marks="['unless']" /><span
              class="translation"
              >除非下雨，不然我們就在外面吃。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞 provided 後面接受詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞</span>
          <span
            ><NoteMark
              sentence="The school provided free lunches."
              :marks="['provided free lunches.']"
            /><span class="translation">學校提供了免費的午餐。</span></span
          >
        </div>
        <div>
          <span class="term">連接詞</span>
          <span
            ><NoteMark
              sentence="Provided you bring your own lunch, you can join the trip."
              :marks="['Provided']"
            /><span class="translation">只要你自己帶午餐，就可以參加這趟旅行。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
