<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-long-term-intentions-with-shall, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / we + shall + always / never + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', kind: 'key', ring: true },
          { t: 'shall', kind: 'key', ring: true },
          { t: 'always', kind: 'key', ring: true },
          { t: 'remember', role: '原形動詞' },
          { t: 'it as the city of lights.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="shall、always / never、shall not" mark="shall">
      <div class="rows is-labeled">
        <div>
          <span class="term">shall</span>
          <span>表示說話者的決心。這是英式英語比較正式的說法。</span>
        </div>
        <div>
          <span class="term">always / never</span>
          <span>放在 shall 後面，表示永遠會、永遠不會。</span>
        </div>
        <div>
          <span class="term">shall not</span>
          <span>說長期不會做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="always 和 never">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I shall always love this place." :marks="[]" /><span
              class="translation"
              >我會永遠喜歡這個地方。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I shall never lose hope." :marks="[]" /><span class="translation"
              >我永遠不會失去希望。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="長期的決定">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We shall not send any more staff on that course."
              :marks="['We']"
            /><span class="translation">我們不會再派員工去上那個課程。</span></span
          >
        </div>
      </div>
      <p class="remark">主詞是 we 時，常用在公司或團體的長期決定。</p>
    </NoteSlide>
    <NoteSlide title="always 放在 shall 後面、動詞前面" mark="always">
      <NoteFix
        wrong="I always shall remember you."
        right="I shall always remember you."
        :fix="['shall', 'remember']"
      />
    </NoteSlide>
    <NoteSlide title="never 已經是否定，不再加 not">
      <NoteFix
        wrong="I shall not never forget this."
        right="I shall never forget this."
        :fix="['never']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面接原形動詞" mark="shall">
      <NoteFix
        wrong="We shall always keeps our promise."
        right="We shall always keep our promise."
        :fix="['keep']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
