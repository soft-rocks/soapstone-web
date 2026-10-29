<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 016, as slides, in the order of notes/dragon-english-basic-100/016.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="seem 表示說話的人從看到的情況判斷，不確定" mark="seems">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Something', role: '主詞' },
          { t: 'seems', role: '動詞', kind: 'key' },
          { t: 'to be wrong with it.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">說話的人看到烘乾機不動，判斷它可能有問題。</p>
    </NoteSlide>

    <NoteSlide title="seem 後面接 to be 加形容詞，或直接接形容詞，意思一樣" mark="seems to be">
      <div class="rows is-labeled">
        <div>
          <span class="term">to be + 形容詞</span>
          <span
            ><NoteMark sentence="She seems to be tired." :marks="['to be tired']" /><span
              class="translation"
              >她似乎很累。</span
            ></span
          >
        </div>
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="The test seemed easy." :marks="['easy']" /><span
              class="translation"
              >考試似乎很簡單。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="seem to 也可以接其他動詞原形" mark="seems to be">
      <div class="rows is-labeled">
        <div>
          <span class="term">know</span>
          <span
            ><NoteMark sentence="He seems to know the answer." :marks="['to know']" /><span
              class="translation"
              >他似乎知道答案。</span
            ></span
          >
        </div>
        <div>
          <span class="term">like</span>
          <span
            ><NoteMark sentence="Tom seemed to like the present." :marks="['to like']" /><span
              class="translation"
              >Tom 似乎很喜歡那份禮物。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 動詞加 wrong with，表示某個東西或某個人有問題" mark="wrong with it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Something', role: '主詞' },
          { t: 'is', role: 'be 動詞' },
          { t: 'wrong', role: '形容詞', kind: 'key' },
          { t: 'with my car.', role: 'with + 名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我的車有點問題。</p>
    </NoteSlide>

    <NoteSlide
      title="wrong with 前面用 Nothing 表示沒有問題，用 What's 問有什麼問題"
      mark="wrong with it"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">沒有問題</span>
          <span
            ><NoteMark
              sentence="Nothing is wrong with your computer. You just need to restart it."
              :marks="['Nothing is wrong with']"
            /><span class="translation">你的電腦沒有問題。你只需要重新開機。</span></span
          >
        </div>
        <div>
          <span class="term">問有什麼問題</span>
          <span
            ><NoteMark
              sentence="What's wrong with your leg?"
              :marks="['What\'s wrong with']"
            /><span class="translation">你的腳怎麼了？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="seems to be 放在 something 和 wrong 中間，表示好像有問題" mark="seems to be">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Something', role: '主詞' },
          { t: 'seems to be', role: '好像', kind: 'key', ring: true },
          { t: 'wrong', role: '形容詞' },
          { t: 'with it.', role: 'with + 名詞' },
        ]"
      />
    </NoteSlide>
  </NoteDeck>
</template>
