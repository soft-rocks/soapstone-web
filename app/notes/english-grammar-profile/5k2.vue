<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-this-in-narratives, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="說故事用 this 介紹新的人">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'there\'s', role: 'there\'s' },
          { t: 'this', role: 'this', kind: 'key' },
          { t: 'old man', role: '名詞', kind: 'key' },
          { t: 'who makes a marionette', role: '關係子句', kind: 'dim' },
        ]"
      />
      <p class="translation">有一個老人，他做了一個木偶</p>
    </NoteSlide>

    <NoteSlide title="a 和 this" mark="this old man">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般的說法</span>
          <span
            ><NoteMark sentence="There's an old man who makes a puppet." :marks="['an']" /><span
              class="translation"
              >有一個老人做了一個木偶。</span
            ></span
          >
        </div>
        <div>
          <span class="term">說故事</span>
          <span
            ><NoteMark sentence="There's this old man who makes a puppet." :marks="['this']" /><span
              class="translation"
              >有這麼一個老人，他做了一個木偶。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="用在哪裡" mark="this">
      <div class="rows is-labeled">
        <div>
          <span class="term">講笑話</span>
          <span
            ><NoteMark sentence="So this man walks into a bar." :marks="['this man']" /><span
              class="translation"
              >有一個男人走進一家酒吧。</span
            ></span
          >
        </div>
        <div>
          <span class="term">說情節</span>
          <span
            ><NoteMark
              sentence="There's this girl who can talk to animals."
              :marks="['this girl']"
            /><span class="translation">有一個女孩會跟動物說話。</span></span
          >
        </div>
        <div>
          <span class="term">說自己的事</span>
          <span
            ><NoteMark sentence="I met this guy on the train." :marks="['this guy']" /><span
              class="translation"
              >我在火車上認識一個人。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞用 these" mark="this">
      <NoteFix
        wrong="There were this two boys who lived in a forest."
        right="There were these two boys who lived in a forest."
        fix="these"
      />
    </NoteSlide>

    <NoteSlide title="this 後面要接名詞" mark="old man">
      <NoteFix wrong="There's this who can fly." right="There's this boy who can fly." fix="boy" />
    </NoteSlide>

    <NoteSlide title="this 和 a 只能選一個" mark="this">
      <NoteFix
        wrong="There's this a girl in my class."
        right="There's this girl in my class."
        fix="this girl"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
