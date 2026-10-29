<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 018, as slides, in the order of notes/dragon-english-basic-100/018.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="過去式加 for 和一段時間，表示那段時間已經結束"
      mark="lived in Canada for three years"
    >
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'lived', role: '過去式', kind: 'key' },
          { t: 'in Canada', kind: 'dim' },
          { t: 'for three years', role: 'for + 一段時間', kind: 'key' },
          { t: 'when I was in my teens …', kind: 'dim' },
        ]"
      />
      <p class="remark">原句表示我現在不住在加拿大。</p>
    </NoteSlide>

    <NoteSlide title="到現在還在持續的事，用現在完成式加 for" mark="lived">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去式<br /><i>已經結束</i></span>
          <span
            ><NoteMark
              sentence="My grandfather worked at the post office for forty years."
              :marks="['worked', 'for forty years']"
            /><span class="translation">我爺爺在郵局工作了四十年。</span></span
          >
        </div>
        <div>
          <span class="term">現在完成式<br /><i>還在持續</i></span>
          <span
            ><NoteMark
              sentence="I have lived in this town for ten years."
              :marks="['have lived', 'for ten years']"
            /><span class="translation">我已經在這個小鎮住了十年。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動語態是 be 動詞加過去分詞，表示主詞接受動作" mark="was transferred">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'my father', role: '主詞' },
          { t: 'was', role: 'be 動詞', kind: 'key' },
          { t: 'transferred', role: '過去分詞', kind: 'key' },
          { t: 'there.', kind: 'dim' },
        ]"
      />
      <p class="remark">做動作的人不重要或大家都知道時，句子裡不寫出來。</p>
    </NoteSlide>

    <NoteSlide title="被動語態要寫出做動作的人時用 by" mark="was transferred">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The window', role: '主詞' },
          { t: 'was broken', role: 'be + 過去分詞', kind: 'key' },
          { t: 'by the wind.', role: 'by + 做動作的人', kind: 'key' },
        ]"
      />
      <p class="translation">窗戶被風吹破了。</p>
    </NoteSlide>
  </NoteDeck>
</template>
