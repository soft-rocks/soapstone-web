<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-suggestions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="You + might + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I really don\'t know what', kind: 'dim' },
          { t: 'you', kind: 'key', ring: true },
          { t: 'should do, but I think that you', kind: 'dim' },
          { t: 'might', kind: 'key', ring: true },
          { t: 'talk', role: '原形動詞' },
          { t: 'with your parents.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="you might、you might want to、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">you might</span>
          <span>你或許可以。</span>
        </div>
        <div>
          <span class="term">you might want to</span>
          <span>你也許會想。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>建議的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="提醒要帶的東西">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You might need to bring some food."
              :marks="['You might need']"
            /><span class="translation">你也許需要帶一些吃的。</span></span
          >
        </div>
      </div>
      <p class="remark">You might need 常用來提醒別人準備東西。</p>
    </NoteSlide>
    <NoteSlide title="might 後面直接接原形動詞" mark="might">
      <NoteFix wrong="You might to try the soup." right="You might try the soup." :fix="['try']" />
    </NoteSlide>
    <NoteSlide title="want 後面接 to 和原形動詞">
      <NoteFix wrong="You might want call her." right="You might want to call her." :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="might 後面接原形動詞" mark="might">
      <NoteFix
        wrong="You might likes this shop."
        right="You might like this shop."
        :fix="['like']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
