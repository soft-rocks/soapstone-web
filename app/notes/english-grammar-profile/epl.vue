<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-with-verbs-taking-two-objects-727, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="收到的人當主詞，被給的東西放在過去分詞後面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She', role: '收到的人', kind: 'key' },
          { t: 'was offered', role: 'be + 過去分詞' },
          { t: 'a contract', role: '被給的東西', kind: 'key' },
          { t: 'to record a single.', role: '不定詞', kind: 'dim' },
        ]"
      />
      <p class="translation">有人提供她一份合約，請她錄一首單曲。</p>
    </NoteSlide>

    <NoteSlide title="各種時態都可以用" mark="was offered">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去簡單式</span>
          <span
            ><NoteMark sentence="She was offered a contract." :marks="['was offered']" /><span
              class="translation"
              >有人給了她一份合約。</span
            ></span
          >
        </div>
        <div>
          <span class="term">現在完成式</span>
          <span
            ><NoteMark
              sentence="You have been offered two jobs."
              :marks="['have been offered']"
            /><span class="translation">你得到了兩份工作。</span></span
          >
        </div>
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark sentence="You will be sent a password." :marks="['will be sent']" /><span
              class="translation"
              >你會收到一組密碼。</span
            ></span
          >
        </div>
        <div>
          <span class="term">情態動詞</span>
          <span
            ><NoteMark
              sentence="Children should be taught first aid."
              :marks="['should be taught']"
            /><span class="translation">應該教孩子急救。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常用的動詞：award、promise、refuse、charge" mark="offered">
      <div class="rows is-labeled">
        <div>
          <span class="term">award</span>
          <span
            ><NoteMark sentence="My grandfather was awarded a medal." :marks="['awarded']" /><span
              class="translation"
              >我爺爺得到一枚獎章。</span
            ></span
          >
        </div>
        <div>
          <span class="term">promise</span>
          <span
            ><NoteMark
              sentence="The workers were promised a pay rise."
              :marks="['promised']"
            /><span class="translation">工人們被承諾會加薪。</span></span
          >
        </div>
        <div>
          <span class="term">charge</span>
          <span
            ><NoteMark
              sentence="We were charged ten pounds for the bags."
              :marks="['charged']"
            /><span class="translation">我們的袋子被收了十英鎊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="收到的人用主格，不加 to" mark="She">
      <NoteFix
        wrong="To her was offered a contract."
        right="She was offered a contract."
        fix="She"
      />
    </NoteSlide>

    <NoteSlide title="被給的東西前面不加介系詞" mark="a contract">
      <NoteFix
        wrong="We were charged for ten pounds."
        right="We were charged ten pounds."
        fix="ten pounds"
      />
    </NoteSlide>

    <NoteSlide title="現在完成式被動要有 been" mark="was offered">
      <NoteFix
        wrong="You have offered two jobs."
        right="You have been offered two jobs."
        fix="been"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
