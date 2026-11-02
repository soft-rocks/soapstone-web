<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-clause-position, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Maybe 放在句首，說可能的計畫" mark="Maybe">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Maybe', kind: 'key', ring: true },
          { t: 'we could visit that park you told me about.', role: '子句' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="maybe 比較口語，perhaps 比較正式" mark="Maybe">
      <div class="rows is-labeled">
        <div>
          <span class="term">maybe</span>
          <span>也許。比較口語。</span>
        </div>
        <div>
          <span class="term">perhaps</span>
          <span>也許。比較正式。</span>
        </div>
        <div>
          <span class="term">位置</span>
          <span>放在子句前面，放在省略的子句前面，或放在 and 後面。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="maybe 放在片語前面，代替整個子句" mark="Maybe">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We'll get there soon, maybe by noon."
              :marks="['maybe by noon.']"
            /><span class="translation">我們很快就會到，也許中午前。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="放在句首的副詞寫成一個字 maybe" mark="Maybe">
      <NoteFix
        wrong="May be we could take the boat to the island."
        right="Maybe we could take the boat to the island."
        :fix="['Maybe']"
      />
    </NoteSlide>
    <NoteSlide title="perhaps 後面的主詞放在動詞前面" mark="Maybe">
      <NoteFix wrong="Perhaps is Tom ill." right="Perhaps Tom is ill." :fix="['Tom', 'is']" />
    </NoteSlide>
    <NoteSlide title="maybe 後面的子句要有主詞" mark="Maybe">
      <NoteFix
        wrong="Maybe could visit the museum."
        right="Maybe we could visit the museum."
        :fix="['we']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
