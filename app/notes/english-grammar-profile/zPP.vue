<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-would, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep
// the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="would 說過去那時候以後的事" mark="thought they would be">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'When I saw them,', kind: 'dim' },
          { t: 'I thought', role: '過去的想法' },
          { t: 'they', role: '主詞' },
          { t: 'would', role: 'will 的過去式', kind: 'key', ring: true },
          { t: 'be great', role: '原形動詞' },
          { t: 'for tonight\'s party.', kind: 'dim' },
        ]"
      />
      <p class="translation">我一看到它們，就覺得很適合今晚的派對。</p>
      <p class="remark">派對在想法之後才會發生。</p>
    </NoteSlide>

    <NoteSlide title="will 放到過去的想法裡變成 would" mark="thought they would">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark sentence="I think it will rain." :marks="['will']" /><span
              class="translation"
              >我覺得會下雨。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark sentence="I thought it would rain." :marks="['would']" /><span
              class="translation"
              >我那時候覺得會下雨。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定用 wouldn't" mark="would">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I knew', role: '過去的想法' },
          { t: 'she', role: '主詞' },
          { t: 'wouldn\'t', role: 'would + not', kind: 'key', ring: true },
          { t: 'come.', role: '原形動詞' },
        ]"
      />
      <p class="translation">我知道她不會來。</p>
    </NoteSlide>

    <NoteSlide title="would 只說當時的想法，結果要看上下文" mark="thought they would be great">
      <div class="rows is-labeled">
        <div>
          <span class="term">發生了</span>
          <span
            ><NoteMark
              sentence="I knew it would be a lovely present, and she loved it."
              :marks="['would be']"
            /><span class="translation">我就知道那會是一份很棒的禮物，她果然很喜歡。</span></span
          >
        </div>
        <div>
          <span class="term">沒有發生</span>
          <span
            ><NoteMark
              sentence="We thought the film would be boring, but it was great."
              :marks="['would be']"
            /><span class="translation">我們以為那部電影會很無聊，結果很好看。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去的想法裡用 would，不用 will" mark="would">
      <NoteFix
        wrong="Yesterday I thought it will rain."
        right="Yesterday I thought it would rain."
        fix="would"
      />
    </NoteSlide>

    <NoteSlide title="would 後面接原形動詞" mark="be">
      <NoteFix
        wrong="She said she would came later."
        right="She said she would come later."
        fix="come"
      />
    </NoteSlide>

    <NoteSlide title="would 後面不加 to" mark="would be">
      <NoteFix wrong="I knew he would to win." right="I knew he would win." fix="would win" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
