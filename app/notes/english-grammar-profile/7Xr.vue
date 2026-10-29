<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-this-pointing-302, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this + 名詞" mark="this book?">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Would you like', role: '問句的開頭', kind: 'dim' },
          { t: 'to buy', role: '動詞', kind: 'dim' },
          { t: 'this', role: '手上的', kind: 'key' },
          { t: 'book?', role: '名詞' },
        ]"
      />
      <p class="translation">你想買這本書嗎？</p>
    </NoteSlide>

    <NoteSlide title="this 指的東西" mark="this book?">
      <div class="rows is-labeled">
        <div>
          <span class="term">手上拿的</span>
          <span
            ><NoteMark sentence="This phone has a cracked screen." :marks="['This phone']" /><span
              class="translation"
              >這支手機的螢幕裂了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">身邊的</span>
          <span
            ><NoteMark sentence="Is this chair broken?" :marks="['this chair']" /><span
              class="translation"
              >這張椅子壞了嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">正在寫的</span>
          <span
            ><NoteMark
              sentence="I'm sending this email from my phone."
              :marks="['this email']"
            /><span class="translation">我用手機寄這封電子郵件。</span></span
          >
        </div>
        <div>
          <span class="term">自己給的</span>
          <span
            ><NoteMark sentence="You can call me on this number." :marks="['this number.']" /><span
              class="translation"
              >你可以打這個號碼給我。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="寫信時用 this" mark="this">
      <div class="rows is-labeled">
        <div>
          <span class="term">開頭</span>
          <span
            ><NoteMark
              sentence="I am writing this letter to thank you for the present."
              :marks="['this letter']"
            /><span class="translation">我寫這封信，是要謝謝你送的禮物。</span></span
          >
        </div>
        <div>
          <span class="term">結尾</span>
          <span
            ><NoteMark
              sentence="I hope this information helps you."
              :marks="['this information']"
            /><span class="translation">希望這個資料對你有幫助。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 指近的，that 指遠的" mark="this">
      <div class="rows is-labeled">
        <div>
          <span class="term">this book</span>
          <span>說話的人手上的書</span>
        </div>
        <div>
          <span class="term">that book</span>
          <span>架子上離說話的人遠的書</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="手上的東西用 this" mark="this">
      <NoteFix
        wrong="Look at that ring on my finger."
        right="Look at this ring on my finger."
        fix="this ring"
      />
    </NoteSlide>

    <NoteSlide title="正在寫的信用 this" mark="this">
      <NoteFix
        wrong="I am writing the letter to say thank you."
        right="I am writing this letter to say thank you."
        fix="this letter"
      />
    </NoteSlide>

    <NoteSlide title="複數名詞前面用 these" mark="this book?">
      <NoteFix
        wrong="Would you like to buy this books?"
        right="Would you like to buy these books?"
        fix="these books?"
      />
    </NoteSlide>

    <NoteSlide title="this 和 my 不一起用" mark="this">
      <NoteFix wrong="This my phone is new." right="This phone is new." fix="This phone" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
