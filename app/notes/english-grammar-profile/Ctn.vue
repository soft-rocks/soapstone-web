<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-and-object-pronouns-each-several, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="neither 當主詞" mark="neither covers">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Both firms', role: '前面說過的', kind: 'key' },
          { t: '… but', kind: 'dim' },
          { t: 'neither', role: '兩家都不', kind: 'key' },
          { t: 'covers', role: '單數動詞' },
          { t: 'all of them.', kind: 'dim' },
        ]"
      />
      <p class="translation">這兩家公司……，但沒有一家能全部滿足。</p>
    </NoteSlide>

    <NoteSlide title="each、either 和 neither" mark="neither">
      <div class="rows is-labeled">
        <div>
          <span class="term">each</span>
          <span
            ><NoteMark
              sentence="The rooms are small, but each has its own bathroom."
              :marks="['each']"
            /><span class="translation">房間很小，可是每一間都有自己的浴室。</span></span
          >
        </div>
        <div>
          <span class="term">either</span>
          <span
            ><NoteMark sentence="Tea or coffee? Either is fine." :marks="['Either']" /><span
              class="translation"
              >茶還是咖啡？哪一個都可以。</span
            ></span
          >
        </div>
        <div>
          <span class="term">neither</span>
          <span
            ><NoteMark sentence="I tried two keys, but neither worked." :marks="['neither']" /><span
              class="translation"
              >我試了兩把鑰匙，可是兩把都打不開。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="several 和 enough" mark="neither">
      <div class="rows is-labeled">
        <div>
          <span class="term">several</span>
          <span
            ><NoteMark
              sentence="I wanted one ticket, but I ended up buying several."
              :marks="['several.']"
            /><span class="translation">我本來只想買一張票，結果買了好幾張。</span></span
          >
        </div>
        <div>
          <span class="term">enough</span>
          <span
            ><NoteMark sentence="No, we have enough." :marks="['enough.']" /><span
              class="translation"
              >不用，夠了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="當主詞和當受詞" mark="neither">
      <div class="rows is-labeled">
        <div>
          <span class="term">當主詞</span>
          <span
            ><NoteMark
              sentence="We have two cars, and each needs new tyres."
              :marks="['each needs']"
            /><span class="translation">我們有兩輛車，每一輛都要換新輪胎。</span></span
          >
        </div>
        <div>
          <span class="term">當受詞</span>
          <span
            ><NoteMark sentence="I can recommend several." :marks="['recommend several.']" /><span
              class="translation"
              >我可以推薦好幾家。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="each 後面用單數動詞" mark="covers">
      <NoteFix
        wrong="The children got presents, and each were very happy."
        right="The children got presents, and each was very happy."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="三個以上用 none" mark="neither">
      <NoteFix
        wrong="I visited five shops, but neither had my size."
        right="I visited five shops, but none had my size."
        fix="none"
      />
    </NoteSlide>

    <NoteSlide title="neither 後面不加 not" mark="covers">
      <NoteFix
        wrong="I read both books, but neither wasn't interesting."
        right="I read both books, but neither was interesting."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="several 後面不加 ones">
      <NoteFix
        wrong="I liked the photos, so I printed several ones."
        right="I liked the photos, so I printed several."
        fix="several."
      />
    </NoteSlide>

    <NoteSlide title="each of + 受格代名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Each of', kind: 'key' },
          { t: 'them', role: '受格代名詞' },
          { t: 'has a different idea.', kind: 'dim' },
        ]"
      />
      <p class="translation">他們每個人都有不同的想法。</p>
    </NoteSlide>

    <NoteSlide title="enough + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We have', kind: 'dim' },
          { t: 'enough', role: '限定詞', kind: 'key' },
          { t: 'chairs', role: '名詞' },
          { t: 'for everyone.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們的椅子夠每個人坐。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
