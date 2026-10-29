<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-questions-386, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="是非疑問句" mark="I">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Will you come to my party?" :marks="['Will']" /><span
              class="translation"
              >你會來我的派對嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Shall we go by bus?" :marks="['we']" /><span class="translation"
              >我們搭公車去好嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Will it rain tomorrow? — Yes, it will. / No, it won't."
              :marks="['won\'t.', 'Will']"
            /><span class="translation">明天會下雨嗎？——會。／不會。</span></span
          >
        </div>
      </div>
      <p class="remark">簡答用 will 或 won't。</p>
    </NoteSlide>
    <NoteSlide title="wh- 疑問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="When will you be back?" :marks="[]" /><span class="translation"
              >你什麼時候回來？</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Where shall we meet?" :marks="[]" /><span class="translation"
              >我們在哪裡碰面？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="wh- 疑問句裡，will 放在主詞前面">
      <NoteFix
        wrong="Where you will go tomorrow?"
        right="Where will you go tomorrow?"
        :fix="['will', 'go']"
      />
    </NoteSlide>
    <NoteSlide title="問對方的打算，主詞是 you，用 will">
      <NoteFix wrong="Shall you come tomorrow?" right="Will you come tomorrow?" :fix="['Will']" />
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞">
      <NoteFix
        wrong="Will she comes to the party?"
        right="Will she come to the party?"
        :fix="['come']"
      />
    </NoteSlide>
    <NoteSlide title="shall 的疑問句不加 do" mark="shall">
      <NoteFix
        wrong="What do I shall bring?"
        right="What shall I bring?"
        :fix="['shall', 'bring?']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
