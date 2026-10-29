<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-consoling-or-justifying, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + might + 原形動詞, but + 句子">
      <div class="rows is-labeled">
        <div>
          <span class="term">might</span>
          <span>承認一個缺點或別人的看法。</span>
        </div>
        <div>
          <span class="term">but</span>
          <span>帶出安慰或理由。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="安慰" mark="might not have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It might not have been a huge success, but people enjoyed themselves."
              :marks="['might not have', 'but']"
            /><span class="translation">這可能不算非常成功，可是大家都玩得很開心。</span></span
          >
        </div>
      </div>
      <p class="remark">說過去的事，常用 might not have 加過去分詞，再用 but 說好的一面。</p>
    </NoteSlide>
    <NoteSlide title="為自己的看法辯護">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="This might sound strange, but it's true."
              :marks="['might sound']"
            /><span class="translation">這可能聽起來很奇怪，可是這是真的。</span></span
          >
        </div>
      </div>
      <p class="remark">
        議論文常先用 might sound 或 might seem 承認看法聽起來有問題，再說明理由。
      </p>
    </NoteSlide>
    <NoteSlide title="but 和 although 不一起用" mark="but">
      <NoteFix
        wrong="It might be hard, but although it's worth it."
        right="It might be hard, but it's worth it."
        :fix="['it\'s']"
      />
    </NoteSlide>
    <NoteSlide title="might 後面直接接原形動詞" mark="might">
      <NoteFix
        wrong="The idea might to sound silly, but it works."
        right="The idea might sound silly, but it works."
        :fix="['sound']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="You might not have win, but you did well."
        right="You might not have won, but you did well."
        :fix="['won,']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
