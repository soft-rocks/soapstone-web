<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-use-focus, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Wh-ever + 子句, + 主要子句" mark="Wherever you go,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Wherever', role: '連接詞', kind: 'key' },
          { t: 'you go,', role: '從屬子句' },
          { t: 'you find shops, hotels and pubs', role: '主要子句' },
          { t: 'which are full of tourists.', role: '關係子句', kind: 'dim' },
        ]"
      />
      <p class="translation">不管你走到哪裡，都會看到擠滿觀光客的商店、旅館和酒吧。</p>
    </NoteSlide>

    <NoteSlide title="However + 形容詞或副詞">
      <NoteMark
        sentence="However hard I try, I can't remember his name."
        :marks="['However hard']"
      />
      <p class="translation">不管我多努力想，就是想不起他的名字。</p>
    </NoteSlide>

    <NoteSlide title="每個字的意思" mark="Wherever">
      <div class="rows is-labeled">
        <div>
          <span class="term">whatever</span>
          <span>不管什麼</span>
        </div>
        <div>
          <span class="term">wherever</span>
          <span>不管哪裡</span>
        </div>
        <div>
          <span class="term">whoever</span>
          <span>不管誰</span>
        </div>
        <div>
          <span class="term">whenever</span>
          <span>不管何時</span>
        </div>
        <div>
          <span class="term">however</span>
          <span>不管多麼</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="whatever + 名詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">有 be 動詞</span>
          <span
            ><NoteMark
              sentence="Whatever the reason is, we must solve the problem."
              :marks="['Whatever the reason is,']"
            /><span class="translation">不管原因是什麼，我們都得解決這個問題。</span></span
          >
        </div>
        <div>
          <span class="term">省略 be 動詞</span>
          <span
            ><NoteMark
              sentence="Whatever the cause of the delay, we apologise."
              :marks="['Whatever the cause of the delay,']"
            /><span class="translation">不管延誤的原因是什麼，我們都很抱歉。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句裡不用 will">
      <NoteFix
        wrong="Whatever you will decide, I'll respect it."
        right="Whatever you decide, I'll respect it."
        fix="decide,"
      />
    </NoteSlide>

    <NoteSlide title="no matter 和 whatever 不混用">
      <NoteFix
        wrong="No matter whatever you say, I won't change my mind."
        right="Whatever you say, I won't change my mind."
        fix="Whatever"
      />
    </NoteSlide>

    <NoteSlide title="however 後面直接接副詞">
      <NoteFix
        wrong="However I try hard, I can't open this jar."
        right="However hard I try, I can't open this jar."
        fix="However hard"
      />
    </NoteSlide>

    <NoteSlide title="用逗號接主要子句" mark="go,">
      <NoteFix
        wrong="Wherever I go. I take my camera with me."
        right="Wherever I go, I take my camera with me."
        fix="go,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
