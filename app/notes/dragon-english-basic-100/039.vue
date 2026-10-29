<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 039, as slides, in the order of notes/dragon-english-basic-100/039.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="wish 後面的子句講跟事實不一樣的情況，用過去式" mark="wished">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My sister', role: '主詞', kind: 'dim' },
          { t: 'wishes', role: '動詞' },
          { t: 'she', role: '主詞' },
          { t: 'had', role: '過去式', kind: 'key', ring: true },
          { t: 'a dog.', role: '受詞' },
        ]"
      />
      <p class="translation">我妹妹希望她有一隻狗。</p>
    </NoteSlide>

    <NoteSlide title="wish 子句的 be 動詞常用 were，主詞是 I 或 he 也一樣" mark="were">
      <div class="rows is-labeled">
        <div>
          <span class="term">I</span>
          <span
            ><NoteMark sentence="I wish I were taller." :marks="['I were']" /><span
              class="translation"
              >真希望我高一點。</span
            ></span
          >
        </div>
        <div>
          <span class="term">it</span>
          <span
            ><NoteMark sentence="I wish it were Saturday today." :marks="['it were']" /><span
              class="translation"
              >真希望今天是星期六。</span
            ></span
          >
        </div>
        <div>
          <span class="term">my brother</span>
          <span
            ><NoteMark
              sentence="I wish my brother were a little kinder to me."
              :marks="['my brother were']"
            /><span class="translation">真希望我哥哥對我好一點。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="wish 變成過去式 wished，子句還是用 were 或過去式" mark="wished my house were">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'often wished', role: '主要動詞過去式', kind: 'key' },
          { t: 'my house', role: '主詞' },
          { t: 'were', role: 'be 動詞', kind: 'key', ring: true },
          { t: 'a little larger.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="a little 放在比較級前面，表示差一點點" mark="a little larger">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My brother is', kind: 'dim' },
          { t: 'a little', role: '差一點點', kind: 'key' },
          { t: 'older', role: '比較級', kind: 'key' },
          { t: 'than me.', kind: 'dim' },
        ]"
      />
      <p class="translation">我哥哥比我大一點。</p>
      <p class="remark">原句的 <code>a little larger</code> 是大一點點。</p>
    </NoteSlide>

    <NoteSlide title="a bit 和 a little 意思一樣，much 表示差很多" mark="a little">
      <div class="rows is-labeled">
        <div>
          <span class="term">a little</span>
          <span
            ><NoteMark
              sentence="Could you speak a little louder?"
              :marks="['a little louder']"
            /><span class="translation">你可以說大聲一點嗎？</span></span
          >
        </div>
        <div>
          <span class="term">a bit<br /><i>比較口語</i></span>
          <span
            ><NoteMark
              sentence="It is a bit colder today than yesterday."
              :marks="['a bit colder']"
            /><span class="translation">今天比昨天冷一點。</span></span
          >
        </div>
        <div>
          <span class="term">much<br /><i>差很多</i></span>
          <span
            ><NoteMark
              sentence="Going by train is much faster than driving."
              :marks="['much faster']"
            /><span class="translation">搭火車比開車快很多。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
