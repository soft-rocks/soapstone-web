<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 098, as slides, in the order of notes/dragon-english-basic-100/098.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="be worth 加動詞-ing，表示值得做某件事" mark="is worth listening">
      <div class="rows is-labeled">
        <div>
          <span class="term">read</span>
          <span
            ><NoteMark sentence="This book is worth reading." :marks="['is worth reading']" /><span
              class="translation"
              >這本書值得一讀。</span
            ></span
          >
        </div>
        <div>
          <span class="term">visit</span>
          <span
            ><NoteMark sentence="Kyoto is worth visiting." :marks="['is worth visiting']" /><span
              class="translation"
              >京都值得一去。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">主詞是那個動作的對象。</p>
    </NoteSlide>

    <NoteSlide title="動詞後面需要介系詞時，be worth 的句子要保留介系詞" mark="listening to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'This music', role: '主詞\n動作的對象' },
          { t: 'is worth', kind: 'dim' },
          { t: 'listening', role: '動詞-ing' },
          { t: 'to', role: '介系詞', kind: 'key', ring: true },
          { t: 'over and over again.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">動詞是 <code>listen to</code>，所以 <code>to</code> 要保留。</p>
    </NoteSlide>

    <NoteSlide title="recommend 後面直接接推薦的東西" mark="I recommend it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Can you', kind: 'dim' },
          { t: 'recommend', role: '推薦' },
          { t: 'a good restaurant?', role: '推薦的東西', kind: 'key' },
        ]"
      />
      <p class="translation">你可以推薦一家好餐廳嗎？</p>
    </NoteSlide>

    <NoteSlide title="要說推薦給誰，用 to 加人" mark="I recommend it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'recommend', role: '推薦' },
          { t: 'this book', role: '推薦的東西' },
          { t: 'to all students.', role: 'to + 人', kind: 'key' },
        ]"
      />
      <p class="translation">我把這本書推薦給所有學生。</p>
    </NoteSlide>

    <NoteSlide title="recommend 接動詞-ing，表示建議做某件事" mark="recommend">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'recommend', role: '建議' },
          { t: 'taking the train.', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="translation">我建議搭火車。</p>
    </NoteSlide>
  </NoteDeck>
</template>
