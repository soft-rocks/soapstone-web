<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-time-up-to-then, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had + 過去分詞 + before + -ing / 子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">had + 過去分詞</span>
          <span>比另一件過去的事更早發生。</span>
        </div>
        <div>
          <span class="term">before</span>
          <span>在……之前。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="回頭想過去的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="He then thought how stupid he had been." :marks="[]" /><span
              class="translation"
              >他接著想到自己剛才多麼愚蠢。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">thought how … had been 說人物回頭想之前的事。</p>
    </NoteSlide>
    <NoteSlide title="不需要過去完成式的時候" mark="before">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I called you after I arrived." :marks="['after']" /><span
              class="translation"
              >我到了以後打給你。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">兩件事用 before 或 after 清楚說出順序時，也可以用過去式。</p>
    </NoteSlide>
    <NoteSlide title="說過去之前的事用 had">
      <NoteFix
        wrong="I has arranged an appointment before I called you."
        right="I had arranged an appointment before I called you."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="before 後面接 -ing 或子句" mark="before">
      <NoteFix
        wrong="I'd booked a table before call you."
        right="I'd booked a table before calling you."
        :fix="['calling']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞">
      <NoteFix
        wrong="He realised he had took the wrong bag."
        right="He realised he had taken the wrong bag."
        :fix="['taken']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
