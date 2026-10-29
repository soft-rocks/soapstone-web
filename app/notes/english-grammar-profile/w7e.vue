<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-general-truths-and-tendencies, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + can be + 形容詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Sitting all day long in front of a computer', role: '主詞' },
          { t: 'can be', kind: 'key', ring: true },
          { t: 'very stressful.', role: '形容詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="主詞、can be、形容詞" mark="Sitting all day">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            >常用動名詞（動詞&#x2060;-&#x2060;ing）或名詞，像 sitting all day、the city
            centre。</span
          >
        </div>
        <div>
          <span class="term">can be</span>
          <span>有時候會是、往往會是。</span>
        </div>
        <div>
          <span class="term">形容詞</span>
          <span>那件事常見的樣子，像 boring、stressful、dangerous。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="比較級" mark="can be">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The centre of town can be more dangerous at night."
              :marks="['can be']"
            /><span class="translation">市中心晚上可能比較危險。</span></span
          >
        </div>
      </div>
      <p class="remark">can be 後面也可以接比較級。</p>
    </NoteSlide>
    <NoteSlide title="can 後面接形容詞時，中間要有 be" mark="can">
      <NoteFix
        wrong="Spending a summer alone can boring."
        right="Spending a summer alone can be boring."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="can 後面接原形 be" mark="can">
      <NoteFix
        wrong="Living in a big city can is expensive."
        right="Living in a big city can be expensive."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="動作當主詞時，用動名詞">
      <NoteFix
        wrong="Sit all day can be bad for your back."
        right="Sitting all day can be bad for your back."
        :fix="['Sitting']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
