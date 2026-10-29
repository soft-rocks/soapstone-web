<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-present-perfect-simple-affirmative, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="have / has been 加過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'have been', role: 'have / has been', kind: 'key' },
          { t: 'asked', role: '過去分詞', kind: 'key' },
          { t: 'to write a report', role: '不定詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我被要求寫一份報告。</p>
    </NoteSlide>

    <NoteSlide title="轉述消息、正式信件、說結果" mark="have been asked">
      <div class="rows is-labeled">
        <div>
          <span class="term">轉述消息</span>
          <span
            ><NoteMark
              sentence="The meeting has been moved to Friday."
              :marks="['has been moved']"
            /><span class="translation">會議改到星期五了。</span></span
          >
        </div>
        <div>
          <span class="term">正式信件</span>
          <span
            ><NoteMark
              sentence="All the arrangements have been made for your group."
              :marks="['have been made']"
            /><span class="translation">你們團體的安排都已經準備好了。</span></span
          >
        </div>
        <div>
          <span class="term">說結果</span>
          <span
            ><NoteMark
              sentence="The kitchen has been cleaned."
              :marks="['has been cleaned']"
            /><span class="translation">廚房打掃好了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="has been 不說時間，was 說出過去的時間" mark="have been">
      <div class="rows is-labeled">
        <div>
          <span class="term">has been</span>
          <span
            ><NoteMark sentence="My bike has been stolen." :marks="['has been stolen']" /><span
              class="translation"
              >我的腳踏車被偷了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">was</span>
          <span
            ><NoteMark
              sentence="My bike was stolen last night."
              :marks="['was stolen', 'last night']"
            /><span class="translation">我的腳踏車昨晚被偷了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="有過去的時間用過去簡單式" mark="have been">
      <NoteFix
        wrong="My bike has been stolen last night."
        right="My bike was stolen last night."
        fix="was stolen"
      />
    </NoteSlide>

    <NoteSlide title="單數主詞用 has" mark="have">
      <NoteFix
        wrong="The meeting have been moved to Friday."
        right="The meeting has been moved to Friday."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="被動要有 been" mark="been">
      <NoteFix
        wrong="I have asked to write a report."
        right="I have been asked to write a report."
        fix="been"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
