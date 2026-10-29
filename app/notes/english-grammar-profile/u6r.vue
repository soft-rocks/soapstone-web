<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-postmodifying-specifying, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="the one + 後置修飾語" mark="the one with silver gates.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'My', kind: 'dim' },
          { t: 'house', role: '單數名詞', kind: 'key' },
          { t: 'is number 8, and it\'s', kind: 'dim' },
          { t: 'the one', role: '代替 house', kind: 'key' },
          { t: 'with silver gates.', role: '後置修飾語' },
        ]"
      />
      <p class="translation">我家是 8 號，就是有銀色大門的那一間。</p>
    </NoteSlide>

    <NoteSlide title="後置修飾語的種類" mark="with silver gates.">
      <div class="rows is-labeled">
        <div>
          <span class="term">介系詞片語</span>
          <span
            ><NoteMark
              sentence="Which bag is yours? The one on the chair?"
              :marks="['on the chair?']"
            /><span class="translation">哪個包包是你的？椅子上那個嗎？</span></span
          >
        </div>
        <div>
          <span class="term">關係子句</span>
          <span
            ><NoteMark
              sentence="Do you remember the café? The one that sold those huge cakes?"
              :marks="['that sold those huge cakes?']"
            /><span class="translation">你記得那家咖啡店嗎？賣超大蛋糕的那一家？</span></span
          >
        </div>
        <div>
          <span class="term">省略關係代名詞</span>
          <span
            ><NoteMark
              sentence="All my friends gave me presents, but the one I liked best was a book."
              :marks="['I liked best']"
            /><span class="translation">朋友都送了我禮物，我最喜歡的是一本書。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the + 修飾語 + one" mark="the one">
      <div class="rows is-labeled">
        <div>
          <span class="term">序數</span>
          <span
            ><NoteMark sentence="My house is the first one on the left." :marks="['first']" /><span
              class="translation"
              >我家是左邊第一間。</span
            ></span
          >
        </div>
        <div>
          <span class="term">other</span>
          <span
            ><NoteMark
              sentence="I bought a new jacket because the other one that I had was too small."
              :marks="['other']"
            /><span class="translation">我買了一件新外套，因為原本那件太小了。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="I want the blue one in the window." :marks="['blue']" /><span
              class="translation"
              >我要櫥窗裡那個藍色的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="one 前面加 the" mark="the one">
      <NoteFix
        wrong="My bike is one with the red seat."
        right="My bike is the one with the red seat."
        fix="the one"
      />
    </NoteSlide>

    <NoteSlide title="it 後面不接修飾語">
      <NoteFix
        wrong="Which is your car? It with the roof box?"
        right="Which is your car? The one with the roof box?"
        fix="The one"
      />
    </NoteSlide>

    <NoteSlide title="當主詞的 that 不省略">
      <NoteFix
        wrong="My house is the one has a red door."
        right="My house is the one that has a red door."
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="子句裡不再加 it">
      <NoteFix
        wrong="The one I bought it last week is already broken."
        right="The one I bought last week is already broken."
        fix="bought last week"
      />
    </NoteSlide>

    <NoteSlide title="複數用 the ones">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My shoes are', kind: 'dim' },
          { t: 'the ones', role: '代替 shoes', kind: 'key' },
          { t: 'by the door.', role: '後置修飾語' },
        ]"
      />
      <p class="translation">我的鞋子是門邊那雙。</p>
    </NoteSlide>

    <NoteSlide title="指得出來用 that one">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ll take', kind: 'dim' },
          { t: 'that one.', role: '不加修飾語', kind: 'key' },
        ]"
      />
      <p class="translation">我要那個。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
