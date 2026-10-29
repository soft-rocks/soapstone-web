<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-use-in-that, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主要子句 + in that + 子句" mark="in that">
      <NoteWords
        :size="22"
        :parts="[
          {
            t: 'Professional sports are damaging to people\'s health',
            role: '主要子句',
            kind: 'dim',
          },
          { t: 'in that', role: '連接詞', kind: 'key' },
          { t: 'they involve grueling training sessions.', role: 'in that 子句' },
        ]"
      />
      <p class="translation">職業運動對人的健康有害，因為要做非常累人的訓練。</p>
    </NoteSlide>

    <NoteSlide title="because 和 in that" mark="in that">
      <div class="rows is-labeled">
        <div>
          <span class="term">because</span>
          <span
            ><NoteMark
              sentence="The trip was cancelled because the pilots went on strike."
              :marks="['because']"
            /><span class="translation">旅行取消了，因為機師罷工。</span></span
          >
        </div>
        <div>
          <span class="term">in that</span>
          <span
            ><NoteMark
              sentence="The trip was a success in that nobody got lost."
              :marks="['in that']"
            /><span class="translation">這趟旅行算是成功，因為沒有人走丟。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="in that 前面常接的評價" mark="damaging">
      <div class="rows is-labeled">
        <div>
          <span class="term">好壞</span>
          <span>useful、harmful、lucky、unusual</span>
        </div>
        <div>
          <span class="term">相同或不同</span>
          <span>similar、different、unique</span>
        </div>
        <div>
          <span class="term">對的部分</span>
          <span>right、true、correct</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="in that 子句放在後面">
      <NoteMark
        sentence="The new law has been criticised, in that it gives the police too much power."
        :marks="['criticised, in that']"
      />
      <p class="translation">新法律受到批評，因為它給警察太多權力。</p>
    </NoteSlide>

    <NoteSlide title="in that 後面接子句" mark="they involve">
      <NoteFix
        wrong="The plan is risky in that the high cost."
        right="The plan is risky in that it costs a lot of money."
        fix="it costs"
      />
    </NoteSlide>

    <NoteSlide title="in that 子句不放句首">
      <NoteFix
        wrong="In that they involve grueling training, professional sports are damaging to health."
        right="Professional sports are damaging to health in that they involve grueling training."
        fix="in that"
      />
    </NoteSlide>

    <NoteSlide title="寫成 in that，不寫 in this" mark="in that">
      <NoteFix
        wrong="The two jobs are similar in this they both involve a lot of travel."
        right="The two jobs are similar in that they both involve a lot of travel."
        fix="in that"
      />
    </NoteSlide>

    <NoteSlide title="in that 不接 to 不定詞">
      <NoteFix
        wrong="She is lucky in that to have such a supportive family."
        right="She is lucky in that she has such a supportive family."
        fix="she has"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
