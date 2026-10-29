<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-multiple-fixed-expressions, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="兩個固定用語放在主要子句前面">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'All of a sudden,', role: '固定用語 1', kind: 'key' },
          { t: 'out of nowhere,', role: '固定用語 2', kind: 'key' },
          { t: 'a bunch of people', role: '主詞' },
          { t: 'came running toward him.', role: '動詞' },
        ]"
      />
      <p class="translation">突然間，不知道從哪裡冒出一群人朝他跑過來。</p>
      <p class="remark">主要子句照一般語序，主詞在動詞前面。</p>
    </NoteSlide>

    <NoteSlide title="第二個固定用語補充第一個固定用語" mark="out of nowhere">
      <div class="rows is-labeled">
        <div>
          <span class="term">總結</span>
          <span
            ><NoteMark
              sentence="All in all, taking everything into account, the trip was a success."
              :marks="['All in all,', 'taking everything into account,']"
            /><span class="translation"
              >整體來說，把所有事情都考慮進去，這趟旅行算是成功的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">補充</span>
          <span
            ><NoteMark
              sentence="What is more, from my point of view, the plan costs too much."
              :marks="['What is more,', 'from my point of view,']"
            /><span class="translation">而且，就我看來，這個計畫太花錢了。</span></span
          >
        </div>
        <div>
          <span class="term">轉折</span>
          <span
            ><NoteMark
              sentence="Having said that, in my opinion, the old system worked better."
              :marks="['Having said that,', 'in my opinion,']"
            /><span class="translation">話雖如此，我覺得舊的制度比較好用。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="每個固定用語後面加逗號" mark="sudden,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'All in all,', role: '固定用語 1', kind: 'key' },
          { t: 'taking everything into account,', role: '固定用語 2', kind: 'key' },
          { t: 'I\'d choose the cheaper flat.', role: '主要子句' },
        ]"
      />
      <p class="translation">整體來說，把所有事情都考慮進去，我會選比較便宜的那間公寓。</p>
    </NoteSlide>

    <NoteSlide title="固定用語後面直接接主要子句，不加 that">
      <NoteFix
        wrong="All in all, taking everything into account, that the trip was a success."
        right="All in all, taking everything into account, the trip was a success."
        fix="the trip"
      />
    </NoteSlide>

    <NoteSlide title="總結的固定用語不和列出第一點的固定用語連用">
      <NoteFix
        wrong="In short, to begin with, the hotel was too far from the beach."
        right="In short, all things considered, the hotel was too far from the beach."
        fix="all things considered,"
      >
        <code>In short</code> 用來總結。<code>to begin with</code> 用來列出第一點。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="all of a sudden 要有 a" mark="All of a sudden,">
      <NoteFix
        wrong="All of sudden, out of nowhere, the lights went out."
        right="All of a sudden, out of nowhere, the lights went out."
        fix="a"
      />
    </NoteSlide>

    <NoteSlide title="主要子句要有自己的主詞">
      <NoteFix
        wrong="What is more, from my point of view is that the rent is too high."
        right="What is more, from my point of view, the rent is too high."
        fix="the rent"
      >
        <code>from my point of view</code> 是固定用語，不是主詞。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="固定用語放在句首才有強調的作用" mark="All of a sudden,">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首一個</span>
          <span
            ><NoteMark
              sentence="All of a sudden, the lights went out."
              :marks="['All of a sudden,']"
            /><span class="translation">突然間，燈全熄了。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="A bunch of people came running toward him all of a sudden."
              :marks="['all of a sudden.']"
            /><span class="translation">突然有一群人朝他跑過來。</span></span
          >
        </div>
      </div>
      <p class="remark">句首連用兩個固定用語，表示說話的人要特別強調後面那件事。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
