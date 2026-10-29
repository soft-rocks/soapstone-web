<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-use-get-object-ed, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="get 加受詞，再接過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'it took hours', role: '主要子句', kind: 'dim' },
          { t: 'to get', role: 'get' },
          { t: 'it', role: '受詞', kind: 'key' },
          { t: 'repaired.', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">花了好幾個小時才修好。</p>
    </NoteSlide>

    <NoteSlide title="get 和 have" mark="get it repaired">
      <div class="rows is-labeled">
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark
              sentence="It took hours to get it repaired."
              :marks="['get it repaired']"
            /><span class="translation">花了好幾個小時才修好。</span></span
          >
        </div>
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark sentence="I had my car repaired." :marks="['had my car repaired']" /><span
              class="translation"
              >我請人修了車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="get things done：把事情做完" mark="get it repaired">
      <div class="rows is-labeled">
        <div>
          <span class="term">get things done</span>
          <span
            ><NoteMark
              sentence="She's always the one who gets things done."
              :marks="['gets things done']"
            /><span class="translation">她總是那個把事情做完的人。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞放在 get 和過去分詞中間" mark="it repaired">
      <NoteFix
        wrong="It took hours to get repaired it."
        right="It took hours to get it repaired."
        fix="it repaired"
      />
    </NoteSlide>

    <NoteSlide title="受詞後面接過去分詞" mark="repaired">
      <NoteFix
        wrong="I need to get my hair cutting."
        right="I need to get my hair cut."
        fix="cut"
      />
    </NoteSlide>

    <NoteSlide title="過去分詞前面不加 to" mark="it repaired">
      <NoteFix
        wrong="I got the car to repaired."
        right="I got the car repaired."
        fix="car repaired"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
