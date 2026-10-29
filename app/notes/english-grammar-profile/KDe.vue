<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-singular-after-prepositions, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞的受詞就是主詞，用反身代名詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He', role: '主詞' },
          { t: 'told me', kind: 'dim' },
          { t: 'about', role: '介系詞' },
          { t: 'himself', role: '反身代名詞', kind: 'key' },
          { t: 'and how he started playing the guitar.', kind: 'dim' },
        ]"
      />
      <p class="translation">他跟我聊他自己的事，還有他是怎麼開始彈吉他的。</p>
    </NoteSlide>

    <NoteSlide title="myself、yourself、himself、herself 跟著主詞" mark="himself">
      <div class="rows is-labeled">
        <div>
          <span class="term">myself</span>
          <span
            ><NoteMark
              sentence="I'm really proud of myself for passing the test."
              :marks="['of myself']"
            /><span class="translation">我很為自己通過考試感到驕傲。</span></span
          >
        </div>
        <div>
          <span class="term">yourself</span>
          <span
            ><NoteMark
              sentence="Take care of yourself while you're travelling."
              :marks="['of yourself']"
            /><span class="translation">旅行的時候要照顧好自己。</span></span
          >
        </div>
        <div>
          <span class="term">himself</span>
          <span
            ><NoteMark
              sentence="The old man was talking to himself on the bus."
              :marks="['to himself']"
            /><span class="translation">公車上那個老人在自言自語。</span></span
          >
        </div>
        <div>
          <span class="term">herself</span>
          <span
            ><NoteMark
              sentence="She looked at herself in the mirror and smiled."
              :marks="['at herself']"
            /><span class="translation">她看著鏡子裡的自己笑了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞的受詞是別人，用受格" mark="himself">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞自己</span>
          <span
            ><NoteMark sentence="He bought a present for himself." :marks="['himself.']" /><span
              class="translation"
              >他買了一份禮物給自己。</span
            ></span
          >
        </div>
        <div>
          <span class="term">別人</span>
          <span
            ><NoteMark sentence="He bought a present for her." :marks="['her.']" /><span
              class="translation"
              >他買了一份禮物給她。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說位置的介系詞後面通常用受格" mark="about">
      <div class="rows is-labeled">
        <div>
          <span class="term">next to</span>
          <span
            ><NoteMark sentence="She put her bag next to her." :marks="['next to her.']" /><span
              class="translation"
              >她把包包放在身邊。</span
            ></span
          >
        </div>
        <div>
          <span class="term">behind</span>
          <span
            ><NoteMark sentence="He closed the door behind him." :marks="['behind him.']" /><span
              class="translation"
              >他隨手把門關上。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞的受詞就是主詞 I，用 myself" mark="himself">
      <NoteFix
        wrong="I was angry with me for losing my keys."
        right="I was angry with myself for losing my keys."
        fix="myself"
      />
    </NoteSlide>

    <NoteSlide title="說位置的 behind 後面用受格">
      <NoteFix
        wrong="He shut the gate behind himself."
        right="He shut the gate behind him."
        fix="him."
      />
    </NoteSlide>

    <NoteSlide title="祈使句的主詞是 you，用 yourself" mark="himself">
      <NoteFix wrong="Take care of you!" right="Take care of yourself!" fix="yourself!" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
