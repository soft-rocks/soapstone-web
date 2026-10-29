<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-opinion, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="This / It + may + surprise / sound + …, but + 句子">
      <div class="rows is-labeled">
        <div>
          <span class="term">may</span>
          <span>說對方可能有的想法或反應。</span>
        </div>
        <div>
          <span class="term">but</span>
          <span>帶出說話者真正的看法或意外的事實。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用在議論文">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You may think that cleaning instruments is boring, but it isn't."
              :marks="[]"
            /><span class="translation">你可能覺得清潔樂器很無聊，可是並不會。</span></span
          >
        </div>
      </div>
      <p class="remark">議論文常先說一般人的想法，再提出不同的看法。</p>
    </NoteSlide>
    <NoteSlide title="may 前後的主詞" mark="This">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="This may sound strange, but I love rainy days."
              :marks="['This', 'may', 'but']"
            /><span class="translation">這可能聽起來很奇怪，可是我很喜歡下雨天。</span></span
          >
        </div>
      </div>
      <p class="remark">may 那一句常用 you 或 this。but 後面的句子說說話者自己的看法。</p>
    </NoteSlide>
    <NoteSlide title="may 後面接原形動詞" mark="may">
      <NoteFix
        wrong="This may surprises you, but I passed."
        right="This may surprise you, but I passed."
        :fix="['surprise']"
      />
    </NoteSlide>
    <NoteSlide title="sound 後面要接形容詞，像 strange、odd">
      <NoteFix
        wrong="It may sound, but I like the cold."
        right="It may sound strange, but I like the cold."
        :fix="['sound strange,']"
      />
    </NoteSlide>
    <NoteSlide title="may 後面直接接原形動詞" mark="may">
      <NoteFix
        wrong="You may to think it's easy, but it isn't."
        right="You may think it's easy, but it isn't."
        :fix="['think']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
