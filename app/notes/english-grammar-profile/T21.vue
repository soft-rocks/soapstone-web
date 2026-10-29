<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-use-modifying-clauses-stance, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="態度副詞放在句首，修飾整個句子">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Luckily,', role: '態度副詞', kind: 'key' },
          { t: 'I arrived in time.', role: '句子' },
        ]"
      />
      <p class="translation">幸好我及時趕到了。</p>
    </NoteSlide>

    <NoteSlide title="態度副詞也可以放在主詞或連接詞後面，前後加逗號" mark="Luckily,">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="My sister, unfortunately, missed the last bus."
              :marks="['unfortunately,']"
            /><span class="translation">我妹妹不巧錯過了最後一班公車。</span></span
          >
        </div>
        <div>
          <span class="term">連接詞後面</span>
          <span
            ><NoteMark
              sentence="But, obviously, you prefer going with your friends."
              :marks="['obviously,']"
            /><span class="translation">不過，你顯然比較想跟朋友一起去。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="obviously、clearly 可以放在動詞前面或 be 後面，不加逗號">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞前面</span>
          <span
            ><NoteMark sentence="She obviously didn't like the food." :marks="['obviously']" /><span
              class="translation"
              >她顯然不喜歡那些菜。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark sentence="The answer is clearly wrong." :marks="['is clearly']" /><span
              class="translation"
              >這個答案顯然是錯的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="各個態度副詞表示不同的看法">
      <div class="rows is-labeled">
        <div>
          <span class="term">luckily、fortunately</span>
          <span>幸好</span>
        </div>
        <div>
          <span class="term">unfortunately、sadly</span>
          <span>可惜，不幸</span>
        </div>
        <div>
          <span class="term">obviously、clearly</span>
          <span>顯然</span>
        </div>
        <div>
          <span class="term">surprisingly</span>
          <span>出乎意料</span>
        </div>
        <div>
          <span class="term">honestly、frankly、seriously</span>
          <span>老實說，說真的</span>
        </div>
        <div>
          <span class="term">hopefully</span>
          <span>希望</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="修飾整個句子用副詞，不用形容詞" mark="Luckily,">
      <NoteFix wrong="Lucky, I found my keys." right="Luckily, I found my keys." fix="Luckily," />
    </NoteSlide>

    <NoteSlide title="unfortunate 保留 e 再加 -ly">
      <NoteFix
        wrong="Unfortunatly, the shop was closed."
        right="Unfortunately, the shop was closed."
        fix="Unfortunately,"
      />
    </NoteSlide>

    <NoteSlide title="態度副詞和主詞用逗號隔開時，後面也加逗號">
      <NoteFix
        wrong="My boss unfortunately, was ill."
        right="My boss, unfortunately, was ill."
        fix="My boss, unfortunately,"
      />
    </NoteSlide>

    <NoteSlide title="態度副詞後面直接接句子，不加 that">
      <NoteFix
        wrong="Hopefully that the rain will stop soon."
        right="Hopefully, the rain will stop soon."
        fix="Hopefully,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
