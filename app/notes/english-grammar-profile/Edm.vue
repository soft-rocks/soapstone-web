<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-past-affirmative-583, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + should have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I knew I', role: '主詞' },
          { t: 'should have', kind: 'key', ring: true },
          { t: 'written', role: '過去分詞' },
          { t: 'before.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="should have、過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">should have</span>
          <span>過去應該。事情沒有做。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去應該做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="縮寫" mark="should have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You should've told me." :marks="['should\'ve']" /><span
              class="translation"
              >你應該早點告訴我的。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">口語常把 should have 說成 should've。</p>
    </NoteSlide>
    <NoteSlide title="You should have been …">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You should have been with us at the party."
              :marks="['You should have been']"
            /><span class="translation">你當時應該跟我們一起去派對的。</span></span
          >
        </div>
      </div>
      <p class="remark">
        You should have been 常用來說「你當時應該在場」，因為那時很好玩或很精彩。
      </p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="I should have write to you."
        right="I should have written to you."
        :fix="['written']"
      />
    </NoteSlide>
    <NoteSlide title="should've 聽起來像 should of，可是要寫 should have" mark="should have">
      <NoteFix
        wrong="You should of called me."
        right="You should have called me."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="should 後面接原形 have" mark="should">
      <NoteFix
        wrong="We should had left earlier."
        right="We should have left earlier."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
