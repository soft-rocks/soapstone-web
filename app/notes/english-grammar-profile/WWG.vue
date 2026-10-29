<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-politeness-380, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I hope 加 will have 客氣地說做過的事的結果" mark="will have reassured">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I hope', role: '希望' },
          { t: 'I', role: '主詞' },
          { t: 'will have', role: 'will have', kind: 'key', ring: true },
          { t: 'reassured you.', role: '過去分詞' },
        ]"
      />
      <p class="translation">希望我已經讓你放心了。</p>
      <p class="remark">經理不直接說對方放心了，而是說成一種希望。</p>
    </NoteSlide>

    <NoteSlide title="比現在完成式更客氣、正式" mark="will have">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成式</span>
          <span
            ><NoteMark
              sentence="I hope I have answered your question."
              :marks="['have answered']"
            /><span class="translation">希望我回答了你的問題。</span></span
          >
        </div>
        <div>
          <span class="term">will have</span>
          <span
            ><NoteMark
              sentence="I hope I will have answered your question."
              :marks="['will have answered']"
            /><span class="translation">希望我已經回答了你的問題。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞也可以是事情" mark="I">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'This letter', role: '主詞', kind: 'key', ring: true },
          { t: 'will have explained', role: 'will have + 過去分詞' },
          { t: 'why the course was cancelled.', kind: 'dim' },
        ]"
      />
      <p class="translation">這封信應該已經說明了課程取消的原因。</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞" mark="reassured">
      <NoteFix
        wrong="I hope I will have answer all your questions."
        right="I hope I will have answered all your questions."
        fix="answered"
      />
    </NoteSlide>

    <NoteSlide title="hope 後面用 will have，不用 would have" mark="will have">
      <NoteFix
        wrong="I hope I would have helped you."
        right="I hope I will have helped you."
        fix="will have"
      />
    </NoteSlide>

    <NoteSlide title="will 和過去分詞中間要有 have" mark="will have">
      <NoteFix
        wrong="I hope I will made everything clear."
        right="I hope I will have made everything clear."
        fix="will have made"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
