<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-514, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + might + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I think it', role: '主詞' },
          { t: 'might', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'in your bedroom.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="might、原形動詞" mark="might">
      <div class="rows is-labeled">
        <div>
          <span class="term">might</span>
          <span>可能。所有主詞都用 might，不加 -&#x2060;s。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>可能發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="might 和 may" mark="might">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It may rain." :marks="['may']" /><span class="translation"
              >可能會下雨。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It might rain." :marks="['might']" /><span class="translation"
              >說不定會下雨。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">might 和 may 的意思差不多。might 常表示說話者的把握更小一點。</p>
    </NoteSlide>
    <NoteSlide title="might 後面不加 to" mark="might">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We might go." :marks="['might']" /><span class="translation"
              >我們可能會去。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">might 是情態動詞。後面直接接原形動詞。</p>
    </NoteSlide>
    <NoteSlide title="might 後面直接接原形動詞" mark="might">
      <NoteFix wrong="It might to be cold." right="It might be cold." :fix="['be']" />
    </NoteSlide>
    <NoteSlide title="might 後面接原形動詞" mark="might">
      <NoteFix
        wrong="She might likes the present."
        right="She might like the present."
        :fix="['like']"
      />
    </NoteSlide>
    <NoteSlide title="形容詞前面要有 be" mark="be">
      <NoteFix
        wrong="The weather might hot tomorrow."
        right="The weather might be hot tomorrow."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
