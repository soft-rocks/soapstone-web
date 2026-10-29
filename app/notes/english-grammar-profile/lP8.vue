<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-no-article, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="說一般的音樂，不加 the">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Music', role: '抽象不可數名詞', kind: 'key' },
          { t: 'was', role: '單數動詞' },
          { t: 'her life, not only a hobby.', kind: 'dim' },
        ]"
      />
      <p class="translation">音樂是她的生命，不只是嗜好。</p>
    </NoteSlide>

    <NoteSlide title="特定的事物才加 the" mark="Music">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般</span>
          <span
            ><NoteMark sentence="Education is important." :marks="['Education']" /><span
              class="translation"
              >教育很重要。</span
            ></span
          >
        </div>
        <div>
          <span class="term">特定</span>
          <span
            ><NoteMark
              sentence="The education in this country is free."
              :marks="['The education']"
            /><span class="translation">這個國家的教育是免費的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="抽象不可數名詞說藝術、社會、感覺和價值" mark="Music">
      <div class="rows is-labeled">
        <div>
          <span class="term">藝術和媒體</span>
          <span>music, art, television, literature</span>
        </div>
        <div>
          <span class="term">社會</span>
          <span>education, health, crime, pollution</span>
        </div>
        <div>
          <span class="term">感覺和價值</span>
          <span>love, happiness, freedom, success</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說一般的快樂，不加 the" mark="Music">
      <NoteFix
        wrong="The happiness is more important than money."
        right="Happiness is more important than money."
        fix="Happiness"
      />
    </NoteSlide>

    <NoteSlide title="art 是不可數名詞，不加 a">
      <NoteFix wrong="She has a talent for an art." right="She has a talent for art." fix="art" />
    </NoteSlide>

    <NoteSlide title="in this river 說明是哪裡的汙染，前面加 the">
      <NoteFix
        wrong="Pollution in this river is terrible."
        right="The pollution in this river is terrible."
        fix="The"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
