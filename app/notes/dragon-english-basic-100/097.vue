<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 097, as slides, in the order of notes/dragon-english-basic-100/097.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="兩件事都發生在過去，兩個子句都用過去式" :mark="['left', 'ran into']">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When I', kind: 'dim' },
          { t: 'left', role: '過去式\n先發生', kind: 'key' },
          { t: 'the office for lunch, I', kind: 'dim' },
          { t: 'ran into', role: '過去式\n接著發生', kind: 'key' },
          { t: 'an old friend from high school.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>when</code> 子句放在句首時，後面加逗號。</p>
    </NoteSlide>

    <NoteSlide title="主要子句也可以說那個時候的狀態" mark="When I left">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I was surprised', role: '狀態', kind: 'key' },
          { t: 'when', role: '連接詞' },
          { t: 'I saw my test score.', role: 'when 子句' },
        ]"
      />
      <p class="translation">我看到考試分數的時候很驚訝。</p>
    </NoteSlide>

    <NoteSlide title="主要子句用過去進行式，表示當時正在進行的動作" mark="When I left">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'When I left the theater,', role: 'when 子句' },
          { t: 'my friends', role: '主詞' },
          { t: 'were waiting', role: '過去進行式', kind: 'key' },
          { t: 'outside.', kind: 'dim' },
        ]"
      />
      <p class="translation">我離開電影院的時候，我的朋友們在外面等。</p>
    </NoteSlide>

    <NoteSlide title="leave 直接接地方，中間不加介系詞" mark="left the office">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'leave', role: '動詞' },
          { t: 'home', role: '離開的地方', kind: 'key' },
          { t: 'at seven every morning.', kind: 'dim' },
        ]"
      />
      <p class="translation">我每天早上七點出門。</p>
    </NoteSlide>

    <NoteSlide title="leave for 加目的地，表示出發前往那裡" mark="left the office">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We are', kind: 'dim' },
          { t: 'leaving', role: '動詞' },
          { t: 'for Osaka', role: 'for + 目的地', kind: 'key' },
          { t: 'tomorrow.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們明天出發去大阪。</p>
    </NoteSlide>

    <NoteSlide title="離開的地方放在 leave 後面，目的地放在 for 後面" mark="left the office">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My sister', kind: 'dim' },
          { t: 'left', role: '動詞' },
          { t: 'Taiwan', role: '離開的地方', kind: 'key' },
          { t: 'for Canada', role: 'for + 目的地', kind: 'key' },
          { t: 'last year.', kind: 'dim' },
        ]"
      />
      <p class="translation">我姊姊去年離開台灣去加拿大。</p>
    </NoteSlide>

    <NoteSlide title="原句的 for lunch 不是目的地，它說明離開的目的" mark="for lunch">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'When I', kind: 'dim' },
          { t: 'left', role: '動詞' },
          { t: 'the office', role: '離開的地方' },
          { t: 'for lunch,', role: '為了吃午餐', kind: 'key', ring: true },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="run into 表示偶然遇到某人" mark="ran into an old friend">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'ran into', role: 'run into 的過去式', kind: 'key' },
          { t: 'an old friend from high school.', role: '人' },
        ]"
      />
      <p class="remark">沒有約好，碰巧遇到老朋友。</p>
    </NoteSlide>

    <NoteSlide title="bump into 的意思和用法跟 run into 一樣" mark="ran into">
      <div class="rows is-labeled">
        <div>
          <span class="term">run into</span>
          <span
            ><NoteMark
              sentence="I ran into my English teacher at the supermarket."
              :marks="['ran into']"
            /><span class="translation">我在超市偶然遇到我的英文老師。</span></span
          >
        </div>
        <div>
          <span class="term">bump into</span>
          <span
            ><NoteMark
              sentence="I bumped into Ann at the station this morning."
              :marks="['bumped into']"
            /><span class="translation">我今天早上在車站碰到 Ann。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
