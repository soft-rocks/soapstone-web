<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-reported-statements-with-tell-pronoun-shift, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="told + 聽的人 + that + 子句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My sister', role: '主詞' },
          { t: 'told', role: '引述動詞' },
          { t: 'me', role: '聽的人', kind: 'key' },
          { t: 'that', role: 'that' },
          { t: 'this film is very good.', role: '子句', kind: 'key' },
        ]"
      />
      <p class="translation">我姊姊跟我說這部電影很好看。</p>
    </NoteSlide>

    <NoteSlide title="代名詞以轉述的人為準" mark="me">
      <div class="rows is-labeled">
        <div>
          <span class="term">I / you → he / me</span>
          <span
            ><NoteMark
              sentence="Leo told me that he can help me."
              :marks="['he', 'help me']"
            /><span class="translation">Leo 跟我說他可以幫我。</span></span
          >
        </div>
        <div>
          <span class="term">your / my → my / her</span>
          <span
            ><NoteMark
              sentence="Mum told me my bag is in her car."
              :marks="['my bag', 'her car']"
            /><span class="translation">媽媽跟我說我的包包在她車上。</span></span
          >
        </div>
        <div>
          <span class="term">we / your → they / our</span>
          <span
            ><NoteMark
              sentence="They told us they're our new neighbours."
              :marks="['they\'re our']"
            /><span class="translation">他們跟我們說他們是我們的新鄰居。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="還成立的事照原話，已經過去的事後移" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">還成立</span>
          <span
            ><NoteMark sentence="The man told us the shop opens at nine." :marks="['opens']" /><span
              class="translation"
              >那個男人跟我們說那家店九點開。</span
            ></span
          >
        </div>
        <div>
          <span class="term">已經過去</span>
          <span
            ><NoteMark
              sentence="Yesterday Amy told me she was at the station."
              :marks="['was']"
            /><span class="translation">Amy 昨天跟我說她在車站。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="told 後面要接聽的人" mark="me">
      <NoteFix
        wrong="My teacher told that the test is on Friday."
        right="My teacher told us that the test is on Friday."
        fix="told us"
      />
    </NoteSlide>

    <NoteSlide title="聽的人直接放在 told 後面" mark="told me">
      <NoteFix
        wrong="The mechanic told to me that the brakes need changing."
        right="The mechanic told me that the brakes need changing."
        fix="told me"
      />
    </NoteSlide>

    <NoteSlide title="原話的 I 是老師，換成 she">
      <NoteFix
        wrong="She told us that I'm our new teacher."
        right="She told us that she's our new teacher."
        fix="she's"
      />
    </NoteSlide>

    <NoteSlide title="聽的人用受格" mark="me">
      <NoteFix
        wrong="Paul told I that he likes my drawing."
        right="Paul told me that he likes my drawing."
        fix="me"
      />
    </NoteSlide>

    <NoteSlide title="that 子句轉述一件事，to + 原形動詞轉述命令" mark="that">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My sister told me', kind: 'dim' },
          { t: 'to watch', role: 'to + 原形動詞', kind: 'key' },
          { t: 'this film.', kind: 'dim' },
        ]"
      />
      <p class="translation">我姊姊叫我去看這部電影。</p>
    </NoteSlide>

    <NoteSlide title="said 後面直接接 that 子句" mark="told me">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My sister', kind: 'dim' },
          { t: 'said', role: '引述動詞', kind: 'key' },
          { t: 'that the ending is very sad.', role: 'that 子句' },
        ]"
      />
      <p class="translation">我姊姊說結局很悲傷。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
