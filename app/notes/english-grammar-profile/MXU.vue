<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-be-sure-clause, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + sure + (that) + 子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">sure</span>
          <span>確定。</span>
        </div>
        <div>
          <span class="term">that</span>
          <span>可以省略，口語常省略。</span>
        </div>
        <div>
          <span class="term">子句</span>
          <span>確定的那件事。子句要有自己的主詞和動詞。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="對未來的事很有把握" mark="can">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'm sure you will love it." :marks="['will']" /><span
              class="translation"
              >我確定你會愛上它。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">子句常用 will 或 can。</p>
    </NoteSlide>
    <NoteSlide title="不確定：not sure">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I'm not sure what I want to do."
              :marks="['not sure', 'what']"
            /><span class="translation">我不確定我想做什麼。</span></span
          >
        </div>
      </div>
      <p class="remark">not sure 後面常接 what、if、where 這類字帶出的子句。</p>
    </NoteSlide>
    <NoteSlide title="sure 是形容詞，前面要有 am、is 或 are" mark="sure">
      <NoteFix
        wrong="I sure you will like it."
        right="I'm sure you will like it."
        :fix="['I\'m']"
      />
    </NoteSlide>
    <NoteSlide title="子句要有自己的主詞">
      <NoteFix wrong="I'm sure will be fun." right="I'm sure it will be fun." :fix="['it']" />
    </NoteSlide>
    <NoteSlide title="not sure 後面的子句用一般的語序，主詞在動詞前面">
      <NoteFix
        wrong="I'm not sure what do I want."
        right="I'm not sure what I want."
        :fix="['I']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
