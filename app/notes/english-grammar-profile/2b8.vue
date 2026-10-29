<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-past-negative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + might not have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The disappointment you mentioned', role: '主詞' },
          { t: 'might not have', kind: 'key', ring: true },
          { t: 'been', role: '過去分詞' },
          { t: 'as bad as you thought.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="might not have、mightn't have、過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">might not have</span>
          <span>過去可能沒有。</span>
        </div>
        <div>
          <span class="term">mightn't have</span>
          <span>縮寫，主要用在英式口語。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去可能沒發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="委婉地反駁">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The problem might not have been as serious as you thought."
              :marks="[]"
            /><span class="translation">問題可能沒有您想的那麼嚴重。</span></span
          >
        </div>
      </div>
      <p class="remark">正式的回信常用 might not have been as … as 委婉地說對方誇大了。</p>
    </NoteSlide>
    <NoteSlide title="not 的位置" mark="might">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="She might not have seen it."
              :marks="['might', 'have', 'not']"
            /><span class="translation">她可能沒看到。</span></span
          >
        </div>
      </div>
      <p class="remark">not 放在 might 和 have 中間。</p>
    </NoteSlide>
    <NoteSlide title="not 放在 might 後面" mark="might">
      <NoteFix
        wrong="He might have not known."
        right="He might not have known."
        :fix="['not', 'known.']"
      />
    </NoteSlide>
    <NoteSlide title="mightn't 後面接 have 和過去分詞，不用 didn't" mark="have">
      <NoteFix
        wrong="She mightn't didn't hear you."
        right="She mightn't have heard you."
        :fix="['have heard']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="They might not have went there."
        right="They might not have gone there."
        :fix="['gone']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
