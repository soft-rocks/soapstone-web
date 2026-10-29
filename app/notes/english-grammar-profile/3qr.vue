<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-use-no-article-293, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="泛指時不加冠詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Friends', role: '複數名詞', kind: 'key' },
          { t: 'are very important', role: '動詞 + 補語', kind: 'dim' },
          { t: 'in', role: '介系詞', kind: 'dim' },
          { t: 'life.', role: '抽象名詞', kind: 'key' },
        ]"
      />
      <p class="translation">朋友在人生中非常重要。</p>
    </NoteSlide>

    <NoteSlide title="泛指的複數名詞、抽象名詞和動名詞" mark="Friends">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞</span>
          <span>friends、children、computers</span>
        </div>
        <div>
          <span class="term">抽象名詞</span>
          <span>life、education、love、health</span>
        </div>
        <div>
          <span class="term">動名詞</span>
          <span>shopping、travelling、smoking</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="泛指和特指" mark="life.">
      <div class="rows is-labeled">
        <div>
          <span class="term">泛指</span>
          <span
            ><NoteMark sentence="Life is short." :marks="['Life']" /><span class="translation"
              >人生苦短。</span
            ></span
          >
        </div>
        <div>
          <span class="term">特指</span>
          <span
            ><NoteMark
              sentence="The life of a soldier is hard."
              :marks="['The life of a soldier']"
            /><span class="translation">軍人的生活很辛苦。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見泛指的抽象名詞" mark="life.">
      <div class="rows is-labeled">
        <div>
          <span class="term">人生和感情</span>
          <span>life、love、happiness、friendship</span>
        </div>
        <div>
          <span class="term">社會</span>
          <span>education、health、crime、technology、nature</span>
        </div>
        <div>
          <span class="term">時間</span>
          <span>time、history、the future</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="抽象名詞泛指不加 the" mark="life.">
      <NoteFix
        wrong="The education is very important for children."
        right="Education is very important for children."
        fix="Education"
      />
    </NoteSlide>

    <NoteSlide title="泛指一類人不加 the" mark="Friends">
      <NoteFix
        wrong="The friends are important, but family is more important."
        right="Friends are important, but family is more important."
        fix="Friends"
      />
    </NoteSlide>

    <NoteSlide title="特指要加 the">
      <NoteFix
        wrong="History of this town is very interesting."
        right="The history of this town is very interesting."
        fix="The history"
      />
    </NoteSlide>

    <NoteSlide title="以後說 in the future">
      <NoteFix
        wrong="In future, cars will drive themselves."
        right="In the future, cars will drive themselves."
        fix="In the future,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
