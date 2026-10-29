<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-there-modal-verbs, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="there 後面的 is 換成情態動詞加 be">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'In a large school,', kind: 'dim' },
          { t: 'there', role: 'there' },
          { t: 'might', role: '情態動詞', kind: 'key' },
          { t: 'be', role: '原形 be', kind: 'key' },
          { t: 'a lot of people', role: '名詞片語' },
          { t: 'that you can meet.', kind: 'dim' },
        ]"
      />
      <p class="translation">在大型學校裡，你可能會認識很多人。</p>
    </NoteSlide>

    <NoteSlide title="情態動詞說將來、可能、應該或推斷" mark="might">
      <div class="rows is-labeled">
        <div>
          <span class="term">will<br /><i>將來會有</i></span>
          <span
            ><NoteMark sentence="There will be a full moon on Friday." :marks="['will be']" /><span
              class="translation"
              >星期五會有滿月。</span
            ></span
          >
        </div>
        <div>
          <span class="term">might<br /><i>可能有</i></span>
          <span
            ><NoteMark sentence="There might be some rain later." :marks="['might be']" /><span
              class="translation"
              >晚一點可能會下雨。</span
            ></span
          >
        </div>
        <div>
          <span class="term">should<br /><i>應該有</i></span>
          <span
            ><NoteMark
              sentence="There should be a towel in the bathroom."
              :marks="['should be']"
            /><span class="translation">浴室裡應該有毛巾。</span></span
          >
        </div>
        <div>
          <span class="term">must<br /><i>一定有</i></span>
          <span
            ><NoteMark sentence="There must be a mistake." :marks="['must be']" /><span
              class="translation"
              >一定是哪裡弄錯了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="否定句的 not 放在情態動詞後面，疑問句把情態動詞放在 there 前面"
      mark="there might"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark
              sentence="There won't be any shops open on Christmas Day."
              :marks="['won\'t be']"
            /><span class="translation">聖誕節當天不會有店開門。</span></span
          >
        </div>
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark
              sentence="Will there be a lift in the new building?"
              :marks="['Will there be']"
            /><span class="translation">新大樓會有電梯嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情態動詞後面用原形 be" mark="be">
      <NoteFix
        wrong="There will are fireworks at midnight."
        right="There will be fireworks at midnight."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞和名詞片語中間要有 be" mark="be">
      <NoteFix
        wrong="There might a problem with the flight."
        right="There might be a problem with the flight."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="說某處有某樣東西，用 there 加 be，不用 it 加 have" mark="there">
      <NoteFix
        wrong="It will have a party on Saturday."
        right="There will be a party on Saturday."
        fix="There will be"
      />
    </NoteSlide>

    <NoteSlide title="疑問句把情態動詞放在 there 前面" mark="there might">
      <NoteFix
        wrong="There will be a test tomorrow?"
        right="Will there be a test tomorrow?"
        fix="Will there"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
