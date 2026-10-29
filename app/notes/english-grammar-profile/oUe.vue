<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-discourse-markers, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="as for myself 帶出自己的看法">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'As for myself,', role: '言談標記', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'like', role: '動詞' },
          { t: 'taking responsibility.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">至於我自己，我喜歡承擔責任。</p>
    </NoteSlide>

    <NoteSlide title="as for me 和 as for myself" mark="As for myself">
      <div class="rows is-labeled">
        <div>
          <span class="term">as for me</span>
          <span
            ><NoteMark sentence="As for me, I prefer tea." :marks="['As for me']" /><span
              class="translation"
              >至於我，我比較喜歡喝茶。</span
            ></span
          >
        </div>
        <div>
          <span class="term">as for myself</span>
          <span
            ><NoteMark sentence="As for myself, I prefer tea." :marks="['As for myself']" /><span
              class="translation"
              >至於我自己，我比較喜歡喝茶。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="和前面的人對比" mark="As for myself">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面</span>
          <span
            ><NoteMark
              sentence="Most of my friends want to live in the city."
              :marks="['Most of my friends']"
            /><span class="translation">我大部分的朋友想住在城市。</span></span
          >
        </div>
        <div>
          <span class="term">後面</span>
          <span
            ><NoteMark
              sentence="As for myself, I'd rather live in the country."
              :marks="['As for myself']"
            /><span class="translation">至於我自己，我寧願住在鄉下。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as for 後面不接 I" mark="myself">
      <NoteFix
        wrong="As for I, I like taking responsibility."
        right="As for myself, I like taking responsibility."
        fix="myself"
      />
    </NoteSlide>

    <NoteSlide title="for 不能省略" mark="As for">
      <NoteFix
        wrong="As myself, I enjoy working in a team."
        right="As for myself, I enjoy working in a team."
        fix="As for"
      />
    </NoteSlide>

    <NoteSlide title="逗號後面的主詞用 I" mark="I">
      <NoteFix
        wrong="As for myself, myself prefer to work alone."
        right="As for myself, I prefer to work alone."
        fix="I prefer"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
