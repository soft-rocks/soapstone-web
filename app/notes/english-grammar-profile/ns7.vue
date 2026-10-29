<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-certainty-103, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="肯定句裡，probably 放在 will 後面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'It', role: '主詞', kind: 'dim' },
          { t: 'will', role: '助動詞' },
          { t: 'probably', role: '確定程度副詞', kind: 'key' },
          { t: 'be on TV', role: '原形動詞 + 補語' },
          { t: 'next month!', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">它下個月大概會在電視上播！</p>
    </NoteSlide>

    <NoteSlide title="否定句裡，probably 放在 won't 前面" mark="will probably">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My cousin', role: '主詞', kind: 'dim' },
          { t: 'probably', role: '確定程度副詞', kind: 'key' },
          { t: 'won\'t', role: '否定的助動詞' },
          { t: 'come', role: '原形動詞' },
          { t: 'to the wedding.', kind: 'dim' },
        ]"
      />
      <p class="translation">我表哥大概不會來婚禮。</p>
    </NoteSlide>

    <NoteSlide title="確定的程度：definitely、certainly 最高，possibly 最低" mark="probably">
      <div class="rows is-labeled">
        <div>
          <span class="term">definitely<br /><i>很確定</i></span>
          <span
            ><NoteMark
              sentence="I'll definitely give you the bike by half past five."
              :marks="['definitely']"
            /><span class="translation">我五點半前一定會把腳踏車給你。</span></span
          >
        </div>
        <div>
          <span class="term">probably<br /><i>相當確定</i></span>
          <span
            ><NoteMark sentence="He's probably at the gym." :marks="['probably']" /><span
              class="translation"
              >他大概在健身房。</span
            ></span
          >
        </div>
        <div>
          <span class="term">possibly<br /><i>不太確定</i></span>
          <span
            ><NoteMark
              sentence="Because of the snow, the train from Leeds will possibly be late."
              :marks="['possibly']"
            /><span class="translation">因為下雪，從里茲來的火車可能會誤點。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="definitely 和 certainly 可以單獨回答問題">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Will you be there?', role: '問句', kind: 'dim' },
          { t: 'Definitely.', role: '回答', kind: 'key' },
        ]"
      />
      <p class="translation">「你會去嗎？」「一定會。」</p>
    </NoteSlide>

    <NoteSlide title="確定程度副詞不放在動詞和受詞中間">
      <NoteFix
        wrong="I'll meet definitely your parents at the station."
        right="I'll definitely meet your parents at the station."
        fix="definitely meet"
      />
    </NoteSlide>

    <NoteSlide title="definitely 中間是 -ite-">
      <NoteFix
        wrong="I'll definately help you with the garden."
        right="I'll definitely help you with the garden."
        fix="definitely"
      />
    </NoteSlide>

    <NoteSlide title="放在動詞前面要用副詞 probably" mark="probably">
      <NoteFix
        wrong="My aunt will probable stay at home this Christmas."
        right="My aunt will probably stay at home this Christmas."
        fix="probably"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
