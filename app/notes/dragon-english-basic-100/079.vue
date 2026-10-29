<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 079, as slides, in the order of notes/dragon-english-basic-100/079.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="最高級後面的名詞可以接一個子句修飾" mark="The best things you can do">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The best', role: '最高級', kind: 'key' },
          { t: 'things', role: '名詞', kind: 'key' },
          { t: 'you can do', role: '修飾的子句' },
          { t: 'to protect nature …', kind: 'dim' },
        ]"
      />
      <p class="remark">原句的 <code>the best things you can do</code> 是你能做的最好的事。</p>
    </NoteSlide>

    <NoteSlide title="子句裡當受詞的 that 常省略" mark="things you">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'This is', kind: 'dim' },
          { t: 'the best pizza', role: '最高級 + 名詞', kind: 'key' },
          { t: 'that', role: '關係代名詞，常省略', kind: 'gone' },
          { t: 'I have ever eaten.', role: '子句' },
        ]"
      />
      <p class="translation">這是我吃過最好吃的披薩。</p>
      <p class="remark"><code>that</code> 是 <code>eaten</code> 的受詞。</p>
    </NoteSlide>

    <NoteSlide title="to 不定詞放在 be 動詞後面，說明主詞的內容" mark="are to reduce">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My dream', role: '主詞' },
          { t: 'is', role: 'be 動詞' },
          { t: 'to live in Kyoto.', role: '主詞的內容', kind: 'key' },
        ]"
      />
      <p class="translation">我的夢想是住在京都。</p>
    </NoteSlide>

    <NoteSlide title="to reduce 和 to use 說明能做的是哪些事" :mark="['to reduce', 'to use']">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The best things you can do to protect nature', role: '主詞', kind: 'dim' },
          { t: 'are', role: 'be 動詞' },
          { t: 'to reduce garbage', role: '事情一', kind: 'key' },
          { t: 'and', role: '連接詞' },
          { t: 'to use environmentally friendly products.', role: '事情二', kind: 'key' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="and 後面第二個不定詞的 to 可以保留" mark="and to use">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Our plan is', kind: 'dim' },
          { t: 'to leave at six', role: '不定詞一' },
          { t: 'and', role: '連接詞' },
          { t: 'to', role: '保留', kind: 'key', ring: true },
          { t: 'arrive before noon.', role: '不定詞二' },
        ]"
      />
      <p class="translation">我們的計畫是六點出發，中午前到達。</p>
    </NoteSlide>
  </NoteDeck>
</template>
