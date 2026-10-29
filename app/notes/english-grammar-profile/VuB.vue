<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-it-linking-verb-adjectives-that, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + is / seems + 形容詞 + (that) + 子句" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">it</span>
          <span>形式主詞，指後面的子句。</span>
        </div>
        <div>
          <span class="term">形容詞</span>
          <span>引出重點的判斷。</span>
        </div>
        <div>
          <span class="term">that 子句</span>
          <span>說話者要強調的重點。that 可以省略。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="引出結論：clear / obvious">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It is obvious you can't cycle forty kilometres twice a day."
              :marks="[]"
            /><span class="translation">很明顯，你沒辦法一天騎兩趟四十公里。</span></span
          >
        </div>
      </div>
      <p class="remark">寫作和演講裡，常用來帶出結論。</p>
    </NoteSlide>
    <NoteSlide title="強調要求：essential / crucial / vital">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It is crucial that you take part." :marks="[]" /><span
              class="translation"
              >你一定要參加。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">在工作的信件裡，常用來強調對方一定要做的事。</p>
    </NoteSlide>
    <NoteSlide title="it 後面要有連綴動詞" mark="It">
      <NoteFix
        wrong="It clear that we need computers."
        right="It is clear that we need computers."
        :fix="['is']"
      />
    </NoteSlide>
    <NoteSlide title="形式主詞用 it" mark="It">
      <NoteFix
        wrong="This is obvious that he is tired."
        right="It is obvious that he is tired."
        :fix="['It']"
      />
    </NoteSlide>
    <NoteSlide title="that 子句的主詞後面直接接動詞" mark="that">
      <NoteFix
        wrong="It is crucial that you to take part."
        right="It is crucial that you take part."
        :fix="['take']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
