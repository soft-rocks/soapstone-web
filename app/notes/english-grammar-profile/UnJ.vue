<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-obligation-and-necessity, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I + must + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', kind: 'key', ring: true },
          { t: 'will be at school, so you', kind: 'dim' },
          { t: 'must', kind: 'key', ring: true },
          { t: 'arrive', role: '原形動詞' },
          { t: 'at 3 pm.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="I must、you must、mustn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">I must</span>
          <span>說話者自己覺得必須做。</span>
        </div>
        <div>
          <span class="term">you must</span>
          <span>說話者要求對方一定要做。</span>
        </div>
        <div>
          <span class="term">mustn't</span>
          <span>不可以。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說話者自己的要求" mark="must">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I must call my parents every day." :marks="['must']" /><span
              class="translation"
              >我必須每天打電話給我爸媽。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">must 常表示說話者自己覺得必要，不是外面的規定。</p>
    </NoteSlide>
    <NoteSlide title="叮嚀對方" mark="you must">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You mustn't forget your swimsuit."
              :marks="['You mustn\'t']"
            /><span class="translation">你不可以忘了帶泳衣。</span></span
          >
        </div>
      </div>
      <p class="remark">You must 和 You mustn't 常用在叮嚀朋友和家人。</p>
    </NoteSlide>
    <NoteSlide title="must 後面接原形動詞" mark="must">
      <NoteFix
        wrong="You must arriving at three."
        right="You must arrive at three."
        :fix="['arrive']"
      />
    </NoteSlide>
    <NoteSlide title="must 沒有過去式，說過去用 had to" mark="must">
      <NoteFix
        wrong="Yesterday I must walk home."
        right="Yesterday I had to walk home."
        :fix="['had to']"
      />
    </NoteSlide>
    <NoteSlide title="mustn't 後面接原形動詞">
      <NoteFix
        wrong="I mustn't forgot my keys."
        right="I mustn't forget my keys."
        :fix="['forget']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
