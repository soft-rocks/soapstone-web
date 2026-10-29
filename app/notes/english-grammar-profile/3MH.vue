<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-reports-of-questions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + asked + (人) + 疑問詞 + 主詞 + had + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">asked</span>
          <span>轉述的動詞，用過去式。</span>
        </div>
        <div>
          <span class="term">疑問詞 / if</span>
          <span>帶出問題。</span>
        </div>
        <div>
          <span class="term">had + 過去分詞</span>
          <span>問題裡更早發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="直接問句和間接問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接</span>
          <span
            ><NoteMark
              sentence='My friend had a bandage on her hand. "What happened?" I asked.'
              :marks="['happened']"
            /><span class="translation">我朋友手上包著繃帶。我問：「發生了什麼事？」</span></span
          >
        </div>
        <div>
          <span class="term">間接</span>
          <span
            ><NoteMark
              sentence="My friend had a bandage on her hand. I asked what had happened."
              :marks="['had happened']"
            /><span class="translation">我朋友手上包著繃帶。我問發生了什麼事。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="子句用直述句的順序" mark="had">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="My neighbour's cat was missing. He asked me if I had seen her."
              :marks="['had']"
            /><span class="translation">我鄰居的貓不見了。他問我有沒有看到牠。</span></span
          >
        </div>
      </div>
      <p class="remark">轉述的問題用直述句的順序，主詞在 had 前面。</p>
    </NoteSlide>
    <NoteSlide title="轉述的問題用直述句的順序">
      <NoteFix
        wrong="I asked my son who had he invited to the party."
        right="I asked my son who he had invited to the party."
        :fix="['he had']"
      />
    </NoteSlide>
    <NoteSlide title="轉述過去更早的事，用 had 加過去分詞" mark="had">
      <NoteFix
        wrong="My aunt asked me if I did see the new museum."
        right="My aunt asked me if I had seen the new museum."
        :fix="['had seen']"
      />
    </NoteSlide>
    <NoteSlide title="轉述的問題是直述句，句尾用句號">
      <NoteFix
        wrong="I asked the nurse what had happened to my father?"
        right="I asked the nurse what had happened to my father."
        :fix="['father.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
