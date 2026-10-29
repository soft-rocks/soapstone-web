<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-ellipsis-after-hope, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="hope 前面省略主詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Hope', role: 'Hope', kind: 'key' },
          { t: 'to see', role: 'to + 原形動詞' },
          { t: 'you', role: '受詞', kind: 'dim' },
          { t: 'soon.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">希望很快能見到你。</p>
    </NoteSlide>

    <NoteSlide title="信的開頭和結尾" mark="Hope">
      <div class="rows is-labeled">
        <div>
          <span class="term">開頭</span>
          <span
            ><NoteMark sentence="Hi! How are you? Hope you are fine." :marks="['Hope']" /><span
              class="translation"
              >嗨！你好嗎？希望你一切都好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">結尾</span>
          <span
            ><NoteMark sentence="Hope to see you soon." :marks="['Hope']" /><span
              class="translation"
              >希望很快能見到你。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="給朋友省略，正式的信寫完整" mark="Hope">
      <div class="rows is-labeled">
        <div>
          <span class="term">給朋友</span>
          <span
            ><NoteMark sentence="Hope to hear from you soon." :marks="['Hope']" /><span
              class="translation"
              >希望很快收到你的回信。</span
            ></span
          >
        </div>
        <div>
          <span class="term">正式的信</span>
          <span
            ><NoteMark sentence="I hope to hear from you soon." :marks="['I hope']" /><span
              class="translation"
              >期待很快收到您的回覆。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="hope 接動詞要加 to" mark="to see">
      <NoteFix wrong="Hope see you soon." right="Hope to see you soon." fix="to see" />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="to see">
      <NoteFix
        wrong="Hope to hearing from you soon."
        right="Hope to hear from you soon."
        fix="hear"
      />
    </NoteSlide>

    <NoteSlide title="希望別人怎麼樣，接子句" mark="Hope">
      <NoteFix
        wrong="Hope you to have a good time."
        right="Hope you have a good time."
        fix="you have"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
