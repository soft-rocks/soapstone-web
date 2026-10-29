<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-might-as-well, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + might as well + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If they only want to have fun,', kind: 'dim' },
          { t: 'they', role: '主詞' },
          { t: 'might as well', kind: 'key', ring: true },
          { t: 'stay', role: '原形動詞' },
          { t: 'at home.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="might as well、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">might as well</span>
          <span>不如、乾脆。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>說話者覺得最合理的做法。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="帶批評的意思" mark="might as well">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If you don't listen, I might as well talk to the wall."
              :marks="['might as well']"
            /><span class="translation">如果你不聽，我還不如對牆壁說話。</span></span
          >
        </div>
      </div>
      <p class="remark">
        might as well 常說：既然結果一樣，做另一件事也沒差別。這個說法常帶一點批評。
      </p>
    </NoteSlide>
    <NoteSlide title="might as well 後面直接接原形動詞" mark="might as well">
      <NoteFix
        wrong="We might as well to leave now."
        right="We might as well leave now."
        :fix="['leave']"
      />
    </NoteSlide>
    <NoteSlide title="might as well 後面接原形動詞" mark="might as well">
      <NoteFix
        wrong="We might as well going home."
        right="We might as well go home."
        :fix="['go']"
      />
    </NoteSlide>
    <NoteSlide title="might as well 後面的動詞不變化，一律用原形" mark="might as well">
      <NoteFix
        wrong="I might as well went to bed."
        right="I might as well go to bed."
        :fix="['go']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
