<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-present-continuous-affirmative, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="is 加 being，再接過去分詞，說正在被做的事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'the next Harry Potter movie', role: '主詞' },
          { t: 'is', role: 'is' },
          { t: 'being', role: 'being', kind: 'key' },
          { t: 'filmed', role: '過去分詞', kind: 'key' },
          { t: 'in my school', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">下一部《哈利波特》電影正在我們學校拍</p>
    </NoteSlide>

    <NoteSlide title="正在做用 is being，常常發生用 is" mark="is being filmed">
      <div class="rows is-labeled">
        <div>
          <span class="term">正在做</span>
          <span
            ><NoteMark sentence="The road is being repaired." :marks="['is being repaired']" /><span
              class="translation"
              >路正在修。</span
            ></span
          >
        </div>
        <div>
          <span class="term">常常發生</span>
          <span
            ><NoteMark
              sentence="The road is repaired every summer."
              :marks="['is repaired']"
            /><span class="translation">這條路每年夏天都會修。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正在做的事要有 being" mark="being">
      <NoteFix
        wrong="The film is filmed in my school right now."
        right="The film is being filmed in my school right now."
        fix="being"
      />
    </NoteSlide>

    <NoteSlide title="being 前面要有 am、is 或 are" mark="is">
      <NoteFix wrong="The road being repaired." right="The road is being repaired." fix="is" />
    </NoteSlide>

    <NoteSlide title="being 後面接過去分詞" mark="filmed">
      <NoteFix
        wrong="The house is being painting."
        right="The house is being painted."
        fix="painted"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
