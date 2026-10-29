<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-affirmative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="現在進行式是 be 加動詞-ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'am', role: 'be', kind: 'key', ring: true },
          { t: 'sending', role: '動詞-ing', kind: 'key' },
          { t: 'you some flowers because you are not well.', kind: 'dim' },
        ]"
      />
      <p class="translation">我要送你一些花，因為你身體不舒服。</p>
    </NoteSlide>
    <NoteSlide title="be 依照主詞選 am、is 或 are" mark="am">
      <div class="rows is-labeled">
        <div>
          <span class="term">I + am</span>
          <span
            ><NoteMark sentence="I am cooking dinner." :marks="['am']" /><span class="translation"
              >我在煮晚餐。</span
            ></span
          >
        </div>
        <div>
          <span class="term">單數 + is</span>
          <span
            ><NoteMark sentence="My brother is sleeping." :marks="['is']" /><span
              class="translation"
              >我哥哥在睡覺。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數、you + are</span>
          <span
            ><NoteMark sentence="The kids are playing outside." :marks="['are']" /><span
              class="translation"
              >孩子們在外面玩。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="口語常把主詞和 be 縮寫在一起" mark="am">
      <div class="rows is-labeled">
        <div>
          <span class="term">I'm</span>
          <span
            ><NoteMark sentence="I'm waiting for the bus." :marks="['I\'m']" /><span
              class="translation"
              >我在等公車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">it's</span>
          <span
            ><NoteMark sentence="It's raining again." :marks="['It\'s']" /><span class="translation"
              >又在下雨了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">we're</span>
          <span
            ><NoteMark sentence="We're watching a film." :marks="['We\'re']" /><span
              class="translation"
              >我們在看電影。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="有些動詞加 -ing 前要改拼法" mark="sending">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接加</span>
          <span>read → reading，play → playing</span>
        </div>
        <div>
          <span class="term">去掉字尾的 e</span>
          <span>write → writing，make → making</span>
        </div>
        <div>
          <span class="term">重複字尾的子音</span>
          <span>sit → sitting，begin → beginning</span>
        </div>
        <div>
          <span class="term">ie 改成 y</span>
          <span>lie → lying，die → dying</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="現在進行式要有 am、is 或 are" mark="am">
      <NoteFix
        wrong="I sending you some flowers."
        right="I am sending you some flowers."
        :fix="['am']"
      />
    </NoteSlide>
    <NoteSlide title="複數的主詞用 are" mark="am">
      <NoteFix
        wrong="My parents is visiting us this week."
        right="My parents are visiting us this week."
        :fix="['are']"
      />
    </NoteSlide>
    <NoteSlide title="be 後面的動詞加 -ing" mark="sending">
      <NoteFix wrong="She is cook dinner." right="She is cooking dinner." :fix="['cooking']" />
    </NoteSlide>
    <NoteSlide title="字尾是不發音的 e，先去掉 e 再加 -ing" mark="sending">
      <NoteFix
        wrong="I'm writeing an email to my teacher."
        right="I'm writing an email to my teacher."
        :fix="['writing']"
      />
    </NoteSlide>
    <NoteSlide title="run 的字尾要重複 n 再加 -ing" mark="sending">
      <NoteFix
        wrong="The children are runing in the park."
        right="The children are running in the park."
        :fix="['running']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
