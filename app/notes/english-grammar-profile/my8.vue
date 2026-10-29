<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-certainty-108, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="undoubtedly 放在 be 後面，表示毫無疑問">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', role: '主詞', kind: 'dim' },
          { t: 'was', role: 'be' },
          { t: 'undoubtedly', role: '確定程度副詞', kind: 'key' },
          { t: 'an unforgettable experience.', role: '名詞片語' },
        ]"
      />
      <p class="translation">那無疑是一次難忘的經驗。</p>
    </NoteSlide>

    <NoteSlide title="確定程度副詞也可以放在一般動詞前面或句首" mark="undoubtedly">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般動詞前面</span>
          <span
            ><NoteMark
              sentence="I absolutely need new clothes for your party."
              :marks="['absolutely need']"
            /><span class="translation">我絕對需要為你的派對買新衣服。</span></span
          >
        </div>
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="Presumably, they've cancelled the meeting."
              :marks="['Presumably,']"
            /><span class="translation">想必他們已經取消會議了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="各個副詞的確定程度不同">
      <div class="rows is-labeled">
        <div>
          <span class="term">undoubtedly、undeniably</span>
          <span>毫無疑問</span>
        </div>
        <div>
          <span class="term">absolutely</span>
          <span>絕對，常用在說話</span>
        </div>
        <div>
          <span class="term">presumably</span>
          <span>想必，根據已知的事推測</span>
        </div>
        <div>
          <span class="term">arguably</span>
          <span>可以說是，別人可能不同意</span>
        </div>
        <div>
          <span class="term">conceivably</span>
          <span>有可能，可以想像</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="arguably 是副詞，說有爭議用 controversial">
      <NoteFix
        wrong="The new law is arguably, so people are protesting."
        right="The new law is controversial, so people are protesting."
        fix="controversial"
      />
    </NoteSlide>

    <NoteSlide title="undoubtedly 不和 maybe 一起用" mark="undoubtedly">
      <NoteFix
        wrong="Maybe he is undoubtedly the best player."
        right="He is undoubtedly the best player."
        fix="He is undoubtedly"
      />
    </NoteSlide>

    <NoteSlide title="確定程度副詞放在助動詞和原形動詞中間" mark="undoubtedly">
      <NoteFix
        wrong="She will win undoubtedly the prize."
        right="She will undoubtedly win the prize."
        fix="undoubtedly win"
      />
    </NoteSlide>

    <NoteSlide title="undoubtedly 中間的 -ed- 不能省略" mark="undoubtedly">
      <NoteFix
        wrong="Undoubtly, this is the best option."
        right="Undoubtedly, this is the best option."
        fix="Undoubtedly,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
