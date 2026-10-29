<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-we-us-general, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="we 泛指一般人，包括說話的人" mark="We all know">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We all', role: '一般人', kind: 'key' },
          { t: 'know', role: '動詞' },
          { t: 'that being a writer is difficult.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們都知道當作家很辛苦。</p>
    </NoteSlide>

    <NoteSlide title="we、us 和 our" mark="We">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞 we</span>
          <span
            ><NoteMark sentence="We need water to live." :marks="['We']" /><span class="translation"
              >我們需要水才能活下去。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞 us</span>
          <span
            ><NoteMark sentence="Music can make us feel better." :marks="['us']" /><span
              class="translation"
              >音樂能讓我們心情變好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">所有格 our</span>
          <span
            ><NoteMark sentence="We should take care of our planet." :marks="['our']" /><span
              class="translation"
              >我們應該好好愛護我們的地球。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="we all 和 most of us" mark="We all">
      <div class="rows is-labeled">
        <div>
          <span class="term">每個人</span>
          <span
            ><NoteMark sentence="We all make mistakes." :marks="['We all']" /><span
              class="translation"
              >人都會犯錯。</span
            ></span
          >
        </div>
        <div>
          <span class="term">一部分人</span>
          <span
            ><NoteMark
              sentence="Most of us spend too much time on our phones."
              :marks="['Most of us']"
            /><span class="translation">我們大多數人花太多時間在手機上。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞用 us">
      <NoteFix
        wrong="Exercise helps we stay healthy."
        right="Exercise helps us stay healthy."
        fix="us"
      />
    </NoteSlide>

    <NoteSlide title="主詞用 we" mark="We">
      <NoteFix
        wrong="Today us can buy almost anything online."
        right="Today we can buy almost anything online."
        fix="we"
      />
    </NoteSlide>

    <NoteSlide title="all 放在 we 後面" mark="We all">
      <NoteFix
        wrong="All we know that smoking is bad for us."
        right="We all know that smoking is bad for us."
        fix="We all"
      />
    </NoteSlide>

    <NoteSlide title="前後用同一個代名詞">
      <NoteFix
        wrong="We all need friends, and you feel lonely without them."
        right="We all need friends, and we feel lonely without them."
        fix="we feel"
      />
    </NoteSlide>

    <NoteSlide title="you 也能泛指一般人，比 we 口語">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You', role: '一般人', kind: 'key' },
          { t: 'can\'t learn a language in a week.', kind: 'dim' },
        ]"
      />
      <p class="translation">語言不可能一個星期就學會。</p>
    </NoteSlide>

    <NoteSlide title="指特定一群人的 we">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We', role: '我和家人', kind: 'key' },
          { t: 'are having a barbecue in the garden on Sunday.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們星期天要在院子裡烤肉。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
