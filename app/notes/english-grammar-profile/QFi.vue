<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verbs-indirect-object-clause, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="間接受詞是聽話的人，子句是告訴對方的內容">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Nisha', role: '主詞', kind: 'dim' },
          { t: 'told', role: '動詞', kind: 'key' },
          { t: 'me', role: '間接受詞', kind: 'key' },
          { t: 'that', kind: 'gone' },
          { t: 'you had an accident last week.', role: '子句' },
        ]"
      />
      <p class="translation">Nisha 跟我說你上禮拜出了意外。</p>
      <p class="remark">子句前面省略了 <code>that</code>。</p>
    </NoteSlide>

    <NoteSlide title="有 that 和省略 that，意思一樣" mark="told me">
      <div class="rows is-labeled">
        <div>
          <span class="term">有 that</span>
          <span
            ><NoteMark
              sentence="My brother told me that he was getting married."
              :marks="['that']"
            /><span class="translation">我哥哥跟我說他要結婚了。</span></span
          >
        </div>
        <div>
          <span class="term">省略 that</span>
          <span
            ><NoteMark sentence="My brother told me he was getting married." :marks="['me']" /><span
              class="translation"
              >我哥哥跟我說他要結婚了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="tell 後面有聽話的人，say 後面沒有" mark="told me">
      <NoteFork
        stem="She"
        :branches="[
          {
            head: 'told me',
            rest: 'she was tired',
            meaning: 'tell + 間接受詞',
            zh: '她跟我說她累了。',
          },
          { head: 'said', rest: 'she was tired', meaning: 'say + 子句', zh: '她說她累了。' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="tell 後面要接聽話的人" mark="me">
      <NoteFix wrong="He told that he was sorry." right="He told me that he was sorry." fix="me" />
    </NoteSlide>

    <NoteSlide title="要說聽話的人，用 tell，不用 say" mark="told">
      <NoteFix
        wrong="She said me the shop was closed."
        right="She told me the shop was closed."
        fix="told"
      />
    </NoteSlide>

    <NoteSlide title="代名詞的間接受詞用受格" mark="me">
      <NoteFix
        wrong="You promised I that you would help."
        right="You promised me that you would help."
        fix="me"
      />
    </NoteSlide>

    <NoteSlide title="tell 後面直接接間接受詞，不加 to" mark="told me">
      <NoteFix
        wrong="My dad told to me that he was busy."
        right="My dad told me that he was busy."
        fix="told me"
      />
    </NoteSlide>

    <NoteSlide title="tell + 間接受詞 + to 說的是要對方做的事" mark="told me">
      <NoteMark sentence="My mum told me to clean my room." :marks="['to clean']" />
      <p class="translation">我媽叫我打掃房間。</p>
    </NoteSlide>

    <NoteSlide title="say 要說出聽話的人時，在人前面加 to" mark="told me">
      <NoteMark sentence="She said to me that she was happy." :marks="['said to me']" />
      <p class="translation">她對我說她很開心。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
