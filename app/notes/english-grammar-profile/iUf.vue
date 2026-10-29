<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-indirectness, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I'd / I would + advise + 人 + to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">would</span>
          <span>讓意見更委婉。</span>
        </div>
        <div>
          <span class="term">advise / recommend</span>
          <span>建議、推薦。</span>
        </div>
        <div>
          <span class="term">say</span>
          <span>說自己的看法。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="I'd say">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'd say she's about forty." :marks="['I\'d say']" /><span
              class="translation"
              >我猜她大概四十歲。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">I'd say 常用來說自己的看法或估計，語氣比較客氣。</p>
    </NoteSlide>
    <NoteSlide title="I would imagine">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I would imagine the hotel is very busy in summer."
              :marks="['I would imagine']"
            /><span class="translation">我想那家飯店夏天應該很忙。</span></span
          >
        </div>
      </div>
      <p class="remark">I would imagine 說自己的推測。</p>
    </NoteSlide>
    <NoteSlide title="advise 後面先接人，再接 to 和原形動詞">
      <NoteFix
        wrong="I'd advise to go with your friends."
        right="I'd advise you to go with your friends."
        :fix="['you']"
      />
    </NoteSlide>
    <NoteSlide title="recommend 後面接名詞或 -ing，不接 to" mark="recommend">
      <NoteFix
        wrong="I'd recommend to visit the museum."
        right="I'd recommend visiting the museum."
        :fix="['visiting']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面接原形動詞">
      <NoteFix
        wrong="I would says that it's better."
        right="I would say that it's better."
        :fix="['say']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
