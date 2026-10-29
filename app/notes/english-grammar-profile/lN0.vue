<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-use-present-continuous-negative, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="is not being 加過去分詞，再加評論的字">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'the store', role: '主詞' },
          { t: 'is not being', role: 'is not being', kind: 'key' },
          { t: 'promoted', role: '過去分詞', kind: 'key' },
          { t: 'enough.', role: '評論的字', kind: 'dim' },
        ]"
      />
      <p class="translation">這家店的宣傳做得不夠。</p>
    </NoteSlide>

    <NoteSlide title="不夠、方法不對、沒被當真" mark="enough">
      <div class="rows is-labeled">
        <div>
          <span class="term">enough</span>
          <span
            ><NoteMark
              sentence="The store is not being promoted enough."
              :marks="['enough']"
            /><span class="translation">這家店的宣傳做得不夠。</span></span
          >
        </div>
        <div>
          <span class="term">in a sensible way</span>
          <span
            ><NoteMark
              sentence="Phones aren't being used in a sensible way."
              :marks="['in a sensible way']"
            /><span class="translation">手機沒有被合理地使用。</span></span
          >
        </div>
        <div>
          <span class="term">seriously</span>
          <span
            ><NoteMark
              sentence="The problem isn't being taken seriously."
              :marks="['seriously']"
            /><span class="translation">這個問題沒有被認真看待。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="enough 放在過去分詞後面" mark="promoted enough">
      <NoteFix
        wrong="The store is not being enough promoted."
        right="The store is not being promoted enough."
        fix="promoted enough"
      />
    </NoteSlide>

    <NoteSlide title="being 後面接過去分詞" mark="promoted">
      <NoteFix
        wrong="At the moment, the problem isn't being take seriously."
        right="At the moment, the problem isn't being taken seriously."
        fix="taken"
      />
    </NoteSlide>

    <NoteSlide title="not 放在 is 後面，being 前面" mark="not being">
      <NoteFix
        wrong="The museum is being not visited enough."
        right="The museum is not being visited enough."
        fix="not being"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
