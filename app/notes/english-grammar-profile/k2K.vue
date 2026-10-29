<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-likelihood-586, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + should + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The weather is still warm, so', kind: 'dim' },
          { t: 'we', role: '主詞' },
          { t: 'should', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'able to visit the beaches.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="should、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">should</span>
          <span>應該會。根據情況推論。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>推論會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="義務和可能性" mark="should">
      <div class="rows is-labeled">
        <div>
          <span class="term">建議</span>
          <span
            ><NoteMark sentence="You should rest." :marks="['should']" /><span class="translation"
              >你應該休息。</span
            ></span
          >
        </div>
        <div>
          <span class="term">可能性</span>
          <span
            ><NoteMark sentence="It should be a good day." :marks="['should']" /><span
              class="translation"
              >應該會是很棒的一天。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">should 可以說建議，也可以說可能性。</p>
    </NoteSlide>
    <NoteSlide title="should be able to" mark="should be able to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We should be able to finish by six."
              :marks="['should be able to']"
            /><span class="translation">我們應該能在六點前完成。</span></span
          >
        </div>
      </div>
      <p class="remark">should be able to 說應該能夠做某件事。</p>
    </NoteSlide>
    <NoteSlide title="名詞或形容詞前面要有 be" mark="be">
      <NoteFix wrong="It should a good day." right="It should be a good day." :fix="['be']" />
    </NoteSlide>
    <NoteSlide title="be able 後面要接 to" mark="be able">
      <NoteFix
        wrong="We should be able visit the beach."
        right="We should be able to visit the beach."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="should 後面接原形 be" mark="should">
      <NoteFix wrong="The test should is easy." right="The test should be easy." :fix="['be']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
