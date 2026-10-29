<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-with-as-soon-as, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will + 原形動詞 + as soon as + 主詞 + 現在簡單式">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'let', role: '原形動詞' },
          { t: 'you know', kind: 'dim' },
          { t: 'as soon as', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'get the exact date.', role: '現在簡單式' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="as soon as、as soon as 子句、另一半的句子" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">as soon as</span>
          <span>一……就……。前一件事發生後，後一件事馬上發生。</span>
        </div>
        <div>
          <span class="term">as soon as 子句</span>
          <span>說未來的事，動詞用現在簡單式。</span>
        </div>
        <div>
          <span class="term">另一半的句子</span>
          <span>用 will、be going to、祈使句這類說未來的形式。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="現在完成式" mark="as soon as">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I'll send it as soon as I've finished it."
              :marks="['as soon as']"
            /><span class="translation">我一寫完就寄給你。</span></span
          >
        </div>
      </div>
      <p class="remark">as soon as 後面也可以用現在完成式。這樣寫強調前一件事已經做完。</p>
    </NoteSlide>
    <NoteSlide title="as soon as 說未來的時間時，後面用現在簡單式" mark="as soon as">
      <NoteFix
        wrong="I'll let you know as soon as I will get the date."
        right="I'll let you know as soon as I get the date."
        :fix="['get']"
      />
    </NoteSlide>
    <NoteSlide title="這個連接詞是 as soon as，前面的 as 不能省略" mark="as soon as">
      <NoteFix
        wrong="I'll phone you soon as I land."
        right="I'll phone you as soon as I land."
        :fix="['as']"
      />
    </NoteSlide>
    <NoteSlide title="as soon as 子句以外的那一半說未來，要用 will" mark="as soon as">
      <NoteFix
        wrong="I tell you as soon as I hear anything."
        right="I'll tell you as soon as I hear anything."
        :fix="['I\'ll']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
