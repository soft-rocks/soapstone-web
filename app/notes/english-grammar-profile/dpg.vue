<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-emphasis, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I can't say、I can tell you / I can say、I can assure you">
      <div class="rows is-labeled">
        <div>
          <span class="term">I can't say</span>
          <span>「我不能說……」，委婉地表示不滿意。</span>
        </div>
        <div>
          <span class="term">I can tell you / I can say</span>
          <span>「我可以告訴你」，強調後面的話。</span>
        </div>
        <div>
          <span class="term">I can assure you</span>
          <span>「我向你保證」，正式地強調。</span>
        </div>
        <div>
          <span class="term">as you can see / imagine</span>
          <span>「你可以看到 / 想像」，引出讀者能理解的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="I can't say 和 not very" mark="I can't say">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I can't say I enjoyed the film."
              :marks="['I can\'t say', 'I enjoyed']"
            /><span class="translation">我不能說我喜歡那部電影。</span></span
          >
        </div>
      </div>
      <p class="remark">I can't say 常接 very 加形容詞，或接 I like、I enjoyed。</p>
    </NoteSlide>
    <NoteSlide title="I can assure you 用在正式的信件">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I can assure you that this will not happen again."
              :marks="[]"
            /><span class="translation">我向您保證，這種事不會再發生。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="assure 後面要接人，再接 that 子句">
      <NoteFix
        wrong="I can assure that the order will arrive."
        right="I can assure you that the order will arrive."
        :fix="['you']"
      />
    </NoteSlide>
    <NoteSlide title="as you can see 要有主詞 you">
      <NoteFix
        wrong="As can see, the numbers are falling."
        right="As you can see, the numbers are falling."
        :fix="['you']"
      />
    </NoteSlide>
    <NoteSlide title="assure 後面直接接人，不加 to">
      <NoteFix
        wrong="I can assure to you that the room is ready."
        right="I can assure you that the room is ready."
        :fix="['you']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
