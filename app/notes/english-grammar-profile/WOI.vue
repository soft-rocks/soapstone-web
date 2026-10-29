<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-object-with-preposition, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞後面用受格">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I spend my free time', role: '主詞、動詞、受詞', kind: 'dim' },
          { t: 'with', role: '介系詞' },
          { t: 'them.', role: '受格代名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我的空閒時間都跟他們一起過。</p>
    </NoteSlide>

    <NoteSlide title="常見的介系詞" mark="with them">
      <div class="rows is-labeled">
        <div>
          <span class="term">with</span>
          <span
            ><NoteMark sentence="I spend my free time with them." :marks="['with them']" /><span
              class="translation"
              >我的空閒時間都跟他們一起過。</span
            ></span
          >
        </div>
        <div>
          <span class="term">for</span>
          <span
            ><NoteMark sentence="It's very important for me." :marks="['for me']" /><span
              class="translation"
              >這對我很重要。</span
            ></span
          >
        </div>
        <div>
          <span class="term">to</span>
          <span
            ><NoteMark sentence="Can we listen to it?" :marks="['to it']" /><span
              class="translation"
              >我們可以聽嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">about</span>
          <span
            ><NoteMark sentence="Tell me about her." :marks="['about her']" /><span
              class="translation"
              >跟我說說她的事。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="with 後面用 them，不用 they" mark="them">
      <NoteFix
        wrong="I spend my free time with they."
        right="I spend my free time with them."
        fix="them"
      />
    </NoteSlide>

    <NoteSlide title="介系詞後面不用所有格" mark="them">
      <NoteFix wrong="This present is for your." right="This present is for you." fix="you" />
    </NoteSlide>

    <NoteSlide title="listen 後面要加 to" mark="with">
      <NoteFix wrong="Can we listen it?" right="Can we listen to it?" fix="to it" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
