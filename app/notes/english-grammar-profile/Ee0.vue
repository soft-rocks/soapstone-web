<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-be-due-to, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be due to 說已經排定時間的事" mark="due to">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'am', role: 'be' },
          { t: 'due to', role: '預定', kind: 'key', ring: true },
          { t: 'start work', role: '原形動詞', kind: 'key' },
          { t: 'in August.', role: '時間' },
        ]"
      />
      <p class="translation">我預定八月開始上班。</p>
      <p class="remark">上班的日期是公司排好的。</p>
    </NoteSlide>

    <NoteSlide title="主詞可以是人，也可以是事情" mark="I">
      <div class="rows is-labeled">
        <div>
          <span class="term">人</span>
          <span
            ><NoteMark sentence="She's due to give a talk on Monday." :marks="['She\'s']" /><span
              class="translation"
              >她預定星期一演講。</span
            ></span
          >
        </div>
        <div>
          <span class="term">事情</span>
          <span
            ><NoteMark
              sentence="The new bridge is due to open next spring."
              :marks="['The new bridge']"
            /><span class="translation">新橋預定明年春天通車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動是 due to be 加過去分詞" mark="start">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The results', role: '主詞', kind: 'dim' },
          { t: 'are due to', role: 'be due to' },
          { t: 'be announced', role: 'be + 過去分詞', kind: 'key', ring: true },
          { t: 'tomorrow.', kind: 'dim' },
        ]"
      />
      <p class="translation">結果預定明天公布。</p>
    </NoteSlide>

    <NoteSlide title="否定的 not 放在 be 後面" mark="am">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The next train', kind: 'dim' },
          { t: 'isn\'t', role: 'is not', kind: 'key', ring: true },
          { t: 'due to arrive', role: 'due to + 原形動詞' },
          { t: 'for an hour.', kind: 'dim' },
        ]"
      />
      <p class="translation">下一班火車還要一個小時才會到。</p>
    </NoteSlide>

    <NoteSlide title="due to 後面接名詞時，意思是因為" mark="due to">
      <div class="rows is-labeled">
        <div>
          <span class="term">due to + 原形動詞<br /><i>預定</i></span>
          <span
            ><NoteMark
              sentence="The game is due to start at three."
              :marks="['due to start']"
            /><span class="translation">比賽預定三點開始。</span></span
          >
        </div>
        <div>
          <span class="term">due to + 名詞<br /><i>因為</i></span>
          <span
            ><NoteMark
              sentence="The game was cancelled due to rain."
              :marks="['due to rain']"
            /><span class="translation">比賽因為下雨取消了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="due to 前面要有 am、is 或 are" mark="am">
      <NoteFix
        wrong="The meeting due to start at nine."
        right="The meeting is due to start at nine."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="due to 後面接原形動詞" mark="start">
      <NoteFix
        wrong="The flight is due to leaving at noon."
        right="The flight is due to leave at noon."
        fix="leave"
      >
        這裡的 <code>to</code> 是不定詞的 <code>to</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="被動不能少了 be" mark="due to">
      <NoteFix
        wrong="The report is due to published next week."
        right="The report is due to be published next week."
        fix="be published"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
