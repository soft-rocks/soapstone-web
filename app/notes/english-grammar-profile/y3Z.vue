<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-with-the, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="說特定的東西，不可數名詞前面加 the">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The', role: '特指', kind: 'key' },
          { t: 'music', role: '不可數名詞' },
          { t: 'is going to be loud, since it\'s rap.', kind: 'dim' },
        ]"
      />
      <p class="translation">音樂會很大聲，因為是饒舌樂。</p>
      <p class="remark">說的是那場派對上的音樂。</p>
    </NoteSlide>

    <NoteSlide title="一般的東西不加 the，特定的東西加 the" mark="The">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般</span>
          <span
            ><NoteMark sentence="I love music." :marks="['music']" /><span class="translation"
              >我很愛音樂。</span
            ></span
          >
        </div>
        <div>
          <span class="term">特定</span>
          <span
            ><NoteMark sentence="The music at the party was great." :marks="['The music']" /><span
              class="translation"
              >派對上的音樂很棒。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="有說明、前面提過或雙方都知道，就是特定的東西" mark="The music">
      <div class="rows is-labeled">
        <div>
          <span class="term">有說明</span>
          <span>the information about the new class</span>
        </div>
        <div>
          <span class="term">前面提過</span>
          <span
            ><NoteMark
              sentence="I bought some bread. The bread was still warm."
              :marks="['The bread']"
            /><span class="translation">我買了一些麵包，麵包還是溫的。</span></span
          >
        </div>
        <div>
          <span class="term">雙方都知道</span>
          <span
            ><NoteMark sentence="The weather was fine." :marks="['The weather']" /><span
              class="translation"
              >天氣很好。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說一般的生活，不加 the">
      <NoteFix wrong="The life is hard sometimes." right="Life is hard sometimes." fix="Life" />
    </NoteSlide>

    <NoteSlide title="說的是桌上那罐鹽，要加 the" mark="The">
      <NoteFix wrong="Can you pass me salt?" right="Can you pass me the salt?" fix="the" />
    </NoteSlide>

    <NoteSlide title="on this website 說明是哪些資訊，前面加 the" mark="The">
      <NoteFix
        wrong="Information on this website is wrong."
        right="The information on this website is wrong."
        fix="The"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
