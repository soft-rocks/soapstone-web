<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-obligation-and-necessity-552, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + needn't + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I like summer so much because the weather is hot and', kind: 'dim' },
          { t: 'we', role: '主詞' },
          { t: 'needn\'t', kind: 'key', ring: true },
          { t: 'wear', role: '原形動詞' },
          { t: 'a jacket.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="needn't、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">needn't</span>
          <span>不必、沒有必要。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>沒有必要做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="幫別人分擔">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="As for the music, you needn't worry about it."
              :marks="['you needn\'t worry about it.']"
            /><span class="translation">至於音樂，你不必擔心。</span></span
          >
        </div>
      </div>
      <p class="remark">You needn't worry about it 常用來告訴對方，某件事有人處理了。</p>
    </NoteSlide>
    <NoteSlide title="needn't 後面接原形動詞" mark="needn't">
      <NoteFix
        wrong="In summer we needn't wore jackets."
        right="In summer we needn't wear jackets."
        :fix="['wear']"
      />
    </NoteSlide>
    <NoteSlide title="needn't 後面直接接原形動詞" mark="needn't">
      <NoteFix
        wrong="We needn't to wear a uniform."
        right="We needn't wear a uniform."
        :fix="['wear']"
      />
    </NoteSlide>
    <NoteSlide title="needn't 已經是否定，不再加 don't" mark="needn't">
      <NoteFix
        wrong="You don't needn't come to the station. I'll take a taxi."
        right="You needn't come to the station. I'll take a taxi."
        :fix="['needn\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
