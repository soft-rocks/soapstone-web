<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-use-listing, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="A, B and C" mark="chicken, mushrooms and">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I like to eat', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'chicken,', role: '項目 + 逗號' },
          { t: 'mushrooms', role: '項目' },
          { t: 'and', role: '連接詞', kind: 'key' },
          { t: 'some vegetables.', role: '項目' },
        ]"
      />
      <p class="translation">我喜歡吃雞肉、蘑菇和一些蔬菜。</p>
    </NoteSlide>

    <NoteSlide title="and 全部都包括，or 選一個" mark="and">
      <div class="rows is-labeled">
        <div>
          <span class="term">and</span>
          <span
            ><NoteMark sentence="We need eggs, flour and sugar." :marks="['and']" /><span
              class="translation"
              >我們需要蛋、麵粉和糖。</span
            ></span
          >
        </div>
        <div>
          <span class="term">or</span>
          <span
            ><NoteMark
              sentence="We can meet on Monday, Wednesday or Friday."
              :marks="['or']"
            /><span class="translation">我們可以星期一、星期三或星期五見面。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="最後一項前的逗號可加可不加" mark="mushrooms and">
      <div class="rows is-labeled">
        <div>
          <span class="term">英式</span>
          <span
            ><NoteMark sentence="Tuesday, Thursday and Friday" :marks="['Thursday and']"
          /></span>
        </div>
        <div>
          <span class="term">美式</span>
          <span
            ><NoteMark sentence="Tuesday, Thursday, and Friday" :marks="['Thursday, and']"
          /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="用冒號帶出列舉">
      <NoteMark
        sentence="I speak four languages: English, French, German and Spanish."
        :marks="['languages:']"
      />
      <p class="translation">我會說四種語言：英語、法語、德語和西班牙語。</p>
    </NoteSlide>

    <NoteSlide title="最後一項前面加 and" mark="and">
      <NoteFix
        wrong="We need bread, milk, cheese."
        right="We need bread, milk and cheese."
        fix="and"
      />
    </NoteSlide>

    <NoteSlide title="項目的結構相同">
      <NoteFix
        wrong="I like swimming, reading and to cook."
        right="I like swimming, reading and cooking."
        fix="cooking."
      />
    </NoteSlide>

    <NoteSlide title="帶出列舉用冒號">
      <NoteFix
        wrong="My bag has three pockets; a big one, a small one and a secret one."
        right="My bag has three pockets: a big one, a small one and a secret one."
        fix="pockets:"
      />
    </NoteSlide>

    <NoteSlide title="否定句列舉用 or">
      <NoteFix
        wrong="My grandpa doesn't drink tea, coffee and cola."
        right="My grandpa doesn't drink tea, coffee or cola."
        fix="or"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
