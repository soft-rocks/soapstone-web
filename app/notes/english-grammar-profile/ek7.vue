<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-defining-object-with-who-that, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="who 當受詞，說明是哪些人">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My friends are', kind: 'dim' },
          { t: 'the people', role: '人' },
          { t: 'who', role: '受詞', kind: 'key' },
          { t: 'I love', role: '主詞 + 動詞' },
          { t: 'most.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的朋友就是我最愛的人。</p>
      <p class="remark">子句說明是哪些人，前面不加逗號。</p>
    </NoteSlide>

    <NoteSlide title="說人時，who 和 that 都可以當受詞，也可以省略" mark="who">
      <div class="rows is-labeled">
        <div>
          <span class="term">who</span>
          <span
            ><NoteMark
              sentence="The girl who I sit next to in class is from Peru."
              :marks="['who']"
          /></span>
        </div>
        <div>
          <span class="term">that</span>
          <span
            ><NoteMark
              sentence="The girl that I sit next to in class is from Peru."
              :marks="['that']"
          /></span>
        </div>
        <div>
          <span class="term">省略</span>
          <span
            ><NoteMark
              sentence="The girl I sit next to in class is from Peru."
              :marks="['I']"
            /><span class="translation">上課坐我旁邊的那個女生是秘魯人。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句的動詞接介系詞，介系詞留在動詞後面" mark="who">
      <div class="rows is-labeled">
        <div>
          <span class="term">stay with</span>
          <span
            ><NoteMark
              sentence="The family that I'm staying with have two dogs."
              :marks="['that', 'with']"
            /><span class="translation">我寄住的那家人養了兩隻狗。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="who 已經是受詞，子句裡不再加 him" mark="who">
      <NoteFix
        wrong="The man who I met him at the bank was very helpful."
        right="The man who I met at the bank was very helpful."
        fix="met"
      />
    </NoteSlide>

    <NoteSlide title="指人用 who 或 that，不用 which" mark="who">
      <NoteFix
        wrong="The singer which we saw last night was amazing."
        right="The singer who we saw last night was amazing."
        fix="who"
      />
    </NoteSlide>

    <NoteSlide title="子句說明是哪些人，不加逗號">
      <NoteFix
        wrong="The students, that I teach, are very hard-working."
        right="The students that I teach are very hard-working."
        fix="that I teach"
      />
    </NoteSlide>

    <NoteSlide title="子句要有自己的主詞" mark="I love">
      <NoteFix
        wrong="The woman who interviewed was very kind."
        right="The woman who I interviewed was very kind."
        fix="I"
      >
        沒有 <code>I</code>，<code>who</code> 就變成主詞，意思變成面試別人的那個女人。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
