<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-focusing, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="As you may know, + 句子">
      <div class="rows is-labeled">
        <div>
          <span class="term">as you may know</span>
          <span>你可能知道。說一般的事實。</span>
        </div>
        <div>
          <span class="term">as you may have heard / seen / noticed</span>
          <span>你可能已經聽說／看到／注意到。說最近發生的事。</span>
        </div>
        <div>
          <span class="term">句子</span>
          <span>說話者要提醒的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="放在句首或句中">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It takes, as you may know, ten hours to get there."
              :marks="[]"
            /><span class="translation">你可能知道，到那裡要十個小時。</span></span
          >
        </div>
      </div>
      <p class="remark">這個說法常放在句首，後面加逗號。也可以放在句中，前後加逗號。</p>
    </NoteSlide>
    <NoteSlide title="這個說法用 as，不用 like" mark="As">
      <NoteFix
        wrong="Like you may know, the shop is closing."
        right="As you may know, the shop is closing."
        :fix="['As']"
      />
    </NoteSlide>
    <NoteSlide title="may have 後面接過去分詞" mark="may have">
      <NoteFix
        wrong="As you may have hear, Tom is leaving."
        right="As you may have heard, Tom is leaving."
        :fix="['heard,']"
      />
    </NoteSlide>
    <NoteSlide title="may 後面接原形動詞" mark="may">
      <NoteFix
        wrong="As you may knows, the exam is on Monday."
        right="As you may know, the exam is on Monday."
        :fix="['know,']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
