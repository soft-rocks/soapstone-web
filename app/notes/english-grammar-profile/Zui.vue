<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-response-tokens-646, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title='"…？" "Definitely." / "Absolutely." / "Certainly."'>
      <div class="rows is-labeled">
        <div>
          <span class="term">Definitely / Absolutely</span>
          <span>絕對是、當然。</span>
        </div>
        <div>
          <span class="term">Certainly</span>
          <span>當然。比較正式、客氣。</span>
        </div>
        <div>
          <span class="term">Probably / Possibly</span>
          <span>大概、也許。不那麼確定。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="否定的回答">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence='"Are you coming?" "Definitely not."' :marks="['not.']" /><span
              class="translation"
              >「你要來嗎？」「絕對不去。」</span
            ></span
          >
        </div>
      </div>
      <p class="remark">否定的時候在副詞後面加 not。</p>
    </NoteSlide>
    <NoteSlide title="自問自答">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Is it worth the money? Absolutely." :marks="[]" /><span
              class="translation"
              >它值這個錢嗎？絕對值得。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">寫作的時候，作者可以先問一個問題，再用一個字回答。</p>
    </NoteSlide>
    <NoteSlide title="簡短的回答用副詞">
      <NoteFix
        wrong='"Will you help?" "Definite."'
        right='"Will you help?" "Definitely."'
        :fix="['Definitely.']"
      />
    </NoteSlide>
    <NoteSlide title="否定的時候 not 放在副詞後面">
      <NoteFix
        wrong='"Is he coming?" "Not definitely."'
        right='"Is he coming?" "Definitely not."'
        :fix="['Definitely not.']"
      />
    </NoteSlide>
    <NoteSlide title="拼法是 definitely" mark="Definitely.">
      <NoteFix
        wrong='"Do you agree?" "Definately."'
        right='"Do you agree?" "Definitely."'
        :fix="['Definitely.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
