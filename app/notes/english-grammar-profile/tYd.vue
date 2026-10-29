<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-possibility-in-the-past-524, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + might not have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The survey', role: '主詞' },
          { t: 'might not have', kind: 'key', ring: true },
          { t: 'asked', role: '過去分詞' },
          { t: 'an accurate sample of people.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="might not have、過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">might not have</span>
          <span>過去可能沒有。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>可能沒發生或沒做好的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="質疑報告和調查">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The figures might not have included part-time workers."
              :marks="[]"
            /><span class="translation">這些數字可能沒有包括兼職員工。</span></span
          >
        </div>
      </div>
      <p class="remark">寫信給報社或主管時，常用這個句型小心地質疑資料。</p>
    </NoteSlide>
    <NoteSlide title="安慰和解釋">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Even though things might not have gone as you expected, we thank you for your help."
              :marks="[]"
            /><span class="translation"
              >雖然事情可能沒有照您預期的發展，我們還是謝謝您的幫忙。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Even though … might not have … 先承認事情不如預期，再說另一個重點。</p>
    </NoteSlide>
    <NoteSlide title="might not 後面接原形 have" mark="might not">
      <NoteFix
        wrong="The report might not has shown everything."
        right="The report might not have shown everything."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="They might not have ask enough people."
        right="They might not have asked enough people."
        :fix="['asked']"
      />
    </NoteSlide>
    <NoteSlide title="even though 和 but 不一起用">
      <NoteFix
        wrong="Even though it might not have worked, but we learned a lot."
        right="Even though it might not have worked, we learned a lot."
        :fix="['we']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
