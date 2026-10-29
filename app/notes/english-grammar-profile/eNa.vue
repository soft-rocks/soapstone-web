<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-this-already-mentioned, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this 指前面提過的東西" mark="this.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Thank you', kind: 'dim' },
          { t: 'for', role: '介系詞' },
          { t: 'this.', role: '= 禮物', kind: 'key' },
        ]"
      />
      <p class="translation">謝謝你給我這個。</p>
    </NoteSlide>

    <NoteSlide title="一個東西和一組東西" mark="this.">
      <div class="rows is-labeled">
        <div>
          <span class="term">this</span>
          <span
            ><NoteMark
              sentence="I found an old photo of you. Look at this!"
              :marks="['this!']"
            /><span class="translation">我找到一張你的舊照片，你看這張！</span></span
          >
        </div>
        <div>
          <span class="term">all this</span>
          <span
            ><NoteMark
              sentence="I bought shirts, shoes and a hat. Why all this?"
              :marks="['all this?']"
            /><span class="translation">我買了襯衫、鞋子和帽子。為什麼買這麼多？</span></span
          >
        </div>
        <div>
          <span class="term">all this + 單數</span>
          <span
            ><NoteMark
              sentence="Bread, cheese, fruit … All this costs only five pounds."
              :marks="['All this costs']"
            /><span class="translation">麵包、起司、水果……這些全部只要五英鎊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="先用 this，再用 it" mark="this.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Thank you for the scarf. I love', kind: 'dim' },
          { t: 'this!', role: '先用 this', kind: 'key' },
          { t: 'I wear', kind: 'dim' },
          { t: 'it', role: '再用 it', kind: 'key' },
          { t: 'every day.', kind: 'dim' },
        ]"
      />
      <p class="translation">謝謝你送的圍巾，我好喜歡！我每天都戴。</p>
    </NoteSlide>

    <NoteSlide title="一組東西用 all this" mark="this.">
      <NoteFix
        wrong="I bought pens, paper and glue. Why did I buy all these?"
        right="I bought pens, paper and glue. Why did I buy all this?"
        fix="this?"
      />
    </NoteSlide>

    <NoteSlide title="all this 接單數動詞" mark="this.">
      <NoteFix
        wrong="Plates, cups, glasses … all this are for the party."
        right="Plates, cups, glasses … all this is for the party."
        fix="is for"
      />
    </NoteSlide>

    <NoteSlide title="this 後面不加 it" mark="this.">
      <NoteFix
        wrong="Thanks for the chocolates. I really love this it."
        right="Thanks for the chocolates. I really love this."
        fix="love this."
      />
    </NoteSlide>

    <NoteSlide title="同一種的好幾個：these">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ve got two new shirts.', kind: 'dim' },
          { t: 'I love', kind: 'dim' },
          { t: 'these.', role: '= 兩件襯衫', kind: 'key' },
        ]"
      />
      <p class="translation">我有兩件新襯衫，我很喜歡。</p>
    </NoteSlide>

    <NoteSlide title="this 指一整件事">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We missed the bus.', role: '前面的事' },
          { t: 'This', role: '= 錯過公車', kind: 'key' },
          { t: 'made us late.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們錯過了公車，所以遲到了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
