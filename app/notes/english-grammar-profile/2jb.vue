<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-after-because-explanations, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 過去式 / 過去進行式 + because + 主詞 + had + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'was', role: '過去式 / 過去進行式' },
          { t: 'driving to my parents\' house', kind: 'dim' },
          { t: 'because', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'had', kind: 'key', ring: true },
          { t: 'arranged', role: '過去分詞' },
          { t: 'to have dinner with them.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="because、had + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">because</span>
          <span>因為。</span>
        </div>
        <div>
          <span class="term">had + 過去分詞</span>
          <span>更早發生、當作原因的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用在故事和報告">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="He was sleeping, because he had lost a lot of blood."
              :marks="[]"
            /><span class="translation">他在睡覺，因為他失血很多。</span></span
          >
        </div>
      </div>
      <p class="remark">故事、報告和解釋常用這個句型說明原因。</p>
    </NoteSlide>
    <NoteSlide title="this was because">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I was late. This was because I had missed the bus."
              :marks="['This was because']"
            /><span class="translation">我遲到了。這是因為我錯過了公車。</span></span
          >
        </div>
      </div>
      <p class="remark">this was because 加過去完成式，正式地解釋前面說的事。</p>
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="had">
      <NoteFix
        wrong="I was tired because I had walk all day."
        right="I was tired because I had walked all day."
        :fix="['walked']"
      />
    </NoteSlide>
    <NoteSlide title="說過去的原因用 had" mark="had">
      <NoteFix
        wrong="He was late because he has missed the bus."
        right="He was late because he had missed the bus."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="because 和 so 不一起用" mark="because">
      <NoteFix
        wrong="Because I had eaten, so I wasn't hungry."
        right="Because I had eaten, I wasn't hungry."
        :fix="['I#2']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
