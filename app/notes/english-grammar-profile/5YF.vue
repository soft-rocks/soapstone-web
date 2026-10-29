<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-present-perfect-continuous-comment, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="has been being 加過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The bridge', role: '主詞' },
          { t: 'has been being', role: 'have / has been being', kind: 'key' },
          { t: 'repaired', role: '過去分詞', kind: 'key' },
          { t: 'for three months.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">這座橋已經修了三個月了。</p>
    </NoteSlide>

    <NoteSlide title="很少用，常改用別的說法" mark="has been being repaired">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成式被動</span>
          <span
            ><NoteMark
              sentence="The bridge has been closed for three months."
              :marks="['has been closed']"
            /><span class="translation">這座橋已經封了三個月。</span></span
          >
        </div>
        <div>
          <span class="term">主動句</span>
          <span
            ><NoteMark
              sentence="They've been repairing the bridge for three months."
              :marks="['They\'ve been repairing']"
            /><span class="translation">他們已經修這座橋修了三個月。</span></span
          >
        </div>
        <div>
          <span class="term">under</span>
          <span
            ><NoteMark
              sentence="The bridge has been under repair for three months."
              :marks="['under repair']"
            /><span class="translation">這座橋已經修了三個月。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動要有 being" mark="being">
      <NoteFix
        wrong="The bridge has been repairing for three months."
        right="The bridge has been being repaired for three months."
        fix="being repaired"
      />
    </NoteSlide>

    <NoteSlide title="從過去到現在要用完成式" mark="has been being">
      <NoteFix
        wrong="The museum is being renovated since last spring."
        right="The museum has been being renovated since last spring."
        fix="has been being"
      />
    </NoteSlide>

    <NoteSlide title="順序是 has been being" mark="has been being">
      <NoteFix
        wrong="The road has being been widened since January."
        right="The road has been being widened since January."
        fix="been being"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
