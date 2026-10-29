<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-negative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Ought + 主詞 + not to + 原形動詞？">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Ought', kind: 'key', ring: true },
          { t: 'we', role: '主詞' },
          { t: 'not to', kind: 'key', ring: true },
          { t: 'learn', role: '原形動詞' },
          { t: 'from the mistakes of the past?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Ought … not to、Oughtn't … to、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">Ought … not to</span>
          <span>難道不應該……嗎？很正式。</span>
        </div>
        <div>
          <span class="term">Oughtn't … to</span>
          <span>縮寫的形式，比較口語。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>說話者認為應該做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="反問的意思">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Half of the old forest has gone in twenty years. Ought we not to protect the rest?" :marks="[]" /><span
              class="translation"
              >老森林二十年內消失了一半。我們難道不應該保護剩下的部分嗎？（意思是：我們應該保護）</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這種問句通常不需要回答。說話者用問句提出自己的看法。</p>
    </NoteSlide>
    <NoteSlide title="not 放在主詞後面、to 前面" mark="not">
      <NoteFix
        wrong="The same bridge has failed twice. Ought we to not learn from this?"
        right="The same bridge has failed twice. Ought we not to learn from this?"
        :fix="['not', 'learn']"
      />
    </NoteSlide>
    <NoteSlide title="ought 的問句把 ought 放在句首，不用 do" mark="Ought">
      <NoteFix
        wrong="Our neighbours lost everything in the fire. Do we not ought to help them?"
        right="Our neighbours lost everything in the fire. Ought we not to help them?"
        :fix="['Ought', 'to']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="not">
      <NoteFix
        wrong="The experts warned us about the floods. Ought we not to listening to them?"
        right="The experts warned us about the floods. Ought we not to listen to them?"
        :fix="['listen']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
