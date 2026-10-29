<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-past-affirmative-539, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + must have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'must have', kind: 'key', ring: true },
          { t: 'fallen', role: '過去分詞' },
          { t: 'about fifty times.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="must have、過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">must have</span>
          <span>過去一定。說話者很確定。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去一定發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="過去的推論" mark="must have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I realised he must have forgotten."
              :marks="['I realised', 'must have']"
            /><span class="translation">我發現他一定是忘了。</span></span
          >
        </div>
      </div>
      <p class="remark">I realised 或 I thought 加 must have，說當時推論出的事。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
wrong="Her car isn't outside. She must have went to work."
        right="Her car isn't outside. She must have gone to work." :fix="['gone']" />
    </NoteSlide>
    <NoteSlide title="must 後面接原形 have" mark="must">
      <NoteFix
        wrong="The tickets were sold out by ten. People must had queued all night."
        right="The tickets were sold out by ten. People must have queued all night."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="推論過去用 must have 加過去分詞" mark="must have">
      <NoteFix
        wrong="He hasn't called me back. He must forgot my number."
        right="He hasn't called me back. He must have forgotten my number."
        :fix="['have forgotten']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
