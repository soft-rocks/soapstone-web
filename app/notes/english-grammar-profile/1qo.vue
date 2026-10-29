<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-possibility-498, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + may + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'may', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'in our room inside my bag.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="may、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">may</span>
          <span>可能。說話者大概只有一半的把握。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>現在或以後可能的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="現在和未來的可能" mark="may">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark sentence="He may be at work now." :marks="['may']" /><span
              class="translation"
              >他現在可能在上班。</span
            ></span
          >
        </div>
        <div>
          <span class="term">未來</span>
          <span
            ><NoteMark sentence="The weather may be hot next week." :marks="['may']" /><span
              class="translation"
              >下星期天氣可能會很熱。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">may 可以說現在的情況，也可以說以後的事。</p>
    </NoteSlide>
    <NoteSlide title="maybe 是副詞" mark="may be">
      <NoteFix wrong="It maybe in the car." right="It may be in the car." :fix="['may be']" />
    </NoteSlide>
    <NoteSlide title="may 後面直接接原形動詞" mark="may">
      <NoteFix wrong="The bus may to be late." right="The bus may be late." :fix="['be']" />
    </NoteSlide>
    <NoteSlide title="may 後面接原形動詞" mark="may">
      <NoteFix
        wrong="We may needing more chairs."
        right="We may need more chairs."
        :fix="['need']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
