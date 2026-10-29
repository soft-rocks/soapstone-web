<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + going to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When we realized it', role: '主詞' },
          { t: 'was', kind: 'key', ring: true },
          { t: 'going to', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'an extremely hot day, we took water.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="was、were、going to + 原形動詞" mark="it">
      <div class="rows is-labeled">
        <div>
          <span class="term">was</span>
          <span>主詞是 I、he、she、it 或單數名詞。</span>
        </div>
        <div>
          <span class="term">were</span>
          <span>主詞是 you、we、they 或複數名詞。</span>
        </div>
        <div>
          <span class="term">going to + 原形動詞</span>
          <span>站在過去某個時間點看，還沒發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="否定句" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I wasn't going to say anything." :marks="[]" /><span
              class="translation"
              >我本來不打算說什麼。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">was 或 were 後面加 not。</p>
    </NoteSlide>
    <NoteSlide title="疑問句" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Were you going to call me?" :marks="['Were']" /><span
              class="translation"
              >你本來要打給我嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">was 或 were 放在主詞前面。</p>
    </NoteSlide>
    <NoteSlide title="going to 前面要有 was 或 were" mark="going to">
      <NoteFix
        wrong="We going to leave at six."
        right="We were going to leave at six."
        :fix="['were']"
      />
    </NoteSlide>
    <NoteSlide title="過去式只放在 was 或 were" mark="was">
      <NoteFix
        wrong="She was going to bought a dress."
        right="She was going to buy a dress."
        :fix="['buy']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 they，用 were">
      <NoteFix
        wrong="They was going to stay at a hotel."
        right="They were going to stay at a hotel."
        :fix="['were']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
