<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-994, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不定代名詞 + 單數動詞" mark="nothing is">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Nowadays', kind: 'dim' },
          { t: 'nothing', role: '不定代名詞', kind: 'key' },
          { t: 'is', role: '單數動詞', kind: 'key' },
          { t: 'free, …', kind: 'dim' },
        ]"
      />
      <p class="translation">現在沒有什麼東西是免費的。</p>
    </NoteSlide>

    <NoteSlide title="指人、指東西、指地方">
      <div class="rows is-labeled">
        <div>
          <span class="term">指人</span>
          <span
            ><NoteMark sentence="Somebody has taken my umbrella." :marks="['Somebody has']" /><span
              class="translation"
              >有人拿走了我的雨傘。</span
            ></span
          >
        </div>
        <div>
          <span class="term">指東西</span>
          <span
            ><NoteMark
              sentence="Something smells good in the kitchen."
              :marks="['Something smells']"
            /><span class="translation">廚房裡有東西好香。</span></span
          >
        </div>
        <div>
          <span class="term">指地方</span>
          <span
            ><NoteMark
              sentence="Everywhere was full of tourists in August."
              :marks="['Everywhere was']"
            /><span class="translation">八月到處都是觀光客。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="指很多人也用單數動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">everyone</span>
          <span
            ><NoteMark
              sentence="Everyone in my class likes the new teacher."
              :marks="['likes']"
            /><span class="translation">我們班每個人都喜歡新老師。</span></span
          >
        </div>
        <div>
          <span class="term">everything</span>
          <span
            ><NoteMark
              sentence="Everything in this shop costs one pound."
              :marks="['costs']"
            /><span class="translation">這家店每樣東西都賣一英鎊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞用單數" mark="is">
      <NoteFix wrong="Everybody know the answer." right="Everybody knows the answer." fix="knows" />
    </NoteSlide>

    <NoteSlide title="nobody 後面接肯定動詞" mark="nothing">
      <NoteFix
        wrong="Nobody didn't bring a raincoat on the hike."
        right="Nobody brought a raincoat on the hike."
        fix="brought"
      />
    </NoteSlide>

    <NoteSlide title="否定放在主詞：用 nobody">
      <NoteFix
        wrong="Anybody didn't answer the phone."
        right="Nobody answered the phone."
        fix="Nobody answered"
      />
    </NoteSlide>

    <NoteSlide title="everybody 連在一起寫">
      <NoteFix
        wrong="Every body enjoyed the concert."
        right="Everybody enjoyed the concert."
        fix="Everybody"
      />
    </NoteSlide>

    <NoteSlide title="all + 複數名詞，動詞用複數">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'All the windows in our flat', role: '複數名詞片語', kind: 'key' },
          { t: 'face', role: '複數動詞', kind: 'key' },
          { t: 'the sea.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們公寓所有的窗戶都面海。</p>
    </NoteSlide>

    <NoteSlide title="後面用 they 指回 everyone">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Everyone', role: '不定代名詞', kind: 'key' },
          { t: 'has finished,', role: '單數動詞' },
          { t: 'haven\'t they?', role: '用 they 指回', kind: 'key' },
        ]"
      />
      <p class="translation">大家都做完了，對吧？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
