<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-direct-speech-reporting-clause-initial-position, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞和引述動詞在前，引號裡的話在後">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He', role: '主詞', kind: 'key' },
          { t: 'asked,', role: '引述動詞 + ,', kind: 'key' },
          { t: '&quot;Are you Clarice?&quot;', role: '引號裡的話' },
          { t: 'and I answered yes.', role: '後面的子句', kind: 'dim' },
        ]"
      />
      <p class="translation">他問：「你是 Clarice 嗎？」我回答是。</p>
    </NoteSlide>

    <NoteSlide title="引述動詞後面加逗號或冒號" mark="asked,">
      <div class="rows is-labeled">
        <div>
          <span class="term">逗號</span>
          <span
            ><NoteMark sentence='She said, "I&apos;ll see you later."' :marks="['said,']" /><span
              class="translation"
              >她說：「待會見。」</span
            ></span
          >
        </div>
        <div>
          <span class="term">冒號</span>
          <span
            ><NoteMark sentence='He replied: "Wait here."' :marks="['replied:']" /><span
              class="translation"
              >他回答：「在這裡等。」</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="said to + 聽的人；asked 直接接聽的人" mark="asked,">
      <div class="rows is-labeled">
        <div>
          <span class="term">said to</span>
          <span
            ><NoteMark
              sentence="He said to me, &quot;I'm sorry I wasn't there.&quot;"
              :marks="['said to me,']"
            /><span class="translation">他對我說：「對不起，我那時不在。」</span></span
          >
        </div>
        <div>
          <span class="term">asked</span>
          <span
            ><NoteMark
              sentence='She asked me, "How about joining the club?"'
              :marks="['asked me,']"
            /><span class="translation">她問我：「要不要加入社團？」</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="thought 轉述心裡的話，標點一樣">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Then I', kind: 'dim' },
          { t: 'thought,', role: '引述動詞 + ,', kind: 'key' },
          { t: '&quot;I can\'t stay here any longer.&quot;', role: '心裡的話' },
        ]"
      />
      <p class="translation">那時我心想：「我不能再待在這裡了。」</p>
    </NoteSlide>

    <NoteSlide title="引述動詞和引號之間加逗號" mark="asked,">
      <NoteFix
        wrong='Maria answered "Yes, I&apos;d love to."'
        right='Maria answered, "Yes, I&apos;d love to."'
        fix="answered,"
      />
    </NoteSlide>

    <NoteSlide title="引號裡的第一個字大寫" mark="Are">
      <NoteFix
        wrong='The guide said, "follow me, please."'
        right='The guide said, "Follow me, please."'
        fix="Follow"
      />
    </NoteSlide>

    <NoteSlide title="句號放在引號裡面" mark='Clarice?"'>
      <NoteFix
        wrong='My brother said, "The game starts at eight".'
        right='My brother said, "The game starts at eight."'
        fix='eight."'
      />
    </NoteSlide>

    <NoteSlide title="said 後面接聽的人要加 to">
      <NoteFix
        wrong='She said me, "Don&apos;t forget your keys."'
        right='She said to me, "Don&apos;t forget your keys."'
        fix="said to me,"
      />
    </NoteSlide>

    <NoteSlide title="引述子句放在後面，代名詞小寫">
      <NoteWords
        :size="28"
        :parts="[
          { t: '&quot;Are you Clarice?&quot;', kind: 'dim' },
          { t: 'he asked.', role: '引述子句', kind: 'key' },
        ]"
      />
      <p class="translation">「你是 Clarice 嗎？」他問。</p>
    </NoteSlide>

    <NoteSlide title="間接引述不加引號，問句改成 if 子句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'He asked', kind: 'dim' },
          { t: 'if I was Clarice.', role: 'if 子句', kind: 'key' },
        ]"
      />
      <p class="translation">他問我是不是 Clarice。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
