<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-negative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will not have been + 動詞-ing" mark="won't">
      <div class="rows is-labeled">
        <div>
          <span class="term">will not / won't</span>
          <span>否定。not 放在 will 後面，have 前面。</span>
        </div>
        <div>
          <span class="term">have been + 動詞&#x2060;-&#x2060;ing</span>
          <span>一直在進行的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="和持續的時間一起用" mark="for">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="By the wedding, they won't have been dating for long."
              :marks="['for']"
            /><span class="translation">到婚禮的時候，他們交往還沒多久。</span></span
          >
        </div>
      </div>
      <p class="remark">
        這個句型常接 for 加一段時間。說話者說的是動作到那個時間點還不滿這段時間。
      </p>
    </NoteSlide>
    <NoteSlide title="not 放在 will 後面、have 前面" mark="have">
      <NoteFix
        wrong="I will have not been working here long."
        right="I will not have been working here long."
        :fix="['not', 'been']"
      />
    </NoteSlide>
    <NoteSlide title="won't 後面的 have 用原形" mark="won't">
      <NoteFix
        wrong="She won't has been living here for a year."
        right="She won't have been living here for a year."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面先接 been，再接動詞-ing" mark="have">
      <NoteFix
        wrong="By May we won't have studying here for two years."
        right="By May we won't have been studying here for two years."
        :fix="['been']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
