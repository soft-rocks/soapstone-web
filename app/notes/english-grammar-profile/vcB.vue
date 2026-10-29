<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-plans-and-intentions-604, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / We + will + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', kind: 'key', ring: true },
          { t: 'will', kind: 'key', ring: true },
          { t: 'bring', role: '原形動詞' },
          { t: 'some music to the dinner.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span>說話者自己決定要做的事。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>要做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說話的時候決定">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It's cold in here. I'll close the window." :marks="[]" /><span
              class="translation"
              >這裡好冷，我去關窗。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說話者常在說話那一刻才決定做某件事。</p>
    </NoteSlide>
    <NoteSlide title="道別的時候">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'll see you tomorrow." :marks="['I\'ll see you']" /><span
              class="translation"
              >明天見。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">道別時常用 I'll see you 加上時間。</p>
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞" mark="will">
      <NoteFix
        wrong="I will to bring some music."
        right="I will bring some music."
        :fix="['bring']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="will">
      <NoteFix wrong="I'll called you later." right="I'll call you later." :fix="['call']" />
    </NoteSlide>
    <NoteSlide title="說話時才決定要做的事，用 will" mark="will">
      <NoteFix
        wrong="The phone is ringing. I answer it."
        right="The phone is ringing. I'll answer it."
        :fix="['I\'ll']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
