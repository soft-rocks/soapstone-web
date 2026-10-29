<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-no-longer-true, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + used to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When I was a child,', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'used to', kind: 'key', ring: true },
          { t: 'go', role: '原形動詞' },
          { t: 'to a small school and I enjoyed it very much.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="used to、didn't use to、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">used to</span>
          <span>過去常常，現在不再。</span>
        </div>
        <div>
          <span class="term">didn't use to</span>
          <span>過去不會，現在會。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>過去重複的動作或狀態。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="和 since 一起說改變">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I didn't use to laugh much, but since we met, I'm always happy."
              :marks="[]"
            /><span class="translation"
              >我以前不太笑，可是自從我們認識以後，我總是很快樂。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">didn't use to … but since … 說從某個時候起，情況改變了。</p>
    </NoteSlide>
    <NoteSlide title="只發生一次的事用過去式，不用 used to" mark="used to">
      <NoteFix
        wrong="Yesterday I used to go to the park."
        right="Yesterday I went to the park."
        :fix="['went']"
      />
    </NoteSlide>
    <NoteSlide title="現在的習慣用現在式" mark="used to">
      <NoteFix
        wrong="I used to go to the gym every day now."
        right="I go to the gym every day now."
        :fix="['go']"
      />
    </NoteSlide>
    <NoteSlide title="used to 後面接原形動詞" mark="used to">
      <NoteFix
        wrong="She used to came to my house."
        right="She used to come to my house."
        :fix="['come']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
