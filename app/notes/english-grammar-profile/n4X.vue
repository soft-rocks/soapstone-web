<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-object, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="動詞 + 不定代名詞" mark="need anything,">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'If you', kind: 'dim' },
          { t: 'need', role: '動詞', kind: 'key' },
          { t: 'anything,', role: '受詞', kind: 'key' },
          { t: 'please let me know.', kind: 'dim' },
        ]"
      />
      <p class="translation">如果你需要什麼，請跟我說。</p>
    </NoteSlide>

    <NoteSlide title="something、everything、anything" mark="anything,">
      <div class="rows is-labeled">
        <div>
          <span class="term">something</span>
          <span
            ><NoteMark
              sentence="I want to buy something for my sister."
              :marks="['something']"
            /><span class="translation">我想買個東西給我妹妹。</span></span
          >
        </div>
        <div>
          <span class="term">everything</span>
          <span
            ><NoteMark sentence="He eats everything on his plate." :marks="['everything']" /><span
              class="translation"
              >他把盤子裡的東西都吃光。</span
            ></span
          >
        </div>
        <div>
          <span class="term">anything</span>
          <span
            ><NoteMark sentence="Do you want anything?" :marks="['anything?']" /><span
              class="translation"
              >你要什麼嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if 句用 anything" mark="If you need anything,">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'If you see', role: 'if 句', kind: 'key' },
          { t: 'anything', role: '受詞', kind: 'key' },
          { t: 'strange, call me.', kind: 'dim' },
        ]"
      />
      <p class="translation">如果你看到什麼奇怪的東西，打電話給我。</p>
    </NoteSlide>

    <NoteSlide title="like 後面加 to">
      <NoteFix wrong="I like eat everything." right="I like to eat everything." fix="to eat" />
    </NoteSlide>

    <NoteSlide title="something 放在動詞後面">
      <NoteFix
        wrong="I can cook for you something."
        right="I can cook something for you."
        fix="cook something"
      />
    </NoteSlide>

    <NoteSlide title="anything 不加 s" mark="anything,">
      <NoteFix
        wrong="Do you need anythings from the shop?"
        right="Do you need anything from the shop?"
        fix="anything"
      />
    </NoteSlide>

    <NoteSlide title="請別人吃喝用 something">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Would you like', role: '請對方', kind: 'key' },
          { t: 'something', role: '受詞', kind: 'key' },
          { t: 'to drink?', kind: 'dim' },
        ]"
      />
      <p class="translation">你要喝點什麼嗎？</p>
    </NoteSlide>

    <NoteSlide title="已經提過的東西用 it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I lost my pen.', role: '已經提過', kind: 'key' },
          { t: 'I can\'t find', kind: 'dim' },
          { t: 'it.', role: '指那支筆', kind: 'key' },
        ]"
      />
      <p class="translation">我的筆不見了，我找不到它。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
