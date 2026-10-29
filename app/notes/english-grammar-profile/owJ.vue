<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-unfinished, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="現在完成式說一段還沒結束的時間" mark="I've had">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I\'ve had', role: 'have + 過去分詞', kind: 'key', ring: true },
          { t: 'a really nice', kind: 'dim' },
          { t: 'week.', role: '還沒結束的時間', kind: 'key' },
        ]"
      />
      <p class="translation">我這個禮拜過得很不錯。</p>
      <p class="remark">星期五晚上說，這個禮拜還有週末。</p>
    </NoteSlide>

    <NoteSlide title="常見的還沒結束的時間" mark="week.">
      <div class="rows is-labeled">
        <div>
          <span class="term">this year</span>
          <span
            ><NoteMark
              sentence="I joined a book club in January. I've read four books this year."
              :marks="['this year.']"
            /><span class="translation">我一月參加了讀書會。我今年讀了四本書。</span></span
          >
        </div>
        <div>
          <span class="term">today</span>
          <span
            ><NoteMark
              sentence="My watch counts my steps. I've walked ten thousand steps today."
              :marks="['today.']"
            /><span class="translation">我的手錶會算步數。我今天走了一萬步。</span></span
          >
        </div>
        <div>
          <span class="term">so far</span>
          <span
            ><NoteMark
              sentence="We're halfway through our trip to Spain. The holiday has been wonderful so far."
              :marks="['so far.']"
            /><span class="translation"
              >我們的西班牙之旅過了一半。到目前為止，這趟假期很棒。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時間可以不說，聽的人從情境知道" mark="I've had">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It\'s Sunday evening, and nobody has called.', kind: 'dim' },
          { t: 'It\'s been', role: '到現在', kind: 'key', ring: true },
          { t: 'a quiet weekend.', kind: 'dim' },
        ]"
      />
      <p class="translation">今天是星期天晚上，沒有人打電話來。這個週末很安靜。</p>
    </NoteSlide>

    <NoteSlide title="同一段時間結束了，改用過去簡單式" mark="I've had">
      <div class="rows is-labeled">
        <div>
          <span class="term">還沒結束<br /><i>星期五說</i></span>
          <span
            ><NoteMark sentence="I've had a busy week." :marks="['I\'ve had']" /><span
              class="translation"
              >我這個禮拜很忙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">已經結束<br /><i>下個星期一說</i></span>
          <span
            ><NoteMark sentence="I had a busy week." :marks="['had']" /><span class="translation"
              >我上個禮拜很忙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="last week 已經結束，用過去簡單式" mark="I've had">
      <NoteFix
        wrong="I've had a really nice week last week."
        right="I had a really nice week last week."
        fix="had"
      />
    </NoteSlide>

    <NoteSlide title="晚上說今天的事，用現在完成式" mark="I've had">
      <NoteFix
        wrong="I have a really busy day today."
        right="I've had a really busy day today."
        fix="I've had"
      >
        晚上說。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="my brother 後面用 has，不用 have" mark="I've had">
      <NoteFix
        wrong="My brother have worked late every night this week."
        right="My brother has worked late every night this week."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="last summer 已經結束，用過去簡單式" mark="I've had">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Look at these photos from Rome.', kind: 'dim' },
          { t: 'We', kind: 'dim' },
          { t: 'had', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'a great holiday' },
          { t: 'last summer.', role: '結束的時間' },
        ]"
      />
      <p class="translation">你看這些在羅馬拍的照片。我們去年夏天的假期很棒。</p>
    </NoteSlide>

    <NoteSlide title="現在完成進行式說一直在進行的動作" mark="I've had">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My shoes are still wet.', kind: 'dim' },
          { t: 'It\'s been raining', role: '一直在下', kind: 'key', ring: true },
          { t: 'all week.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的鞋子還是濕的。這個禮拜一直在下雨。</p>
    </NoteSlide>

    <NoteSlide title="說經驗的現在完成式，說的是一輩子到現在" mark="I've had">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You don\'t need a map for me.', kind: 'dim' },
          { t: 'I\'ve been', role: '經驗', kind: 'key', ring: true },
          { t: 'to Paris.', kind: 'dim' },
        ]"
      />
      <p class="translation">你不用給我地圖。我去過巴黎。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
