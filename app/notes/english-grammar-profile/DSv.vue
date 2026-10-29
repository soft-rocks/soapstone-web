<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-preposition-no-article-292, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞 + 名詞，不加冠詞" mark="on television">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'This program will be shown', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'on', role: '介系詞', kind: 'key' },
          { t: 'television', role: '名詞' },
          { t: 'next Friday.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">這個節目下週五會在電視上播出。</p>
    </NoteSlide>

    <NoteSlide title="常見的固定說法" mark="on television">
      <div class="rows is-labeled">
        <div>
          <span class="term">on</span>
          <span>on television、on holiday、on time、on purpose</span>
        </div>
        <div>
          <span class="term">at</span>
          <span>at night、at sea、at lunch、at first</span>
        </div>
        <div>
          <span class="term">in</span>
          <span>in hospital、in prison、in time、in person</span>
        </div>
        <div>
          <span class="term">by</span>
          <span>by email、by phone、by hand、by mistake</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="on time 和 in time">
      <div class="rows is-labeled">
        <div>
          <span class="term">on time</span>
          <span
            ><NoteMark sentence="The train arrived on time." :marks="['on time.']" /><span
              class="translation"
              >火車準時到站。</span
            ></span
          >
        </div>
        <div>
          <span class="term">in time</span>
          <span
            ><NoteMark
              sentence="We got to the station in time to catch the train."
              :marks="['in time']"
            /><span class="translation">我們及時趕到車站，搭上了火車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="on television 不加 the" mark="on television">
      <NoteFix
        wrong="I saw the news on the television."
        right="I saw the news on television."
        fix="on television."
      />
    </NoteSlide>

    <NoteSlide title="度假說 on holiday">
      <NoteFix
        wrong="They are in holiday in Spain."
        right="They are on holiday in Spain."
        fix="on holiday"
      />
    </NoteSlide>

    <NoteSlide title="by + 聯絡方式不加冠詞">
      <NoteFix
        wrong="I'll send it to you by an email."
        right="I'll send it to you by email."
        fix="by email."
      />
    </NoteSlide>

    <NoteSlide title="radio 前面加 the">
      <NoteFix
        wrong="I heard the song on radio."
        right="I heard the song on the radio."
        fix="on the radio."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
