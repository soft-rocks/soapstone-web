<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-577, as slides, in the order of content.md. One point per slide: the title names it,
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
          { t: 'You', role: '主詞' },
          { t: 'should', kind: 'key', ring: true },
          { t: 'come', role: '原形動詞' },
          { t: 'at six o\'clock.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="should、原形動詞" mark="should">
      <div class="rows is-labeled">
        <div>
          <span class="term">should</span>
          <span>應該。所有主詞都用 should，不加 -&#x2060;s。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>應該做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="should 後面不加 to" mark="should">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The last train leaves in ten minutes. We should go." :marks="['should']" /><span class="translation"
              >最後一班火車十分鐘後開。我們應該走了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">should 是情態動詞。後面直接接原形動詞。</p>
    </NoteSlide>
    <NoteSlide title="說以後一起做的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Someday we should go there together."
              :marks="['we should']"
            /><span class="translation">有一天我們應該一起去那裡。</span></span
          >
        </div>
      </div>
      <p class="remark">we should 也常用來提議以後一起做某件事。</p>
    </NoteSlide>
    <NoteSlide title="should 後面直接接原形動詞" mark="should">
      <NoteFix wrong="You should to come at six." right="You should come at six." :fix="['come']" />
    </NoteSlide>
    <NoteSlide title="should 後面接原形動詞" mark="should">
      <NoteFix wrong="It's raining hard today. She should takes the bus to work." right="It's raining hard today. She should take the bus to work." :fix="['take']" />
    </NoteSlide>
    <NoteSlide title="should 後面的動詞不變化，一律用原形" mark="should">
      <NoteFix
        wrong="We should buying two tickets."
        right="We should buy two tickets."
        :fix="['buy']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
