<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-auxiliary-verbs-be-have-present, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="現在完成式的否定在 have 後面加 not">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'haven\'t', role: 'have + not', kind: 'key' },
          { t: 'tidied', role: '過去分詞', kind: 'key' },
          { t: 'my room', role: '受詞' },
          { t: 'since I bought this mobile phone.', role: 'since 子句', kind: 'dim' },
        ]"
      />
      <p class="translation">自從買了這支手機，我就沒整理過房間了。</p>
    </NoteSlide>

    <NoteSlide title="現在進行式的否定在 be 後面加 not" mark="haven't">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'The heating', role: '主詞' },
          { t: 'isn\'t', role: 'be + not', kind: 'key' },
          { t: 'working.', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="translation">暖氣壞了。</p>
    </NoteSlide>

    <NoteSlide title="可以縮主詞和助動詞，也可以縮助動詞和 not" mark="haven't">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞和助動詞縮寫</span>
          <span
            ><NoteMark sentence="She's not feeling well." :marks="['She\'s']" /><span
              class="translation"
              >她不太舒服。</span
            ></span
          >
        </div>
        <div>
          <span class="term">助動詞和 not 縮寫</span>
          <span
            ><NoteMark sentence="My sister hasn't called me." :marks="['hasn\'t']" /><span
              class="translation"
              >我姊姊沒打電話給我。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">現在完成式的否定比較常用 <code>haven't</code> 和 <code>hasn't</code>。</p>
    </NoteSlide>

    <NoteSlide title="have got 的否定也在 have 後面加 not" mark="haven't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'haven\'t got', role: '沒有', kind: 'key' },
          { t: 'any hot water.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我們沒有熱水。</p>
      <p class="remark">這句不是現在完成式。意思和 <code>don't have</code> 一樣。</p>
    </NoteSlide>

    <NoteSlide title="現在完成式的否定不用 do" mark="haven't">
      <NoteFix
        wrong="I don't have finished my homework."
        right="I haven't finished my homework."
        fix="haven't"
      />
    </NoteSlide>

    <NoteSlide title="現在進行式的否定句要有 be">
      <NoteFix wrong="The printer not working." right="The printer isn't working." fix="isn't" />
    </NoteSlide>

    <NoteSlide title="主詞是 he、she、it 時用 hasn't" mark="haven't">
      <NoteFix wrong="She haven't called me." right="She hasn't called me." fix="hasn't" />
    </NoteSlide>

    <NoteSlide title="haven't 後面接過去分詞，不接過去式" mark="tidied">
      <NoteFix wrong="We haven't went there." right="We haven't been there." fix="been">
        說「去過」時用 <code>been</code>。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
