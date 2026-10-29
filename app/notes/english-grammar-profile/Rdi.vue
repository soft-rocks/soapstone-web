<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-too-to-infinitive, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="too ... to 是太怎麼樣而不能做" mark="too young to go">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My grandfather is', kind: 'dim' },
          { t: 'too old', role: 'too + 形容詞', kind: 'key' },
          { t: 'to drive', role: 'to 不定詞', kind: 'key', ring: true },
          { t: 'now.', kind: 'dim' },
        ]"
      />
      <p class="translation">我爺爺年紀太大，現在不能開車了。</p>
    </NoteSlide>

    <NoteSlide title="too ... to 可以改成 so ... that 加否定" mark="too young">
      <div class="rows is-labeled">
        <div>
          <span class="term">too ... to</span>
          <span
            ><NoteMark
              sentence="She was too tired to finish her homework."
              :marks="['too tired to finish']"
            /><span class="translation">她太累了，沒辦法寫完作業。</span></span
          >
        </div>
        <div>
          <span class="term">so ... that</span>
          <span
            ><NoteMark
              sentence="She was so tired that she couldn't finish her homework."
              :marks="['so tired that', 'couldn\'t']"
            /><span class="translation">她累到寫不完作業。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="I think you're too ... to 用來勸人" mark="I think you are too">
      <NoteMark
        sentence="I think you're too ill to go to school today."
        :marks="['too ill to go']"
      />
      <p class="translation">我覺得你今天病得太重，不能去上學。</p>
    </NoteSlide>

    <NoteSlide title="too ... to 本身就是不能，不再加 not" mark="to go">
      <NoteFix
        wrong="My suitcase was too heavy not to lift onto the train."
        right="My suitcase was too heavy to lift onto the train."
        fix="to lift"
      />
    </NoteSlide>

    <NoteSlide title="to 後面用原形動詞" mark="to go">
      <NoteFix wrong="I was too tired to going out." right="I was too tired to go out." fix="go" />
    </NoteSlide>

    <NoteSlide title="後面接 to 不定詞，不接 for" mark="to go">
      <NoteFix
        wrong="My little sister is too short for ride the big slide."
        right="My little sister is too short to ride the big slide."
        fix="to"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
