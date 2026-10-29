<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-use-not-only-but-also-with, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not only 放在句首時，be 移到主詞前面">
      <NoteWords
        :size="24"
        :move="{ from: 1, to: 2 }"
        :parts="[
          { t: 'Not only', role: 'not only', kind: 'key' },
          { t: 'was', role: 'be', kind: 'key' },
          { t: 'it', role: '主詞' },
          { t: 'in a wonderful location,', role: '補語' },
          { t: 'but it was also very accessible.', role: 'but + 第二個子句', kind: 'dim' },
        ]"
      />
      <p class="translation">那裡不但地點很棒，交通也很方便。</p>
    </NoteSlide>

    <NoteSlide title="but 後面的子句用一般的語序" mark="but">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Not only was it cheap,', kind: 'dim' },
          { t: 'but', role: 'but' },
          { t: 'it', role: '主詞' },
          { t: 'was', role: 'be' },
          { t: 'also', role: 'also', kind: 'key', ring: true },
          { t: 'clean.', role: '補語' },
        ]"
      />
      <p class="translation">那裡不但便宜，而且很乾淨。</p>
    </NoteSlide>

    <NoteSlide title="一般語序沒有助動詞時，倒裝加 do" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般語序</span>
          <span
            ><NoteMark sentence="My uncle owns a farm." :marks="['owns']" /><span
              class="translation"
              >我叔叔有一座農場。</span
            ></span
          >
        </div>
        <div>
          <span class="term">倒裝</span>
          <span
            ><NoteMark
              sentence="Not only does my uncle own a farm, but he also has a boat."
              :marks="['does', 'own']"
            /><span class="translation">我叔叔不但有一座農場，還有一艘船。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="but 可以省略，also 照樣保留" mark="but">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Not only did the shop sell bread,', kind: 'dim' },
          { t: 'but', kind: 'gone' },
          { t: 'it', role: '主詞' },
          { t: 'also', role: 'also', kind: 'key', ring: true },
          { t: 'made its own cheese.', kind: 'dim' },
        ]"
      />
      <p class="translation">那家店不但賣麵包，還自己做起司。</p>
    </NoteSlide>

    <NoteSlide title="not only 放在句首時要倒裝" mark="was it">
      <NoteFix
        wrong="Not only it was cheap, but it was also clean."
        right="Not only was it cheap, but it was also clean."
        fix="was it"
      />
    </NoteSlide>

    <NoteSlide title="主要動詞不移到主詞前面，要加 does" mark="was">
      <NoteFix
        wrong="Not only speaks she French, but she also speaks Arabic."
        right="Not only does she speak French, but she also speaks Arabic."
        fix="does she speak"
      />
    </NoteSlide>

    <NoteSlide title="只有 not only 的子句倒裝" mark="it was">
      <NoteFix
        wrong="Not only was the food good, but was also the service fast."
        right="Not only was the food good, but the service was also fast."
        fix="the service was"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
