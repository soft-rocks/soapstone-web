<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-emphasis, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 副詞 + 動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">certainly / definitely</span>
          <span>一定、絕對。</span>
        </div>
        <div>
          <span class="term">obviously</span>
          <span>顯然。</span>
        </div>
        <div>
          <span class="term">really</span>
          <span>真的。</span>
        </div>
        <div>
          <span class="term">位置</span>
          <span>一般動詞前面，或助動詞、情態動詞後面。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="放在 will 和 would 後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I will certainly ring you on Friday." :marks="['will']" /><span
              class="translation"
              >我星期五一定會打給你。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">副詞放在 will、would、can't 這類詞後面。</p>
    </NoteSlide>
    <NoteSlide title="obviously 說很明顯的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="With your job, you obviously can't keep fit."
              :marks="['obviously']"
            /><span class="translation">做你那份工作，你顯然沒辦法保持健康。</span></span
          >
        </div>
      </div>
      <p class="remark">obviously 說一件很明顯、大家都看得出來的事。</p>
    </NoteSlide>
    <NoteSlide title="放在動詞前面要用副詞 definitely" mark="definitely">
      <NoteFix
        wrong="I definite recommend this book."
        right="I definitely recommend this book."
        :fix="['definitely']"
      />
    </NoteSlide>
    <NoteSlide title="副詞放在動詞前面，不放在動詞和受詞中間">
      <NoteFix
        wrong="I recommend definitely this hotel."
        right="I definitely recommend this hotel."
        :fix="['definitely', 'this']"
      />
    </NoteSlide>
    <NoteSlide title="拼法是 certainly">
      <NoteFix
        wrong="I will certanly call you."
        right="I will certainly call you."
        :fix="['certainly']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
