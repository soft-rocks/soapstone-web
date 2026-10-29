<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-adverbs-749, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + 副詞 + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'He', role: '主詞' },
          { t: 'was', kind: 'key', ring: true },
          { t: 'actually', role: '副詞' },
          { t: 'acting', role: '-ing' },
          { t: 'like a ghost.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="still、actually、already">
      <div class="rows is-labeled">
        <div>
          <span class="term">still</span>
          <span>還在。</span>
        </div>
        <div>
          <span class="term">actually</span>
          <span>其實、真的。</span>
        </div>
        <div>
          <span class="term">already</span>
          <span>已經。</span>
        </div>
        <div>
          <span class="term">probably</span>
          <span>大概。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="still 說還沒停">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="He was still waiting at the traffic light." :marks="[]" /><span
              class="translation"
              >他還在紅綠燈前等著。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">was still + -&#x2060;ing 說過去某個時間，事情還在進行。</p>
    </NoteSlide>
    <NoteSlide title="actually 說真正的情況">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She was actually laughing, not crying." :marks="[]" /><span
              class="translation"
              >她其實是在笑，不是在哭。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">was actually + -&#x2060;ing 說跟別人想的不一樣的真實情況。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 was 和 -ing 中間" mark="was">
      <NoteFix
        wrong="He was waiting still at the light."
        right="He was still waiting at the light."
        :fix="['still', 'at']"
      />
    </NoteSlide>
    <NoteSlide title="放在動詞前面要用副詞">
      <NoteFix
        wrong="She was actual crying."
        right="She was actually crying."
        :fix="['actually']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 they，用 were">
      <NoteFix
        wrong="They was already eating when I arrived."
        right="They were already eating when I arrived."
        :fix="['were']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
