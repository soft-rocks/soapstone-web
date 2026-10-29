<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-immediate-future-with-be-about-to, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be about to 說即將發生的事" mark="We're about to introduce">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'We\'re', role: '主詞 + be', kind: 'dim' },
          { t: 'about to', role: 'about to', kind: 'key', ring: true },
          { t: 'introduce', role: '原形動詞', kind: 'key' },
          { t: 'a new identity card system in our company.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們即將在公司導入新的識別證系統。</p>
      <p class="remark">準備已經做完，新系統很快就會開始。</p>
    </NoteSlide>

    <NoteSlide title="just 放在 be 和 about to 中間，時間更近" mark="about to">
      <div class="rows is-labeled">
        <div>
          <span class="term">about to<br /><i>即將</i></span>
          <span
            ><NoteMark
              sentence="The winter sales are about to start."
              :marks="['are about to']"
            /><span class="translation">冬季特賣即將開始。</span></span
          >
        </div>
        <div>
          <span class="term">just about to<br /><i>下一刻就要</i></span>
          <span
            ><NoteMark
              sentence="We are just about to launch a new snack for children."
              :marks="['are just about to']"
            /><span class="translation">我們正要推出一款兒童點心。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="公司和團體常用 be about to 宣布即將推出的措施" mark="We're">
      <div class="rows">
        <div>
          <span
            ><NoteMark
              sentence="Our school is about to celebrate its hundredth birthday."
              :marks="['is about to']"
            /><span class="translation">我們學校即將慶祝創校一百週年。</span></span
          >
        </div>
        <div>
          <span
            ><NoteMark
              sentence="The bank is about to raise its interest rates."
              :marks="['is about to']"
            /><span class="translation">銀行即將調高利率。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="just about to 常用來說明現在不能做別的事" mark="about to">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I\'m', kind: 'dim' },
          { t: 'just about to', role: '下一刻就要', kind: 'key', ring: true },
          { t: 'get in the shower.', role: '原形動詞' },
          { t: 'Can I call you back?', role: '請對方晚一點', kind: 'dim' },
        ]"
      />
      <p class="translation">我正要去洗澡，我等一下回電給你好嗎？</p>
    </NoteSlide>

    <NoteSlide title="just 放在 be 後面、about to 前面" mark="We're about">
      <NoteFix
        wrong="We're about just to leave."
        right="We're just about to leave."
        fix="just about"
      />
    </NoteSlide>

    <NoteSlide title="about 後面要有 to" mark="about to">
      <NoteFix
        wrong="The game is about start."
        right="The game is about to start."
        fix="about to"
      />
    </NoteSlide>

    <NoteSlide title="about to 前面用 be，不用 will" mark="We're">
      <NoteFix
        wrong="We will about to launch a new product."
        right="We are about to launch a new product."
        fix="are"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
