<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-adverbs-761, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had + 副詞 + been + -ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">really</span>
          <span>真的。</span>
        </div>
        <div>
          <span class="term">only</span>
          <span>只、才。</span>
        </div>
        <div>
          <span class="term">always</span>
          <span>一直。</span>
        </div>
        <div>
          <span class="term">just</span>
          <span>剛剛。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="副詞放在 had 後面或 been 後面" mark="been">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="He had been living there for only ten months."
              :marks="['been', 'had']"
            /><span class="translation">他在那裡才住了十個月。</span></span
          >
        </div>
      </div>
      <p class="remark">副詞可以放在 had 和 been 中間，也可以放在 been 和 -&#x2060;ing 中間。</p>
    </NoteSlide>
    <NoteSlide title="had just been + -ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I had just been talking about you when you called."
              :marks="[]"
            /><span class="translation">你打來的時候，我剛剛還在談你。</span></span
          >
        </div>
      </div>
      <p class="remark">had just been + -&#x2060;ing 說主要的事發生之前，剛剛還在做的事。</p>
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞 been" mark="been">
      <NoteFix
        wrong="I had really be looking forward to it."
        right="I had really been looking forward to it."
        :fix="['been']"
      />
    </NoteSlide>
    <NoteSlide title="放在動詞前面要用副詞">
      <NoteFix
        wrong="She had been secret planning a party."
        right="She had been secretly planning a party."
        :fix="['secretly']"
      />
    </NoteSlide>
    <NoteSlide title="had 和 -ing 中間要有 been" mark="been">
      <NoteFix
        wrong="He had only living there for a month."
        right="He had only been living there for a month."
        :fix="['been']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
