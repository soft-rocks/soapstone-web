<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-their, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="their 加名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'couldn\'t see', role: '動詞' },
          { t: 'their', role: 'their', kind: 'key' },
          { t: 'faces.', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我看不到他們的臉。</p>
    </NoteSlide>

    <NoteSlide title="their、there、they're" mark="their">
      <div class="rows is-labeled">
        <div>
          <span class="term">their</span>
          <span
            ><NoteMark sentence="They lost their keys." :marks="['their']" /><span
              class="translation"
              >他們弄丟了鑰匙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">there</span>
          <span
            ><NoteMark sentence="Put the box over there." :marks="['there']" /><span
              class="translation"
              >把箱子放在那裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">they're</span>
          <span
            ><NoteMark sentence="They're my cousins." :marks="['They\'re']" /><span
              class="translation"
              >他們是我的表兄弟姊妹。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="每個人各有一個，常用複數" mark="their faces">
      <div class="rows is-labeled">
        <div>
          <span class="term">一起擁有一個</span>
          <span
            ><NoteMark sentence="They sold their house." :marks="['their house']" /><span
              class="translation"
              >他們把房子賣了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">每個人各有一個</span>
          <span
            ><NoteMark sentence="They raised their hands." :marks="['their hands']" /><span
              class="translation"
              >他們舉起手。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="表示所有用 their" mark="their">
      <NoteFix
        wrong="The children are playing in there garden."
        right="The children are playing in their garden."
        fix="their"
      />
    </NoteSlide>

    <NoteSlide title="theirs 後面不接名詞" mark="their">
      <NoteFix
        wrong="The twins rode theirs bikes to school."
        right="The twins rode their bikes to school."
        fix="their"
      />
    </NoteSlide>

    <NoteSlide title="不用受格 them" mark="their">
      <NoteFix
        wrong="I met my friends and them parents."
        right="I met my friends and their parents."
        fix="their"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
