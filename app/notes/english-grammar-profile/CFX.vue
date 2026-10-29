<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-after-if-future-situations, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="If + 主詞 + 現在式, + 主詞 + will + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">if 子句</span>
          <span>條件，用現在式。</span>
        </div>
        <div>
          <span class="term">will</span>
          <span>會。說條件成立時的結果。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="if 子句不用 will" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="If it rains, we will stay at home." :marks="['will', 'If']" /><span
              class="translation"
              >如果下雨，我們會待在家裡。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">if 子句說未來的條件，可是用現在式，不用 will。</p>
    </NoteSlide>
    <NoteSlide title="順序可以交換" mark="If">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We will stay at home if it rains." :marks="['if']" /><span
              class="translation"
              >要是下雨，我們就待在家裡。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">if 子句可以放在後面。放在後面時，中間不加逗號。</p>
    </NoteSlide>
    <NoteSlide title="if 子句用現在式" mark="If">
      <NoteFix
        wrong="If it will rain, we will stay inside."
        right="If it rains, we will stay inside."
        :fix="['rains,']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞" mark="will">
      <NoteFix
        wrong="If you come, I will to cook dinner."
        right="If you come, I will cook dinner."
        :fix="['cook']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="will">
      <NoteFix
        wrong="If she calls, I will telling her."
        right="If she calls, I will tell her."
        :fix="['tell']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
