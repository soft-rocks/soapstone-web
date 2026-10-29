<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-use-giving-focus-with-by, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="by 後面接做動作的人">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My school', role: '主詞' },
          { t: 'was', role: 'be' },
          { t: 'chosen', role: '過去分詞' },
          { t: 'by the TV company', role: 'by + 做動作的人', kind: 'key' },
        ]"
      />
      <p class="translation">那家電視公司選了我們學校。</p>
    </NoteSlide>

    <NoteSlide title="做動作的人是新的消息，就加 by" mark="by the TV company">
      <div class="rows is-labeled">
        <div>
          <span class="term">新的消息</span>
          <span
            ><NoteMark
              sentence="The window was broken by the boy next door."
              :marks="['by the boy next door']"
            /><span class="translation">窗戶是隔壁的男孩打破的。</span></span
          >
        </div>
        <div>
          <span class="term">有名的人</span>
          <span
            ><NoteMark
              sentence="This song was written by John Lennon."
              :marks="['by John Lennon']"
            /><span class="translation">這首歌是約翰藍儂寫的。</span></span
          >
        </div>
        <div>
          <span class="term">不重要</span>
          <span
            ><NoteMark sentence="My bike was stolen." :marks="['was stolen']" /><span
              class="translation"
              >我的腳踏車被偷了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動句的做動作的人用 by" mark="by">
      <NoteFix
        wrong="The picture was painted from my grandfather."
        right="The picture was painted by my grandfather."
        fix="by"
      />
    </NoteSlide>

    <NoteSlide title="by 後面接受格" mark="the TV company">
      <NoteFix wrong="The cake was made by she." right="The cake was made by her." fix="her" />
    </NoteSlide>

    <NoteSlide title="be 後面接過去分詞" mark="chosen">
      <NoteFix
        wrong="The letter was write by my teacher."
        right="The letter was written by my teacher."
        fix="written"
      />
    </NoteSlide>

    <NoteSlide title="by 放在過去分詞後面" mark="chosen by">
      <NoteFix
        wrong="The house was by my grandfather built."
        right="The house was built by my grandfather."
        fix="built by"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
