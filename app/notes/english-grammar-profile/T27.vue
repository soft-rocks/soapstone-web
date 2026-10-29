<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-inversion, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Had 放在主詞前面，代替 if">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Had', role: '代替 if', kind: 'key' },
          { t: 'we known that before,', role: '主詞 + 過去分詞' },
          { t: 'we could have taken more money with us.', role: '主要子句' },
        ]"
      />
      <p class="translation">要是我們早點知道那件事，就可以多帶點錢了。</p>
      <p class="remark"><code>Had we known</code> 等於 <code>If we had known</code>。</p>
    </NoteSlide>

    <NoteSlide title="Should 說未來可能的事，Had 說過去沒發生的事，Were 說不是真的事" mark="Had">
      <div class="rows is-labeled">
        <div>
          <span class="term">Should</span>
          <span
            ><NoteMark
              sentence="Should you have any questions, please contact our office."
              :marks="['Should']"
            /><span class="translation">如果您有任何問題，請聯絡我們的辦公室。</span></span
          >
        </div>
        <div>
          <span class="term">Had</span>
          <span
            ><NoteMark
              sentence="Had I seen the sign, I would have stopped."
              :marks="['Had']"
            /><span class="translation">要是我有看到那個標誌，我就會停下來了。</span></span
          >
        </div>
        <div>
          <span class="term">Were</span>
          <span
            ><NoteMark
              sentence="Were I in your position, I would accept the offer."
              :marks="['Were']"
            /><span class="translation">如果我是你，我會接受那個提議。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定的時候，not 放在主詞後面，不縮寫" mark="Had we">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark
              sentence="Had it not been for your help, I would have failed."
              :marks="['Had it not']"
            /><span class="translation">要不是有你的幫忙，我早就失敗了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="倒裝已經代替 if，不再加 if" mark="Had">
      <NoteFix
        wrong="If had I known, I would have come."
        right="Had I known, I would have come."
        fix="Had I known,"
      />
    </NoteSlide>

    <NoteSlide title="倒裝的否定寫成 Had we not" mark="Had we">
      <NoteFix
        wrong="Hadn't we left early, we would have missed the plane."
        right="Had we not left early, we would have missed the plane."
        fix="Had we not"
      />
    </NoteSlide>

    <NoteSlide title="倒裝的條件子句用 Were，不用 Was">
      <NoteFix
        wrong="Was I rich, I would travel the world."
        right="Were I rich, I would travel the world."
        fix="Were"
      />
    </NoteSlide>

    <NoteSlide title="Should 後面用原形動詞">
      <NoteFix
        wrong="Should you needed help, call this number."
        right="Should you need help, call this number."
        fix="need"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
