<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-emotional-distance, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that 表示不贊同">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I would not have put up with', role: '主詞和動詞', kind: 'dim' },
          { t: 'that', role: 'that', kind: 'key' },
          { t: 'sort of', role: 'sort of' },
          { t: 'behavior.', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我才不會忍受那種行為。</p>
    </NoteSlide>

    <NoteSlide title="that 和 those 把事情推遠" mark="that sort of">
      <div class="rows is-labeled">
        <div>
          <span class="term">距離</span>
          <span
            ><NoteMark sentence="Look at that house on the hill." :marks="['that']" /><span
              class="translation"
              >看山上那棟房子。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不贊同</span>
          <span
            ><NoteMark
              sentence="I won't accept that kind of language in my classroom."
              :marks="['that kind of']"
            /><span class="translation">我的教室裡不准有那種用語。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="those 接複數名詞" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">those</span>
          <span
            ><NoteMark
              sentence="I'm sick of those people who park in front of my garage."
              :marks="['those people']"
            /><span class="translation">那些把車停在我車庫前面的人讓我很受不了。</span></span
          >
        </div>
        <div>
          <span class="term">those so-called</span>
          <span
            ><NoteMark
              sentence="Those so-called experts on TV know nothing about real life."
              :marks="['Those so-called']"
            /><span class="translation">電視上那些所謂的專家對真實生活一無所知。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞用 those" mark="that">
      <NoteFix
        wrong="I'm tired of that people and their complaints."
        right="I'm tired of those people and their complaints."
        fix="those"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面用 those，不用 them" mark="that">
      <NoteFix
        wrong="I'm fed up with them neighbors and their noise."
        right="I'm fed up with those neighbors and their noise."
        fix="those"
      />
    </NoteSlide>

    <NoteSlide title="sort of 接單數名詞" mark="sort of">
      <NoteFix
        wrong="I don't like that sort of films."
        right="I don't like that sort of film."
        fix="film"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
