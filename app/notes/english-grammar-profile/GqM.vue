<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-non-defining-object-with-who, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="who 當受詞，給前面的人補充資料">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It was my old classmate Tom,', role: '人', kind: 'dim' },
          { t: 'who', role: '受詞', kind: 'key' },
          { t: 'I hadn\'t seen', role: '主詞 + 動詞' },
          { t: 'for ages!', kind: 'dim' },
        ]"
      />
      <p class="translation">原來是我的老同學 Tom，我好久沒見到他了！</p>
      <p class="remark"><code>who</code> 是 <code>seen</code> 的受詞。逗號表示後面是補充資料。</p>
    </NoteSlide>

    <NoteSlide title="子句在句子中間，前後都加逗號" mark="who">
      <div class="rows is-labeled">
        <div>
          <span class="term">句子中間</span>
          <span
            ><NoteMark
              sentence="My cousin Mei, who you met at my wedding, is moving to Canada."
              :marks="['who you met at my wedding,']"
            /><span class="translation"
              >我表妹小美要搬去加拿大了，你在我的婚禮上見過她。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式的書面語用 whom，日常用 who" mark="who">
      <div class="rows is-labeled">
        <div>
          <span class="term">whom</span>
          <span
            ><NoteMark
              sentence="Professor Lee, whom we interviewed last week, has written a new book."
              :marks="['whom']"
            /><span class="translation">我們上禮拜訪問的李教授寫了一本新書。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句的動詞接介系詞，who 是介系詞的受詞" mark="who">
      <div class="rows is-labeled">
        <div>
          <span class="term">play with</span>
          <span
            ><NoteMark
              sentence="I'm meeting Daniel, who I used to play football with."
              :marks="['who', 'with']"
            /><span class="translation">我要跟 Daniel 見面，我以前常跟他一起踢足球。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="who 已經是受詞，子句裡不再加 him" mark="who">
      <NoteFix
        wrong="I called my uncle, who I hadn't spoken to him for months."
        right="I called my uncle, who I hadn't spoken to for months."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="非限定關係子句不用 that" mark="who">
      <NoteFix
        wrong="We visited Grandma, that we see every Sunday."
        right="We visited Grandma, who we see every Sunday."
        fix="who"
      />
    </NoteSlide>

    <NoteSlide title="指人用 who，不用 which" mark="who">
      <NoteFix
        wrong="I invited Sam, which I met at university."
        right="I invited Sam, who I met at university."
        fix="who"
      />
    </NoteSlide>

    <NoteSlide title="非限定關係子句不能省略 who" mark="who">
      <NoteFix
        wrong="This is Mr. Wang, I told you about."
        right="This is Mr. Wang, who I told you about."
        fix="who"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
