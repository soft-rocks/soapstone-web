<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-past-affirmative-562, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + ought to have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We didn\'t get a tour guide.', kind: 'dim' },
          { t: 'We', role: '主詞' },
          { t: 'ought to have', kind: 'key', ring: true },
          { t: 'booked', role: '過去分詞' },
          { t: 'one!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="ought to have、過去分詞、ought to have been + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">ought to have</span>
          <span>過去應該、可是沒有。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去應該做的事。</span>
        </div>
        <div>
          <span class="term">ought to have been + 過去分詞</span>
          <span>被動，說事情應該被怎麼處理。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="後悔和批評">
      <div class="rows is-labeled">
        <div>
          <span class="term">後悔自己</span>
          <span
            ><NoteMark sentence="You told me the shop would be closed. I ought to have listened to you." :marks="[]" /><span
              class="translation"
              >你跟我說過那家店會關門。我當時應該聽你的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">批評別人</span>
          <span
            ><NoteMark sentence="The river had flooded twice before. The government ought to have known." :marks="[]" /><span
              class="translation"
              >那條河之前已經淹過兩次水。政府當時應該知道。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="The museum was so crowded. We ought to have book a guide."
        right="The museum was so crowded. We ought to have booked a guide."
        :fix="['booked']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形 have" mark="have">
      <NoteFix
        wrong="You knew about the party. You ought to had told me."
        right="You knew about the party. You ought to have told me."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="說過去的事，to 後面要有 have" mark="have">
      <NoteFix
        wrong="The road was closed for a week. They ought to known about it."
        right="The road was closed for a week. They ought to have known about it."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
