<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-past-affirmative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + might have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'might have', kind: 'key', ring: true },
          { t: 'been', role: '過去分詞' },
          { t: 'our neighbours\' cat.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="might have、過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">might have</span>
          <span>可能已經、可能曾經。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去可能發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說以前的情況">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="In the past, you might have left school at fourteen."
              :marks="['you might have']"
            /><span class="translation">以前，你可能十四歲就離開學校了。</span></span
          >
        </div>
      </div>
      <p class="remark">you might have 加過去分詞也可以說以前一般人可能有的經驗。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞，see 的過去分詞是 seen" mark="have">
      <NoteFix wrong="He might have saw us." right="He might have seen us." :fix="['seen']" />
    </NoteSlide>
    <NoteSlide title="might 後面接原形 have" mark="might">
      <NoteFix wrong="They might had left." right="They might have left." :fix="['have']" />
    </NoteSlide>
    <NoteSlide title="might 和過去分詞中間要有 have" mark="might">
      <NoteFix
        wrong="It might been the wind."
        right="It might have been the wind."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
