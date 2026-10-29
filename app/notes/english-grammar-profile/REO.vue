<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-it-linking-verb-adjectives-clause, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide
      title="It + is / seems / appears / looks / becomes + 形容詞 + (that) + 子句"
      mark="seems"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">it</span>
          <span>形式主詞，指後面的 that 子句。</span>
        </div>
        <div>
          <span class="term">連綴動詞</span>
          <span>is、seems、appears、looks、becomes。</span>
        </div>
        <div>
          <span class="term">形容詞</span>
          <span>判斷，像 clear、obvious、possible、true、strange。</span>
        </div>
        <div>
          <span class="term">that 子句</span>
          <span>被判斷的那件事。that 可以省略。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="加上 to me" mark="to me">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It seems obvious to me that he is lying."
              :marks="['to me']"
            /><span class="translation">在我看來，他顯然在說謊。</span></span
          >
        </div>
      </div>
      <p class="remark">to me 放在形容詞後面，表示這是說話者的看法。</p>
    </NoteSlide>
    <NoteSlide title="句子要有主詞" mark="It">
      <NoteFix
        wrong="Seems clear that he is right."
        right="It seems clear that he is right."
        :fix="['It seems']"
      />
    </NoteSlide>
    <NoteSlide title="that 子句要有自己的主詞" mark="that">
      <NoteFix
        wrong="It is obvious that prefer books."
        right="It is obvious that some people prefer books."
        :fix="['some people']"
      />
    </NoteSlide>
    <NoteSlide title="連綴動詞後面接形容詞，不接副詞">
      <NoteFix
        wrong="It seems clearly that swimming is good for you."
        right="It seems clear that swimming is good for you."
        :fix="['clear']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
