<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-499, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + may not + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'They', role: '主詞' },
          { t: 'may not', kind: 'key', ring: true },
          { t: 'even', role: '原形動詞' },
          { t: 'have internet in the countryside!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="may not、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">may not</span>
          <span>可能不。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>可能不是真的或不會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="不縮寫" mark="may not">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I may not go." :marks="['may not']" /><span class="translation"
              >我可能不會去。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">may not 通常不縮寫。mayn't 現在很少用。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 not 後面" mark="may not">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="They may not even know." :marks="['may not', 'even']" /><span
              class="translation"
              >他們可能根本不知道。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">even、always 這類副詞常放在 may not 和動詞中間。</p>
    </NoteSlide>
    <NoteSlide title="may 的否定是 may not，不用 don't" mark="may not">
      <NoteFix
        wrong="I don't may come tomorrow."
        right="I may not come tomorrow."
        :fix="['may', 'not']"
      />
    </NoteSlide>
    <NoteSlide title="not 放在 may 後面" mark="not">
      <NoteFix
        wrong="She not may be at home."
        right="She may not be at home."
        :fix="['may', 'be']"
      />
    </NoteSlide>
    <NoteSlide title="may not 後面直接接原形動詞" mark="may not">
      <NoteFix wrong="We may not to have time." right="We may not have time." :fix="['have']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
