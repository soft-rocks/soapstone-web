<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-past-simple-affirmative-708, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞加 was 或 were，再接過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Some pupils', role: '主詞' },
          { t: 'were', role: 'was / were', kind: 'key' },
          { t: 'interviewed', role: '過去分詞', kind: 'key' },
          { t: 'about their work in the garden.', role: '補充', kind: 'dim' },
        ]"
      />
      <p class="translation">有幾個學生接受訪問，談他們在菜園裡做的事。</p>
    </NoteSlide>

    <NoteSlide title="單數和不可數用 was，複數用 were" mark="were">
      <div class="rows is-labeled">
        <div>
          <span class="term">was</span>
          <span
            ><NoteMark sentence="My neighbour's car was stolen." :marks="['was']" /><span
              class="translation"
              >我鄰居的車被偷了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">were</span>
          <span
            ><NoteMark sentence="Some pupils were interviewed." :marks="['were']" /><span
              class="translation"
              >有幾個學生接受訪問。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數主詞用 were" mark="were">
      <NoteFix
        wrong="Some pupils was interviewed."
        right="Some pupils were interviewed."
        fix="were"
      />
    </NoteSlide>

    <NoteSlide title="people 是複數，用 were" mark="were">
      <NoteFix
        wrong="Many people was hurt in the accident."
        right="Many people were hurt in the accident."
        fix="were"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞用 was" mark="were">
      <NoteFix wrong="All the furniture were sold." right="All the furniture was sold." fix="was" />
    </NoteSlide>

    <NoteSlide title="were 後面接過去分詞" mark="interviewed">
      <NoteFix wrong="We were gave a free lunch." right="We were given a free lunch." fix="given" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
