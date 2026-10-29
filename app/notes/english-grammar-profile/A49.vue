<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-with-adverbs-629, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + would + 副詞 + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'would', kind: 'key', ring: true },
          { t: 'definitely', role: '副詞' },
          { t: 'choose', role: '原形動詞' },
          { t: 'to live by the seaside!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="would really、would probably、would certainly / definitely">
      <div class="rows is-labeled">
        <div>
          <span class="term">would really</span>
          <span>真的會。</span>
        </div>
        <div>
          <span class="term">would probably</span>
          <span>可能會。</span>
        </div>
        <div>
          <span class="term">would certainly / definitely</span>
          <span>一定會。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>想像中會做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="副詞的位置" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It would probably be the best idea."
              :marks="['would', 'be']"
            /><span class="translation">這可能會是最好的主意。</span></span
          >
        </div>
      </div>
      <p class="remark">副詞放在 would 後面。動詞是 be 的時候，副詞放在 would 和 be 中間。</p>
    </NoteSlide>
    <NoteSlide title="縮寫的時候" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'd really like to come." :marks="[]" /><span class="translation"
              >我真的很想來。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">would 縮寫成 'd 的時候，副詞放在 'd 後面。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 would 和原形動詞中間" mark="would">
      <NoteFix
        wrong="You would enjoy really it."
        right="You would really enjoy it."
        :fix="['really', 'it.']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面接原形動詞" mark="would">
      <NoteFix
        wrong="She would definitely chooses the sea."
        right="She would definitely choose the sea."
        :fix="['choose']"
      />
    </NoteSlide>
    <NoteSlide title="副詞後面直接接原形動詞">
      <NoteFix
        wrong="It would probably to be better."
        right="It would probably be better."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
