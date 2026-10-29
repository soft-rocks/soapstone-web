<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-do-emphasis, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="祈使句前面加 Do，語氣熱情或強調" mark="Do let">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Do', role: '加強語氣', kind: 'key', ring: true },
          { t: 'come in', role: '原形動詞', kind: 'key' },
          { t: 'out of the rain and dry off.', kind: 'dim' },
        ]"
      />
      <p class="translation">快進來躲雨，把身體擦乾。</p>
    </NoteSlide>

    <NoteSlide title="邀請、請對方聯絡、強調指示" mark="Do">
      <div class="rows is-labeled">
        <div>
          <span class="term">邀請</span>
          <span
            ><NoteMark
              sentence="Do stay the night. The last train has gone."
              :marks="['Do stay']"
            /><span class="translation">留下來過夜吧，最後一班火車已經開走了。</span></span
          >
        </div>
        <div>
          <span class="term">請對方聯絡</span>
          <span
            ><NoteMark
              sentence="It was lovely to meet you on the course. Do keep in touch."
              :marks="['Do keep']"
            /><span class="translation">很高興在課程上認識你。一定要保持聯絡。</span></span
          >
        </div>
        <div>
          <span class="term">強調指示</span>
          <span
            ><NoteMark
              sentence="The landlord wants your answer today. Do read the contract before you sign it."
              :marks="['Do read']"
            /><span class="translation">房東今天要你的答覆。簽約前一定要先讀合約。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Do be + 形容詞" mark="Do">
      <NoteMark
        sentence="The path to the bus stop is frozen. Do be careful on the ice."
        :marks="['Do be careful']"
      />
      <p class="translation">去公車站的路結冰了。在冰上一定要小心。</p>
    </NoteSlide>

    <NoteSlide title="Do 後面用原形動詞" mark="let">
      <NoteFix
        wrong="Do takes a seat by the fire."
        right="Do take a seat by the fire."
        fix="take"
      />
    </NoteSlide>

    <NoteSlide title="祈使句的強調一律用 Do" mark="Do">
      <NoteFix wrong="Does sit down, please." right="Do sit down, please." fix="Do" />
    </NoteSlide>

    <NoteSlide title="Do 後面不加 to" mark="Do let">
      <NoteFix wrong="Do to email me the photos." right="Do email me the photos." fix="Do email" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
