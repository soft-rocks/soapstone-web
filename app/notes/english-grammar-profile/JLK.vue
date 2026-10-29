<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-just-preposition, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="just 放在介系詞前面，表示就在">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My house is', kind: 'dim' },
          { t: 'just', role: '就在', kind: 'key' },
          { t: 'after', role: '介系詞' },
          { t: 'the library.', role: '名詞片語' },
        ]"
      />
      <p class="translation">我家就在圖書館過去一點。</p>
    </NoteSlide>

    <NoteSlide title="just 加位置或時間的介系詞，說兩者很接近" mark="just">
      <div class="rows is-labeled">
        <div>
          <span class="term">位置</span>
          <span
            ><NoteMark
              sentence="The bus stop is just outside my building."
              :marks="['just outside']"
            /><span class="translation">公車站就在我住的大樓外面。</span></span
          >
        </div>
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark
              sentence="We arrived just before the rain started."
              :marks="['just before']"
            /><span class="translation">我們剛好在開始下雨前到了。</span></span
          >
        </div>
      </div>
      <p class="remark">
        常見的組合：<code>just behind</code>、<code>just opposite</code>、<code>just next to</code
        >、<code>just around the corner</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="just 放在介系詞前面，不放在後面" mark="just">
      <NoteFix
        wrong="The café is opposite just the bank."
        right="The café is just opposite the bank."
        fix="just opposite"
      />
    </NoteSlide>

    <NoteSlide title="just 放在 is 後面、介系詞前面" mark="is just">
      <NoteFix
        wrong="My school just is next to the park."
        right="My school is just next to the park."
        fix="is just"
      />
    </NoteSlide>

    <NoteSlide title="just 放在整個複合介系詞前面">
      <NoteFix
        wrong="The taxi is in just front of the hotel."
        right="The taxi is just in front of the hotel."
        fix="just in front of"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
