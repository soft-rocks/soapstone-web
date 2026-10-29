<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-simple-278, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主要子句 + since + 子句" mark="since">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I haven\'t seen him', role: '主要子句', kind: 'dim' },
          { t: 'since', role: '連接詞', kind: 'key' },
          { t: 'we', role: '主詞' },
          { t: 'were', role: '動詞' },
          { t: 'at school.', role: '補語' },
        ]"
      />
      <p class="translation">我們學生時代之後，我就再也沒見過他了。</p>
    </NoteSlide>

    <NoteSlide title="子句放在句首加逗號">
      <NoteMark
        sentence="Although the holiday was fantastic, I wished that you were with us."
        :marks="['Although', 'fantastic,']"
      />
      <p class="translation">雖然這趟假期很棒，我還是希望你也跟我們在一起。</p>
    </NoteSlide>

    <NoteSlide title="說出時間" mark="since">
      <div class="rows is-labeled">
        <div>
          <span class="term">after</span>
          <span>在……之後</span>
        </div>
        <div>
          <span class="term">before</span>
          <span>在……之前</span>
        </div>
        <div>
          <span class="term">since</span>
          <span>從……以後一直到現在，主要子句常用現在完成式</span>
        </div>
        <div>
          <span class="term">until</span>
          <span>一直到……為止</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說出原因、對比和目的">
      <div class="rows is-labeled">
        <div>
          <span class="term">as、since</span>
          <span>因為，對方可能已經知道的原因</span>
        </div>
        <div>
          <span class="term">although、though</span>
          <span>雖然，though 比較口語</span>
        </div>
        <div>
          <span class="term">so that</span>
          <span>為了、好讓，後面常接 can、could</span>
        </div>
        <div>
          <span class="term">whether</span>
          <span>是否，常接在 know、ask 後面</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="although 和 but 不一起用">
      <NoteFix
        wrong="Although it was cold, but we went swimming."
        right="Although it was cold, we went swimming."
        fix="we went"
      />
    </NoteSlide>

    <NoteSlide title="since 搭配現在完成式" mark="haven't seen">
      <NoteFix
        wrong="I didn't see him since we were at school."
        right="I haven't seen him since we were at school."
        fix="haven't seen"
      />
    </NoteSlide>

    <NoteSlide title="時間子句不用 will">
      <NoteFix
        wrong="Please wait here until the doctor will call you."
        right="Please wait here until the doctor calls you."
        fix="calls"
      />
    </NoteSlide>

    <NoteSlide title="so that 後面要有主詞">
      <NoteFix
        wrong="I left early so that could catch the train."
        right="I left early so that I could catch the train."
        fix="I could"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
