<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-use-front-position-inversion-with-never, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="never 放在句首，助動詞放在主詞前面" mark="Never have I seen">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Never', role: 'Never', kind: 'key' },
          { t: 'have', role: '助動詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'seen', role: '主要動詞' },
          { t: 'such a film before.', role: '受詞 + 時間', kind: 'dim' },
        ]"
      />
      <p class="translation">我從來沒看過這樣的電影。</p>
    </NoteSlide>

    <NoteSlide title="一般的語序和倒裝句" mark="Never have I">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般的語序</span>
          <span
            ><NoteMark
              sentence="I have never seen such a beautiful beach."
              :marks="['I have never']"
            /><span class="translation">我從來沒看過這麼美的海灘。</span></span
          >
        </div>
        <div>
          <span class="term">倒裝句，語氣比較強</span>
          <span
            ><NoteMark
              sentence="Never have I seen such a beautiful beach."
              :marks="['Never have I']"
            /><span class="translation">我從來就沒看過這麼美的海灘。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原本有助動詞，就移到主詞前面" mark="have I">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成式</span>
          <span>Never have I + 過去分詞</span>
        </div>
        <div>
          <span class="term">過去完成式</span>
          <span>Never had I + 過去分詞</span>
        </div>
        <div>
          <span class="term">未來式</span>
          <span>Never will I + 原形動詞</span>
        </div>
        <div>
          <span class="term">情態助動詞</span>
          <span>Never could I、Never would I + 原形動詞</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原本沒有助動詞，就加上 do、does、did">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Never', role: 'Never', kind: 'dim' },
          { t: 'did', role: '助動詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'expect', role: '原形動詞' },
          { t: 'to win.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我從來就沒想過會贏。</p>
    </NoteSlide>

    <NoteSlide title="助動詞放在主詞前面" mark="have I">
      <NoteFix
        wrong="Never I have eaten such delicious food."
        right="Never have I eaten such delicious food."
        fix="have I"
      />
    </NoteSlide>

    <NoteSlide title="過去簡單式加上 did">
      <NoteFix
        wrong="Never I imagined that I would live abroad."
        right="Never did I imagine that I would live abroad."
        fix="did I imagine"
      />
    </NoteSlide>

    <NoteSlide title="did 後面用原形動詞">
      <NoteFix
        wrong="Never did I thought she would leave."
        right="Never did I think she would leave."
        fix="think"
      />
    </NoteSlide>

    <NoteSlide title="never 和 not 不一起用">
      <NoteFix
        wrong="Never haven't I felt so tired."
        right="Never have I felt so tired."
        fix="have I"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
