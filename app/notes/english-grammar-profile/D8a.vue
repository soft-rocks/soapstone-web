<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-596, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + used to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When I was a little girl,', kind: 'dim' },
          { t: 'we', role: '主詞' },
          { t: 'used to', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'together all the time.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="used to、原形動詞" mark="used to">
      <div class="rows is-labeled">
        <div>
          <span class="term">used to</span>
          <span>以前常常、過去曾經。所有主詞都用 used to。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>過去常做的事，或過去的狀態。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說過去的狀態" mark="used to be">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I used to have long hair." :marks="['used to have']" /><span
              class="translation"
              >我以前留長頭髮。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">used to be、used to have、used to live 常說過去的狀態。</p>
    </NoteSlide>
    <NoteSlide title="現在不再這樣" mark="used to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I used to share my room with my brother. Now I have my own."
              :marks="['used to']"
            /><span class="translation"
              >我以前跟我哥哥住同一個房間。現在我有自己的房間。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">used to 表示現在已經不是這樣了。常接著說現在的情況。</p>
    </NoteSlide>
    <NoteSlide title="肯定句寫成 used to" mark="used to">
      <NoteFix
        wrong="I use to share a room with my brother."
        right="I used to share a room with my brother."
        :fix="['used']"
      />
    </NoteSlide>
    <NoteSlide title="used to 後面接原形動詞" mark="used to">
      <NoteFix
        wrong="We used to playing in the park."
        right="We used to play in the park."
        :fix="['play']"
      />
    </NoteSlide>
    <NoteSlide title="used 後面要接 to" mark="used">
      <NoteFix wrong="She used live in Paris." right="She used to live in Paris." :fix="['to']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
