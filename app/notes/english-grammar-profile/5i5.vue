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
    <NoteSlide title="Maybe / Perhaps + 子句">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Maybe', kind: 'key', ring: true },
          { t: 'we could visit that park you told me about.', role: '子句' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="maybe、perhaps、位置">
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
          <span>放在句首，或放在省略的子句前面。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="放在省略的子句前面" mark="Maybe">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I left my phone there, maybe in your kitchen."
              :marks="['maybe']"
            /><span class="translation">我把手機留在那裡了，也許在你的廚房。</span></span
          >
        </div>
      </div>
      <p class="remark">maybe 和 perhaps 可以放在一個片語前面，代替一整個子句。</p>
    </NoteSlide>
    <NoteSlide title="放在句首的副詞寫成一個字 maybe" mark="Maybe">
      <NoteFix
        wrong="May be we could go to the park."
        right="Maybe we could go to the park."
        :fix="['Maybe']"
      />
    </NoteSlide>
    <NoteSlide title="perhaps 結尾有 -s">
      <NoteFix
        wrong="Perhap it's in the kitchen."
        right="Perhaps it's in the kitchen."
        :fix="['Perhaps']"
      />
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
