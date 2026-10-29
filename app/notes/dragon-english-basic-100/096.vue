<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 096, as slides, in the order of notes/dragon-english-basic-100/096.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="出生用被動形式 be born，born 不能單獨當動詞" mark="is born">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Everyone', role: '主詞' },
          { t: 'is', role: 'be 動詞', kind: 'key' },
          { t: 'born', role: '過去分詞', kind: 'key' },
          { t: 'with a talent.', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="be born with 表示一出生就有某樣東西" mark="born with a talent">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Some people', role: '主詞', kind: 'dim' },
          { t: 'are born with', kind: 'key' },
          { t: 'a good voice.', role: '天生有的東西' },
        ]"
      />
      <p class="translation">有些人天生有一副好嗓子。</p>
    </NoteSlide>

    <NoteSlide title="年份、月份和地方用 in，日期用 on，時刻用 at" mark="is born">
      <div class="rows is-labeled">
        <div>
          <span class="term">in<br /><i>地方、年份</i></span>
          <span
            ><NoteMark
              sentence="I was born in Taichung in 2008."
              :marks="['in Taichung', 'in 2008']"
            /><span class="translation">我 2008 年在台中出生。</span></span
          >
        </div>
        <div>
          <span class="term">on<br /><i>日期</i></span>
          <span
            ><NoteMark sentence="My son was born on May 5." :marks="['on May 5']" /><span
              class="translation"
              >我兒子五月五日出生。</span
            ></span
          >
        </div>
        <div>
          <span class="term">at<br /><i>時刻</i></span>
          <span
            ><NoteMark
              sentence="The baby was born at three in the morning."
              :marks="['at three']"
            /><span class="translation">寶寶在凌晨三點出生。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="whether 子句放在 be 動詞後面，說明主詞的內容" mark="whether">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The question', role: '主詞' },
          { t: 'is', role: 'be 動詞' },
          { t: 'whether they can find it or not.', role: 'whether 子句', kind: 'key' },
        ]"
      />
      <p class="remark"><code>whether</code> 表示是不是。</p>
    </NoteSlide>

    <NoteSlide title="or not 可以放在句尾，也可以放在 whether 後面" mark="or not">
      <div class="rows is-labeled">
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="The problem is whether he will come or not."
              :marks="['whether', 'or not']"
            /><span class="translation">問題是他會不會來。</span></span
          >
        </div>
        <div>
          <span class="term">whether 後面</span>
          <span
            ><NoteMark
              sentence="The question is whether or not the plan will work."
              :marks="['whether or not']"
            /><span class="translation">問題是這個計畫行不行得通。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="everyone 後面的動詞用單數" mark="Everyone is">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Everyone', role: '主詞', kind: 'key' },
          { t: 'is', role: '單數動詞', kind: 'key', ring: true },
          { t: 'born with a talent.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>everybody</code>、<code>someone</code> 後面的動詞也用單數。</p>
    </NoteSlide>

    <NoteSlide title="後面再提到 everyone 或 someone，常用 they、their、them" mark="they">
      <div class="rows is-labeled">
        <div>
          <span class="term">their</span>
          <span
            ><NoteMark
              sentence="Everyone has their own dream."
              :marks="['Everyone', 'their']"
            /><span class="translation">每個人都有自己的夢想。</span></span
          >
        </div>
        <div>
          <span class="term">them</span>
          <span
            ><NoteMark
              sentence="If someone calls, tell them I'm out."
              :marks="['someone', 'them']"
            /><span class="translation">如果有人打電話來，跟對方說我出去了。</span></span
          >
        </div>
      </div>
      <p class="remark">原句的 <code>they</code> 指 <code>everyone</code>。</p>
    </NoteSlide>
  </NoteDeck>
</template>
