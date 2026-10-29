<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-command, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="May I + have + 名詞 + (please)？">
      <div class="rows is-labeled">
        <div>
          <span class="term">May I have</span>
          <span>請給我、請大家。</span>
        </div>
        <div>
          <span class="term">May I ask you to</span>
          <span>請你。</span>
        </div>
        <div>
          <span class="term">May I suggest</span>
          <span>我建議。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="不需要回答">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="May I ask you to switch off your phones?" :marks="[]" /><span
              class="translation"
              >請大家把手機關掉。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這類問句用來要求或建議。對方通常直接照做，不回答 yes 或 no。</p>
    </NoteSlide>
    <NoteSlide title="ask you 後面接 to 和原形動詞">
      <NoteFix wrong="May I ask you sit down?" right="May I ask you to sit down?" :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="suggest 後面接 -ing 或 that 子句，不接 to">
      <NoteFix
        wrong="May I suggest to use the bicycles?"
        right="May I suggest using the bicycles?"
        :fix="['using']"
      />
    </NoteSlide>
    <NoteSlide title="suggest 後面接 that 子句，不接 you to">
      <NoteFix
        wrong="May I suggest you to take a taxi?"
        right="May I suggest that you take a taxi?"
        :fix="['that', 'take']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
