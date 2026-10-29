<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-619, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + would / 'd + love + to + 原形動詞" mark="I'd">
      <div class="rows is-labeled">
        <div>
          <span class="term">would love</span>
          <span>很想要。</span>
        </div>
        <div>
          <span class="term">would prefer</span>
          <span>比較想要。</span>
        </div>
        <div>
          <span class="term">'d</span>
          <span>would 的縮寫，像 I'd、we'd、she'd。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="選時間">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I would prefer Sunday afternoon."
              :marks="['I would prefer']"
            /><span class="translation">我比較想要星期天下午。</span></span
          >
        </div>
      </div>
      <p class="remark">I would prefer 常用來選時間或選擇。</p>
    </NoteSlide>
    <NoteSlide title="所有主詞都用 would">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She would love a new bike." :marks="['would']" /><span
              class="translation"
              >她很想要一台新的腳踏車。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">would 不加 -&#x2060;s。</p>
    </NoteSlide>
    <NoteSlide title="would 後面接原形動詞">
      <NoteFix wrong="She would loves to come." right="She would love to come." :fix="['love']" />
    </NoteSlide>
    <NoteSlide title="would love 後面接動詞時要加 to" mark="to">
      <NoteFix wrong="I'd love have a dog." right="I'd love to have a dog." :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="would 後面直接接原形動詞">
      <NoteFix
        wrong="I would to prefer the train."
        right="I would prefer the train."
        :fix="['prefer']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
