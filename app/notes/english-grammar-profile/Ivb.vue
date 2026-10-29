<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-use-no-article, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="泛指時不加冠詞" mark="rice and sweet dishes.">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I like', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'rice', role: '不可數名詞', kind: 'key' },
          { t: 'and', role: '連接詞', kind: 'dim' },
          { t: 'sweet dishes.', role: '複數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我喜歡米飯和甜食。</p>
    </NoteSlide>

    <NoteSlide title="泛指和特指">
      <div class="rows is-labeled">
        <div>
          <span class="term">泛指</span>
          <span
            ><NoteMark sentence="I love cats." :marks="['cats.']" /><span class="translation"
              >我喜歡貓。</span
            ></span
          >
        </div>
        <div>
          <span class="term">特指</span>
          <span
            ><NoteMark
              sentence="The cats next door are very noisy."
              :marks="['The cats']"
            /><span class="translation">隔壁那幾隻貓很吵。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見不加冠詞的名詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">運動和遊戲</span>
          <span>play football、play tennis、play chess</span>
        </div>
        <div>
          <span class="term">三餐</span>
          <span>have breakfast、have lunch、have dinner</span>
        </div>
        <div>
          <span class="term">語言和學科</span>
          <span>speak English、study maths、like history</span>
        </div>
        <div>
          <span class="term">活動</span>
          <span>watch TV、read books、listen to music</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="泛指不加 the">
      <NoteFix wrong="I like the music very much." right="I like music very much." fix="music" />
    </NoteSlide>

    <NoteSlide title="運動前面不加 the">
      <NoteFix
        wrong="I play the football on Saturdays."
        right="I play football on Saturdays."
        fix="football"
      />
    </NoteSlide>

    <NoteSlide title="泛指可數名詞用複數">
      <NoteFix wrong="I like dog." right="I like dogs." fix="dogs." />
    </NoteSlide>

    <NoteSlide title="三餐前面不加 the">
      <NoteFix wrong="We have the lunch at twelve." right="We have lunch at twelve." fix="lunch" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
