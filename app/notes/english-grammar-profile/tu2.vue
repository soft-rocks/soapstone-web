<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-main-verb-be-1033, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be 放在主詞前面，就變成是非疑問句">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'Are', role: 'be', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'ready?', role: '補語', kind: 'dim' },
        ]"
      />
      <p class="translation">你準備好了嗎？</p>
    </NoteSlide>

    <NoteSlide title="be 依照主詞和時態選 am、is、are、was、were" mark="Are">
      <div class="rows is-labeled">
        <div>
          <span class="term">I</span>
          <span>Am I ...? ／ Was I ...?</span>
        </div>
        <div>
          <span class="term">you、we、they</span>
          <span>Are you ...? ／ Were you ...?</span>
        </div>
        <div>
          <span class="term">he、she、it</span>
          <span>Is she ...? ／ Was she ...?</span>
        </div>
      </div>
      <p class="remark">
        <code>there is</code> 的疑問句也把 <code>be</code> 放在前面：<code>Is there a bank?</code>
      </p>
    </NoteSlide>

    <NoteSlide title="簡答用 be，肯定的簡答不縮寫" mark="Are">
      <NoteWords
        :size="28"
        :parts="[
          { t: '&quot;Are you ready?&quot;', kind: 'dim' },
          { t: '&quot;Yes, I am.&quot;', role: '不縮寫', kind: 'key' },
          { t: '&quot;No, I\'m not.&quot;', role: '可以縮寫' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="be 是主要動詞時不加 do" mark="Are">
      <NoteFix wrong="Do you ready?" right="Are you ready?" fix="Are" />
    </NoteSlide>

    <NoteSlide title="be 放在主詞前面" mark="Are you">
      <NoteFix wrong="Your sister is at home?" right="Is your sister at home?" fix="Is" />
    </NoteSlide>

    <NoteSlide title="肯定的簡答不縮寫" mark="Are">
      <NoteFix
        wrong='"Is it far?" "Yes, it&apos;s."'
        right='"Is it far?" "Yes, it is."'
        fix="it is"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
