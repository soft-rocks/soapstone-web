<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 088, as slides, in the order of notes/dragon-english-basic-100/088.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="過去進行式說正在進行的動作，過去式說其間發生的一件事"
      :mark="['was studying', 'bought']"
    >
      <NoteWords
        :size="22"
        :parts="[
          { t: 'When I', kind: 'dim' },
          { t: 'was studying', role: '過去進行式\n在巴黎讀書的期間', kind: 'key' },
          { t: 'in Paris, a famous painter', kind: 'dim' },
          { t: 'bought', role: '過去式\n其間發生的事', kind: 'key' },
          { t: 'me a meal at a first-class restaurant.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="when 和 while 都常帶出過去進行式" mark="When">
      <div class="rows is-labeled">
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark
              sentence="When I was walking home, it started to rain."
              :marks="['When', 'was walking', 'started']"
            /><span class="translation">我走路回家的時候，開始下雨了。</span></span
          >
        </div>
        <div>
          <span class="term">while</span>
          <span
            ><NoteMark
              sentence="While we were having dinner, the phone rang."
              :marks="['While', 'were having', 'rang']"
            /><span class="translation">我們吃晚餐的時候，電話響了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="when 子句放在後面時用過去式" mark="When">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I was taking a shower', role: '過去進行式' },
          { t: 'when', role: '連接詞', kind: 'key' },
          { t: 'the earthquake', role: '主詞' },
          { t: 'happened.', role: '過去式', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">地震發生的時候，我正在洗澡。</p>
      <p class="remark">正在做一件事的時候，發生了另一件事。</p>
    </NoteSlide>

    <NoteSlide title="buy 後面接兩個受詞，人在前，東西在後" mark="bought me a meal">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'a famous painter', kind: 'dim' },
          { t: 'bought', role: '動詞', kind: 'key' },
          { t: 'me', role: '人' },
          { t: 'a meal', role: '東西' },
          { t: 'at a first-class restaurant.', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="東西放在前面時，人用 for 帶出" mark="bought me a meal">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'bought', role: '動詞' },
          { t: 'a cake', role: '東西' },
          { t: 'for my grandmother.', role: 'for + 人', kind: 'key' },
        ]"
      />
      <p class="translation">我買了一個蛋糕給我奶奶。</p>
    </NoteSlide>

    <NoteSlide title="make 和 cook 也有這兩種用法" mark="bought me a meal">
      <div class="rows is-labeled">
        <div>
          <span class="term">東西 + for + 人</span>
          <span
            ><NoteMark
              sentence="I made a birthday card for my mom."
              :marks="['made', 'for my mom']"
            /><span class="translation">我做了一張生日卡片給我媽媽。</span></span
          >
        </div>
        <div>
          <span class="term">人 + 東西</span>
          <span
            ><NoteMark
              sentence="My father cooked us breakfast this morning."
              :marks="['cooked', 'us']"
            /><span class="translation">我爸爸今天早上煮早餐給我們吃。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="用連字號連起來的詞放在名詞前面，當形容詞" mark="first-class">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'at a', kind: 'dim' },
          { t: 'first-class', role: '形容詞', kind: 'key' },
          { t: 'restaurant.', role: '名詞' },
        ]"
      />
      <p class="remark"><code>first&#x2060;-&#x2060;class</code> 表示最高等級的。</p>
    </NoteSlide>

    <NoteSlide title="數字和名詞連起來時，名詞用單數" mark="first-class">
      <div class="rows is-labeled">
        <div>
          <span class="term">year</span>
          <span
            ><NoteMark sentence="I have a ten-year-old brother." :marks="['ten-year-old']" /><span
              class="translation"
              >我有一個十歲的弟弟。</span
            ></span
          >
        </div>
        <div>
          <span class="term">hour</span>
          <span
            ><NoteMark sentence="It was a two-hour movie." :marks="['two-hour']" /><span
              class="translation"
              >那是一部兩小時的電影。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
