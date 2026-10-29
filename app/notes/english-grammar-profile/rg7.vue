<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-with-where-place, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="where 接在地點名詞後面，說明是哪一個地方">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The city', role: '地點名詞' },
          { t: 'where', role: '在那裡', kind: 'key' },
          { t: 'I live', role: '主詞 + 動詞' },
          { t: 'is very nice and extremely charming.', role: '主要動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我住的城市很棒，而且非常迷人。</p>
    </NoteSlide>

    <NoteSlide title="子句的動詞不接受詞用 where，要接受詞用 which" mark="where">
      <div class="rows is-labeled">
        <div>
          <span class="term">where</span>
          <span
            ><NoteMark sentence="The town where I grew up is very small." :marks="['where']" /><span
              class="translation"
              >我長大的那個小鎮很小。</span
            ></span
          >
        </div>
        <div>
          <span class="term">which</span>
          <span
            ><NoteMark
              sentence="The town which I visited last summer is very small."
              :marks="['which']"
            /><span class="translation">我去年夏天去的那個小鎮很小。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句放在主詞後面或句尾" mark="where I live">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="The café where we first met has closed down."
              :marks="['where we first met']"
            /><span class="translation">我們第一次見面的那家咖啡店關了。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="I'd like to find a park where my dog can run around."
              :marks="['where my dog can run around.']"
            /><span class="translation">我想找一個讓我的狗可以到處跑的公園。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="where 已經表示在那裡，不再加 there" mark="where">
      <NoteFix
        wrong="The village where my parents live there is beautiful."
        right="The village where my parents live is beautiful."
        fix="live"
      />
    </NoteSlide>

    <NoteSlide title="visited 要接受詞，用 which">
      <NoteFix
        wrong="The museum where we visited was full of tourists."
        right="The museum which we visited was full of tourists."
        fix="which"
      />
    </NoteSlide>

    <NoteSlide title="lived 不接受詞，用 where" mark="where">
      <NoteFix
        wrong="That's the house which I lived when I was a child."
        right="That's the house where I lived when I was a child."
        fix="where"
      >
        也可以寫成 <code>which I lived in</code>。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
