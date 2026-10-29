<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-of-yours, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a friend of yours 說你的朋友之中的一個">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Maybe you can take', kind: 'dim' },
          { t: 'a friend', role: 'a + 名詞' },
          { t: 'of yours', role: '你的', kind: 'key' },
          { t: 'with you.', kind: 'dim' },
        ]"
      />
      <p class="translation">也許你可以帶一個朋友一起去。</p>
    </NoteSlide>

    <NoteSlide title="說話的人不知道是誰，或不需要說是誰" mark="of yours">
      <div class="rows is-labeled">
        <div>
          <span class="term">疑問</span>
          <span
            ><NoteMark
              sentence="Is he a colleague of yours?"
              :marks="['a colleague of yours?']"
            /><span class="translation">他是你的同事嗎？</span></span
          >
        </div>
        <div>
          <span class="term">不知道是誰</span>
          <span
            ><NoteMark
              sentence="A friend of yours called while you were out."
              :marks="['A friend of yours']"
            /><span class="translation">你出去的時候，你的一個朋友打來了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="that 加名詞加 of yours，常帶有說話的人的感覺" mark="of yours">
      <div class="rows is-labeled">
        <div>
          <span class="term">不耐煩</span>
          <span
            ><NoteMark
              sentence="That dog of yours keeps digging in my garden."
              :marks="['That dog of yours']"
            /><span class="translation">你那隻狗一直在我的花園裡挖洞。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面用 yours，不用 you" mark="of yours">
      <NoteFix wrong="Is she a friend of you?" right="Is she a friend of yours?" fix="yours?" />
    </NoteSlide>

    <NoteSlide title="a 和 your 不能放在一起" mark="a friend of yours">
      <NoteFix
        wrong="A your cousin is at the door."
        right="A cousin of yours is at the door."
        fix="A cousin of yours"
      />
    </NoteSlide>

    <NoteSlide title="yours 沒有撇號" mark="of yours">
      <NoteFix
        wrong="I met a friend of your's yesterday."
        right="I met a friend of yours yesterday."
        fix="yours"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
