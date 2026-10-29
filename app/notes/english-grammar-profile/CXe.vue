<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-past-perfect-simple-affirmative, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="had been 加過去分詞">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'The car', role: '主詞' },
          { t: 'had been', role: 'had been', kind: 'key' },
          { t: 'serviced', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">車子已經保養過了。</p>
    </NoteSlide>

    <NoteSlide title="先做完的事用 had been，後來的事用過去簡單式" mark="had been serviced">
      <div class="rows is-labeled">
        <div>
          <span class="term">後來</span>
          <span
            ><NoteMark sentence="We arrived at the restaurant." :marks="['arrived']" /><span
              class="translation"
              >我們到了餐廳。</span
            ></span
          >
        </div>
        <div>
          <span class="term">先做完</span>
          <span
            ><NoteMark
              sentence="Our table had already been given to someone else."
              :marks="['had already been given']"
            /><span class="translation">我們的位子已經給別人了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="had 後面接 been" mark="been">
      <NoteFix
        wrong="The room had be cleaned before we arrived."
        right="The room had been cleaned before we arrived."
        fix="been"
      />
    </NoteSlide>

    <NoteSlide title="被動要有 been" mark="been">
      <NoteFix
        wrong="The concert had cancelled, so we went home."
        right="The concert had been cancelled, so we went home."
        fix="been"
      />
    </NoteSlide>

    <NoteSlide title="過去的故事裡用 had been" mark="had been">
      <NoteFix
        wrong="When we got to the shop, all the bread has been sold."
        right="When we got to the shop, all the bread had been sold."
        fix="had been"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
