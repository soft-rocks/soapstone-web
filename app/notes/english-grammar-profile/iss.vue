<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-compound-adjectives-8, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="幾個字用連字號連起來，當成一個形容詞" mark="long-term">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Getting to work by car', role: '主詞', kind: 'dim' },
          { t: 'has a', kind: 'dim' },
          { t: 'long-term', role: '複合形容詞', kind: 'key', ring: true },
          { t: 'effect', role: '名詞' },
          { t: 'on the environment.', kind: 'dim' },
        ]"
      />
      <p class="translation">開車上班會對環境造成長期的影響。</p>
      <p class="remark"><code>long-term</code> 是長期的。</p>
    </NoteSlide>

    <NoteSlide title="複合形容詞有幾種常見的組成" mark="long-term">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞 + 名詞</span>
          <span
            ><NoteMark
              sentence="This is only a short-term solution."
              :marks="['short-term']"
            /><span class="translation">這只是一個短期的解決辦法。</span></span
          >
        </div>
        <div>
          <span class="term">名詞 + 形容詞</span>
          <span
            ><NoteMark
              sentence="The new app is very user-friendly."
              :marks="['user-friendly']"
            /><span class="translation">這個新的應用程式非常好用。</span></span
          >
        </div>
        <div>
          <span class="term">片語</span>
          <span
            ><NoteMark
              sentence="The hospital has state-of-the-art equipment."
              :marks="['state-of-the-art']"
            /><span class="translation">那家醫院有最先進的設備。</span></span
          >
        </div>
        <div>
          <span class="term">副詞 / 名詞 + 過去分詞</span>
          <span
            ><NoteMark sentence="Many people eat ready-made meals." :marks="['ready-made']" /><span
              class="translation"
              >很多人吃現成的餐點。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="up-to-date 放在 be 後面時一般不加連字號" mark="long-term">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞前面</span>
          <span
            ><NoteMark sentence="We need an up-to-date map." :marks="['up-to-date']" /><span
              class="translation"
              >我們需要一張最新的地圖。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark sentence="Is the information up to date?" :marks="['up to date']" /><span
              class="translation"
              >這些資料是最新的嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="放在名詞前面時要加連字號" mark="long-term">
      <NoteFix
        wrong="This is a short term plan."
        right="This is a short-term plan."
        fix="short-term"
      />
    </NoteSlide>

    <NoteSlide title="複合形容詞裡的名詞不加 -s" mark="long-term">
      <NoteFix
        wrong="It is a high-qualities product."
        right="It is a high-quality product."
        fix="high-quality"
      />
    </NoteSlide>

    <NoteSlide title="user-friendly 是名詞在前、形容詞在後" mark="long-term">
      <NoteFix
        wrong="The website is friendly-user."
        right="The website is user-friendly."
        fix="user-friendly"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
