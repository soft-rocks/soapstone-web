<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-deductions-and-conclusions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + has to / have to + be …" mark="be">
      <div class="rows is-labeled">
        <div>
          <span class="term">has to be / has got to be</span>
          <span>現在一定是。</span>
        </div>
        <div>
          <span class="term">had to be</span>
          <span>過去一定是。用在故事和敘述。</span>
        </div>
        <div>
          <span class="term">had to have + 過去分詞</span>
          <span>一定已經發生了。</span>
        </div>
        <div>
          <span class="term">be</span>
          <span>推論常用 be，也可以用其他動詞。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="和 must 比較">
      <div class="rows is-labeled">
        <div>
          <span class="term">must</span>
          <span
            ><NoteMark sentence="You must be tired." :marks="['must']" /><span class="translation"
              >你一定累了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">have got to</span>
          <span
            ><NoteMark sentence="You've got to be joking!" :marks="[]" /><span class="translation"
              >你一定是在開玩笑！</span
            ></span
          >
        </div>
      </div>
      <p class="remark">have to 和 have got to 推論的意思跟 must 差不多，語氣更強，比較口語。</p>
    </NoteSlide>
    <NoteSlide title="過去的推論">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It had to have been Peter." :marks="['had to have']" /><span
              class="translation"
              >那一定是彼得。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說過去的推論，可以用 had to be 或 had to have 加過去分詞。</p>
    </NoteSlide>
    <NoteSlide title="has got 後面要接 to 和原形動詞" mark="to">
      <NoteFix
        wrong="It's got be the wrong key."
        right="It's got to be the wrong key."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="had to have 後面接過去分詞">
      <NoteFix
        wrong="She had to have leave already."
        right="She had to have left already."
        :fix="['left']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形 be" mark="to">
      <NoteFix
        wrong="There has to is a mistake."
        right="There has to be a mistake."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
