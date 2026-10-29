<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-with-verbs-taking-two-objects, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="雙受詞動詞後面接兩個受詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The judges', role: '主詞', kind: 'dim' },
          { t: 'gave', role: '動詞' },
          { t: 'us', role: '第一個受詞', kind: 'key' },
          { t: 'another chance.', role: '第二個受詞' },
        ]"
      />
      <p class="translation">評審又給了我們一次機會。</p>
    </NoteSlide>

    <NoteSlide title="第一個受詞當主詞，第二個受詞留在過去分詞後面" mark="we were given">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We', role: '第一個受詞當主詞', kind: 'key' },
          { t: 'were', role: 'was / were' },
          { t: 'given', role: '過去分詞' },
          { t: 'another chance.', role: '第二個受詞' },
        ]"
      />
      <p class="translation">我們又得到了一次機會。</p>
    </NoteSlide>

    <NoteSlide title="常用的動詞：give、send、offer、show、tell" mark="given">
      <div class="rows is-labeled">
        <div>
          <span class="term">give</span>
          <span
            ><NoteMark sentence="I was given a ticket." :marks="['given']" /><span
              class="translation"
              >我拿到一張票。</span
            ></span
          >
        </div>
        <div>
          <span class="term">send</span>
          <span
            ><NoteMark sentence="We were sent a letter." :marks="['sent']" /><span
              class="translation"
              >我們收到一封信。</span
            ></span
          >
        </div>
        <div>
          <span class="term">offer</span>
          <span
            ><NoteMark sentence="She was offered a job." :marks="['offered']" /><span
              class="translation"
              >有人給了她一份工作。</span
            ></span
          >
        </div>
        <div>
          <span class="term">show</span>
          <span
            ><NoteMark sentence="They were shown the new rooms." :marks="['shown']" /><span
              class="translation"
              >有人帶他們看新房間。</span
            ></span
          >
        </div>
        <div>
          <span class="term">tell</span>
          <span
            ><NoteMark sentence="I was told the news." :marks="['told']" /><span class="translation"
              >有人告訴我這個消息。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞用主格" mark="we#2">
      <NoteFix
        wrong="Us were given another chance."
        right="We were given another chance."
        fix="We"
      />
    </NoteSlide>

    <NoteSlide title="第二個受詞前面不加 to" mark="another chance">
      <NoteFix
        wrong="I was given to a ticket."
        right="I was given a ticket."
        fix="given a ticket"
      />
    </NoteSlide>

    <NoteSlide title="was 後面接過去分詞" mark="given">
      <NoteFix wrong="She was gave a present." right="She was given a present." fix="given" />
    </NoteSlide>

    <NoteSlide title="複數主詞用 were" mark="were#2">
      <NoteFix
        wrong="The students was given a prize."
        right="The students were given a prize."
        fix="were"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
