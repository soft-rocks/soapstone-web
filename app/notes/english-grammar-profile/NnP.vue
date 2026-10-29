<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-linking-complement-1104, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="remain 說主詞維持某個狀態">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Alice was so unhappy that', kind: 'dim' },
          { t: 'she', role: '主詞' },
          { t: 'remained', role: '連綴動詞', kind: 'key' },
          { t: 'silent', role: '補語', kind: 'key' },
          { t: 'for a long time.', kind: 'dim' },
        ]"
      />
      <p class="translation">Alice 難過到好長一段時間都不說話。</p>
    </NoteSlide>

    <NoteSlide title="連綴動詞說維持、看起來、變成或結果是" mark="remained">
      <div class="rows is-labeled">
        <div>
          <span class="term">維持</span>
          <span
            ><NoteMark sentence="The roads stayed busy all day." :marks="['stayed']" /><span
              class="translation"
              >路上整天都很塞。</span
            ></span
          >
        </div>
        <div>
          <span class="term">看起來</span>
          <span
            ><NoteMark sentence="The new teacher seems friendly." :marks="['seems']" /><span
              class="translation"
              >新老師好像很友善。</span
            ></span
          >
        </div>
        <div>
          <span class="term">變成</span>
          <span
            ><NoteMark sentence="The leaves turn red in autumn." :marks="['turn']" /><span
              class="translation"
              >秋天葉子會變紅。</span
            ></span
          >
        </div>
        <div>
          <span class="term">結果是</span>
          <span
            ><NoteMark sentence="The test proved difficult." :marks="['proved']" /><span
              class="translation"
              >那次考試結果很難。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="seem 後面可以加 to be，remain 後面可以接名詞片語" mark="silent">
      <div class="rows is-labeled">
        <div>
          <span class="term">to be + 補語</span>
          <span
            ><NoteMark
              sentence="My aunt seems to be happy in her new job."
              :marks="['to be happy']"
            /><span class="translation">我阿姨在新工作好像很開心。</span></span
          >
        </div>
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark
              sentence="She remained a teacher all her life."
              :marks="['a teacher']"
            /><span class="translation">她一輩子都是老師。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="補語說明主詞的狀態，用形容詞" mark="silent">
      <NoteFix
        wrong="She remained calmly during the storm."
        right="She remained calm during the storm."
        fix="calm"
      />
    </NoteSlide>

    <NoteSlide title="turn 後面直接接形容詞，turn into 接名詞">
      <NoteFix wrong="His face turned into red." right="His face turned red." fix="turned red" />
    </NoteSlide>

    <NoteSlide title="seem 後面接 be 時要加 to">
      <NoteFix wrong="The plan seems be working." right="The plan seems to be working." fix="to" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
