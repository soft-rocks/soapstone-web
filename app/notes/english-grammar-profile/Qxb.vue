<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-with-relative-clauses-focus, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不定代名詞 + 關係子句當主詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Everyone', role: '不定代名詞', kind: 'key' },
          { t: 'who can use a computer', role: '關係子句' },
          { t: 'can use', role: '動詞', kind: 'key' },
          { t: 'the new products.', kind: 'dim' },
        ]"
      />
      <p class="translation">每個會用電腦的人都會用這些新產品。</p>
    </NoteSlide>

    <NoteSlide title="關係代名詞的選擇" mark="who">
      <div class="rows is-labeled">
        <div>
          <span class="term">指人 who / that</span>
          <span
            ><NoteMark
              sentence="Someone who lives next door called the police."
              :marks="['who']"
            /><span class="translation">住在隔壁的人報了警。</span></span
          >
        </div>
        <div>
          <span class="term">指東西 that</span>
          <span
            ><NoteMark
              sentence="Everything that you see here is for sale."
              :marks="['that']"
            /><span class="translation">這裡看到的每樣東西都有在賣。</span></span
          >
        </div>
        <div>
          <span class="term">省略</span>
          <span
            ><NoteMark
              sentence="Everything I own fits in one suitcase."
              :marks="['Everything I own']"
            /><span class="translation">我所有的東西一個行李箱就裝得下。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="放在句首，先說話題">
      <div class="rows is-labeled">
        <div>
          <span class="term">is …</span>
          <span
            ><NoteMark
              sentence="Something that worries me is the long drive to work."
              :marks="['is']"
            /><span class="translation">我擔心的一件事是上班要開很久的車。</span></span
          >
        </div>
        <div>
          <span class="term">is that …</span>
          <span
            ><NoteMark
              sentence="Something I learned from this job is that patience matters."
              :marks="['is that']"
            /><span class="translation">我從這份工作學到的一件事是耐心很重要。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞的動詞用單數">
      <NoteFix
        wrong="Everyone who works here have a parking space."
        right="Everyone who works here has a parking space."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="指人不用 which" mark="who">
      <NoteFix
        wrong="Someone which I met on holiday sent me a card."
        right="Someone who I met on holiday sent me a card."
        fix="who"
      />
    </NoteSlide>

    <NoteSlide title="不定代名詞後面不用 what">
      <NoteFix
        wrong="Everything what the guide told us was useful."
        right="Everything that the guide told us was useful."
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="enjoy 後面不再加 it">
      <NoteFix
        wrong="Something that I really enjoy it is cooking."
        right="Something that I really enjoy is cooking."
        fix="enjoy is"
      />
    </NoteSlide>

    <NoteSlide title="關係子句的動詞也用單數">
      <NoteFix
        wrong="Anybody who want a ticket should come early."
        right="Anybody who wants a ticket should come early."
        fix="wants"
      />
    </NoteSlide>

    <NoteSlide title="what 前面不加不定代名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'What I need', role: '名詞子句', kind: 'key' },
          { t: 'is a new pair of glasses.', kind: 'dim' },
        ]"
      />
      <p class="translation">我需要的是一副新眼鏡。</p>
    </NoteSlide>

    <NoteSlide title="複數名詞 + 關係子句，動詞用複數">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The people', role: '複數名詞', kind: 'key' },
          { t: 'who work here', role: '關係子句' },
          { t: 'are', role: '複數動詞', kind: 'key' },
          { t: 'very friendly.', kind: 'dim' },
        ]"
      />
      <p class="translation">在這裡工作的人都很友善。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
