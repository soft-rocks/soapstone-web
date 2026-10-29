<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 077, as slides, in the order of notes/dragon-english-basic-100/077.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="句首的 it 只佔主詞的位置，真正的主詞是 that 子句">
      <NoteWords
        :size="22"
        :move="{ from: 2, to: 0 }"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'key' },
          { t: 'is a pity', kind: 'dim' },
          {
            t: 'that many Japanese people mistakenly believe that they have only to speak English to be internationally minded.',
            role: '真正的主詞',
            kind: 'key',
          },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark"><code>a pity</code> 是可惜的事。</p>
    </NoteSlide>

    <NoteSlide title="It is a shame that 和 It is a pity that 的意思一樣" mark="a pity">
      <div class="rows is-labeled">
        <div>
          <span class="term">a pity</span>
          <span
            ><NoteMark
              sentence="It is a pity that the old bookstore closed."
              :marks="['a pity']"
            /><span class="translation">那家舊書店關了，很可惜。</span></span
          >
        </div>
        <div>
          <span class="term">a shame</span>
          <span
            ><NoteMark
              sentence="It is a shame that Tom missed the game."
              :marks="['a shame']"
            /><span class="translation">Tom 錯過了比賽，很可惜。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have only to 表示只要做這一件事就夠了" mark="have only to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'You', kind: 'dim' },
          { t: 'have only to', role: '只要', kind: 'key' },
          { t: 'tell the truth.', role: '動詞原形' },
        ]"
      />
      <p class="translation">你只要說實話就好。</p>
    </NoteSlide>

    <NoteSlide title="only have to 的意思和 have only to 一樣" mark="have only to">
      <div class="rows is-labeled">
        <div>
          <span class="term">have only to</span>
          <span
            ><NoteMark
              sentence="You have only to look at the map to find the station."
              :marks="['have only to']"
            /><span class="translation">你只要看地圖就找得到車站。</span></span
          >
        </div>
        <div>
          <span class="term">only have to</span>
          <span
            ><NoteMark
              sentence="You only have to fill in this form."
              :marks="['only have to']"
            /><span class="translation">你只要填這張表就好。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have only to 後面常再接 to 不定詞，說明結果或目的" mark="to be">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'they', kind: 'dim' },
          { t: 'have only to', role: '只要' },
          { t: 'speak English', role: '動詞原形' },
          { t: 'to be internationally minded.', role: '結果或目的', kind: 'key' },
        ]"
      />
      <p class="remark">很多人以為只要會說英文，就有國際觀。</p>
    </NoteSlide>
  </NoteDeck>
</template>
