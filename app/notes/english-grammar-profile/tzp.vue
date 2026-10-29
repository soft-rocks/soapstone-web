<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-with-of-object-pronoun-963, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="none + of + 受格代名詞" mark="none of us">
      <NoteWords
        :size="28"
        :parts="[
          { t: '… and', kind: 'dim' },
          { t: 'none', role: '一個也沒有', kind: 'key' },
          { t: 'of', role: '介系詞' },
          { t: 'us', role: '受格', kind: 'key' },
          { t: 'spoke …', kind: 'dim' },
        ]"
      />
      <p class="translation">……而且我們沒有一個人會說……</p>
    </NoteSlide>

    <NoteSlide title="neither、either 和 none" mark="none of">
      <div class="rows is-labeled">
        <div>
          <span class="term">neither of</span>
          <span
            ><NoteMark
              sentence="I asked my parents, but neither of them knew."
              :marks="['neither of them']"
            /><span class="translation">我問了爸媽，可是他們兩個都不知道。</span></span
          >
        </div>
        <div>
          <span class="term">either of</span>
          <span
            ><NoteMark
              sentence="You can take either of them. They're both fine."
              :marks="['either of them.']"
            /><span class="translation">你可以拿其中任何一個，兩個都可以。</span></span
          >
        </div>
        <div>
          <span class="term">none of</span>
          <span
            ><NoteMark
              sentence="I called my friends, but none of them answered."
              :marks="['none of them']"
            /><span class="translation">我打給朋友，可是沒有一個人接。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞的單複數" mark="spoke">
      <div class="rows is-labeled">
        <div>
          <span class="term">neither of</span>
          <span
            ><NoteMark sentence="Neither of us was ready." :marks="['was']" /><span
              class="translation"
              >我們兩個都還沒準備好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">none of</span>
          <span
            ><NoteMark sentence="None of them were at home." :marks="['were']" /><span
              class="translation"
              >他們沒有一個人在家。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面接受格" mark="us">
      <NoteFix
        wrong="Neither of we could find the station."
        right="Neither of us could find the station."
        fix="us"
      />
    </NoteSlide>

    <NoteSlide title="三個以上用 none of" mark="none">
      <NoteFix
        wrong="I have four brothers, and neither of them lives nearby."
        right="I have four brothers, and none of them lives nearby."
        fix="none"
      />
    </NoteSlide>

    <NoteSlide title="代名詞前面加 of" mark="of">
      <NoteFix wrong="Either them can help you." right="Either of them can help you." fix="of" />
    </NoteSlide>

    <NoteSlide title="neither 後面不加 not">
      <NoteFix
        wrong="Neither of us didn't want to leave."
        right="Neither of us wanted to leave."
        fix="wanted"
      />
    </NoteSlide>

    <NoteSlide title="both of：兩個都">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Both of them', role: '兩個都', kind: 'key' },
          { t: 'were tired after the trip.', kind: 'dim' },
        ]"
      />
      <p class="translation">旅行結束後，他們兩個都很累。</p>
    </NoteSlide>

    <NoteSlide title="neither + 單數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Neither', kind: 'key' },
          { t: 'answer', role: '單數名詞' },
          { t: 'is correct.', kind: 'dim' },
        ]"
      />
      <p class="translation">兩個答案都不對。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
