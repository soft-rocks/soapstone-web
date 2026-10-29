<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-stories-and-commentaries, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="說故事情節用現在簡單式">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The story', role: '主詞' },
          { t: 'takes place', role: '現在簡單式', kind: 'key', ring: true },
          { t: 'in Vienna', role: '地點', kind: 'dim' },
          { t: 'after the Second World War.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">這個故事發生在第二次世界大戰後的維也納。</p>
    </NoteSlide>
    <NoteSlide title="情節、歷史、比賽和笑話都可以這樣說" mark="takes place">
      <div class="rows is-labeled">
        <div>
          <span class="term">情節</span>
          <span
            ><NoteMark
              sentence="At the end, she finds out the truth."
              :marks="['finds out']"
            /><span class="translation">最後她發現了真相。</span></span
          >
        </div>
        <div>
          <span class="term">歷史</span>
          <span
            ><NoteMark sentence="In 1492, Columbus sails west." :marks="['sails']" /><span
              class="translation"
              >一四九二年，哥倫布向西航行。</span
            ></span
          >
        </div>
        <div>
          <span class="term">比賽</span>
          <span
            ><NoteMark
              sentence="Smith passes to Jones, and Jones scores!"
              :marks="['passes', 'scores!']"
            /><span class="translation">Smith 傳給 Jones，Jones 射門得分！</span></span
          >
        </div>
        <div>
          <span class="term">笑話</span>
          <span
            ><NoteMark
              sentence="So I walk into the shop, and this man looks at me."
              :marks="['walk', 'looks']"
            /><span class="translation">然後我走進店裡，這個男人看著我。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="背景裡正在進行的事用進行式" mark="takes place">
      <div class="rows is-labeled">
        <div>
          <span class="term">背景</span>
          <span
            ><NoteMark sentence="On the train, a man is sleeping." :marks="['is sleeping.']" /><span
              class="translation"
              >火車上，一個男人在睡覺。</span
            ></span
          >
        </div>
        <div>
          <span class="term">事件</span>
          <span
            ><NoteMark sentence="He dreams of his old friend." :marks="['dreams']" /><span
              class="translation"
              >他夢到他的老朋友。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="整段都用現在簡單式" mark="takes place">
      <NoteFix
        wrong="She meets a soldier, and they fell in love."
        right="She meets a soldier, and they fall in love."
        :fix="['fall']"
      />
    </NoteSlide>
    <NoteSlide title="單數主詞的動詞加 -s" mark="takes place">
      <NoteFix
        wrong="At the end, the hero find the treasure."
        right="At the end, the hero finds the treasure."
        :fix="['finds']"
      />
    </NoteSlide>
    <NoteSlide title="take place 不用被動" mark="takes place">
      <NoteFix
        wrong="The story is taken place in Paris."
        right="The story takes place in Paris."
        :fix="['takes place']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
