<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-use-get-object-ing, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="get 加受詞，再接動詞 -ing">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'your dilemma', role: '主詞' },
          { t: 'got', role: 'get' },
          { t: 'me', role: '受詞', kind: 'key' },
          { t: 'thinking.', role: '動詞 -ing', kind: 'key' },
        ]"
      />
      <p class="translation">你的難題讓我想了很多。</p>
    </NoteSlide>

    <NoteSlide title="-ing 讓事情開始並持續，to 說服別人做" mark="got me thinking">
      <div class="rows is-labeled">
        <div>
          <span class="term">-ing</span>
          <span
            ><NoteMark sentence="The music got everyone dancing." :marks="['dancing']" /><span
              class="translation"
              >音樂讓大家都跳起舞來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">to</span>
          <span
            ><NoteMark sentence="I got my brother to help me." :marks="['to help']" /><span
              class="translation"
              >我說服我哥哥幫我。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見的說法" mark="thinking">
      <div class="rows is-labeled">
        <div>
          <span class="term">thinking</span>
          <span
            ><NoteMark sentence="Your question got me thinking." :marks="['thinking']" /><span
              class="translation"
              >你的問題讓我想了很多。</span
            ></span
          >
        </div>
        <div>
          <span class="term">talking</span>
          <span
            ><NoteMark
              sentence="Ask him about football. That always gets him talking."
              :marks="['talking']"
            /><span class="translation">問他足球的事。那一定會讓他講個不停。</span></span
          >
        </div>
        <div>
          <span class="term">going</span>
          <span
            ><NoteMark sentence="I couldn't get the car going." :marks="['going']" /><span
              class="translation"
              >我發動不了車子。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="get 後面的代名詞用受格" mark="me">
      <NoteFix wrong="The coffee got I moving." right="The coffee got me moving." fix="me" />
    </NoteSlide>

    <NoteSlide title="讓人開始做而且持續做，用 -ing" mark="thinking">
      <NoteFix
        wrong="The music got everyone dance."
        right="The music got everyone dancing."
        fix="dancing"
      />
    </NoteSlide>

    <NoteSlide title="受詞後面不加 to" mark="me thinking">
      <NoteFix
        wrong="The joke got the kids to laughing."
        right="The joke got the kids laughing."
        fix="kids laughing"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
