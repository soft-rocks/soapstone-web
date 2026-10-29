<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-fixed-expressions-had-it-not-been, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="If it hadn't been for + 名詞, + 主詞 + would / might / could have + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">if it hadn't been for</span>
          <span>要不是因為。比較常用。</span>
        </div>
        <div>
          <span class="term">had it not been for</span>
          <span>要不是因為。比較正式。</span>
        </div>
        <div>
          <span class="term">名詞</span>
          <span>造成結果的原因。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="好的原因和壞的原因">
      <div class="rows is-labeled">
        <div>
          <span class="term">好</span>
          <span
            ><NoteMark
              sentence="Thank you for all the extra lessons. If it hadn't been for you, I would have failed."
              :marks="[]"
            /><span class="translation">謝謝你幫我額外上課。要不是有你，我就會失敗了。</span></span
          >
        </div>
        <div>
          <span class="term">壞</span>
          <span
            ><NoteMark
              sentence="Our flight landed a day late. If it hadn't been for the storm, we would have arrived on time."
              :marks="[]"
            /><span class="translation"
              >我們的班機晚了一天降落。要不是暴風雨，我們就會準時到了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這個說法可以說好的原因，也可以說壞的原因。</p>
    </NoteSlide>
    <NoteSlide title="the fact that">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The actress looks very young. Had it not been for the fact that I had seen her birthday online, I would have guessed she was twenty."
              :marks="['Had it not been for the fact that']"
            /><span class="translation"
              >那位女演員看起來很年輕。要不是我在網路上看過她的生日，我會猜她二十歲。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">had it not been for the fact that 後面接一個子句，說明原因。</p>
    </NoteSlide>
    <NoteSlide title="這個說法要有 for" mark="for">
      <NoteFix
        wrong="If it hadn't been my maths teacher, I would have failed the exam."
        right="If it hadn't been for my maths teacher, I would have failed the exam."
        :fix="['for']"
      />
    </NoteSlide>
    <NoteSlide title="倒裝的否定不縮寫，not 放在 it 後面" mark="it">
      <NoteFix
        wrong="Hadn't it been for the rain, we would have gone to the beach."
        right="Had it not been for the rain, we would have gone to the beach."
        :fix="['Had', 'not']"
      />
    </NoteSlide>
    <NoteSlide title="hadn't 後面接過去分詞 been" mark="hadn't">
      <NoteFix
        wrong="If it hadn't be for the nurses, my dad would have died."
        right="If it hadn't been for the nurses, my dad would have died."
        :fix="['been']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
