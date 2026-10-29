<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-be-about-to, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be about to 說下一刻就要做的事" mark="am about to tell">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'You are not going to believe what', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'am', role: 'be', kind: 'key' },
          { t: 'about to', role: 'about to', kind: 'key', ring: true },
          { t: 'tell', role: '原形動詞' },
          { t: 'you!', kind: 'dim' },
        ]"
      />
      <p class="translation">我接下來要跟你說的事，你一定不會相信！</p>
      <p class="remark">Ann 下一秒就要告訴朋友那個消息。</p>
    </NoteSlide>

    <NoteSlide title="be 跟著主詞變成 am、is 或 are" mark="am">
      <div class="rows is-labeled">
        <div>
          <span class="term">I + am</span>
          <span
            ><NoteMark sentence="I'm about to go out." :marks="['I\'m']" /><span class="translation"
              >我正要出門。</span
            ></span
          >
        </div>
        <div>
          <span class="term">單數 + is</span>
          <span
            ><NoteMark sentence="The meeting is about to start." :marks="['is']" /><span
              class="translation"
              >會議馬上就要開始了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數 + are</span>
          <span
            ><NoteMark
              sentence="They're about to announce the winner."
              :marks="['They\'re']"
            /><span class="translation">他們馬上就要宣布得獎者了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="be about to 可以放在主要子句，也可以放在子句裡"
      mark="what I am about to tell you"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">主要子句</span>
          <span
            ><NoteMark
              sentence="The train is about to leave."
              :marks="['is about to leave']"
            /><span class="translation">火車馬上就要開了。</span></span
          >
        </div>
        <div>
          <span class="term">子句裡</span>
          <span
            ><NoteMark
              sentence="The man who is about to speak is my uncle."
              :marks="['who is about to speak']"
            /><span class="translation">馬上要上台講話的那個人是我叔叔。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not about to 表示主詞堅決不做這件事" mark="am about to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I\'m', kind: 'dim' },
          { t: 'not about to', role: '堅決不做', kind: 'key', ring: true },
          { t: 'lend him more money.', role: '原形動詞' },
        ]"
      />
      <p class="translation">我絕對不會再借他錢。</p>
    </NoteSlide>

    <NoteSlide title="be going to 說計畫，be about to 說下一刻的事" mark="about to">
      <NoteFork
        stem="The film is"
        :branches="[
          {
            head: 'going to start',
            rest: 'at eight',
            meaning: '計畫，時間可以很遠',
            zh: '電影八點開始。',
          },
          { head: 'about to start', rest: '', meaning: '下一刻', zh: '電影馬上就要開始了。' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="about to 前面要有 am、is 或 are" mark="am">
      <NoteFix wrong="The bus about to leave." right="The bus is about to leave." fix="is" />
    </NoteSlide>

    <NoteSlide title="about to 後面接原形動詞" mark="tell">
      <NoteFix wrong="I'm about to leaving." right="I'm about to leave." fix="leave">
        <code>about to</code> 的 <code>to</code> 是不定詞的 <code>to</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="說遠一點的未來用 be going to" mark="about to">
      <NoteFix
        wrong="We are about to move house next year."
        right="We are going to move house next year."
        fix="going to"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 they，用 are" mark="am">
      <NoteFix wrong="They is about to start." right="They are about to start." fix="are" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
