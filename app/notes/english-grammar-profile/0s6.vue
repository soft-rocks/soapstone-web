<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-inversion-with-never-before, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Never + had + 主詞 + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Never', kind: 'key', ring: true },
          { t: 'before', kind: 'dim' },
          { t: 'had', kind: 'key', ring: true },
          { t: 'we', role: '主詞' },
          { t: 'seen', role: '過去分詞' },
          { t: 'such marvellous species of fish.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="never / never before、had + 主詞、過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">never / never before</span>
          <span>從來沒有。放在句首。</span>
        </div>
        <div>
          <span class="term">had + 主詞</span>
          <span>倒裝的順序。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>以前沒經歷過的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="常接 such 或 so" mark="such">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Never had I been in such a ridiculous situation!"
              :marks="['such']"
            /><span class="translation">我從來沒遇過這麼荒謬的情況！</span></span
          >
        </div>
      </div>
      <p class="remark">倒裝的句子常接 such 加名詞，或 so 加形容詞。</p>
    </NoteSlide>
    <NoteSlide title="never 放在句首時，had 放在主詞前面" mark="Never">
      <NoteFix
        wrong="Never before we had seen such fish."
        right="Never before had we seen such fish."
        :fix="['had', 'seen']"
      />
    </NoteSlide>
    <NoteSlide title="過去完成式的倒裝把 had 移到主詞前面，不用 did" mark="had">
      <NoteFix
        wrong="Never did I had been so happy."
        right="Never had I been so happy."
        :fix="['had', 'been']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="had">
      <NoteFix
        wrong="Never had I saw such a big crowd."
        right="Never had I seen such a big crowd."
        :fix="['seen']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
