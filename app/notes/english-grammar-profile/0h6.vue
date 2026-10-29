<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-with-when, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will + 原形動詞 + when + 主詞 + 現在簡單式">
      <div class="rows is-labeled">
        <div>
          <span class="term">when 子句</span>
          <span>說未來某件事發生的時間。動詞用現在簡單式。</span>
        </div>
        <div>
          <span class="term">另一半的句子</span>
          <span>用 will、can、祈使句這類說未來的形式。</span>
        </div>
        <div>
          <span class="term">when 子句放在句首</span>
          <span>後面加逗號。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="和祈使句一起用">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Please call me when you find it." :marks="[]" /><span
              class="translation"
              >你找到的時候請打給我。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">請別人在未來某個時間做事。</p>
    </NoteSlide>
    <NoteSlide title="主詞是 he、she、it 時" mark="when">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'll phone you when she arrives." :marks="['when']" /><span
              class="translation"
              >她到的時候我會打給你。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">when 子句的動詞要加 -&#x2060;s。</p>
    </NoteSlide>
    <NoteSlide title="when 說未來的時間時，後面用現在簡單式" mark="when">
      <NoteFix
        wrong="I'll tell you more when I will meet you."
        right="I'll tell you more when I meet you."
        :fix="['meet']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 he，現在簡單式的動詞加 -s">
      <NoteFix
        wrong="We'll start when he come."
        right="We'll start when he comes."
        :fix="['comes.']"
      />
    </NoteSlide>
    <NoteSlide title="when 子句以外的那一半說未來，要用 will" mark="when">
      <NoteFix
        wrong="I send you a photo when I get there."
        right="I'll send you a photo when I get there."
        :fix="['I\'ll']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
