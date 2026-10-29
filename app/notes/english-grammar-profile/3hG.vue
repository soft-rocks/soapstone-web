<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-551, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + needn't + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'needn\'t', kind: 'key', ring: true },
          { t: 'worry', role: '原形動詞' },
          { t: 'about where we can stay.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="needn't / need not、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">needn't / need not</span>
          <span>不必。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不必做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="needn't 後面不加 to" mark="needn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
sentence="Anna's arm is fine now. She needn't come back to the clinic."
              :marks="['needn\'t', 'She']" /><span
              class="translation"
              >Anna 的手臂好了。她不必再回診所。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        needn't 是情態動詞的用法。後面直接接原形動詞，主詞是 he 或 she 時也不加 -&#x2060;s。
      </p>
    </NoteSlide>
    <NoteSlide title="和 don't need to 比較" mark="needn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">needn't</span>
          <span
            ><NoteMark sentence="I'll be home by six. You needn't call." :marks="['needn\'t']" /><span
              class="translation"
              >我六點前會到家。你不必打電話。</span
            ></span
          >
        </div>
        <div>
          <span class="term">don't need to</span>
          <span
            ><NoteMark
              sentence="I'll be home by six. You don't need to call."
              :marks="['don\'t need to']"
            /><span class="translation">我六點前會到家。你不用打電話。</span></span
          >
        </div>
      </div>
      <p class="remark">needn't 和 don't need to 意思一樣。needn't 比較常用在英式英文。</p>
    </NoteSlide>
    <NoteSlide title="needn't 後面直接接原形動詞" mark="needn't">
      <NoteFix
        wrong="You needn't to bring anything."
        right="You needn't bring anything."
        :fix="['bring']"
      />
    </NoteSlide>
    <NoteSlide title="needn't 不加 -s" mark="needn't">
      <NoteFix
        wrong="He needsn't wait for us."
        right="He needn't wait for us."
        :fix="['needn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="needn't 後面接原形動詞" mark="needn't">
      <NoteFix
        wrong="You needn't worrying about tickets for the match. I've got two."
        right="You needn't worry about tickets for the match. I've got two."
        :fix="['worry']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
