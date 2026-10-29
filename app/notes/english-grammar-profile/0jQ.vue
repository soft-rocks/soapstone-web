<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verbs-direct-object-clause-without-that, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="think 和子句中間省略了 that">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'think', role: '動詞', kind: 'key' },
          { t: 'that', kind: 'gone' },
          { t: 'I left my phone in your kitchen.', role: '子句' },
        ]"
      />
      <p class="translation">我想我把手機忘在你家廚房了。</p>
      <p class="remark">子句是 <code>think</code> 的直接受詞。</p>
    </NoteSlide>

    <NoteSlide title="省略 that 的說法比較口語" mark="think">
      <div class="rows is-labeled">
        <div>
          <span class="term">有 that</span>
          <span
            ><NoteMark sentence="I think that you're right." :marks="['that']" /><span
              class="translation"
              >我覺得你說得對。</span
            ></span
          >
        </div>
        <div>
          <span class="term">省略 that</span>
          <span
            ><NoteMark sentence="I think you're right." :marks="['think']" /><span
              class="translation"
              >我覺得你說得對。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式的書面和動詞後面有別的字時，常保留 that">
      <div class="rows is-labeled">
        <div>
          <span class="term">正式的書面</span>
          <span
            ><NoteMark
              sentence="The report states that the company lost money last year."
              :marks="['that']"
            /><span class="translation">報告指出公司去年虧損。</span></span
          >
        </div>
        <div>
          <span class="term">中間有別的字</span>
          <span
            ><NoteMark
              sentence="She told me last week that she was moving."
              :marks="['last week', 'that']"
            /><span class="translation">她上星期跟我說她要搬家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="省略 that 以後，子句還是要有主詞" mark="I">
      <NoteFix wrong="I think is a good idea." right="I think it's a good idea." fix="it's" />
    </NoteSlide>

    <NoteSlide title="動詞後面直接接子句，不加 to" mark="think">
      <NoteFix
        wrong="I hope to you can visit us."
        right="I hope you can visit us."
        fix="hope you"
      />
    </NoteSlide>

    <NoteSlide title="動詞和子句中間不加逗號" mark="think">
      <NoteFix wrong="I hope, you can come." right="I hope you can come." fix="hope you" />
    </NoteSlide>

    <NoteSlide title="think 後面也可以接 so 或 about 片語">
      <div class="rows is-labeled">
        <div>
          <span class="term">I think so</span>
          <span
            ><NoteMark sentence='"Is the shop open?" "I think so."' :marks="['so']" /><span
              class="translation"
              >「店有開嗎？」「應該有。」</span
            ></span
          >
        </div>
        <div>
          <span class="term">think about</span>
          <span
            ><NoteMark sentence="I'm thinking about my holiday." :marks="['about']" /><span
              class="translation"
              >我在想我的假期。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
