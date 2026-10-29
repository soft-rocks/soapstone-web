<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-plans-and-intentions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / We + shall + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', kind: 'key', ring: true },
          { t: 'promise that I', kind: 'dim' },
          { t: 'shall', kind: 'key', ring: true },
          { t: 'cover', role: '原形動詞' },
          { t: 'all the work and give it to you tomorrow.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="shall、shall be + -ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">shall</span>
          <span>會、將。說計畫和打算，比 will 正式。</span>
        </div>
        <div>
          <span class="term">shall be + -&#x2060;ing</span>
          <span>說已經安排好、到時候正在做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正式的信件" mark="I shall">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Dear Mr Hall, thank you for your patience. I shall send you the report on Monday."
              :marks="['I shall']"
            /><span class="translation">Hall 先生您好，謝謝您的耐心。我星期一會把報告寄給您。</span></span
          >
        </div>
      </div>
      <p class="remark">正式的信常用 I shall 說自己會做的事。</p>
    </NoteSlide>
    <NoteSlide title="提醒已經安排好的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It's going to rain on Saturday. Remember that we shall meet inside the café."
              :marks="['we shall']"
            /><span class="translation">星期六會下雨。記得我們會在咖啡館裡面碰面。</span></span
          >
        </div>
      </div>
      <p class="remark">We shall 也用來提醒大家已經決定的安排。</p>
    </NoteSlide>
    <NoteSlide title="shall 後面直接接原形動詞" mark="shall">
      <NoteFix
        wrong="Thank you for your order. I shall to send it tomorrow."
        right="Thank you for your order. I shall send it tomorrow."
        :fix="['send']"
      />
    </NoteSlide>
    <NoteSlide title="shall be 後面接 -ing">
      <NoteFix
        wrong="I'm sorry I missed today's lecture. I shall be attend class again on Thursday."
        right="I'm sorry I missed today's lecture. I shall be attending class again on Thursday."
        :fix="['attending']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面接原形動詞" mark="shall">
      <NoteFix
        wrong="The coach leaves Oxford at nine. We shall met outside the main entrance."
        right="The coach leaves Oxford at nine. We shall meet outside the main entrance."
        :fix="['meet']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
