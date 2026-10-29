<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-fixed-plans, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will + 原形動詞 + 時間">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Mr Miller,', kind: 'dim' },
          { t: 'the Sales Director,', role: '主詞' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'visit', role: '原形動詞' },
          { t: 'us next Thursday.', role: '時間' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will、時間、won't be able to">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span>會。說確定的計畫。</span>
        </div>
        <div>
          <span class="term">時間</span>
          <span>常是日期、星期幾或幾點。</span>
        </div>
        <div>
          <span class="term">won't be able to</span>
          <span>說到時候沒辦法做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正式的通知" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The meeting will start at nine." :marks="['will']" /><span
              class="translation"
              >會議九點開始。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">公司、學校和機構的通知常用 will 說安排。</p>
    </NoteSlide>
    <NoteSlide title="說不能出席">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I'm sorry, but I won't be able to attend your class tomorrow."
              :marks="['I won\'t be able to attend']"
            /><span class="translation">很抱歉，我明天沒辦法來上您的課。</span></span
          >
        </div>
      </div>
      <p class="remark">I won't be able to attend 常用在請假和道歉。</p>
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞" mark="will">
      <NoteFix
        wrong="The director will to visit us."
        right="The director will visit us."
        :fix="['visit']"
      />
    </NoteSlide>
    <NoteSlide title="be able 後面要接 to">
      <NoteFix
        wrong="I won't be able attend the meeting."
        right="I won't be able to attend the meeting."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面不能接 can，要用 be able to" mark="will">
      <NoteFix
        wrong="I won't can come tomorrow."
        right="I won't be able to come tomorrow."
        :fix="['be able to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
