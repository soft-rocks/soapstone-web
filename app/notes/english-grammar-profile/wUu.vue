<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-past-affirmative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + may have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'As you', role: '主詞' },
          { t: 'may have', kind: 'key', ring: true },
          { t: 'noticed,', role: '過去分詞' },
          { t: 'there has been a delay setting up the new computer system.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="may have、過去分詞" mark="noticed,">
      <div class="rows is-labeled">
        <div>
          <span class="term">may have</span>
          <span>可能已經。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去可能發生的事，像 noticed、seen、forgotten、left。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="否定：may not have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She may not have heard you." :marks="['may not have']" /><span
              class="translation"
              >她可能沒聽到你說話。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">may not have 加過去分詞，說過去某件事可能沒有發生。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞，go 的過去分詞是 gone" mark="have">
      <NoteFix wrong="He may have went home." right="He may have gone home." :fix="['gone']" />
    </NoteSlide>
    <NoteSlide title="may 後面接原形 have" mark="have">
      <NoteFix wrong="She may has forgotten." right="She may have forgotten." :fix="['have']" />
    </NoteSlide>
    <NoteSlide title="說過去的可能用 may have 加過去分詞" mark="may have">
      <NoteFix
        wrong="They may missed the train."
        right="They may have missed the train."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
