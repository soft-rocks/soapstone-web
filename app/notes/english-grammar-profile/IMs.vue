<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passive-voice-704, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="單數主詞加 was，再接過去分詞">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'It', role: '單數主詞' },
          { t: 'was', role: 'was', kind: 'key' },
          { t: 'built', role: '過去分詞', kind: 'key' },
          { t: 'in 1880.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">它是 1880 年蓋的。</p>
    </NoteSlide>

    <NoteSlide title="做的人不重要、不知道，或別人對我做了一件事" mark="was built">
      <div class="rows is-labeled">
        <div>
          <span class="term">不重要</span>
          <span
            ><NoteMark sentence="It was built in 1880." :marks="['was built']" /><span
              class="translation"
              >它是 1880 年蓋的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不知道</span>
          <span
            ><NoteMark sentence="My bike was stolen last night." :marks="['was stolen']" /><span
              class="translation"
              >我的腳踏車昨晚被偷了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">主詞是 I</span>
          <span
            ><NoteMark sentence="I was invited to a party." :marks="['was invited']" /><span
              class="translation"
              >我被邀請去一個派對。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動要有 was" mark="was">
      <NoteFix wrong="It built in 1880." right="It was built in 1880." fix="was" />
    </NoteSlide>

    <NoteSlide title="was 後面接過去分詞" mark="built">
      <NoteFix
        wrong="My phone was stole on the bus."
        right="My phone was stolen on the bus."
        fix="stolen"
      />
    </NoteSlide>

    <NoteSlide title="有過去的時間就用 was" mark="was">
      <NoteFix
        wrong="The bridge is opened in 1932."
        right="The bridge was opened in 1932."
        fix="was"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
