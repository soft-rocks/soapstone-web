<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-certainty, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="maybe 放在句首，表示不確定">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Maybe', role: '確定程度副詞', kind: 'key' },
          { t: 'we can walk there', role: '子句' },
          { t: 'because it\'s not far from my house.', role: '原因', kind: 'dim' },
        ]"
      />
      <p class="translation">也許我們可以走過去，因為那裡離我家不遠。</p>
    </NoteSlide>

    <NoteSlide title="perhaps 意思和 maybe 相同，比較正式" mark="Maybe">
      <div class="rows is-labeled">
        <div>
          <span class="term">maybe<br /><i>口語</i></span>
          <span
            ><NoteMark sentence="Maybe she missed the bus." :marks="['Maybe']" /><span
              class="translation"
              >她可能錯過公車了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">perhaps<br /><i>比較正式</i></span>
          <span
            ><NoteMark sentence="Perhaps I left my keys in the car." :marks="['Perhaps']" /><span
              class="translation"
              >我可能把鑰匙留在車上了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">perhaps 在句中</span>
          <span
            ><NoteMark sentence="She was perhaps a little tired." :marks="['perhaps']" /><span
              class="translation"
              >她也許有點累。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="maybe 和 perhaps 讓建議聽起來比較客氣" mark="Maybe we can">
      <div class="rows is-labeled">
        <div>
          <span class="term">maybe</span>
          <span
            ><NoteMark sentence="Maybe you should see a doctor." :marks="['Maybe']" /><span
              class="translation"
              >也許你該去看個醫生。</span
            ></span
          >
        </div>
        <div>
          <span class="term">perhaps</span>
          <span
            ><NoteMark sentence="Perhaps we could meet next week." :marks="['Perhaps']" /><span
              class="translation"
              >也許我們可以下禮拜見面。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="maybe 可以單獨回答問題">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Are you coming to the party?', role: '問句', kind: 'dim' },
          { t: 'Maybe.', role: '回答', kind: 'key' },
        ]"
      />
      <p class="translation">「你會來派對嗎？」「也許吧。」</p>
    </NoteSlide>

    <NoteSlide title="副詞 maybe 是一個字" mark="Maybe">
      <NoteFix wrong="May be she's at home." right="Maybe she's at home." fix="Maybe" />
    </NoteSlide>

    <NoteSlide title="maybe 不是動詞，句子要有動詞">
      <NoteFix wrong="She maybe at home." right="She may be at home." fix="may be" />
    </NoteSlide>

    <NoteSlide title="maybe 後面接一般的子句，不用疑問句的語序" mark="Maybe we can">
      <NoteFix wrong="Maybe can you help me?" right="Maybe you can help me." fix="you can" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
