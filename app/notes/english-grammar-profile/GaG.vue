<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-suggestions-581, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I think + we / you + should + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I think', kind: 'key', ring: true },
          { t: 'we', kind: 'key', ring: true },
          { t: 'should', kind: 'key', ring: true },
          { t: 'meet', role: '原形動詞' },
          { t: 'at 2 pm, and my mother will take us there, so don\'t worry.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="we should、you should、I think">
      <div class="rows is-labeled">
        <div>
          <span class="term">we should</span>
          <span>我們應該。提議大家一起做。</span>
        </div>
        <div>
          <span class="term">you should</span>
          <span>你應該。請對方做某件事。</span>
        </div>
        <div>
          <span class="term">I think</span>
          <span>放在前面，讓提議比較客氣。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="提議時間和地點" mark="I think we should meet">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I think we should meet outside the cinema."
              :marks="['I think we should meet']"
            /><span class="translation">我想我們在電影院外面見面。</span></span
          >
        </div>
      </div>
      <p class="remark">I think we should meet 常用來提議見面的時間和地點。</p>
    </NoteSlide>
    <NoteSlide title="請對方帶東西">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You should bring your guitar."
              :marks="['You should bring']"
            /><span class="translation">你應該帶你的吉他來。</span></span
          >
        </div>
      </div>
      <p class="remark">You should bring 常用來告訴對方要帶什麼。</p>
    </NoteSlide>
    <NoteSlide title="should 後面直接接原形動詞" mark="should">
      <NoteFix
        wrong="I think we should to meet at two."
        right="I think we should meet at two."
        :fix="['meet']"
      />
    </NoteSlide>
    <NoteSlide title="should 後面接原形動詞" mark="should">
      <NoteFix
        wrong="You should bringing some food."
        right="You should bring some food."
        :fix="['bring']"
      />
    </NoteSlide>
    <NoteSlide title="這是直述句，主詞放在 should 前面" mark="should">
      <NoteFix
        wrong="I think should we meet early."
        right="I think we should meet early."
        :fix="['we', 'meet']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
