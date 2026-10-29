<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-past-negative-627, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + wouldn't have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Without your help,', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'wouldn\'t have', kind: 'key', ring: true },
          { t: 'got', role: '過去分詞' },
          { t: 'this result.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="wouldn't have、without">
      <div class="rows is-labeled">
        <div>
          <span class="term">wouldn't have</span>
          <span>過去不會。說和事實相反的結果。</span>
        </div>
        <div>
          <span class="term">without</span>
          <span>沒有……的話。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="感謝別人" mark="Without your help, I wouldn't have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Without you, we wouldn't have finished on time."
              :marks="[]"
            /><span class="translation">沒有你，我們不會準時完成。</span></span
          >
        </div>
      </div>
      <p class="remark">Without your help, I wouldn't have 常用來感謝別人。</p>
    </NoteSlide>
    <NoteSlide title="倒裝：Had it not been for">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Had it not been for that day, she would not have met George."
              :marks="['Had it not been for']"
            /><span class="translation">要不是那一天，她不會遇到喬治。</span></span
          >
        </div>
      </div>
      <p class="remark">很正式的寫作會用 Had it not been for 代替 If it hadn't been for。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="I wouldn't have went without you."
        right="I wouldn't have gone without you."
        :fix="['gone']"
      />
    </NoteSlide>
    <NoteSlide title="would 的否定是 wouldn't" mark="wouldn't">
      <NoteFix
        wrong="I didn't would have known."
        right="I wouldn't have known."
        :fix="['wouldn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="if 子句用 hadn't 加過去分詞">
      <NoteFix
        wrong="If I wouldn't have missed the bus, I wouldn't have been late."
        right="If I hadn't missed the bus, I wouldn't have been late."
        :fix="['hadn\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
