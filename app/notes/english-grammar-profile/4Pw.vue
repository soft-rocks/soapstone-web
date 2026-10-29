<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-use-tags-with-imperatives-as-softeners, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="祈使句後面加 will you，命令變成請求">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Think about it,', role: '祈使句' },
          { t: 'will you?', role: '附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">你考慮一下，好嗎？</p>
    </NoteSlide>

    <NoteSlide title="would you 和 could you 更客氣，won't you 用來邀請" mark="will you">
      <div class="rows is-labeled">
        <div>
          <span class="term">would you</span>
          <span
            ><NoteMark
              sentence="Give this letter to your mother, would you?"
              :marks="['would you']"
            /><span class="translation">把這封信交給你媽媽，好嗎？</span></span
          >
        </div>
        <div>
          <span class="term">won't you<br /><i>邀請</i></span>
          <span
            ><NoteMark sentence="Come in and sit down, won't you?" :marks="['won\'t you']" /><span
              class="translation"
              >請進來坐吧。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Let's 開頭的句子用 shall we" mark="will you">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Let\'s check together,', role: 'Let\'s + 原形動詞' },
          { t: 'shall we?', role: '附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">我們一起檢查，好嗎？</p>
    </NoteSlide>

    <NoteSlide title="否定的祈使句後面用 will you" mark="will you">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Don\'t be late,', role: '否定的祈使句' },
          { t: 'will you?', role: '附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">別遲到，好嗎？</p>
    </NoteSlide>

    <NoteSlide title="Let's 的附加問句用 shall we" mark="will">
      <NoteFix
        wrong="Let's go for a walk, will you?"
        right="Let's go for a walk, shall we?"
        fix="shall we"
      />
    </NoteSlide>

    <NoteSlide title="祈使句是對 you 說的，附加問句用 you" mark="you">
      <NoteFix wrong="Pass me the salt, will we?" right="Pass me the salt, will you?" fix="you" />
    </NoteSlide>

    <NoteSlide title="祈使句後面的附加問句不用 do" mark="will">
      <NoteFix wrong="Open the window, do you?" right="Open the window, will you?" fix="will" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
