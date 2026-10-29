<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-with-adjective-specifying, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="something + 形容詞" mark="something comfortable.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You need to wear', kind: 'dim' },
          { t: 'something', role: '東西', kind: 'key' },
          { t: 'comfortable.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="translation">你要穿舒服一點的衣服。</p>
    </NoteSlide>

    <NoteSlide title="形容詞放在 something 後面" mark="comfortable.">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般名詞</span>
          <span
            ><NoteMark sentence="a comfortable jacket" :marks="['comfortable']" /><span
              class="translation"
              >一件舒服的外套</span
            ></span
          >
        </div>
        <div>
          <span class="term">something</span>
          <span
            ><NoteMark sentence="something comfortable" :marks="['comfortable']" /><span
              class="translation"
              >舒服的東西</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="something 和 anything" mark="something">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定</span>
          <span
            ><NoteMark
              sentence="I'd like something sweet after dinner."
              :marks="['something sweet']"
            /><span class="translation">晚餐後我想吃點甜的。</span></span
          >
        </div>
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark
              sentence="You don't have to bring anything special."
              :marks="['anything special.']"
            /><span class="translation">你不用帶什麼特別的東西。</span></span
          >
        </div>
        <div>
          <span class="term">疑問</span>
          <span
            ><NoteMark
              sentence="Did the doctor find anything serious?"
              :marks="['anything serious?']"
            /><span class="translation">醫生有發現什麼嚴重的問題嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="用形容詞，不用副詞" mark="comfortable.">
      <NoteFix
        wrong="You should wear something warmly."
        right="You should wear something warm."
        fix="warm."
      />
    </NoteSlide>

    <NoteSlide title="cheap 的比較級是 cheaper">
      <NoteFix
        wrong="Have you got something more cheap in this style?"
        right="Have you got something cheaper in this style?"
        fix="cheaper"
      />
    </NoteSlide>

    <NoteSlide title="something 前面不加 a" mark="something">
      <NoteFix
        wrong="Grandpa carved a something beautiful out of wood."
        right="Grandpa carved something beautiful out of wood."
        fix="bought something"
      />
    </NoteSlide>

    <NoteSlide title="東西有趣：interesting">
      <NoteFix
        wrong="Did you hear anything interested on the radio this morning?"
        right="Did you hear anything interesting on the radio this morning?"
        fix="interesting"
      />
    </NoteSlide>

    <NoteSlide title="形容詞 + 一般名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We bought', kind: 'dim' },
          { t: 'comfortable', role: '形容詞', kind: 'key' },
          { t: 'chairs', role: '名詞', kind: 'key' },
          { t: 'for the garden.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們買了舒服的椅子放在院子裡。</p>
    </NoteSlide>

    <NoteSlide title="動詞 + 形容詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'This sofa', kind: 'dim' },
          { t: 'feels', role: '動詞', kind: 'key' },
          { t: 'comfortable.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="translation">這張沙發坐起來很舒服。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
