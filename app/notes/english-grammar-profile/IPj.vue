<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-frequency, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="句子的動詞是 be 時，頻率副詞放在 be 後面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'They', role: '主詞' },
          { t: 'are', role: 'be' },
          { t: 'always', role: '頻率副詞', kind: 'key' },
          { t: 'very friendly and polite.', role: '補語', kind: 'dim' },
        ]"
      />
      <p class="translation">他們總是很友善、很有禮貌。</p>
    </NoteSlide>

    <NoteSlide title="其他動詞的句子，頻率副詞放在動詞前面" mark="always">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'always', role: '頻率副詞', kind: 'key' },
          { t: 'walk', role: '動詞' },
          { t: 'to school.', kind: 'dim' },
        ]"
      />
      <p class="translation">我都走路上學。</p>
    </NoteSlide>

    <NoteSlide title="sometimes 也可以放在句首或句尾，always 不行" mark="always">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark sentence="Sometimes I go to the beach." :marks="['Sometimes']" /><span
              class="translation"
              >我有時候會去海邊。</span
            ></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="I go swimming sometimes." :marks="['sometimes']" /><span
              class="translation"
              >我有時候會去游泳。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="always 放在一般動詞前面" mark="always">
      <NoteFix
        wrong="I play always tennis on Sundays."
        right="I always play tennis on Sundays."
        fix="always play"
      />
    </NoteSlide>

    <NoteSlide title="always 放在 be 後面" mark="are always">
      <NoteFix wrong="She always is late." right="She is always late." fix="is always" />
    </NoteSlide>

    <NoteSlide title="直述句的 always 不放在句首" mark="always">
      <NoteFix
        wrong="Always my father drinks coffee in the morning."
        right="My father always drinks coffee in the morning."
        fix="always"
      >
        <code>Always</code> 放在句首的句子是祈使句，像 <code>Always lock the door.</code>
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="頻率副詞不影響動詞的形式">
      <NoteFix
        wrong="My sister sometimes cook dinner."
        right="My sister sometimes cooks dinner."
        fix="cooks"
      >
        主詞是第三人稱單數時，現在式的動詞照樣加 <code>-&#x2060;s</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="sometimes 是有時候，sometime 是未來某個時間">
      <div class="rows is-labeled">
        <div>
          <span class="term">sometimes</span>
          <span
            ><NoteMark sentence="I sometimes visit my grandmother." :marks="['sometimes']" /><span
              class="translation"
              >我有時候會去看我奶奶。</span
            ></span
          >
        </div>
        <div>
          <span class="term">sometime</span>
          <span
            ><NoteMark sentence="Let's have lunch sometime." :marks="['sometime']" /><span
              class="translation"
              >找個時間一起吃午餐吧。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="always 加現在進行式表示不滿" mark="always">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'You\'re', role: '主詞 + be' },
          { t: 'always', role: '頻率副詞', kind: 'key' },
          { t: 'losing', role: '動詞-ing', kind: 'key' },
          { t: 'your keys!', role: '受詞' },
        ]"
      />
      <p class="translation">你老是弄丟鑰匙！</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
