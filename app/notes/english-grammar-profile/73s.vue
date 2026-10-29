<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-yours-as-object, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="yours 等於 your 加名詞，放在 be 後面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My favorite meal is spaghetti with garlic bread.', kind: 'dim' },
          { t: 'What\'s', role: '疑問詞 + be' },
          { t: 'yours?', role: '= your favorite meal', kind: 'key' },
        ]"
      />
      <p class="translation">我最喜歡的一餐是義大利麵配大蒜麵包。你的呢？</p>
    </NoteSlide>

    <NoteSlide title="yours 放在動詞、be 或介系詞後面" mark="yours?">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞後面</span>
          <span
            ><NoteMark sentence="I can't find my pen. Can I use yours?" :marks="['yours?']" /><span
              class="translation"
              >我找不到我的筆。我可以用你的嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">be 後面</span>
          <span>Is this yours?</span>
        </div>
        <div>
          <span class="term">介系詞後面</span>
          <span>My phone is like yours.</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="先說自己的事，再用 yours 問對方" mark="What's yours?">
      <div class="rows is-labeled">
        <div>
          <span class="term">問對方</span>
          <span
            ><NoteMark
              sentence="My birthday is in March. When's yours?"
              :marks="['When\'s yours?']"
            /><span class="translation">我的生日在三月。你的是什麼時候？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="yours 沒有撇號" mark="yours?">
      <NoteFix wrong="Is this coat your's?" right="Is this coat yours?" fix="yours?" />
    </NoteSlide>

    <NoteSlide title="後面沒有名詞時用 yours" mark="yours?">
      <NoteFix wrong="My house is near your." right="My house is near yours." fix="yours." />
    </NoteSlide>

    <NoteSlide title="名詞前面用 your，yours 後面不接名詞">
      <NoteFix wrong="I like yours shoes." right="I like your shoes." fix="your" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
