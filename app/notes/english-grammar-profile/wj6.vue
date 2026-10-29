<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-many-with-plural-nouns-negative, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定句的 many 加複數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'There', role: 'There' },
          { t: 'aren\'t', role: '否定的動詞', kind: 'key' },
          { t: 'many', role: 'many', kind: 'key' },
          { t: 'tickets.', role: '複數名詞' },
        ]"
      />
      <p class="translation">票沒有很多。</p>
    </NoteSlide>

    <NoteSlide title="There aren't many、否定的動詞加 many 和 Not many" mark="aren't many">
      <div class="rows is-labeled">
        <div>
          <span class="term">There aren't many</span>
          <span
            ><NoteMark sentence="There aren't many tickets." :marks="['aren\'t many']" /><span
              class="translation"
              >票沒有很多。</span
            ></span
          >
        </div>
        <div>
          <span class="term">否定的動詞 + many</span>
          <span
            ><NoteMark
              sentence="I haven't got many winter clothes."
              :marks="['haven\'t got many']"
            /><span class="translation">我的冬天衣服不多。</span></span
          >
        </div>
        <div>
          <span class="term">Not many</span>
          <span
            ><NoteMark
              sentence="Not many students came to the meeting."
              :marks="['Not many']"
            /><span class="translation">來開會的學生不多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不可數名詞用 much" mark="many">
      <NoteFix wrong="We haven't got many time." right="We haven't got much time." fix="much" />
    </NoteSlide>

    <NoteSlide title="many 後面接複數名詞" mark="tickets">
      <NoteFix
        wrong="There aren't many ticket left."
        right="There aren't many tickets left."
        fix="tickets"
      />
    </NoteSlide>

    <NoteSlide title="複數用 aren't" mark="aren't">
      <NoteFix
        wrong="There isn't many people here."
        right="There aren't many people here."
        fix="aren't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
