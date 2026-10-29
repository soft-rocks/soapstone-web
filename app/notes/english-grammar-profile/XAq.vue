<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-with-like, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + would like + to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'would like', kind: 'key', ring: true },
          { t: 'to', kind: 'key', ring: true },
          { t: 'eat', role: '原形動詞' },
          { t: 'some Spanish food.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="would like、'd like、to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">would like</span>
          <span>想要。比 want 有禮貌。</span>
        </div>
        <div>
          <span class="term">'d like</span>
          <span>口語常用的縮寫，像 I'd like、we'd like。</span>
        </div>
        <div>
          <span class="term">to + 原形動詞</span>
          <span>想做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="所有主詞都一樣" mark="would like">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="She would like a cup of tea."
              :marks="['would like', 'She']"
            /><span class="translation">她想喝一杯茶。</span></span
          >
        </div>
      </div>
      <p class="remark">would like 的主詞是 he 或 she 時也不加 -&#x2060;s。</p>
    </NoteSlide>
    <NoteSlide title="would like 後面接動詞時要加 to" mark="would like">
      <NoteFix wrong="I would like eat pizza." right="I would like to eat pizza." :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="would 後面接原形 like" mark="would">
      <NoteFix wrong="She would likes a coffee." right="She would like a coffee." :fix="['like']" />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="We'd like to going to the beach."
        right="We'd like to go to the beach."
        :fix="['go']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
