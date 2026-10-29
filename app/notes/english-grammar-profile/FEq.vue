<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-future-arrangements, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="先說那個時間正在做的事，再給對方一個時間" mark="I'll be studying">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Tomorrow', role: '未來的時間', kind: 'dim' },
          { t: 'I\'ll be studying', role: 'will be + 動詞-ing', kind: 'key' },
          { t: 'in the morning,', role: '未來的時間', kind: 'dim' },
          { t: 'so you can come at two.', role: '對方可以做的事' },
        ]"
      />
      <p class="translation">明天早上我會在念書，所以你兩點來就可以了。</p>
    </NoteSlide>

    <NoteSlide title="時間片語可以放在句首，也可以放在句尾" mark="Tomorrow">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark sentence="At six I'll be cooking dinner." :marks="['At six']" /><span
              class="translation"
              >六點的時候我會在煮晚餐。</span
            ></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="I'll be ironing my shirts at eight." :marks="['at eight']" /><span
              class="translation"
              >八點的時候我會在燙襯衫。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="when 子句說未來的時間，動詞用現在式">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When the doctor', kind: 'dim' },
          { t: 'calls,', role: '現在式', kind: 'key', ring: true },
          { t: 'I\'ll be sitting', role: 'will be + 動詞-ing', kind: 'key' },
          { t: 'by the phone.', kind: 'dim' },
        ]"
      />
      <p class="translation">醫生打來的時候，我會坐在電話旁邊。</p>
    </NoteSlide>

    <NoteSlide title="用 so、but 或 because 把正在做的事和安排連起來" mark="so">
      <div class="rows is-labeled">
        <div>
          <span class="term">so</span>
          <span
            ><NoteMark
              sentence="I'll be shopping until four, so come over after that."
              :marks="['so']"
            /><span class="translation">我四點以前會在買東西，所以你那之後再過來。</span></span
          >
        </div>
        <div>
          <span class="term">but</span>
          <span
            ><NoteMark
              sentence="I'll be cleaning in the morning, but I'm free in the afternoon."
              :marks="['but']"
            /><span class="translation">我早上會在打掃，不過下午有空。</span></span
          >
        </div>
        <div>
          <span class="term">because</span>
          <span
            ><NoteMark
              sentence="Don't come at ten, because I'll be sleeping then."
              :marks="['because']"
            /><span class="translation">別十點來，因為我那時候在睡覺。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="will be 加動詞-ing 的動作在那個時間之前就開始了" mark="be studying">
      <div class="rows is-labeled">
        <div>
          <span class="term">will + 原形動詞<br /><i>七點開始</i></span>
          <span
            ><NoteMark sentence="At seven I'll have breakfast." :marks="['have']" /><span
              class="translation"
              >我七點吃早餐。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will be + 動詞-ing<br /><i>七點前已經開始</i></span>
          <span
            ><NoteMark sentence="At seven I'll be having breakfast." :marks="['be having']" /><span
              class="translation"
              >七點的時候我正在吃早餐。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="when 子句裡不用 will">
      <NoteFix
        wrong="When you will arrive, I'll be waiting at the gate."
        right="When you arrive, I'll be waiting at the gate."
        fix="arrive"
      />
    </NoteSlide>

    <NoteSlide title="be 後面接動詞-ing" mark="studying">
      <NoteFix
        wrong="Tomorrow I'll be work all morning."
        right="Tomorrow I'll be working all morning."
        fix="working"
      />
    </NoteSlide>

    <NoteSlide title="will 後面接原形的 be" mark="be">
      <NoteFix
        wrong="Tomorrow I'll been studying all morning."
        right="Tomorrow I'll be studying all morning."
        fix="be"
      >
        <code>will have been</code> 是另一個句型。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
