<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-negative-with-didn-t, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + didn't dare + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She', role: '主詞' },
          { t: 'didn\'t dare', kind: 'key', ring: true },
          { t: 'think', role: '原形動詞' },
          { t: 'about him.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="didn't dare、原形動詞" mark="didn't dare think">
      <div class="rows is-labeled">
        <div>
          <span class="term">didn't dare</span>
          <span>過去不敢。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不敢做的事。to 可以省略，省略的寫法在小說和正式的文章裡常見。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="寫恐懼和緊張">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We didn't dare move our feet." :marks="[]" /><span
              class="translation"
              >我們連腳都不敢動。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這個句型常寫人在危險或緊張的情況下的反應。</p>
    </NoteSlide>
    <NoteSlide title="後面接 because 或 in case">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I didn't dare speak in case he got angry." :marks="[]" /><span
              class="translation"
              >我不敢說話，怕他生氣。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">不敢的原因常放在後面。</p>
    </NoteSlide>
    <NoteSlide title="didn't 後面的動詞都用原形" mark="didn't">
      <NoteFix
        wrong="She didn't dare thought about him."
        right="She didn't dare think about him."
        :fix="['think']"
      />
    </NoteSlide>
    <NoteSlide title="didn't 後面接原形 dare" mark="didn't">
      <NoteFix wrong="We didn't dared move." right="We didn't dare move." :fix="['dare']" />
    </NoteSlide>
    <NoteSlide title="dare 後面接原形動詞，或接 to 加原形動詞" mark="dare">
      <NoteFix
        wrong="He didn't dare looking down."
        right="He didn't dare look down."
        :fix="['look']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
