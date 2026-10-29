<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-questions-833, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="疑問詞放在 has 前面，has 放在主詞前面" mark="How has">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'How', role: '疑問詞', kind: 'key', ring: true },
          { t: 'has', role: '主詞是單數', kind: 'key' },
          { t: 'your family', role: '主詞' },
          { t: 'been?', role: '過去分詞' },
        ]"
      />
      <p class="translation">你家人最近好嗎？</p>
      <p class="remark">說話者問的是上次見面到現在這段時間。</p>
    </NoteSlide>

    <NoteSlide title="沒有疑問詞的問句，用 have / has 回答" mark="has">
      <NoteMark
        sentence="Have you finished your homework? — Yes, I have."
        :marks="['Have you', 'I have.']"
      />
      <p class="translation">你功課寫完了嗎？寫完了。</p>
    </NoteSlide>

    <NoteSlide title="疑問詞是主詞，不用倒裝" mark="How">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'What', role: '主詞', kind: 'key', ring: true },
          { t: 'has happened', role: 'has + 過去分詞' },
          { t: 'to the printer?', kind: 'dim' },
        ]"
      />
      <p class="translation">印表機怎麼了？</p>
    </NoteSlide>

    <NoteSlide title="問句把 has 放在主詞前面" mark="has your family">
      <NoteFix
        wrong="How your family has been?"
        right="How has your family been?"
        fix="has your family"
      />
    </NoteSlide>

    <NoteSlide title="現在完成式的問句不用 did" mark="has">
      <NoteFix
        wrong="What did these animals done?"
        right="What have these animals done?"
        fix="have"
      />
    </NoteSlide>

    <NoteSlide title="has 後面接過去分詞，不接過去式" mark="been">
      <NoteFix wrong="Why has this went up?" right="Why has this gone up?" fix="gone" />
    </NoteSlide>

    <NoteSlide title="過去簡單式問過去一段結束的時間" mark="has">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'How', kind: 'dim' },
          { t: 'was', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'your trip' },
          { t: 'last week?', role: '結束的時間' },
        ]"
      />
      <p class="translation">你上禮拜的旅行怎麼樣？</p>
    </NoteSlide>

    <NoteSlide title="How is 問現在，How has ... been 問這段時間" mark="has">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'How', kind: 'dim' },
          { t: 'is', role: '現在', kind: 'key', ring: true },
          { t: 'your family?', kind: 'dim' },
        ]"
      />
      <p class="translation">你家人好嗎？</p>
    </NoteSlide>

    <NoteSlide title="現在完成進行式問一直在做的動作" mark="has">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'What', kind: 'dim' },
          { t: 'have you been doing', role: '一直在做', kind: 'key', ring: true },
          { t: 'all day?', kind: 'dim' },
        ]"
      />
      <p class="translation">你一整天都在做什麼？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
