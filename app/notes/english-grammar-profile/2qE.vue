<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-regret, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + should have + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">should have</span>
          <span>過去應該做、可是沒做。</span>
        </div>
        <div>
          <span class="term">shouldn't have</span>
          <span>過去不應該做、可是做了。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>後悔的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="轉述別人的後悔">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="She said she should have called earlier."
              :marks="['should have']"
            /><span class="translation">她說她應該早點打電話的。</span></span
          >
        </div>
      </div>
      <p class="remark">轉述別人說的話時，should have 不用改。</p>
    </NoteSlide>
    <NoteSlide title="希望別人當時在場">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You should have been there with me. I had a great time."
              :marks="['You should have been there']"
            /><span class="translation">你當時應該跟我在一起的。我玩得很開心。</span></span
          >
        </div>
      </div>
      <p class="remark">You should have been there 也可以表示遺憾，對方沒有一起享受。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="I should have tell her the truth."
        right="I should have told her the truth."
        :fix="['told']"
      />
    </NoteSlide>
    <NoteSlide title="說過去的遺憾，用 should have 加過去分詞">
      <NoteFix
        wrong="Yesterday I should leave earlier."
        right="Yesterday I should have left earlier."
        :fix="['have left']"
      />
    </NoteSlide>
    <NoteSlide title="shouldn't 後面接原形 have" mark="have">
      <NoteFix
        wrong="He shouldn't had done it."
        right="He shouldn't have done it."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
