<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-inversion-imagined-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Had + 主詞 + 過去分詞, + 主詞 + would / could have + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">Had + 主詞</span>
          <span>代替 If + 主詞 + had。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>和事實相反的過去。</span>
        </div>
        <div>
          <span class="term">would have / could have</span>
          <span>想像中的結果。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="否定">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We stayed in all weekend. Had it not rained, we would have gone for a walk."
              :marks="['not']"
            /><span class="translation"
              >我們整個週末都待在家。如果沒下雨，我們就會去散步了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">否定的倒裝把 not 放在主詞後面，不縮寫。</p>
    </NoteSlide>
    <NoteSlide title="倒裝的時候不用 if">
      <NoteFix
        wrong="If had I known about the strike, I would have taken the bus."
        right="Had I known about the strike, I would have taken the bus."
        :fix="['Had']"
      />
    </NoteSlide>
    <NoteSlide title="倒裝的否定把 not 放在主詞後面，不縮寫">
      <NoteFix
        wrong="Hadn't the bus broken down, we would have arrived on time."
        right="Had the bus not broken down, we would have arrived on time."
        :fix="['Had', 'not']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="Had">
      <NoteFix
        wrong="Had I knew you were moving, I would have helped you pack."
        right="Had I known you were moving, I would have helped you pack."
        :fix="['known']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
