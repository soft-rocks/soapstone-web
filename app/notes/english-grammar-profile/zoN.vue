<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-use-negative-tag-questions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="don't you think 加在看法後面，希望對方同意">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'It\'s a bit strange,', role: '看法', kind: 'dim' },
          { t: 'don\'t you think?', role: 'don\'t you think', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">有點怪，你不覺得嗎？</p>
    </NoteSlide>
    <NoteSlide title="don't you think 可以放在句尾或句首" mark="don't you think?">
      <div class="rows is-labeled">
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="This soup needs more salt, don't you think?"
              :marks="['don\'t you think?']"
            /><span class="translation">這湯要再加點鹽，你不覺得嗎？</span></span
          >
        </div>
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="Don't you think this soup needs more salt?"
              :marks="['Don\'t you think']"
            /><span class="translation">你不覺得這湯要再加點鹽嗎？</span></span
          >
        </div>
        <div>
          <span class="term">單獨</span>
          <span
            ><NoteMark sentence="Don't you think so?" :marks="['so?']" /><span class="translation"
              >你不覺得嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="don't you agree 比較正式" mark="don't you think?">
      <div class="rows is-labeled">
        <div>
          <span class="term">agree</span>
          <span
            ><NoteMark
              sentence="I think it's the best way, don't you agree?"
              :marks="['don\'t you agree?']"
            /><span class="translation">我覺得這是最好的方法，你不同意嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">常用在討論和寫作裡。</p>
    </NoteSlide>
    <NoteSlide title="徵求同意用否定的 don't" mark="don't">
      <NoteFix
        wrong="It's a great idea, do you think?"
        right="It's a great idea, don't you think?"
        :fix="['don\'t']"
      />
    </NoteSlide>
    <NoteSlide title="放在句首時，後面的子句用直述句的語序" mark="don't you think?">
      <NoteFix
        wrong="Don't you think is this film too long?"
        right="Don't you think this film is too long?"
        :fix="['this film is']"
      />
    </NoteSlide>
    <NoteSlide title="問句的主詞是 you，用 don't" mark="don't">
      <NoteFix
        wrong="The food is great here, doesn't you think?"
        right="The food is great here, don't you think?"
        :fix="['don\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
