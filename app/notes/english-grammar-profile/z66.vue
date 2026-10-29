<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-response-tokens-with-that-s, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that's + 形容詞回應" mark="That's">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'That', role: '對方說的話', kind: 'key' },
          { t: '\'s', role: '= is' },
          { t: 'a good idea!', role: '你的看法', kind: 'key' },
        ]"
      />
      <p class="translation">這是個好主意！</p>
    </NoteSlide>

    <NoteSlide title="常見的回應" mark="a good idea!">
      <div class="rows is-labeled">
        <div>
          <span class="term">好消息</span>
          <span
            ><NoteMark
              sentence='"I passed my driving test." "That&apos;s great!"'
              :marks="['That\'s great!']"
            /><span class="translation">「我考過駕照了。」「太棒了！」</span></span
          >
        </div>
        <div>
          <span class="term">壞消息</span>
          <span
            ><NoteMark
              sentence='"I can&apos;t come to your party." "Oh, that&apos;s a pity."'
              :marks="['that\'s a pity.']"
            /><span class="translation">「我不能去你的派對。」「喔，真可惜。」</span></span
          >
        </div>
        <div>
          <span class="term">提議</span>
          <span
            ><NoteMark
              sentence='"Let&apos;s take a taxi." "That&apos;s a good idea."'
              :marks="['That\'s a good idea.']"
            /><span class="translation">「我們搭計程車吧。」「好主意。」</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="形容詞或 a 加名詞" mark="a good idea!">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="That's terrible!" :marks="['terrible!']" /><span
              class="translation"
              >真糟糕！</span
            ></span
          >
        </div>
        <div>
          <span class="term">a + 名詞</span>
          <span
            ><NoteMark sentence="That's a shame!" :marks="['a shame!']" /><span class="translation"
              >真可惜！</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞前面少了 a" mark="a good idea!">
      <NoteFix
        wrong='"Shall we go by train?" "That&apos;s good idea."'
        right='"Shall we go by train?" "That&apos;s a good idea."'
        fix="a good"
      />
    </NoteSlide>

    <NoteSlide title="that 後面要有 's" mark="That's">
      <NoteFix
        wrong='"My cat is sick." "Oh no, that terrible."'
        right='"My cat is sick." "Oh no, that&apos;s terrible."'
        fix="that's"
      />
    </NoteSlide>

    <NoteSlide title="is 後面接形容詞" mark="a good idea!">
      <NoteFix
        wrong='"We won the match!" "That&apos;s greatly!"'
        right='"We won the match!" "That&apos;s great!"'
        fix="great!"
      />
    </NoteSlide>

    <NoteSlide title="How + 形容詞！">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'How', kind: 'key' },
          { t: 'wonderful!', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="translation">太好了！</p>
    </NoteSlide>

    <NoteSlide title="that + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'That', role: '限定詞', kind: 'key' },
          { t: 'film', role: '名詞' },
          { t: 'was great.', kind: 'dim' },
        ]"
      />
      <p class="translation">那部電影很好看。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
