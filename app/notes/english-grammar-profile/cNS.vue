<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-if-i-were-you-would, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="站在對方的位置給建議" mark="If I were you,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If I were you,', role: '想像的情況', kind: 'key' },
          { t: 'I would ask the neighbours for help.', role: 'would + 原形動詞' },
        ]"
      />
      <p class="translation">如果我是你，我會請鄰居幫忙。</p>
      <p class="remark"><code>I</code> 後面用 <code>were</code>，不用 <code>am</code>。</p>
    </NoteSlide>

    <NoteSlide title="I would 可以縮寫成 I'd" mark="I would">
      <div class="rows is-labeled">
        <div>
          <span class="term">I would</span>
          <span
            ><NoteMark
              sentence="If I were you, I would keep the receipt until the warranty ends."
              :marks="['I would']"
            /><span class="translation">如果我是你，我會把收據留到保固期結束。</span></span
          >
        </div>
        <div>
          <span class="term">I'd<br /><i>口語</i></span>
          <span
            ><NoteMark
              sentence="If I were you, I'd leave early to avoid the crowds."
              :marks="['I\'d']"
            /><span class="translation">如果我是你，我會早點出發，避開人潮。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="wouldn't 勸對方不要做">
      <div class="rows is-labeled">
        <div>
          <span class="term">wouldn't</span>
          <span
            ><NoteMark
              sentence="If I were you, I wouldn't lend him any more money."
              :marks="['wouldn\'t']"
            /><span class="translation">如果我是你，我不會再借他錢。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if I were you 放在後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面不加逗號</span>
          <span
            ><NoteMark
              sentence="I'd wear comfortable shoes if I were you."
              :marks="['if I were you.']"
            /><span class="translation">如果我是你，我會穿舒服的鞋。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：替對方選學校" mark="I would go">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If I were you,', role: '想像的情況', kind: 'key' },
          { t: 'I would go to a small school in the countryside.', role: 'would + 原形動詞' },
        ]"
      />
      <p class="translation">如果我是你，我會去讀鄉下的小型學校。</p>
    </NoteSlide>

    <NoteSlide title="if 子句用 were" mark="were">
      <NoteFix
        wrong="If I am you, I would call the bank."
        right="If I were you, I would call the bank."
        fix="were"
      />
    </NoteSlide>

    <NoteSlide title="主要子句用 would" mark="would">
      <NoteFix
        wrong="If I were you, I will take a taxi."
        right="If I were you, I would take a taxi."
        fix="would"
      />
    </NoteSlide>

    <NoteSlide title="would 後面不加 to" mark="would go">
      <NoteFix
        wrong="If I were you, I would to ask the teacher for more time."
        right="If I were you, I would ask the teacher for more time."
        fix="would ask"
      />
    </NoteSlide>

    <NoteSlide title="should 直接說該做什麼">
      <div class="rows is-labeled">
        <div>
          <span class="term">should<br /><i>直接</i></span>
          <span
            ><NoteMark
              sentence="You should book an appointment with the dentist."
              :marks="['should']"
            /><span class="translation">你應該跟牙醫預約。</span></span
          >
        </div>
        <div>
          <span class="term">if I were you<br /><i>委婉</i></span>
          <span
            ><NoteMark
              sentence="If I were you, I'd book an appointment with the dentist."
              :marks="['If I were you,']"
            /><span class="translation">如果我是你，我會跟牙醫預約。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if I were taller 說自己的想像">
      <div class="rows is-labeled">
        <div>
          <span class="term">自己的想像</span>
          <span
            ><NoteMark
              sentence="If I were taller, I would play basketball."
              :marks="['If I were taller,']"
            /><span class="translation">如果我長得高一點，我會去打籃球。</span></span
          >
        </div>
        <div>
          <span class="term">給對方建議</span>
          <span
            ><NoteMark
              sentence="If I were you, I would join the school team."
              :marks="['If I were you,']"
            /><span class="translation">如果我是你，我會加入校隊。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
