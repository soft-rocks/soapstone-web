<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-this-one-that-one, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this + one" mark="this one">
      <NoteWords
        :size="22"
        :parts="[
          { t: '… buying a new', kind: 'dim' },
          { t: 'desk', role: '單數名詞', kind: 'key' },
          { t: 'because', kind: 'dim' },
          { t: 'this', role: '近的' },
          { t: 'one', role: '代替 desk', kind: 'key' },
          { t: 'is very old.', kind: 'dim' },
        ]"
      />
      <p class="translation">我在考慮買一張新書桌，因為這張已經很舊了。</p>
    </NoteSlide>

    <NoteSlide title="this one 和 that one" mark="this one">
      <div class="rows is-labeled">
        <div>
          <span class="term">this one</span>
          <span
            ><NoteMark
              sentence="Our last flat was tiny, but this one has three bedrooms."
              :marks="['this one']"
            /><span class="translation">我們上一間公寓很小，這間有三房。</span></span
          >
        </div>
        <div>
          <span class="term">that one</span>
          <span
            ><NoteMark
              sentence="Not this umbrella. I want that one by the door."
              :marks="['that one']"
            /><span class="translation">不是這把傘，我要門邊那把。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="形容詞放在中間" mark="this one">
      <div class="rows is-labeled">
        <div>
          <span class="term">this</span>
          <span><NoteMark sentence="this small one" :marks="['small']" /></span>
        </div>
        <div>
          <span class="term">that</span>
          <span><NoteMark sentence="that silver one" :marks="['silver']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="one 前面用 this" mark="this">
      <NoteFix
        wrong="Can I have these one, please?"
        right="Can I have this one, please?"
        fix="this"
      />
    </NoteSlide>

    <NoteSlide title="說出名詞就不用 one">
      <NoteFix wrong="I'll take this one dress." right="I'll take this dress." fix="this dress." />
    </NoteSlide>

    <NoteSlide title="形容詞後面接 one" mark="one">
      <NoteFix
        wrong="I don't want the black bag. I prefer that brown."
        right="I don't want the black bag. I prefer that brown one."
        fix="one."
      />
    </NoteSlide>

    <NoteSlide title="複數用 these ones、those ones">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'These ones', role: '近的', kind: 'key' },
          { t: 'are cheaper than', kind: 'dim' },
          { t: 'those ones.', role: '遠的', kind: 'key' },
        ]"
      />
      <p class="translation">這些比那些便宜。</p>
    </NoteSlide>

    <NoteSlide title="同一個東西用 it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I bought', kind: 'dim' },
          { t: 'a new lamp.', role: '說過的東西' },
          { t: 'It\'s', role: '同一盞', kind: 'key' },
          { t: 'really bright.', kind: 'dim' },
        ]"
      />
      <p class="translation">我買了一盞新檯燈，很亮。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
