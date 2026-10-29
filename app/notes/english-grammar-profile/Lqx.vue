<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-none-substitution, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="none 代替前面說過的名詞片語">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Concerning your question about', kind: 'dim' },
          { t: 'special requirements,', role: '前面說過的名詞', kind: 'key' },
          { t: 'I am glad to tell you that', kind: 'dim' },
          { t: 'there are', role: 'there are' },
          { t: 'none', role: '代替 special requirements', kind: 'key', ring: true },
          { t: 'this year.', kind: 'dim' },
        ]"
      />
      <p class="translation">關於您問到的特殊需求，很高興告訴您，今年沒有任何特殊需求。</p>
    </NoteSlide>

    <NoteSlide title="none 可以放在 there are 後面、當受詞或當主詞" mark="none">
      <div class="rows is-labeled">
        <div>
          <span class="term">there are + none</span>
          <span
            ><NoteMark
              sentence="We needed more chairs, but there were none in the hall."
              :marks="['none']"
            /><span class="translation">我們需要更多椅子，可是禮堂裡一張也沒有。</span></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="I wanted some bread, but I found none." :marks="['none']" /><span
              class="translation"
              >我想買麵包，可是一個也找不到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark sentence="We sent ten letters. None came back." :marks="['None']" /><span
              class="translation"
              >我們寄了十封信。一封都沒寄回來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="none 比 not any 正式，語氣也比較強" mark="none">
      <div class="rows is-labeled">
        <div>
          <span class="term">none</span>
          <span
            ><NoteMark sentence="There's none left in the bottle." :marks="['none']" /><span
              class="translation"
              >瓶子裡一點也不剩。</span
            ></span
          >
        </div>
        <div>
          <span class="term">not any</span>
          <span
            ><NoteMark
              sentence="There isn't any jam left in the jar."
              :marks="['isn\'t', 'any']"
            /><span class="translation">罐子裡一點果醬都沒剩。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="none 可以單獨回答 how many 和 how much" mark="none">
      <NoteWords
        :size="26"
        :parts="[
          { t: '&quot;How much sugar do you take?&quot;', kind: 'dim' },
          { t: '&quot;None, thanks.&quot;', role: '單獨回答', kind: 'key' },
        ]"
      />
      <p class="translation">「你要加多少糖？」「不用加，謝謝。」</p>
    </NoteSlide>

    <NoteSlide title="none 本身是否定，動詞不加 not" mark="are">
      <NoteFix
        wrong="We tried three shops, but we didn't find none."
        right="We tried three shops, but we found none."
        fix="found"
      />
    </NoteSlide>

    <NoteSlide title="none 後面不接名詞，名詞前面用 no" mark="none">
      <NoteFix
        wrong="The kids wanted sweets, but there were none sweets in the house."
        right="The kids wanted sweets, but there were none in the house."
        fix="none"
      >
        要接名詞就用 <code>no</code>，像 <code>no sweets</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="回答數量用 none，不用 no" mark="none">
      <NoteFix
        wrong='"How many eggs are left?" "No."'
        right='"How many eggs are left?" "None."'
        fix="None"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
