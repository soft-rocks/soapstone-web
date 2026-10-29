<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-stance-109, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="態度副詞放在句首，先表明看法">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Obviously,', role: '態度副詞', kind: 'key' },
          { t: 'everybody', role: '主詞' },
          { t: 'has', role: '動詞' },
          { t: 'the right to go on strike.', role: '受詞' },
        ]"
      />
      <p class="translation">顯然，每個人都有罷工的權利。</p>
    </NoteSlide>

    <NoteSlide title="態度副詞也可以放在一般動詞前面" mark="Obviously,">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'We can\'t', role: '主詞 + 助動詞', kind: 'dim' },
          { t: 'truly', role: '態度副詞', kind: 'key' },
          { t: 'blame', role: '一般動詞' },
          { t: 'ourselves.', role: '受詞' },
        ]"
      />
      <p class="translation">我們其實不能怪自己。</p>
    </NoteSlide>

    <NoteSlide title="各個態度副詞表示不同的看法">
      <div class="rows is-labeled">
        <div>
          <span class="term">apparently</span>
          <span>聽說，看起來</span>
        </div>
        <div>
          <span class="term">naturally</span>
          <span>當然，在意料之中</span>
        </div>
        <div>
          <span class="term">surprisingly</span>
          <span>出乎意料</span>
        </div>
        <div>
          <span class="term">frankly</span>
          <span>坦白說</span>
        </div>
        <div>
          <span class="term">admittedly</span>
          <span>我承認，後面常接 but</span>
        </div>
        <div>
          <span class="term">inevitably</span>
          <span>不可避免</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="luckily for 加受詞，說明對誰來說">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Luckily for me,', role: '態度副詞 + for + 受詞', kind: 'key' },
          { t: 'I stayed with a very kind family.', role: '子句' },
        ]"
      />
      <p class="translation">我很幸運，住在一個很親切的家庭裡。</p>
    </NoteSlide>

    <NoteSlide title="說很明顯用形容詞 obvious，不用 apparently">
      <NoteFix
        wrong="The answer is apparently, so I don't need to explain it."
        right="The answer is obvious, so I don't need to explain it."
        fix="obvious"
      />
    </NoteSlide>

    <NoteSlide title="態度副詞後面直接接子句，不加 that">
      <NoteFix
        wrong="Apparently that the shop is closed today."
        right="Apparently, the shop is closed today."
        fix="Apparently,"
      />
    </NoteSlide>

    <NoteSlide title="修飾整個句子用副詞 naturally" mark="Obviously,">
      <NoteFix wrong="Natural, I said yes." right="Naturally, I said yes." fix="Naturally," />
    </NoteSlide>

    <NoteSlide title="for 後面接受格">
      <NoteFix
        wrong="Luckily for I, the bus was late too."
        right="Luckily for me, the bus was late too."
        fix="me"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
