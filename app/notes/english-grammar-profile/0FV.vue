<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-hedging, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + may be + 過去分詞 + that + 子句">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', kind: 'key', ring: true },
          { t: 'may be', kind: 'key', ring: true },
          { t: 'argued', role: '過去分詞' },
          { t: 'that', kind: 'key', ring: true },
          { t: 'a child\'s academic success is crucial to his or her future.', role: '子句' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="it may be argued that、it may be concluded that、it may be said that">
      <div class="rows is-labeled">
        <div>
          <span class="term">it may be argued that</span>
          <span>可以說、有人可能會主張。</span>
        </div>
        <div>
          <span class="term">it may be concluded that</span>
          <span>可以得出結論。</span>
        </div>
        <div>
          <span class="term">it may be said that</span>
          <span>可以說。</span>
        </div>
        <div>
          <span class="term">it may be suggested that</span>
          <span>可以這麼看。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用在結論">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="On balance, it may be concluded that the benefits are greater."
              :marks="['On balance, it may be concluded that']"
            /><span class="translation">整體來說，可以得出結論：好處比較多。</span></span
          >
        </div>
      </div>
      <p class="remark">
        On balance, it may be concluded that 常放在論文的最後一段，總結正反兩方的討論。
      </p>
    </NoteSlide>
    <NoteSlide title="be 後面接過去分詞" mark="be">
      <NoteFix
        wrong="It may be argue that exams are unfair."
        right="It may be argued that exams are unfair."
        :fix="['argued']"
      />
    </NoteSlide>
    <NoteSlide title="句子要用 it 當主詞" mark="It">
      <NoteFix
        wrong="May be concluded that the plan failed."
        right="It may be concluded that the plan failed."
        :fix="['It may']"
      />
    </NoteSlide>
    <NoteSlide title="may 後面接原形 be" mark="may">
      <NoteFix
        wrong="It may is said that money helps."
        right="It may be said that money helps."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
