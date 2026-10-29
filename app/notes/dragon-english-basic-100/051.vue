<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 051, as slides, in the order of notes/dragon-english-basic-100/051.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="too 加形容詞加 to，表示程度太高，做不到" mark="too heavy">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I was', kind: 'dim' },
          { t: 'too tired', role: 'too + 形容詞', kind: 'key' },
          { t: 'to walk any farther.', role: '做不到的事' },
        ]"
      />
      <p class="translation">我太累了，沒辦法再走下去。</p>
      <p class="remark">句子裡沒有 <code>not</code>，也有否定的意思。</p>
    </NoteSlide>

    <NoteSlide title="for 後面的人是做 to 不定詞動作的人" mark="for me to carry">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This wooden desk is too heavy', kind: 'dim' },
          { t: 'for me', role: 'for + 人', kind: 'key' },
          { t: 'to carry', role: 'to + 動詞原形', kind: 'key' },
          { t: 'upstairs alone.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="for 加人加 to，也接在 It is 加形容詞、enough 和名詞後面" mark="for me">
      <div class="rows is-labeled">
        <div>
          <span class="term">It is + 形容詞</span>
          <span
            ><NoteMark
              sentence="It's hard for my grandmother to climb the stairs."
              :marks="['for my grandmother']"
            /><span class="translation">對我奶奶來說，爬樓梯很吃力。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞 + enough</span>
          <span
            ><NoteMark
              sentence="This book is easy enough for my little brother to read."
              :marks="['for my little brother']"
            /><span class="translation">這本書夠簡單，我弟弟看得懂。</span></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="Leave some cake for your sister to eat."
              :marks="['for your sister']"
            /><span class="translation">留一些蛋糕給你妹妹吃。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞是不定詞動作的對象時，動詞後面不再放受詞" mark="carry">
      <NoteWords
        :size="24"
        :move="{ from: 3, to: 0 }"
        :parts="[
          { t: 'This wooden desk', role: '主詞', kind: 'key' },
          { t: 'is too heavy for me', kind: 'dim' },
          { t: 'to carry', role: 'to + 動詞原形' },
          { role: '不放受詞' },
          { t: 'upstairs alone.', kind: 'dim' },
        ]"
      />
      <p class="remark">介系詞後面也一樣，像 <code>warm enough for the kids to swim in</code>。</p>
    </NoteSlide>
  </NoteDeck>
</template>
