<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-plural-after-prepositions, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞的受詞就是主詞，用複數反身代名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The staff', role: '主詞' },
          { t: 'didn\'t have enough time', kind: 'dim' },
          { t: 'for', role: '介系詞' },
          { t: 'themselves.', role: '反身代名詞', kind: 'key' },
        ]"
      />
      <p class="translation">員工們沒有足夠的時間留給自己。</p>
    </NoteSlide>

    <NoteSlide title="ourselves、yourselves、themselves 跟著主詞" mark="themselves.">
      <div class="rows is-labeled">
        <div>
          <span class="term">ourselves</span>
          <span
            ><NoteMark
              sentence="We should be proud of ourselves for finishing the project on time."
              :marks="['of ourselves']"
            /><span class="translation">我們能準時完成專案，應該為自己感到驕傲。</span></span
          >
        </div>
        <div>
          <span class="term">yourselves</span>
          <span
            ><NoteMark
              sentence="Look after yourselves while I'm away."
              :marks="['after yourselves']"
            /><span class="translation">我不在的時候，你們要照顧好自己。</span></span
          >
        </div>
        <div>
          <span class="term">themselves</span>
          <span
            ><NoteMark
              sentence="The children were very pleased with themselves after the show."
              :marks="['with themselves']"
            /><span class="translation">表演結束後，孩子們對自己很滿意。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞的受詞是別人，用受格" mark="themselves.">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞自己</span>
          <span
            ><NoteMark sentence="We took a photo of ourselves." :marks="['ourselves.']" /><span
              class="translation"
              >我們幫自己拍了一張照片。</span
            ></span
          >
        </div>
        <div>
          <span class="term">別人</span>
          <span
            ><NoteMark sentence="We took a photo of them." :marks="['them.']" /><span
              class="translation"
              >我們幫他們拍了一張照片。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說位置的介系詞後面通常用受格" mark="for">
      <div class="rows is-labeled">
        <div>
          <span class="term">behind</span>
          <span
            ><NoteMark sentence="We closed the door behind us." :marks="['behind us.']" /><span
              class="translation"
              >我們隨手把門關上。</span
            ></span
          >
        </div>
        <div>
          <span class="term">with</span>
          <span
            ><NoteMark sentence="They had no money with them." :marks="['with them.']" /><span
              class="translation"
              >他們身上沒帶錢。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞的受詞就是主詞 we，用 ourselves" mark="themselves.">
      <NoteFix
        wrong="We should be proud of us."
        right="We should be proud of ourselves."
        fix="ourselves."
      />
    </NoteSlide>

    <NoteSlide title="說帶在身邊的 with 後面用受格">
      <NoteFix wrong="We took the dog with ourselves." right="We took the dog with us." fix="us." />
    </NoteSlide>

    <NoteSlide title="對兩個人以上說話，用 yourselves" mark="themselves.">
      <NoteFix
        wrong="Take care of yourself, kids!"
        right="Take care of yourselves, kids!"
        fix="yourselves,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
