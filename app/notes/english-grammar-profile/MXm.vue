<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-modal-perfect, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="情態動詞加 have been，再接過去分詞">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'it', role: '主詞' },
          { t: 'might', role: '情態動詞' },
          { t: 'have been', role: 'have been', kind: 'key' },
          { t: 'stolen.', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">可能是被偷了。</p>
    </NoteSlide>

    <NoteSlide title="不確定、很確定、很確定沒有" mark="might">
      <div class="rows is-labeled">
        <div>
          <span class="term">might / may / could</span>
          <span
            ><NoteMark sentence="It might have been stolen." :marks="['might']" /><span
              class="translation"
              >可能是被偷了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">must</span>
          <span
            ><NoteMark sentence="The window must have been left open." :marks="['must']" /><span
              class="translation"
              >窗戶一定是沒關。</span
            ></span
          >
        </div>
        <div>
          <span class="term">can't / couldn't</span>
          <span
            ><NoteMark sentence="The letter can't have been sent." :marks="['can\'t']" /><span
              class="translation"
              >信不可能寄出去了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="應該做卻沒做、本來可能發生" mark="might have been">
      <div class="rows is-labeled">
        <div>
          <span class="term">should</span>
          <span
            ><NoteMark
              sentence="They should have been given a chance."
              :marks="['should have been']"
            /><span class="translation">應該給他們一個機會的。</span></span
          >
        </div>
        <div>
          <span class="term">shouldn't</span>
          <span
            ><NoteMark
              sentence="It shouldn't have been used in the article."
              :marks="['shouldn\'t have been']"
            /><span class="translation">它不應該被用在那篇文章裡。</span></span
          >
        </div>
        <div>
          <span class="term">could</span>
          <span
            ><NoteMark
              sentence="These problems could have been avoided."
              :marks="['could have been']"
            /><span class="translation">這些問題本來是可以避免的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情態動詞後面接原形 have" mark="have">
      <NoteFix wrong="It might has been stolen." right="It might have been stolen." fix="have" />
    </NoteSlide>

    <NoteSlide title="被動要有 been" mark="been">
      <NoteFix
        wrong="The problem could have avoided."
        right="The problem could have been avoided."
        fix="been"
      />
    </NoteSlide>

    <NoteSlide title="應該做卻沒做用 should have been" mark="might">
      <NoteFix
        wrong="The children must have been told earlier, but nobody told them."
        right="The children should have been told earlier, but nobody told them."
        fix="should"
      />
    </NoteSlide>

    <NoteSlide title="寫 have，不寫 of" mark="have">
      <NoteFix
        wrong="The money should of been paid last week."
        right="The money should have been paid last week."
        fix="have"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
