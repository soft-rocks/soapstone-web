<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-permission, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="can、can't / cannot、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">can</span>
          <span>允許。</span>
        </div>
        <div>
          <span class="term">can't / cannot</span>
          <span>不允許、禁止。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>允許或禁止的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="規定和告示" mark="You">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You can't bring your mobile phone into the exam."
              :marks="['You']"
            /><span class="translation">考試不可以帶手機。</span></span
          >
        </div>
      </div>
      <p class="remark">說學校、公司、場所的規定，主詞常用 you。這個 you 指所有人。</p>
    </NoteSlide>
    <NoteSlide title="問許可">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Can I use your bathroom?" :marks="[]" /><span class="translation"
              >我可以借用你的廁所嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">回答：Yes, of course.、Sure.、Sorry, you can't.。</p>
    </NoteSlide>
    <NoteSlide title="can 的否定是 can't 或 cannot" mark="can">
      <NoteFix wrong="You don't can smoke here." right="You can't smoke here." :fix="['can\'t']" />
    </NoteSlide>
    <NoteSlide title="can 後面直接接原形動詞" mark="can">
      <NoteFix
        wrong="You can to leave early today."
        right="You can leave early today."
        :fix="['leave']"
      />
    </NoteSlide>
    <NoteSlide title="問句裡，can 放在主詞前面" mark="can">
      <NoteFix
        wrong="I can open the window?"
        right="Can I open the window?"
        :fix="['Can', 'open']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
