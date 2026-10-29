<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-with-adverbs-637, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + would + 副詞 + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'would', kind: 'key', ring: true },
          { t: 'strongly', role: '副詞' },
          { t: 'recommend', role: '原形動詞' },
          { t: 'the following changes.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="would strongly、would easily、would especially" mark="recommend">
      <div class="rows is-labeled">
        <div>
          <span class="term">would strongly</span>
          <span>強烈地。常接 recommend、advise、suggest。</span>
        </div>
        <div>
          <span class="term">would easily</span>
          <span>很容易就會。</span>
        </div>
        <div>
          <span class="term">would especially</span>
          <span>特別會。</span>
        </div>
        <div>
          <span class="term">would actually</span>
          <span>其實會。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用在報告和推薦信">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="She would easily fit into a family with small children."
              :marks="[]"
            /><span class="translation">她很容易就能融入有小孩的家庭。</span></span
          >
        </div>
      </div>
      <p class="remark">報告和推薦信常用這些副詞讓意見更有力。</p>
    </NoteSlide>
    <NoteSlide title="縮寫的時候" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'd gladly help you." :marks="[]" /><span class="translation"
              >我很樂意幫你。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">would 縮寫成 'd 的時候，副詞放在 'd 後面。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 would 和原形動詞中間，不放在動詞和受詞中間" mark="would">
      <NoteFix
        wrong="I would recommend strongly these changes."
        right="I would strongly recommend these changes."
        :fix="['strongly', 'these']"
      />
    </NoteSlide>
    <NoteSlide title="放在動詞前面要用副詞 easily">
      <NoteFix wrong="She would easy fit in." right="She would easily fit in." :fix="['easily']" />
    </NoteSlide>
    <NoteSlide title="副詞後面直接接原形動詞">
      <NoteFix wrong="I would gladly to help." right="I would gladly help." :fix="['help.']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
