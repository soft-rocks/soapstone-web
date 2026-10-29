<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-suggestion, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="You + have to / have got to + 原形動詞" mark="see">
      <div class="rows is-labeled">
        <div>
          <span class="term">you have to / you've got to</span>
          <span>你一定要。說話者強烈建議。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>建議的事，常用 see、try、go、read、visit。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="義務和建議">
      <div class="rows is-labeled">
        <div>
          <span class="term">義務</span>
          <span
            ><NoteMark
              sentence="You have to show your ticket at the door."
              :marks="['have to']"
            /><span class="translation">你必須在門口出示門票。</span></span
          >
        </div>
        <div>
          <span class="term">建議</span>
          <span
            ><NoteMark
              sentence="You have to try the chocolate cake here."
              :marks="['have to']"
            /><span class="translation">你一定要試試這裡的巧克力蛋糕。</span></span
          >
        </div>
      </div>
      <p class="remark">have to 可以說義務，也可以說建議。看說話的情況判斷。</p>
    </NoteSlide>
    <NoteSlide title="加上理由">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You have to see her films. She's brilliant." :marks="[]" /><span
              class="translation"
              >你一定要看她的電影。她太棒了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">強烈建議常接著說理由，讓對方相信。</p>
    </NoteSlide>
    <NoteSlide title="have got 後面要接 to 和原形動詞" mark="to">
      <NoteFix
        wrong="You've got visit this place."
        right="You've got to visit this place."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="You have to trying this soup."
        right="You have to try this soup."
        :fix="['try']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 you，用 have to" mark="you">
      <NoteFix
        wrong="You has to see this film."
        right="You have to see this film."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
