<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-continuing-events-in-the-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had been + -ing + for + 一段時間">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I know her very well because', kind: 'dim' },
          { t: 'we', role: '主詞' },
          { t: 'had been', kind: 'key', ring: true },
          { t: 'exchanging', role: '-ing' },
          { t: 'letters', kind: 'dim' },
          { t: 'for', kind: 'key', ring: true },
          { t: 'a long time.', role: '一段時間' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="for、since" mark="for a long time.">
      <div class="rows is-labeled">
        <div>
          <span class="term">for</span>
          <span>加一段時間，像 for a long time、for five years。</span>
        </div>
        <div>
          <span class="term">since</span>
          <span>加開始的時間，像 since 2010、since she was ten。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="背景資訊">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="She had been going there since she was ten years old."
              :marks="[]"
            /><span class="translation">她從十歲起就一直去那裡。</span></span
          >
        </div>
      </div>
      <p class="remark">這個句型常放在故事裡，說明人物過去的習慣或經歷。</p>
    </NoteSlide>
    <NoteSlide title="一段時間用 for，開始的時間點用 since" mark="for">
      <NoteFix
        wrong="She had been going there since five years."
        right="She had been going there for five years."
        :fix="['for']"
      />
    </NoteSlide>
    <NoteSlide title="had 和 -ing 中間要有 been" mark="been">
      <NoteFix
        wrong="We had exchanging letters for years."
        right="We had been exchanging letters for years."
        :fix="['been']"
      />
    </NoteSlide>
    <NoteSlide title="had been 後面接 -ing" mark="had been">
      <NoteFix
        wrong="He had been smoked since he was twelve."
        right="He had been smoking since he was twelve."
        :fix="['smoking']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
