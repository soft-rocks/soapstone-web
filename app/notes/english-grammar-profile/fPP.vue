<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-affirmative-765, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I felt really sorry for you after', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'had', kind: 'key', ring: true },
          { t: 'read', role: '過去分詞' },
          { t: 'your last letter.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="had、'd、過去分詞" mark="had">
      <div class="rows is-labeled">
        <div>
          <span class="term">had</span>
          <span>所有主詞都用 had。</span>
        </div>
        <div>
          <span class="term">'d</span>
          <span>口語常用的縮寫，像 I'd、she'd、we'd。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>更早發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="兩件過去的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="When I got to the station, the train had left." :marks="[]" /><span
              class="translation"
              >我到車站的時候，火車已經開走了。（火車先開走）</span
            ></span
          >
        </div>
      </div>
      <p class="remark">兩件過去的事，比較早的那件用過去完成式。</p>
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="had">
      <NoteFix
        wrong="I had went to bed when you called."
        right="I had gone to bed when you called."
        :fix="['gone']"
      />
    </NoteSlide>
    <NoteSlide title="說過去之前的事用 had" mark="had">
      <NoteFix
        wrong="When I arrived, they has eaten."
        right="When I arrived, they had eaten."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="forget 的過去分詞是 forgotten">
      <NoteFix
        wrong="She had forget my birthday."
        right="She had forgotten my birthday."
        :fix="['forgotten']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
