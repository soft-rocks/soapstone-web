<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-the-same-noun-as-clause, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="the same + 名詞 + as + 子句" mark="the same as it used to be">
      <NoteWords
        :size="21"
        :parts="[
          { t: 'If it worked for you, I\'ll try', kind: 'dim' },
          { t: 'the same method', role: 'the same + 名詞', kind: 'key' },
          { t: 'as you did.', role: 'as + 主詞 + 助動詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">如果對你有用，我會試試跟你一樣的方法。</p>
    </NoteSlide>

    <NoteSlide title="常見的子句：別人做的、以前的、記得的" mark="as it used to be">
      <div class="rows is-labeled">
        <div>
          <span class="term">as + 以前</span>
          <span
            ><NoteMark sentence="The town isn't the same as it was." :marks="['as it was']" /><span
              class="translation"
              >這個小鎮跟以前不一樣了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">as + 記得的</span>
          <span
            ><NoteMark
              sentence="The beach looked the same as I remembered."
              :marks="['as I remembered']"
            /><span class="translation">那片海灘看起來跟我記得的一樣。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the same 後面接 as，不接 than" mark="as">
      <NoteFix
        wrong="We sang the same songs than we did last year."
        right="We sang the same songs as we did last year."
        fix="as"
      />
    </NoteSlide>

    <NoteSlide title="same 前面要加 the" mark="the same">
      <NoteFix
        wrong="It's same as it was ten years ago."
        right="It's the same as it was ten years ago."
        fix="the same"
      />
    </NoteSlide>

    <NoteSlide title="昨天的事，助動詞用 did" mark="used to be">
      <NoteFix
        wrong="I made the same mistake as you do yesterday."
        right="I made the same mistake as you did yesterday."
        fix="did"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
