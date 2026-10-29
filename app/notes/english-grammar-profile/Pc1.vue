<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// there-is-no-way (uncontracted not), as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不縮寫的 cannot 讓正式的信語氣更強">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'cannot', role: 'can + not', kind: 'key' },
          { t: 'agree', role: '原形動詞' },
          { t: 'with you,', role: '介系詞片語' },
          { t: 'Mr. Brown.', role: '稱呼', kind: 'dim' },
        ]"
      />
      <p class="translation">Brown 先生，我無法同意您的看法。</p>
    </NoteSlide>

    <NoteSlide title="報告、正式的信和告示用不縮寫的形式" mark="cannot">
      <div class="rows is-labeled">
        <div>
          <span class="term">does not</span>
          <span
            ><NoteMark
              sentence="Our school library does not lend DVDs."
              :marks="['does not']"
            /><span class="translation">我們學校的圖書館不出借 DVD。</span></span
          >
        </div>
        <div>
          <span class="term">Do not</span>
          <span
            ><NoteMark
              sentence="Do not leave children alone in the car."
              :marks="['Do not']"
            /><span class="translation">請勿將兒童單獨留在車內。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說話時，不縮寫的 not 說得重一點，用來反駁或強調決定" mark="cannot">
      <div class="rows is-labeled">
        <div>
          <span class="term">反駁</span>
          <span
            ><NoteMark sentence="I did not take your pen!" :marks="['not']" /><span
              class="translation"
              >我真的沒拿你的筆！</span
            ></span
          >
        </div>
        <div>
          <span class="term">強調決定</span>
          <span
            ><NoteMark sentence="I will not sign this contract." :marks="['not']" /><span
              class="translation"
              >我絕對不會簽這份合約。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="can 的否定是 cannot，不用 don't" mark="cannot">
      <NoteFix
        wrong="I don't can accept this offer."
        right="I cannot accept this offer."
        fix="cannot"
      />
    </NoteSlide>

    <NoteSlide title="not 放在助動詞後面">
      <NoteFix wrong="I not will go." right="I will not go." fix="will not" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
