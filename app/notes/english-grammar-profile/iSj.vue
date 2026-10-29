<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-that-already-mentioned, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that 指前面說過的東西" mark="that colour">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The colour', role: '前面說出的東西' },
          { t: 'is blue, and I like', role: '動詞 + 連接詞 + 主詞 + 動詞', kind: 'dim' },
          { t: 'that', role: '前面說過的', kind: 'key' },
          { t: 'colour', role: '同一個東西' },
          { t: 'because it\'s my favourite.', role: '原因', kind: 'dim' },
        ]"
      />
      <p class="translation">顏色是藍色的。我喜歡那個顏色，因為那是我最喜歡的顏色。</p>
    </NoteSlide>

    <NoteSlide title="前面說過，後面用 that" mark="that colour">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去的事</span>
          <span
            ><NoteMark
              sentence="I bought a skirt at a small shop in town. You should go to that shop."
              :marks="['a small shop', 'that shop.']"
            /><span class="translation">我在鎮上一家小店買了一條裙子。你應該去那家店看看。</span></span
          >
        </div>
        <div>
          <span class="term">對方剛說的</span>
          <span
            ><NoteMark sentence="What's that book called?" :marks="['that book']" /><span
              class="translation"
              >那本書叫什麼名字？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 和現在有關，that 是過去的" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">this</span>
          <span
            ><NoteMark
              sentence="I have a new job. This job is very interesting."
              :marks="['This job']"
            /><span class="translation">我有一份新工作。這份工作很有趣。</span></span
          >
        </div>
        <div>
          <span class="term">that</span>
          <span
            ><NoteMark
              sentence="I had a job at a bank. That job was very boring."
              :marks="['That job']"
            /><span class="translation">我以前在銀行上班。那份工作很無聊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="go 後面接 to">
      <NoteFix wrong="You should go that shop." right="You should go to that shop." fix="go to" />
    </NoteSlide>

    <NoteSlide title="再提到同一個東西用 that" mark="that colour">
      <NoteFix
        wrong="We stayed at a hotel in Rome. A hotel was very old."
        right="We stayed at a hotel in Rome. That hotel was very old."
        fix="That hotel"
      />
    </NoteSlide>

    <NoteSlide title="前面是複數，後面用 those">
      <NoteFix
        wrong="My friend recommended two films. I watched that films last night."
        right="My friend recommended two films. I watched those films last night."
        fix="those films"
      />
    </NoteSlide>

    <NoteSlide title="that 後面不加 the" mark="that colour">
      <NoteFix
        wrong="He told me about a café. I went to that the café yesterday."
        right="He told me about a café. I went to that café yesterday."
        fix="that café"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
