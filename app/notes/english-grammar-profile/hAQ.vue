<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-with-else, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不定代名詞 + else" mark="anything else,">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'If you need', kind: 'dim' },
          { t: 'anything', role: '不定代名詞', kind: 'key' },
          { t: 'else,', role: '別的', kind: 'key' },
          { t: 'you\'ll find it in the classroom.', kind: 'dim' },
        ]"
      />
      <p class="translation">如果你還需要什麼別的東西，教室裡都有。</p>
    </NoteSlide>

    <NoteSlide title="指東西、指人、指地方" mark="anything else,">
      <div class="rows is-labeled">
        <div>
          <span class="term">指東西</span>
          <span
            ><NoteMark
              sentence="I'm full. I can't eat anything else."
              :marks="['anything else.']"
            /><span class="translation">我飽了，別的都吃不下了。</span></span
          >
        </div>
        <div>
          <span class="term">指人</span>
          <span
            ><NoteMark sentence="Ask someone else. I'm busy." :marks="['someone else.']" /><span
              class="translation"
              >去問別人，我在忙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">指地方</span>
          <span
            ><NoteMark
              sentence="This café is full. Let's go somewhere else."
              :marks="['somewhere else.']"
            /><span class="translation">這家咖啡店客滿了，我們去別的地方吧。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="別人的：else's">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It\'s', kind: 'dim' },
          { t: 'someone else\'s.', role: '別人的', kind: 'key' },
        ]"
      />
      <p class="translation">是別人的。</p>
    </NoteSlide>

    <NoteSlide title="else 放在後面" mark="anything else,">
      <NoteFix
        wrong="Did you see else anybody at the station?"
        right="Did you see anybody else at the station?"
        fix="anybody else"
      />
    </NoteSlide>

    <NoteSlide title="不定代名詞後面不用 other" mark="else,">
      <NoteFix
        wrong="Let's talk about other something."
        right="Let's talk about something else."
        fix="something else."
      />
    </NoteSlide>

    <NoteSlide title="else 不加 s" mark="else,">
      <NoteFix wrong="Is there anything elses?" right="Is there anything else?" fix="else?" />
    </NoteSlide>

    <NoteSlide title="'s 加在 else 後面">
      <NoteFix
        wrong="I took someone's else umbrella by mistake."
        right="I took someone else's umbrella by mistake."
        fix="someone else's"
      />
    </NoteSlide>

    <NoteSlide title="other + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Do you have any', kind: 'dim' },
          { t: 'other', role: '其他的', kind: 'key' },
          { t: 'colours', role: '名詞', kind: 'key' },
          { t: 'of this jumper?', kind: 'dim' },
        ]"
      />
      <p class="translation">這件毛衣你們有其他顏色嗎？</p>
    </NoteSlide>

    <NoteSlide title="another + 單數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Can I have', kind: 'dim' },
          { t: 'another', role: '再一個', kind: 'key' },
          { t: 'blanket', role: '單數名詞', kind: 'key' },
          { t: 'for the bed?', kind: 'dim' },
        ]"
      />
      <p class="translation">我可以再拿一條毯子嗎？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
