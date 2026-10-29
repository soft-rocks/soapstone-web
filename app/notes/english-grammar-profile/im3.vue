<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-this-already-mentioned-946, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this 指前面整件事" mark="this,">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We missed the last bus.', role: '前面的句子' },
          { t: 'Because of', kind: 'dim' },
          { t: 'this,', role: '= 錯過公車', kind: 'key' },
          { t: '…', kind: 'dim' },
        ]"
      />
      <p class="translation">我們錯過了最後一班公車，所以只好走路回家。</p>
    </NoteSlide>

    <NoteSlide title="this 常用的位置" mark="this,">
      <div class="rows is-labeled">
        <div>
          <span class="term">because of this</span>
          <span
            ><NoteMark
              sentence="Food is cheap here. Because of this, we eat out a lot."
              :marks="['Because of this,']"
            /><span class="translation">這裡吃的很便宜，所以我們常在外面吃。</span></span
          >
        </div>
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark
              sentence="The town has no cinema. This is a big problem."
              :marks="['This']"
            /><span class="translation">鎮上沒有電影院，這是個大問題。</span></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark
              sentence="Cars park on the pavement. The police must stop this."
              :marks="['this.']"
            /><span class="translation">很多車停在人行道上，警察一定要阻止這種事。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="it：不特別強調">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She lost her job …, but she never talks about', kind: 'dim' },
          { t: 'it.', role: '= 丟工作', kind: 'key' },
        ]"
      />
      <p class="translation">她去年丟了工作，可是她從來不提這件事。</p>
    </NoteSlide>

    <NoteSlide title="指一件事用 this" mark="this,">
      <NoteFix
        wrong="The shop was closed on Sunday. These made me very angry."
        right="The shop was closed on Sunday. This made me very angry."
        fix="This"
      />
    </NoteSlide>

    <NoteSlide title="because of + this" mark="Because of">
      <NoteFix
        wrong="It rained all day. Because this, the match was cancelled."
        right="It rained all day. Because of this, the match was cancelled."
        fix="of"
      />
    </NoteSlide>

    <NoteSlide title="新句子用 this 開頭" mark="this,">
      <NoteFix
        wrong="My room is cold and dark. Which makes me sad."
        right="My room is cold and dark. This makes me sad."
        fix="This"
      />
    </NoteSlide>

    <NoteSlide title="this + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'This', role: '限定詞', kind: 'key' },
          { t: 'problem', role: '名詞' },
          { t: 'is easy to solve.', kind: 'dim' },
        ]"
      />
      <p class="translation">這個問題很容易解決。</p>
    </NoteSlide>

    <NoteSlide title=", which：同一個句子">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My room is cold and dark,', role: '前面的子句' },
          { t: 'which', kind: 'key' },
          { t: 'makes me sad.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的房間又冷又暗，讓我很難過。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
