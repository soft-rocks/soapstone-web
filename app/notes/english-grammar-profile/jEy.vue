<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-modifying-adjectives-emphasis, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + is + 副詞 + 形容詞 + that + 子句">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', kind: 'key', ring: true },
          { t: 'is', kind: 'key', ring: true },
          { t: 'highly', role: '副詞' },
          { t: 'unlikely', role: '形容詞' },
          { t: 'that', kind: 'key', ring: true },
          {
            t: 'the goods could vanish from your warehouse without anyone noticing.',
            role: '子句',
          },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="副詞、形容詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">副詞</span>
          <span>放在形容詞前面，加強語氣。</span>
        </div>
        <div>
          <span class="term">形容詞</span>
          <span>說話者的判斷。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="absolutely 和極端的形容詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It is absolutely essential that you arrive on time."
              :marks="['absolutely', 'essential']"
            /><span class="translation">你絕對要準時到。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="副詞放在形容詞前面">
      <NoteFix
        wrong="It is unlikely highly that he will come."
        right="It is highly unlikely that he will come."
        :fix="['highly', 'that']"
      />
    </NoteSlide>
    <NoteSlide title="修飾形容詞要用副詞 painfully">
      <NoteFix
        wrong="It is painful obvious that the plan failed."
        right="It is painfully obvious that the plan failed."
        :fix="['painfully']"
      />
    </NoteSlide>
    <NoteSlide title="加強形容詞用 highly" mark="highly">
      <NoteFix
        wrong="It is high unlikely that we will win."
        right="It is highly unlikely that we will win."
        :fix="['highly']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
