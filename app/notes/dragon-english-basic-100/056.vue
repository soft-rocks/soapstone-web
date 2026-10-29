<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 056, as slides, in the order of notes/dragon-english-basic-100/056.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="as ... as possible 表示盡可能做到某個程度" mark="as indirectly as possible">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'express their feelings', kind: 'dim' },
          { t: 'as', kind: 'key' },
          { t: 'indirectly', role: '副詞' },
          { t: 'as possible', kind: 'key' },
        ]"
      />
      <p class="translation">盡量委婉地表達自己的感受</p>
    </NoteSlide>

    <NoteSlide title="as 和 as possible 中間放形容詞或副詞" mark="indirectly">
      <div class="rows is-labeled">
        <div>
          <span class="term">副詞</span>
          <span
            ><NoteMark sentence="Please come home as soon as possible." :marks="['soon']" /><span
              class="translation"
              >請盡快回家。</span
            ></span
          >
        </div>
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="Keep your answers as short as possible." :marks="['short']" /><span
              class="translation"
              >你的回答盡量簡短。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as possible 可以換成 as 加主詞加 can，過去式用 could" mark="as possible">
      <div class="rows is-labeled">
        <div>
          <span class="term">can</span>
          <span
            ><NoteMark
              sentence="I'll finish the report as quickly as I can."
              :marks="['as I can']"
            /><span class="translation">我會盡快把報告做完。</span></span
          >
        </div>
        <div>
          <span class="term">could<br /><i>過去式</i></span>
          <span
            ><NoteMark sentence="I ran as fast as I could." :marks="['as I could']" /><span
              class="translation"
              >我用最快的速度跑。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="so that 帶出的子句表示目的" mark="so that">
      <NoteWords
        :size="22"
        :parts="[
          {
            t: 'Japanese people usually express their feelings as indirectly as possible',
            role: '主要子句',
            kind: 'dim',
          },
          { t: 'so that', role: '連接詞', kind: 'key' },
          { t: 'they won’t offend others.', role: '目的' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="so that 子句裡常用 can 或否定的 won't" mark="won’t">
      <div class="rows is-labeled">
        <div>
          <span class="term">can</span>
          <span
            ><NoteMark
              sentence="Let's leave now so that we can catch the last train."
              :marks="['can']"
            /><span class="translation">我們現在出發吧，這樣才趕得上末班車。</span></span
          >
        </div>
        <div>
          <span class="term">won't</span>
          <span
            ><NoteMark
              sentence="I'll write it down so that I won't forget."
              :marks="['won\'t']"
            /><span class="translation">我會把它寫下來，這樣我就不會忘記。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要子句是過去式時，so that 子句改用 could 或 wouldn't" mark="won’t">
      <div class="rows is-labeled">
        <div>
          <span class="term">could</span>
          <span
            ><NoteMark
              sentence="She spoke slowly so that everyone could understand."
              :marks="['spoke', 'could']"
            /><span class="translation">她講得很慢，讓每個人都聽得懂。</span></span
          >
        </div>
        <div>
          <span class="term">wouldn't</span>
          <span
            ><NoteMark
              sentence="I wore a coat so that I wouldn't catch a cold."
              :marks="['wore', 'wouldn\'t']"
            /><span class="translation">我穿了外套，這樣才不會感冒。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
