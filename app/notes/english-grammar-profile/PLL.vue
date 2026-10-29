<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-emphasis-527, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide
      title="Try as + 主詞 + might, + 主詞 + can't / couldn't / was never able to + 原形動詞"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">try as I might</span>
          <span>不管我多努力。</span>
        </div>
        <div>
          <span class="term">後面的句子</span>
          <span>常是否定句，說努力了還是做不到的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="換主詞" mark="I">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Try as she might, she couldn't open the jar."
              :marks="['she']"
            /><span class="translation">不管她多用力，都打不開那個罐子。</span></span
          >
        </div>
      </div>
      <p class="remark">主詞不只用 I，也可以用 he、she、we、they。</p>
    </NoteSlide>
    <NoteSlide title="現在和過去" mark="was never able to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Try as I might, I can't remember his name."
              :marks="['can\'t']"
            /><span class="translation">不管我怎麼想，都記不起他的名字。</span></span
          >
        </div>
      </div>
      <p class="remark">
        說過去的事，後面用 couldn't 或 was never able to。說現在的事，後面用 can't。
      </p>
    </NoteSlide>
    <NoteSlide title="這個說法用原形 try，過去的事也一樣" mark="Try">
      <NoteFix
        wrong="Tried as I might, I couldn't sleep."
        right="Try as I might, I couldn't sleep."
        :fix="['Try']"
      />
    </NoteSlide>
    <NoteSlide title="這個說法是 try as 加主詞加 might" mark="Try as">
      <NoteFix
        wrong="Try I might, I can't find it."
        right="Try as I might, I can't find it."
        :fix="['as']"
      />
    </NoteSlide>
    <NoteSlide title="主詞放在 as 和 might 中間" mark="might,">
      <NoteFix
        wrong="Try as might she, she couldn't sleep."
        right="Try as she might, she couldn't sleep."
        :fix="['she might,']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
