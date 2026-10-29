<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-thanking, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="You shouldn't have!" mark="sent">
      <div class="rows is-labeled">
        <div>
          <span class="term">You shouldn't have!</span>
          <span>你太客氣了！動詞省略。</span>
        </div>
        <div>
          <span class="term">You shouldn't have + 過去分詞</span>
          <span>說出具體的事，像 bought、sent、gone to all this trouble。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="先說謝謝" mark="Thank you">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Thank you so much. You shouldn't have!"
              :marks="['Thank you']"
            /><span class="translation">非常謝謝你。你太客氣了！</span></span
          >
        </div>
      </div>
      <p class="remark">這個說法常跟 Thank you 一起用。</p>
    </NoteSlide>
    <NoteSlide title="send 的過去分詞是 sent" mark="sent">
      <NoteFix
        wrong="You shouldn't have sended it."
        right="You shouldn't have sent it."
        :fix="['sent']"
      />
    </NoteSlide>
    <NoteSlide title="這個說法是 shouldn't have 加過去分詞" mark="shouldn't have!">
      <NoteFix
        wrong="You didn't should buy me flowers."
        right="You shouldn't have bought me flowers."
        :fix="['shouldn\'t have bought']"
      />
    </NoteSlide>
    <NoteSlide title="禮物已經買了，要用 shouldn't have 加過去分詞" mark="shouldn't have!">
      <NoteFix
        wrong="Oh, chocolates! You shouldn't buy them!"
        right="Oh, chocolates! You shouldn't have bought them!"
        :fix="['have bought']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
