<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-stance-104, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="completely 放在形容詞前面，表示完全">
      <NoteWords
        :size="34"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'am', role: 'be' },
          { t: 'completely', role: '態度副詞', kind: 'key' },
          { t: 'sure.', role: '形容詞' },
        ]"
      />
      <p class="translation">我完全確定。</p>
    </NoteSlide>

    <NoteSlide title="態度副詞放在句首時，修飾整個句子">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Luckily,', role: '態度副詞', kind: 'key' },
          { t: 'my cousin is getting better.', role: '子句' },
        ]"
      />
      <p class="translation">幸好我表哥漸漸好起來了。</p>
    </NoteSlide>

    <NoteSlide title="每個態度副詞表示不同的看法">
      <div class="rows is-labeled">
        <div>
          <span class="term">luckily</span>
          <span>幸好，好的結果</span>
        </div>
        <div>
          <span class="term">sadly</span>
          <span>很可惜，壞的結果</span>
        </div>
        <div>
          <span class="term">hopefully</span>
          <span>希望發生的事</span>
        </div>
        <div>
          <span class="term">obviously、clearly</span>
          <span>大家都看得出來</span>
        </div>
        <div>
          <span class="term">honestly</span>
          <span>老實說</span>
        </div>
        <div>
          <span class="term">basically</span>
          <span>簡單地說</span>
        </div>
        <div>
          <span class="term">surely</span>
          <span>應該是真的，希望對方同意</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="completely 不放在句首" mark="completely">
      <NoteFix
        wrong="Completely, I understand your problem with the noise."
        right="I completely understand your problem with the noise."
        fix="completely understand"
      />
    </NoteSlide>

    <NoteSlide title="修飾整個句子用副詞 hopefully">
      <NoteFix
        wrong="Hopeful, the weather will be nice tomorrow."
        right="Hopefully, the weather will be nice tomorrow."
        fix="Hopefully,"
      />
    </NoteSlide>

    <NoteSlide title="修飾整個句子用副詞 sadly">
      <NoteFix
        wrong="Sad, the old cinema in our street closed last year."
        right="Sadly, the old cinema in our street closed last year."
        fix="Sadly,"
      />
    </NoteSlide>

    <NoteSlide title="basic 加 -ally">
      <NoteFix
        wrong="Basicly, the plan is simple."
        right="Basically, the plan is simple."
        fix="Basically,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
