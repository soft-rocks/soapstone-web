<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-556, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + ought to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Oh, I\'m sorry, my mum\'s calling and', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'ought to', kind: 'key', ring: true },
          { t: 'go.', role: '原形動詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="ought to、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">ought to</span>
          <span>應該。意思和 should 差不多。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>應該做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="ought 後面一定要有 to" mark="ought">
      <div class="rows is-labeled">
        <div>
          <span class="term">ought to</span>
          <span
            ><NoteMark sentence="You've had a long week. You ought to rest." :marks="['ought', 'to']" /><span
              class="translation"
              >你這個星期很累。你應該休息。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">ought 後面一定要接 to，這點和 should 不同。</p>
    </NoteSlide>
    <NoteSlide title="所有主詞都用 ought to" mark="ought">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Her cough is getting worse. She ought to see a doctor." :marks="['ought', 'She']" /><span
              class="translation"
              >她咳得越來越嚴重。她應該去看醫生。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">主詞是 he、she、it 時，ought 也不加 -&#x2060;s。</p>
    </NoteSlide>
    <NoteSlide title="ought 後面要接 to" mark="ought">
      <NoteFix
wrong="You look really pale. You ought go home and lie down."
        right="You look really pale. You ought to go home and lie down." :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="ought 不加 -s" mark="ought">
      <NoteFix
        wrong="Lily hasn't phoned home all week. She oughts to call her mum."
        right="Lily hasn't phoned home all week. She ought to call her mum."
        :fix="['ought']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
wrong="The last bus is at eleven. We ought to leaving soon."
        right="The last bus is at eleven. We ought to leave soon." :fix="['leave']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
