<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-speech-act-verbs-884, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="寫下 We disagree 的同時就表達了反對">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'disagree', role: '言語行為動詞', kind: 'key', ring: true },
          { t: 'with', role: 'with' },
          { t: 'the new numbering system', kind: 'dim' },
          { t: 'as it is too complicated.', role: '原因', kind: 'dim' },
        ]"
      />
      <p class="translation">我們不贊成新的編號系統，因為它太複雜了。</p>
    </NoteSlide>
    <NoteSlide title="不同的動詞後面接不同的形式" mark="disagree">
      <div class="rows is-labeled">
        <div>
          <span class="term">agree with</span>
          <span
            ><NoteMark sentence="I agree with you." :marks="['agree', 'with']" /><span
              class="translation"
              >我同意你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">refuse to</span>
          <span
            ><NoteMark sentence="I refuse to pay for this." :marks="['refuse', 'to']" /><span
              class="translation"
              >我拒絕付這筆錢。</span
            ></span
          >
        </div>
        <div>
          <span class="term">advise</span>
          <span
            ><NoteMark
              sentence="I advise you to take a coat."
              :marks="['advise', 'you', 'to']"
            /><span class="translation">我勸你帶件外套。</span></span
          >
        </div>
        <div>
          <span class="term">insist on</span>
          <span
            ><NoteMark sentence="I insist on paying." :marks="['insist', 'on']" /><span
              class="translation"
              >我堅持要付錢。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="admit 和 deny 後面接動詞-ing 或 that 子句" mark="disagree">
      <div class="rows is-labeled">
        <div>
          <span class="term">admit</span>
          <span
            ><NoteMark sentence="I admit that I made a mistake." :marks="['admit', 'that']" /><span
              class="translation"
              >我承認我犯了錯。</span
            ></span
          >
        </div>
        <div>
          <span class="term">deny</span>
          <span
            ><NoteMark sentence="I deny taking your money." :marks="['deny', 'taking']" /><span
              class="translation"
              >我否認拿了你的錢。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="agree 是動詞，前面不加 be" mark="disagree">
      <NoteFix wrong="I am agree with you." right="I agree with you." :fix="['agree']" />
    </NoteSlide>
    <NoteSlide title="advise 後面要有被勸的人" mark="disagree">
      <NoteFix wrong="I advise to book early." right="I advise you to book early." :fix="['you']" />
    </NoteSlide>
    <NoteSlide title="insist 後面接 on 加動詞-ing" mark="disagree">
      <NoteFix
        wrong="I insist to pay for dinner."
        right="I insist on paying for dinner."
        :fix="['on paying']"
      />
    </NoteSlide>
    <NoteSlide title="disagree 後面接意見要加 with" mark="with">
      <NoteFix
        wrong="We disagree the new rules."
        right="We disagree with the new rules."
        :fix="['with']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
