<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 017, as slides, in the order of notes/dragon-english-basic-100/017.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="最高級前面加 the，thing about 後面接要說的那件事" mark="The best thing about">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The', role: '冠詞', kind: 'key' },
          {
            t: 'best',
            role: '最高級',
            kind: 'key',
            alts: ['worst', 'hardest', 'most interesting'],
          },
          { t: 'thing about', kind: 'key' },
          { t: 'my stay with an American family', role: '要說的那件事' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="the 加最高級加 thing about，說最好、最糟或最難的地方" mark="best">
      <div class="rows is-labeled">
        <div>
          <span class="term">最好</span>
          <span
            ><NoteMark
              sentence="The best thing about summer is the long vacation."
              :marks="['The best thing about']"
            /><span class="translation">夏天最棒的是長長的假期。</span></span
          >
        </div>
        <div>
          <span class="term">最糟</span>
          <span
            ><NoteMark
              sentence="The worst thing about the trip was the weather."
              :marks="['The worst thing about']"
            /><span class="translation">這趟旅行最糟的是天氣。</span></span
          >
        </div>
        <div>
          <span class="term">最難</span>
          <span
            ><NoteMark
              sentence="The hardest thing about learning Japanese is reading kanji."
              :marks="['The hardest thing about']"
            /><span class="translation">學日文最難的是讀漢字。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 動詞後面接 that 子句，說明主詞的內容" mark="was that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The best thing about my stay', role: '主詞', kind: 'dim' },
          { t: 'was', role: 'be 動詞', kind: 'key' },
          { t: 'that', role: '連接詞', kind: 'key' },
          { t: 'the parents', role: '主詞' },
          { t: 'treated', role: '動詞' },
          { t: 'me just like their daughter.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>that</code> 子句說明最棒的那件事是什麼。</p>
    </NoteSlide>

    <NoteSlide title="that 子句可以說明問題、消息或原因的內容" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">問題</span>
          <span
            ><NoteMark
              sentence="The problem is that we don't have enough time."
              :marks="['is that']"
            /><span class="translation">問題是我們沒有足夠的時間。</span></span
          >
        </div>
        <div>
          <span class="term">消息</span>
          <span
            ><NoteMark
              sentence="The good news is that Tom passed the test."
              :marks="['is that']"
            /><span class="translation">好消息是 Tom 通過了考試。</span></span
          >
        </div>
        <div>
          <span class="term">原因</span>
          <span
            ><NoteMark
              sentence="The reason I'm late is that I missed the bus."
              :marks="['is that']"
            /><span class="translation">我遲到的原因是我錯過了公車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="treat 加人加 like，表示把那個人當成那樣來對待"
      mark="treated me just like their daughter"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'the parents', kind: 'dim' },
          { t: 'treated', role: '動詞', kind: 'key' },
          { t: 'me', role: '人' },
          { t: 'just', role: '完全一樣' },
          { t: 'like', role: '介系詞', kind: 'key' },
          { t: 'their daughter.', role: '名詞' },
        ]"
      />
      <p class="remark"><code>just</code> 放在 <code>like</code> 前面。</p>
    </NoteSlide>

    <NoteSlide title="treat 加人，後面可以接 like 或 as" mark="like">
      <div class="rows is-labeled">
        <div>
          <span class="term">like</span>
          <span
            ><NoteMark
              sentence="My host family treated me like a family member."
              :marks="['like']"
            /><span class="translation">我的寄宿家庭把我當家人一樣對待。</span></span
          >
        </div>
        <div>
          <span class="term">as</span>
          <span
            ><NoteMark sentence="They treated me as a guest." :marks="['as']" /><span
              class="translation"
              >他們把我當客人對待。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="treat 加人加副詞，說出對待的態度" mark="treated">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The teacher', kind: 'dim' },
          { t: 'treats', role: '動詞', kind: 'key' },
          { t: 'every student', role: '人' },
          { t: 'kindly.', role: '副詞', kind: 'key', alts: ['well'] },
        ]"
      />
      <p class="translation">老師親切地對待每個學生。</p>
    </NoteSlide>
  </NoteDeck>
</template>
