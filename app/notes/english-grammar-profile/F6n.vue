<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-affirmative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / he / she / it + was + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', kind: 'key', ring: true },
          { t: 'was', kind: 'key', ring: true },
          { t: 'waiting', role: '-ing' },
          { t: 'for you all Saturday evening.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="was / were、-ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">was / were</span>
          <span>be 的過去式。</span>
        </div>
        <div>
          <span class="term">-&#x2060;ing</span>
          <span>當時正在進行的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說一段時間">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We were dancing all evening." :marks="['all evening.']" /><span
              class="translation"
              >我們整晚都在跳舞。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        過去進行式常跟 all evening、all day、every day 一起用，說一段時間裡一直在做的事。
      </p>
    </NoteSlide>
    <NoteSlide title="主詞是 we、you、they，用 were" mark="you">
      <NoteFix
        wrong="We was dancing all night."
        right="We were dancing all night."
        :fix="['were']"
      />
    </NoteSlide>
    <NoteSlide title="-ing 前面要有 was 或 were" mark="was">
      <NoteFix
        wrong="I waiting for you all evening."
        right="I was waiting for you all evening."
        :fix="['was']"
      />
    </NoteSlide>
    <NoteSlide title="swim 的 -ing 要重複 m">
      <NoteFix
        wrong="She was swiming in the sea."
        right="She was swimming in the sea."
        :fix="['swimming']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
