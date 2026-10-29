<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-little-few, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="修飾語加 little 和不可數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'working hard for', role: '動詞', kind: 'dim' },
          { t: 'so', role: '修飾語', kind: 'key' },
          { t: 'little', role: 'little', kind: 'key' },
          { t: 'money.', role: '不可數名詞' },
        ]"
      />
      <p class="translation">拚命工作卻只拿這麼一點錢</p>
    </NoteSlide>

    <NoteSlide title="修飾語和意思" mark="so little">
      <div class="rows is-labeled">
        <div>
          <span class="term">so</span>
          <span
            ><NoteMark sentence="There are so few pandas left." :marks="['so few']" /><span
              class="translation"
              >剩下的熊貓這麼少。</span
            ></span
          >
        </div>
        <div>
          <span class="term">very</span>
          <span
            ><NoteMark sentence="I spend very little time outside." :marks="['very little']" /><span
              class="translation"
              >我很少待在戶外。</span
            ></span
          >
        </div>
        <div>
          <span class="term">too</span>
          <span
            ><NoteMark
              sentence="There were too few chairs for everyone."
              :marks="['too few']"
            /><span class="translation">椅子太少，不夠大家坐。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="little 和 a little" mark="little">
      <div class="rows is-labeled">
        <div>
          <span class="term">little</span>
          <span
            ><NoteMark sentence="I have little time." :marks="['little']" /><span
              class="translation"
              >我沒什麼時間。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a little</span>
          <span
            ><NoteMark sentence="I have a little time." :marks="['a little']" /><span
              class="translation"
              >我有一點時間。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="可數名詞用 few" mark="little">
      <NoteFix
        wrong="There are so little animals left."
        right="There are so few animals left."
        fix="few"
      />
    </NoteSlide>

    <NoteSlide title="little 不加 of" mark="little">
      <NoteFix
        wrong="We have so little of money left."
        right="We have so little money left."
        fix="little money"
      />
    </NoteSlide>

    <NoteSlide title="few 後面接複數名詞" mark="little">
      <NoteFix
        wrong="Very few student passed the test."
        right="Very few students passed the test."
        fix="students"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
