<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-perfect-817, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="yet 放在句尾，說到現在還沒發生" mark="yet.">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'haven\'t seen', role: 'haven\'t + 過去分詞' },
          { t: 'this film', role: '受詞', kind: 'dim' },
          { t: 'yet.', role: '句尾', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">這部電影我還沒看過。</p>
      <p class="remark">說話者打算看，只是到現在還沒看。</p>
    </NoteSlide>

    <NoteSlide title="問句也用 yet，回答可以只說 Not yet." mark="yet.">
      <div class="rows is-labeled">
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark
              sentence="We're leaving for the cinema at six. Have you finished your homework yet?"
              :marks="['yet?']"
            /><span class="translation">我們六點要出發去電影院。你功課寫完了沒？</span></span
          >
        </div>
        <div>
          <span class="term">簡答</span>
          <span
            ><NoteMark
              sentence="We've waited for twenty minutes. Has the bus come? — Not yet."
              :marks="['Not yet.']"
            /><span class="translation">我們等了二十分鐘了。公車來了嗎？還沒。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="yet 不放在動詞和受詞中間" mark="this film yet.">
      <NoteFix
        wrong="My brother hasn't cleaned yet his room."
        right="My brother hasn't cleaned his room yet."
        fix="his room yet."
      />
    </NoteSlide>

    <NoteSlide title="肯定句用 already，不用 yet" mark="yet.">
      <NoteFix
        wrong="I have written my essay for history class yet."
        right="I have already written my essay for history class."
        fix="already"
      />
    </NoteSlide>

    <NoteSlide title="否定句用 yet，不用 already" mark="yet.">
      <NoteFix
        wrong="We haven't already chosen a name for the puppy."
        right="We haven't chosen a name for the puppy yet."
        fix="yet."
      />
    </NoteSlide>

    <NoteSlide title="still haven't 強調等太久了" mark="haven't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It came out in March, and', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'still', role: 'haven\'t 前面', kind: 'key', ring: true },
          { t: 'haven\'t seen this film.', kind: 'dim' },
        ]"
      />
      <p class="translation">這部電影三月就上映了，我到現在還沒看。</p>
    </NoteSlide>

    <NoteSlide title="already 用在肯定句" mark="haven't seen">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Let\'s choose a different one.', kind: 'dim' },
          { t: 'I\'ve', kind: 'dim' },
          { t: 'already', role: '已經做了', kind: 'key', ring: true },
          { t: 'seen this film.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們選別部吧。這部電影我已經看過了。</p>
    </NoteSlide>

    <NoteSlide title="美式口語用過去簡單式加 yet" mark="haven't seen">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Don\'t tell me the ending.', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'didn\'t see', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'this film yet.', kind: 'dim' },
        ]"
      />
      <p class="translation">不要告訴我結局。這部電影我還沒看。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
