<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-focus, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="As you might know, + 句子">
      <div class="rows is-labeled">
        <div>
          <span class="term">as you might know</span>
          <span>你可能知道。</span>
        </div>
        <div>
          <span class="term">as you might have heard / noticed / seen</span>
          <span>你可能已經聽說／注意到／看到。</span>
        </div>
        <div>
          <span class="term">句子</span>
          <span>要提醒的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="加上 already">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="As you might have already heard, the trip is cancelled."
              :marks="['already', 'have']"
            /><span class="translation">你可能已經聽說了，旅行取消了。</span></span
          >
        </div>
      </div>
      <p class="remark">already 放在 have 和過去分詞中間，強調對方可能早就知道了。</p>
    </NoteSlide>
    <NoteSlide title="這個說法用 as" mark="As">
      <NoteFix
        wrong="So you might know, I'm leaving."
        right="As you might know, I'm leaving."
        :fix="['As']"
      />
    </NoteSlide>
    <NoteSlide title="might 後面直接接原形動詞" mark="might">
      <NoteFix
        wrong="As you might to know, the shop is closing."
        right="As you might know, the shop is closing."
        :fix="['know,']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞">
      <NoteFix
        wrong="As you might have notice, the door is broken."
        right="As you might have noticed, the door is broken."
        :fix="['noticed,']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
