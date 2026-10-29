<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-negative-will, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="will not 加原形動詞說未來不會發生的事" mark="will not be">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Without them,', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'will not', role: '否定', kind: 'key', ring: true },
          { t: 'be able to play', role: '原形動詞' },
          { t: 'football.', kind: 'dim' },
        ]"
      />
      <p class="translation">少了它們，我就沒辦法踢足球了。</p>
      <p class="remark">them 指的是足球鞋。</p>
    </NoteSlide>

    <NoteSlide title="won't 是 will not 的縮寫" mark="will not">
      <div class="rows is-labeled">
        <div>
          <span class="term">will not</span>
          <span>書面和正式的說法，也用來加強語氣。</span>
        </div>
        <div>
          <span class="term">won't</span>
          <span
            ><NoteMark sentence="I won't be at home before seven." :marks="['won\'t']" /><span
              class="translation"
              >七點以前我不會在家。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="won't be able to 表示以後沒辦法做" mark="will not be able to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'won\'t be able to', role: '沒辦法', kind: 'key', ring: true },
          { t: 'call you tonight.', role: '原形動詞' },
        ]"
      />
      <p class="translation">我今晚沒辦法打給你。</p>
    </NoteSlide>

    <NoteSlide title="will not 的縮寫是 won't" mark="will not">
      <NoteFix wrong="I willn't be late." right="I won't be late." fix="won't" />
    </NoteSlide>

    <NoteSlide title="not 放在 will 後面、動詞前面" mark="will not be">
      <NoteFix
        wrong="We will go not to the beach."
        right="We will not go to the beach."
        fix="will not go"
      />
    </NoteSlide>

    <NoteSlide title="won't 後面接原形動詞" mark="be">
      <NoteFix wrong="He won't comes tomorrow." right="He won't come tomorrow." fix="come" />
    </NoteSlide>

    <NoteSlide title="未來不會發生的事用 won't，不用 don't" mark="will not">
      <NoteFix wrong="I don't be there tomorrow." right="I won't be there tomorrow." fix="won't" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
