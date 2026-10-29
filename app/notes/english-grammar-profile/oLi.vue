<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-politeness, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="用 will be 加動詞-ing 問當天的安排" mark="be needing">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Will', role: 'will', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'be needing', role: 'be + 動詞-ing', kind: 'key', ring: true },
          { t: 'any money?', kind: 'dim' },
        ]"
      />
      <p class="translation">我會需要用到錢嗎？</p>
      <p class="remark">學生問校外教學的安排，不是要老師做決定。</p>
    </NoteSlide>

    <NoteSlide title="will 加原形動詞在請對方做事，will be 加動詞-ing 只問安排" mark="be needing">
      <div class="rows is-labeled">
        <div>
          <span class="term">will + 原形動詞<br /><i>請對方做事</i></span>
          <span
            ><NoteMark sentence="Will you leave the door open?" :marks="['leave']" /><span
              class="translation"
              >你可以讓門開著嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">will be + 動詞-ing<br /><i>問安排</i></span>
          <span
            ><NoteMark sentence="Will you be leaving soon?" :marks="['be leaving']" /><span
              class="translation"
              >你很快就要走了嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問客人的計畫和需要時常用這個問法" mark="Will">
      <div class="rows is-labeled">
        <div>
          <span class="term">客人的計畫</span>
          <span
            ><NoteMark
              sentence="Will you be visiting your family at New Year?"
              :marks="['be visiting']"
            /><span class="translation">你過年會去看你家人嗎？</span></span
          >
        </div>
        <div>
          <span class="term">客人的需要</span>
          <span
            ><NoteMark
              sentence="Will you be having dessert this evening?"
              :marks="['be having']"
            /><span class="translation">您今晚要用甜點嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="未來進行式取代現在簡單式，問法比較客氣" mark="be needing">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在簡單式</span>
          <span
            ><NoteMark
              sentence="Do you want a newspaper in the morning?"
              :marks="['Do you want']"
            /><span class="translation">你早上要報紙嗎？</span></span
          >
        </div>
        <div>
          <span class="term">未來進行式</span>
          <span
            ><NoteMark
              sentence="Will you be wanting a newspaper in the morning?"
              :marks="['Will you be wanting']"
            /><span class="translation">請問您早上需要報紙嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="這個問法用 will，不用 do" mark="Will">
      <NoteFix wrong="Do you be needing a taxi?" right="Will you be needing a taxi?" fix="Will" />
    </NoteSlide>

    <NoteSlide title="be 後面接動詞-ing" mark="needing">
      <NoteFix
        wrong="Will you be need a lift home?"
        right="Will you be needing a lift home?"
        fix="needing"
      />
    </NoteSlide>

    <NoteSlide title="只有 will 移到主詞前面" mark="I be">
      <NoteFix wrong="Will be you joining us?" right="Will you be joining us?" fix="you be" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
