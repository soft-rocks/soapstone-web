<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-neither-of-none-of-pronoun, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="none of 本身是否定，動詞用肯定的形式">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'None of', role: 'none of', kind: 'key' },
          { t: 'my friends', role: '名詞片語' },
          { t: 'are interested,', role: '肯定的動詞' },
          { t: 'so there is no one I can talk to.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的朋友都沒興趣，所以我找不到人可以聊。</p>
    </NoteSlide>

    <NoteSlide title="neither of 說兩個，none of 說三個或更多" mark="None of">
      <div class="rows is-labeled">
        <div>
          <span class="term">neither of<br /><i>兩個</i></span>
          <span
            ><NoteMark sentence="Neither of us is free on Friday." :marks="['Neither of']" /><span
              class="translation"
              >我們兩個星期五都沒空。</span
            ></span
          >
        </div>
        <div>
          <span class="term">none of<br /><i>三個或更多</i></span>
          <span
            ><NoteMark
              sentence="I tried on three dresses, but I bought none of them."
              :marks="['none of']"
            /><span class="translation">我試穿了三件洋裝，可是一件都沒買。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面用受格代名詞或帶限定詞的名詞" mark="my">
      <div class="rows is-labeled">
        <div>
          <span class="term">受格代名詞</span>
          <span>us、you、them</span>
        </div>
        <div>
          <span class="term">限定詞 + 名詞</span>
          <span>the students、my friends、these keys</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="neither of 的動詞在正式的文章用單數" mark="are">
      <div class="rows is-labeled">
        <div>
          <span class="term">正式的文章</span>
          <span
            ><NoteMark sentence="Neither of the twins is ready for school." :marks="['is']" /><span
              class="translation"
              >那對雙胞胎都還沒準備好上學。</span
            ></span
          >
        </div>
        <div>
          <span class="term">說話</span>
          <span
            ><NoteMark sentence="Neither of them are coming." :marks="['are']" /><span
              class="translation"
              >他們兩個都不來。</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>none of</code> 接不可數名詞時用單數動詞。</p>
    </NoteSlide>

    <NoteSlide title="none of 後面接可數名詞的複數" mark="friends">
      <NoteFix
        wrong="None of my neighbour have a garden."
        right="None of my neighbours have a garden."
        fix="neighbours"
      />
    </NoteSlide>

    <NoteSlide title="of 後面用受格" mark="None of">
      <NoteFix wrong="Neither of we can drive." right="Neither of us can drive." fix="us" />
    </NoteSlide>

    <NoteSlide title="of 後面的名詞要有限定詞" mark="my">
      <NoteFix
        wrong="None of photos on the website were clear."
        right="None of the photos on the website were clear."
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="說兩個人用 neither of" mark="None of">
      <NoteFix
        wrong="I have two brothers, but none of them lives nearby."
        right="I have two brothers, but neither of them lives nearby."
        fix="neither of"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
