<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-ability, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + can + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'can', kind: 'key', ring: true },
          { t: 'cook.', role: '原形動詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="can、can't / cannot、原形動詞" mark="cook.">
      <div class="rows is-labeled">
        <div>
          <span class="term">can</span>
          <span>會、有能力做。</span>
        </div>
        <div>
          <span class="term">can't / cannot</span>
          <span>不會、沒有能力做。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>那個能力，像 cook、swim、read、drive。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說能力好不好">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I can read English very well."
              :marks="['very well.', 'well.']"
            /><span class="translation">我英文讀得很好。</span></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I can't read very well." :marks="['very well.', 'well.']" /><span
              class="translation"
              >我讀得不太好。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">well、very well、a little 放在句尾。</p>
    </NoteSlide>
    <NoteSlide title="身體上的能力">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="He cannot go up stairs." :marks="[]" /><span class="translation"
              >他沒辦法爬樓梯。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">can't 也說身體上做不到的事。</p>
    </NoteSlide>
    <NoteSlide title="can 後面直接接原形動詞" mark="can">
      <NoteFix wrong="I can to cook pasta." right="I can cook pasta." :fix="['cook']" />
    </NoteSlide>
    <NoteSlide title="主詞是 she，can 後面還是接原形動詞" mark="can">
      <NoteFix wrong="She can swims." right="She can swim." :fix="['swim.']" />
    </NoteSlide>
    <NoteSlide title="well 放在句尾">
      <NoteFix
        wrong="I can well speak English."
        right="I can speak English well."
        :fix="['speak', 'English well.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
