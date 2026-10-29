<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-with-as-pronoun-narrative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="句子, as + 代名詞 + used to + do / say / call + …">
      <div class="rows is-labeled">
        <div>
          <span class="term">as</span>
          <span>就像。</span>
        </div>
        <div>
          <span class="term">代名詞 + used to</span>
          <span>人物過去的習慣。</span>
        </div>
        <div>
          <span class="term">do / say / call</span>
          <span>常用的動詞。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="as she used to say">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence='"Life is short," as my grandmother used to say.'
              :marks="[]"
            /><span class="translation">「人生很短。」就像我奶奶以前常說的。</span></span
          >
        </div>
      </div>
      <p class="remark">as she used to say 引用人物以前常說的話，讓讀者認識這個人物。</p>
    </NoteSlide>
    <NoteSlide title="as she used to call him">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="He married old Nellie, as she used to call her."
              :marks="[]"
            /><span class="translation">他娶了老奈莉，她以前都這樣叫她。</span></span
          >
        </div>
      </div>
      <p class="remark">as she used to call him 說人物以前怎麼稱呼別人，常帶有感情或諷刺。</p>
    </NoteSlide>
    <NoteSlide title="as 已經代替前面的動作，do 後面不加 it" mark="as">
      <NoteFix
        wrong="She went for a walk, as she used to do it every day."
        right="She went for a walk, as she used to do every day."
        :fix="['every']"
      />
    </NoteSlide>
    <NoteSlide title="used to 後面接原形動詞" mark="used to">
      <NoteFix
        wrong="He sat by the fire, as he used to doing."
        right="He sat by the fire, as he used to do."
        :fix="['do.']"
      />
    </NoteSlide>
    <NoteSlide title="used 後面要接 to" mark="used">
      <NoteFix
        wrong='"Never give up," as my father used say.'
        right='"Never give up," as my father used to say.'
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
