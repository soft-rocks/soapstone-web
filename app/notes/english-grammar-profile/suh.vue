<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-contracted-form-negative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + oughtn't + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'They will certainly have a banquet that day, and', kind: 'dim' },
          { t: 'you', role: '主詞' },
          { t: 'oughtn\'t', kind: 'key', ring: true },
          { t: 'miss', role: '原形動詞' },
          { t: 'it for the world!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="oughtn't、省略 to、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">oughtn't</span>
          <span>ought not 的縮寫。不應該。</span>
        </div>
        <div>
          <span class="term">省略 to</span>
          <span>口語和非正式的信件常省略。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不應該做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正式的寫作比較常保留 oughtn't 後面的 to">
      <div class="rows is-labeled">
        <div>
          <span class="term">比較正式</span>
          <span
            ><NoteMark sentence="The doctor says it's only a cold. You oughtn't to worry." :marks="['to']" /><span class="translation"
              >醫生說只是感冒。你不應該擔心。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">兩種說法都有人用。正式的寫作比較常保留 to。</p>
    </NoteSlide>
    <NoteSlide title="not … for the world 表示無論如何都不">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="My best friend is getting married in June. I wouldn't miss it for the world." :marks="[]" /><span
              class="translation"
              >我最好的朋友六月要結婚。我無論如何都不會錯過。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">not … for the world 表示「無論如何都不」，加強語氣。</p>
    </NoteSlide>
    <NoteSlide title="撇號放在 n 和 t 中間：oughtn't" mark="oughtn't">
      <NoteFix wrong="The parade is on Saturday. You ought'nt miss it." right="The parade is on Saturday. You oughtn't miss it." :fix="['oughtn\'t']" />
    </NoteSlide>
    <NoteSlide title="oughtn't 後面接原形動詞" mark="oughtn't">
      <NoteFix
        wrong="The band only plays here once a year. You oughtn't missing the show."
        right="The band only plays here once a year. You oughtn't miss the show."
        :fix="['miss']"
      />
    </NoteSlide>
    <NoteSlide title="ought 的否定是 oughtn't，不用 don't" mark="oughtn't">
      <NoteFix
        wrong="You'll feel sick on the boat. You don't ought eat so much."
        right="You'll feel sick on the boat. You oughtn't eat so much."
        :fix="['oughtn\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
