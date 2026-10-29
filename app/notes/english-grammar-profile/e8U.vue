<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-reporting-verbs, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="電影的內容不會變，所以用 shows">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The movie', role: '主詞' },
          { t: 'shows', role: '轉述動詞', kind: 'key', ring: true },
          { t: 'how', role: '疑問詞' },
          { t: 'a woman can make people feel better.', role: '子句', kind: 'dim' },
        ]"
      />
      <p class="translation">這部電影講的是一個女人怎麼讓別人心情變好。</p>
    </NoteSlide>
    <NoteSlide title="轉述動詞後面接 that 子句或疑問詞子句" mark="shows">
      <div class="rows is-labeled">
        <div>
          <span class="term">that</span>
          <span
            ><NoteMark
              sentence="My friend says that the city is very safe."
              :marks="['says', 'that']"
            /><span class="translation">我朋友說這個城市很安全。</span></span
          >
        </div>
        <div>
          <span class="term">疑問詞</span>
          <span
            ><NoteMark
              sentence="The map shows where the hotel is."
              :marks="['shows', 'where']"
            /><span class="translation">地圖上標出了飯店的位置。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="某人一直這麼說，也用現在簡單式" mark="shows">
      <div class="rows is-labeled">
        <div>
          <span class="term">資料</span>
          <span
            ><NoteMark
              sentence="The article says that sugar is bad for your teeth."
              :marks="['says']"
            /><span class="translation">那篇文章說糖對牙齒不好。</span></span
          >
        </div>
        <div>
          <span class="term">人</span>
          <span
            ><NoteMark
              sentence="He says that moving here improved his life."
              :marks="['says']"
            /><span class="translation">他說搬來這裡讓他的生活變好了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="tell 後面要有聽的人，say 不接人" mark="shows">
      <div class="rows is-labeled">
        <div>
          <span class="term">say</span>
          <span
            ><NoteMark sentence="She says she's busy." :marks="['says']" /><span class="translation"
              >她說她很忙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">tell</span>
          <span
            ><NoteMark sentence="She tells me she's busy." :marks="['tells', 'me']" /><span
              class="translation"
              >她跟我說她很忙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="單數主詞的動詞加 -s" mark="shows">
      <NoteFix
        wrong="The book say that dogs are clever."
        right="The book says that dogs are clever."
        :fix="['says']"
      />
    </NoteSlide>
    <NoteSlide title="疑問詞子句用直述句的語序" mark="how">
      <NoteFix
        wrong="The film shows how can a woman help people."
        right="The film shows how a woman can help people."
        :fix="['a woman can']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
