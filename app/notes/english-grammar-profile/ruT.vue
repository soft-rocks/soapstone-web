<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-reported-requests-and-commands-negative, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="原話的 Don't 轉述成 not to 加原形動詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'asked', role: '引述動詞' },
          { t: 'Pat', role: '人' },
          { t: 'not to', role: 'not to', kind: 'key' },
          { t: 'tell anyone,', role: '原形動詞', kind: 'key' },
          { t: 'and she promised me she wouldn\'t.', kind: 'dim' },
        ]"
      />
      <p class="translation">我請 Pat 別跟任何人說，她答應我她不會說。</p>
      <p class="remark">原話是 "Please don't tell anyone."</p>
    </NoteSlide>

    <NoteSlide title="ask 是請求，tell 是命令或警告" mark="asked">
      <div class="rows is-labeled">
        <div>
          <span class="term">ask</span>
          <span
            ><NoteMark sentence="She asked me not to call her after ten." :marks="['asked']" /><span
              class="translation"
              >她請我十點以後別打給她。</span
            ></span
          >
        </div>
        <div>
          <span class="term">tell</span>
          <span
            ><NoteMark sentence="My mum told me not to touch the oven." :marks="['told']" /><span
              class="translation"
              >我媽叫我別碰烤箱。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not to 和 to 可以用 and 連起來">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My father told me', kind: 'dim' },
          { t: 'not to go far', role: '不要做', kind: 'key' },
          { t: 'and', role: 'and' },
          { t: 'to stay near him.', role: '要做', kind: 'key' },
        ]"
      />
      <p class="translation">我爸叫我別走遠，待在他旁邊。</p>
    </NoteSlide>

    <NoteSlide title="warn、remind、beg 也接人 + not to" mark="asked">
      <div class="rows is-labeled">
        <div>
          <span class="term">warn<br /><i>警告</i></span>
          <span
            ><NoteMark
              sentence="The guide warned us not to swim in the river."
              :marks="['warned']"
            /><span class="translation">導遊警告我們別在河裡游泳。</span></span
          >
        </div>
        <div>
          <span class="term">remind<br /><i>提醒</i></span>
          <span
            ><NoteMark
              sentence="She reminded me not to forget my keys."
              :marks="['reminded']"
            /><span class="translation">她提醒我別忘了帶鑰匙。</span></span
          >
        </div>
        <div>
          <span class="term">beg<br /><i>懇求</i></span>
          <span
            ><NoteMark sentence="He begged her not to leave." :marks="['begged']" /><span
              class="translation"
              >他求她別走。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原話的 don't 轉述時換成 not to" mark="not to">
      <NoteFix
        wrong="I asked Pat don't tell anyone."
        right="I asked Pat not to tell anyone."
        fix="not to"
      />
    </NoteSlide>

    <NoteSlide title="tell 後面要接被要求的人" mark="Pat">
      <NoteFix
        wrong="She told not to go near the edge."
        right="She told us not to go near the edge."
        fix="us"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="tell anyone">
      <NoteFix
        wrong="He told me not to went there alone."
        right="He told me not to go there alone."
        fix="go"
      />
    </NoteSlide>

    <NoteSlide title="say 後面不接人，要說出被要求的人用 tell">
      <NoteFix
        wrong="The doctor said me not to eat too much salt."
        right="The doctor told me not to eat too much salt."
        fix="told me"
      />
    </NoteSlide>

    <NoteSlide title="not 的位置不同，意思不同">
      <div class="rows is-labeled">
        <div>
          <span class="term">didn't tell<br /><i>沒有下命令</i></span>
          <span
            ><NoteMark sentence="I didn't tell him to leave." :marks="['didn\'t tell']" /><span
              class="translation"
              >我沒有叫他走。</span
            ></span
          >
        </div>
        <div>
          <span class="term">not to<br /><i>叫他不要做</i></span>
          <span
            ><NoteMark sentence="I told him not to leave." :marks="['not to']" /><span
              class="translation"
              >我叫他不要走。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="asked 後面接 if 子句，轉述的是問題">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I asked Pat', kind: 'dim' },
          { t: 'if', role: 'if', kind: 'key' },
          { t: 'she had told anyone.', role: '子句' },
        ]"
      />
      <p class="translation">我問 Pat 她有沒有跟別人說。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
