<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-adjective-phrase-noun, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞加形容詞，整個放在名詞前面" mark="really good friend">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I have', kind: 'dim' },
          { t: 'a', role: 'a / an' },
          { t: 'very', role: '程度副詞', kind: 'key', ring: true },
          { t: 'important', role: '形容詞', kind: 'key' },
          { t: 'meeting', role: '名詞' },
          { t: 'at ten.', kind: 'dim' },
        ]"
      />
      <p class="translation">我十點有一個很重要的會議。</p>
    </NoteSlide>

    <NoteSlide title="a 或 an 看程度副詞的發音" mark="a really">
      <div class="rows is-labeled">
        <div>
          <span class="term">a + really</span>
          <span
            ><NoteMark
              sentence="We watched a really funny movie last night."
              :marks="['a really']"
            /><span class="translation">我們昨天晚上看了一部很好笑的電影。</span></span
          >
        </div>
        <div>
          <span class="term">an + extremely</span>
          <span
            ><NoteMark
              sentence="She's an extremely talented singer."
              :marks="['an extremely']"
            /><span class="translation">她是個非常有天分的歌手。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前面也可以是 my、the，複數名詞可以不加限定詞" mark="a really">
      <div class="rows is-labeled">
        <div>
          <span class="term">my + 副詞 + 形容詞</span>
          <span
            ><NoteMark
              sentence="My really old laptop finally stopped working."
              :marks="['My really old laptop']"
            /><span class="translation">我那台很舊的筆電終於壞了。</span></span
          >
        </div>
        <div>
          <span class="term">複數 / 不可數名詞</span>
          <span
            ><NoteMark
              sentence="They sell very fresh fish at that market."
              :marks="['very fresh fish']"
            /><span class="translation">那個市場賣的魚很新鮮。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="程度副詞放在形容詞前面" mark="really good">
      <NoteFix
        wrong="She's a good really friend."
        right="She's a really good friend."
        fix="really good"
      />
    </NoteSlide>

    <NoteSlide title="a 或 an 不看形容詞，看緊接在後面的字" mark="a">
      <NoteFix wrong="It was an very old house." right="It was a very old house." fix="a" />
    </NoteSlide>

    <NoteSlide title="程度副詞要接形容詞" mark="really good">
      <NoteFix wrong="He's a very teacher." right="He's a very good teacher." fix="very good" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
