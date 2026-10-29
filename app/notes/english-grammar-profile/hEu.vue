<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-578, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + shouldn't + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It\'s a new flat, so', kind: 'dim' },
          { t: 'there', role: '主詞' },
          { t: 'shouldn\'t', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'any problems.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="shouldn't / should not、shouldn't、there shouldn't be">
      <div class="rows is-labeled">
        <div>
          <span class="term">shouldn't / should not</span>
          <span>不應該，或應該不會。</span>
        </div>
        <div>
          <span class="term">shouldn't</span>
          <span>口語常用的縮寫。</span>
        </div>
        <div>
          <span class="term">there shouldn't be</span>
          <span>應該不會有。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="不應該和應該不會">
      <div class="rows is-labeled">
        <div>
          <span class="term">不應該</span>
          <span
            ><NoteMark sentence="You shouldn't eat so much sugar." :marks="[]" /><span
              class="translation"
              >你不應該吃那麼多糖。</span
            ></span
          >
        </div>
        <div>
          <span class="term">應該不會</span>
          <span
            ><NoteMark sentence="The test shouldn't be difficult." :marks="[]" /><span
              class="translation"
              >考試應該不會很難。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="I think you shouldn't 和 I don't think you should">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I don't think you should go."
              :marks="['I don\'t think you should']"
            /><span class="translation">我覺得你不應該去。</span></span
          >
        </div>
      </div>
      <p class="remark">兩種說法都可以。英文比較常用 I don't think you should。</p>
    </NoteSlide>
    <NoteSlide title="should 的否定是 should not 或 shouldn't" mark="shouldn't">
      <NoteFix
        wrong="You don't should miss it."
        right="You shouldn't miss it."
        :fix="['shouldn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="not 放在 should 後面">
      <NoteFix
        wrong="You not should wear that."
        right="You should not wear that."
        :fix="['should', 'wear']"
      />
    </NoteSlide>
    <NoteSlide title="shouldn't 後面直接接原形動詞" mark="shouldn't">
      <NoteFix
        wrong="There shouldn't to be any problems."
        right="There shouldn't be any problems."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
