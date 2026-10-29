<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-negative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / he / she / it + wasn't + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', kind: 'key', ring: true },
          { t: 'tried to phone her house, but her phone', kind: 'dim' },
          { t: 'wasn\'t', kind: 'key', ring: true },
          { t: 'working.', role: '-ing' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="wasn't、weren't、-ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">wasn't</span>
          <span>was not 的縮寫。</span>
        </div>
        <div>
          <span class="term">weren't</span>
          <span>were not 的縮寫。</span>
        </div>
        <div>
          <span class="term">-&#x2060;ing</span>
          <span>當時沒有在進行的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說東西壞了" mark="wasn't working.">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The lift wasn't working, so we took the stairs."
              :marks="['wasn\'t working,']"
            /><span class="translation">電梯壞了，所以我們走樓梯。</span></span
          >
        </div>
      </div>
      <p class="remark">wasn't working 常用來說機器或東西當時壞了。</p>
    </NoteSlide>
    <NoteSlide title="說身體不舒服">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="She wasn't feeling very well, so she stayed at home."
              :marks="[]"
            /><span class="translation">她覺得不太舒服，所以待在家裡。</span></span
          >
        </div>
      </div>
      <p class="remark">wasn't feeling well 說當時身體不舒服。</p>
    </NoteSlide>
    <NoteSlide title="過去進行式的否定用 wasn't 或 weren't" mark="wasn't">
      <NoteFix
        wrong="The phone didn't working."
        right="The phone wasn't working."
        :fix="['wasn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 you，用 weren't">
      <NoteFix
        wrong="You wasn't listening to me."
        right="You weren't listening to me."
        :fix="['weren\'t']"
      />
    </NoteSlide>
    <NoteSlide title="wasn't 後面的動詞要加 -ing" mark="wasn't">
      <NoteFix
        wrong="He wasn't plan to stay."
        right="He wasn't planning to stay."
        :fix="['planning']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
