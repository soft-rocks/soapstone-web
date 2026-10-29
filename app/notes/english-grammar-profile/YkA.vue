<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-negative-766, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had not + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">had not / hadn't</span>
          <span>否定。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去某個時間點之前沒發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正式的報告">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The company called to say that we had not delivered the goods on time."
              :marks="['had not']"
            /><span class="translation">那家公司打電話來說我們沒有準時交貨。</span></span
          >
        </div>
      </div>
      <p class="remark">工作的報告和信件常用 had not 說沒做到的事。</p>
    </NoteSlide>
    <NoteSlide title="hadn't … yet">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="When I arrived, they hadn't started yet." :marks="[]" /><span
              class="translation"
              >我到的時候，他們還沒開始。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">hadn't … yet 說到那時候為止，事情還沒發生。</p>
    </NoteSlide>
    <NoteSlide title="過去完成式的否定用 hadn't 加過去分詞" mark="hadn't">
      <NoteFix
        wrong="I didn't heard from her for months."
        right="I hadn't heard from her for months."
        :fix="['hadn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="hadn't 後面接過去分詞" mark="hadn't">
      <NoteFix
        wrong="She hadn't ate anything all day."
        right="She hadn't eaten anything all day."
        :fix="['eaten']"
      />
    </NoteSlide>
    <NoteSlide title="not 放在 had 後面">
      <NoteFix
        wrong="We had finished not the work."
        right="We had not finished the work."
        :fix="['not', 'the']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
