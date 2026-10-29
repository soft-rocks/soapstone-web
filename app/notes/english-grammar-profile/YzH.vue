<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-past-negative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + may not have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The number of Dutch people eating a big,', kind: 'dim' },
          { t: 'hot breakfast', role: '主詞' },
          { t: 'may not have', kind: 'key', ring: true },
          { t: 'been', role: '過去分詞' },
          { t: 'as high as in England, but it has certainly fallen.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="may not have、過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">may not have</span>
          <span>可能沒有。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去可能沒發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用在報告和議論文">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Earlier figures may not have been accurate." :marks="[]" /><span
              class="translation"
              >早期的數字可能不準確。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">報告和議論文常用這個句型，小心地說過去的情況，不說得太肯定。</p>
    </NoteSlide>
    <NoteSlide title="用在關係子句" mark="may not have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="She learned skills that she may not have learned at home."
              :marks="['may not have', 'that']"
            /><span class="translation">她學到了在家裡可能學不到的技能。</span></span
          >
        </div>
      </div>
      <p class="remark">may not have 也常放在 that 或 which 帶出的子句裡。</p>
    </NoteSlide>
    <NoteSlide title="not 放在 may 和 have 中間" mark="have">
      <NoteFix
        wrong="He may have not seen it."
        right="He may not have seen it."
        :fix="['not', 'seen']"
      />
    </NoteSlide>
    <NoteSlide title="may 後面接 not have" mark="not have">
      <NoteFix
        wrong="She may hasn't heard the news."
        right="She may not have heard the news."
        :fix="['not have']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="They may not have know about it."
        right="They may not have known about it."
        :fix="['known']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
