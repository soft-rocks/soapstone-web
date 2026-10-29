<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-use-never-inverted-front-position-focus, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="never 放在句首時，助動詞移到主詞前面">
      <NoteWords
        :size="24"
        :move="{ from: 1, to: 2 }"
        :parts="[
          { t: 'Never', role: 'never', kind: 'key' },
          { t: 'had', role: '助動詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'thought', role: '過去分詞' },
          { t: 'that my parents would do this to me.', role: 'that 子句', kind: 'dim' },
        ]"
      />
      <p class="translation">我做夢也沒想到，我爸媽竟然會這樣對我。</p>
      <p class="remark">一般語序是 <code>I had never thought</code>。</p>
    </NoteSlide>

    <NoteSlide title="一般語序沒有助動詞時，倒裝加 did" mark="had">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般語序</span>
          <span
            ><NoteMark sentence="I never answered her letter." :marks="['answered']" /><span
              class="translation"
              >我從來沒回她的信。</span
            ></span
          >
        </div>
        <div>
          <span class="term">倒裝</span>
          <span
            ><NoteMark sentence="Never did I answer her letter." :marks="['did', 'answer']" /><span
              class="translation"
              >我從來都沒回她的信。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞是 be 時，be 移到主詞前面" mark="had">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Never', role: 'never' },
          { t: 'was', role: 'be', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'so tired as after that race.', kind: 'dim' },
        ]"
      />
      <p class="translation">我從來沒有像那場比賽之後那麼累。</p>
    </NoteSlide>

    <NoteSlide title="倒裝和一般語序的意思一樣，倒裝的語氣比較強" mark="Never">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成式</span>
          <span>I have never seen → Never have I seen</span>
        </div>
        <div>
          <span class="term">過去完成式</span>
          <span>I had never thought → Never had I thought</span>
        </div>
        <div>
          <span class="term">will</span>
          <span>I will never forget → Never will I forget</span>
        </div>
        <div>
          <span class="term">過去簡單式</span>
          <span>I never saw → Never did I see</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="never 放在句首時要倒裝" mark="had I">
      <NoteFix
        wrong="Never I have seen the river so high."
        right="Never have I seen the river so high."
        fix="have I"
      />
    </NoteSlide>

    <NoteSlide title="主要動詞不移到主詞前面，要加 did" mark="had">
      <NoteFix
        wrong="Never saw I such a beautiful sunset."
        right="Never did I see such a beautiful sunset."
        fix="did I see"
      />
    </NoteSlide>

    <NoteSlide title="did 後面接原形動詞" mark="thought">
      <NoteFix
        wrong="Never did I thought the test would be so long."
        right="Never did I think the test would be so long."
        fix="think"
      />
    </NoteSlide>

    <NoteSlide title="never 本身是否定，助動詞不加 not" mark="Never">
      <NoteFix
        wrong="Never hasn't my sister missed a match."
        right="Never has my sister missed a match."
        fix="has"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
