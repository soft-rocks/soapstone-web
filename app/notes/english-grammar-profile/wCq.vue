<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-use-look-forward-to, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="look forward to 後面接主詞期待的事">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'look forward to', role: '片語動詞', kind: 'key' },
          { t: 'hearing', role: '動詞-ing', kind: 'key' },
          { t: 'from you.', kind: 'dim' },
        ]"
      />
      <p class="translation">期待你的回信。</p>
      <p class="remark">信和電子郵件常用這句結尾。</p>
    </NoteSlide>

    <NoteSlide title="to 是介系詞，後面接名詞或動詞-ing" mark="hearing">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="I'm looking forward to the weekend."
              :marks="['the weekend']"
            /><span class="translation">我很期待週末。</span></span
          >
        </div>
        <div>
          <span class="term">動詞&#x2060;-&#x2060;ing</span>
          <span
            ><NoteMark
              sentence="I look forward to meeting you on Monday."
              :marks="['meeting']"
            /><span class="translation">期待星期一和您見面。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式的信用簡單式，口語用進行式" mark="look">
      <div class="rows is-labeled">
        <div>
          <span class="term">look forward to<br /><i>正式</i></span>
          <span
            ><NoteMark
              sentence="I look forward to meeting you on Monday."
              :marks="['look forward to']"
            /><span class="translation">期待星期一和您見面。</span></span
          >
        </div>
        <div>
          <span class="term">be looking forward to<br /><i>口語</i></span>
          <span
            ><NoteMark
              sentence="I'm looking forward to the weekend."
              :marks="['I\'m', 'looking']"
            /><span class="translation">我很期待週末。</span></span
          >
        </div>
        <div>
          <span class="term">was looking forward to<br /><i>以前期待</i></span>
          <span
            ><NoteMark
              sentence="I was looking forward to the concert, but it was cancelled."
              :marks="['was looking']"
            /><span class="translation">我本來很期待那場演唱會，可是它取消了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="to 後面接動詞-ing，不接原形動詞" mark="hearing">
      <NoteFix
        wrong="I look forward to hear from you."
        right="I look forward to hearing from you."
        fix="hearing"
      />
    </NoteSlide>

    <NoteSlide title="look forward 後面接名詞時，名詞前面加 to" mark="to">
      <NoteFix
        wrong="We are looking forward the holiday."
        right="We are looking forward to the holiday."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="look forward 的介系詞是 to，不是 for" mark="to">
      <NoteFix
        wrong="I'm looking forward for your visit."
        right="I'm looking forward to your visit."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="現在簡單式的 look 照主詞變化" mark="look">
      <NoteFix
        wrong="My son look forward to the school trip."
        right="My son looks forward to the school trip."
        fix="looks"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
