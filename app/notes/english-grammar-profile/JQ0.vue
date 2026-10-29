<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-linking, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="so 前面是原因，後面是結果">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I don\'t like green,', role: '第一個子句（原因）' },
          { t: 'so', role: '連接詞', kind: 'key' },
          { t: 'I decided to use blue.', role: '第二個子句（結果）' },
        ]"
      />
      <p class="translation">我不喜歡綠色，所以我決定用藍色。</p>
    </NoteSlide>

    <NoteSlide title="however 開始一個新的句子，後面加逗號" mark="so">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The hotel was old.', role: '第一個句子', kind: 'dim' },
          { t: 'However,', role: '相反', kind: 'key' },
          { t: 'the rooms were clean.', role: '第二個句子' },
        ]"
      />
      <p class="translation">那家旅館很舊。不過房間很乾淨。</p>
      <p class="remark"><code>however</code> 比 <code>but</code> 正式。</p>
    </NoteSlide>

    <NoteSlide title="also 放在一般動詞前面，或放在 be 和助動詞後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般動詞前面</span>
          <span
            ><NoteMark
              sentence="I bought a jacket. I also bought some socks."
              :marks="['also bought']"
            /><span class="translation">我買了一件夾克。我也買了幾雙襪子。</span></span
          >
        </div>
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark sentence="She is also a teacher." :marks="['is also']" /><span
              class="translation"
              >她也是老師。</span
            ></span
          >
        </div>
        <div>
          <span class="term">助動詞後面</span>
          <span
            ><NoteMark sentence="I can also speak a little Spanish." :marks="['can also']" /><span
              class="translation"
              >我也會說一點西班牙文。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="however 不和 and 一起用">
      <NoteFix
        wrong="It was cold, and however we went swimming."
        right="It was cold. However, we went swimming."
        fix="However,"
      />
    </NoteSlide>

    <NoteSlide title="because 和 so 不放在同一句" mark="so">
      <NoteFix
        wrong="Because I was tired, so I went to bed."
        right="I was tired, so I went to bed."
        fix="I was tired"
      />
    </NoteSlide>

    <NoteSlide title="also 不放在句尾，放在句尾用 too">
      <NoteFix wrong="I like tennis also." right="I also like tennis." fix="also" />
    </NoteSlide>

    <NoteSlide title="also 不放在 be 前面">
      <NoteFix wrong="She also is a doctor." right="She is also a doctor." fix="is also" />
    </NoteSlide>

    <NoteSlide title="so 後面接結果，because 後面接原因" mark="so">
      <div class="rows is-labeled">
        <div>
          <span class="term">so<br /><i>結果</i></span>
          <span
            ><NoteMark
              sentence="It was raining, so we stayed home."
              :marks="['so we stayed home']"
            /><span class="translation">在下雨，所以我們待在家。</span></span
          >
        </div>
        <div>
          <span class="term">because<br /><i>原因</i></span>
          <span
            ><NoteMark
              sentence="We stayed home because it was raining."
              :marks="['because it was raining']"
            /><span class="translation">我們待在家，因為在下雨。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="but 用逗號連接同一句裡的子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">but</span>
          <span
            ><NoteMark sentence="The test was hard, but I passed." :marks="['but']" /><span
              class="translation"
              >考試很難，可是我過了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">however</span>
          <span
            ><NoteMark sentence="The test was hard. However, I passed." :marks="['However']" /><span
              class="translation"
              >考試很難。不過我過了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
