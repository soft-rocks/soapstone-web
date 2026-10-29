<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-ideal-or-desired-situations, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + should + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I think everyone', role: '主詞' },
          { t: 'should', kind: 'key', ring: true },
          { t: 'learn', role: '原形動詞' },
          { t: 'to cook. You never know when you\'ll need to.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="主詞、should、原形動詞" mark="everyone">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span>常是一群人，像 everyone、people、children、British people。</span>
        </div>
        <div>
          <span class="term">should</span>
          <span>應該。說理想的情況。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>理想中大家應該做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說一群人">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Children should play outside every day." :marks="[]" /><span
              class="translation"
              >孩子應該每天在戶外玩。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說理想的情況，主詞常是一群人或整個社會。</p>
    </NoteSlide>
    <NoteSlide title="加上理由">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="People should walk more, because it's good for their health."
              :marks="[]"
            /><span class="translation">人們應該多走路，因為這對健康很好。</span></span
          >
        </div>
      </div>
      <p class="remark">這類意見常接著說理由。</p>
    </NoteSlide>
    <NoteSlide title="should 後面接原形動詞" mark="should">
      <NoteFix
        wrong="Everyone should learns to swim."
        right="Everyone should learn to swim."
        :fix="['learn']"
      />
    </NoteSlide>
    <NoteSlide title="should 後面直接接原形動詞" mark="should">
      <NoteFix
        wrong="People should to eat more fruit."
        right="People should eat more fruit."
        :fix="['eat']"
      />
    </NoteSlide>
    <NoteSlide title="should 後面的動詞不變化，一律用原形" mark="should">
      <NoteFix
        wrong="Schools should teaching music."
        right="Schools should teach music."
        :fix="['teach']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
