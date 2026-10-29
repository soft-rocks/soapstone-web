<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-use-in-the-least-emphasis, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="in the least 放在否定句裡，表示一點也不">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'What others say', role: '主詞' },
          { t: 'doesn\'t matter', role: '否定的動詞' },
          { t: 'in the least.', role: 'in the least', kind: 'key' },
        ]"
      />
      <p class="translation">別人說什麼一點都不重要。</p>
    </NoteSlide>

    <NoteSlide title="放在句尾，或放在 not 和形容詞中間" mark="in the least">
      <div class="rows is-labeled">
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="The kids weren't scared in the least."
              :marks="['in the least']"
            /><span class="translation">孩子們一點也不害怕。</span></span
          >
        </div>
        <div>
          <span class="term">not 和形容詞中間</span>
          <span
            ><NoteMark
              sentence="The kids weren't in the least scared."
              :marks="['in the least']"
            /><span class="translation">孩子們一點都不害怕。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Not in the least 可以單獨回答問題" mark="in the least">
      <NoteWords
        :size="26"
        :parts="[
          { t: '&quot;Do you mind if I sit here?&quot;', kind: 'dim' },
          { t: '&quot;Not in the least.&quot;', role: '一點也不介意', kind: 'key' },
        ]"
      />
      <p class="translation">「你介意我坐這裡嗎？」「一點也不介意。」</p>
    </NoteSlide>

    <NoteSlide title="in the least 只用在否定句" mark="doesn't">
      <NoteFix
        wrong="My parents were happy in the least about my plan."
        right="My parents weren't happy in the least about my plan."
        fix="not"
      />
    </NoteSlide>

    <NoteSlide title="in the least 要有 the" mark="the">
      <NoteFix
        wrong="The delay doesn't matter in least."
        right="The delay doesn't matter in the least."
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="加強否定用 in the least，不用 at the least" mark="in">
      <NoteFix
        wrong="I wasn't surprised at the least."
        right="I wasn't surprised in the least."
        fix="in"
      >
        <code>at least</code> 的意思是至少。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
