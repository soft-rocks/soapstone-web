<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-use-and-yet-concessive, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="And yet 放在第二句開頭" mark="And yet">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I was sure I would get the sack.', role: '前一句', kind: 'dim' },
          { t: 'And yet', role: '連接詞', kind: 'key' },
          { t: 'the manager forgave me.', role: '句子' },
        ]"
      />
      <p class="translation">我以為我一定會被炒魷魚。可是經理原諒了我。</p>
    </NoteSlide>

    <NoteSlide title="And yet 後面可以加逗號">
      <NoteMark
        sentence="I would probably make the same mistakes as my parents. And yet, I think I would be a good father."
        :marks="['And yet,']"
      />
      <p class="translation">我大概會犯和我爸媽一樣的錯。可是我想，我會是個好爸爸。</p>
    </NoteSlide>

    <NoteSlide title="And yet 和 But" mark="And yet">
      <div class="rows is-labeled">
        <div>
          <span class="term">But</span>
          <span>一般的對比</span>
        </div>
        <div>
          <span class="term">And yet</span>
          <span>強調出乎意料，語氣比 But 強</span>
        </div>
        <div>
          <span class="term">Yet</span>
          <span>單獨放在句首，比 And yet 正式</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="And yet 帶出出乎意料的結果或相反的看法" mark="And yet">
      <div class="rows is-labeled">
        <div>
          <span class="term">出乎意料的結果</span>
          <span
            ><NoteMark
              sentence="I felt very embarrassed. And yet nobody laughed at me."
              :marks="['And yet']"
            /><span class="translation">我覺得很丟臉。可是沒有人笑我。</span></span
          >
        </div>
        <div>
          <span class="term">相反的看法</span>
          <span
            ><NoteMark
              sentence="The job is hard. And yet I wouldn't change it for anything."
              :marks="['And yet']"
            /><span class="translation">這份工作很辛苦。可是我說什麼都不會換。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="And 後面接 yet，不接 but" mark="And yet">
      <NoteFix
        wrong="We trained hard. And but we lost the match."
        right="We trained hard. And yet we lost the match."
        fix="And yet"
      />
    </NoteSlide>

    <NoteSlide title="And yet 後面不再加 but" mark="And yet">
      <NoteFix
        wrong="The test was easy. And yet but many students failed."
        right="The test was easy. And yet many students failed."
        fix="And yet many"
      />
    </NoteSlide>

    <NoteSlide title="後面接出乎意料的事">
      <NoteFix
        wrong="It was raining. And yet we took our umbrellas."
        right="It was raining. And yet we went for a walk without umbrellas."
        fix="without umbrellas."
      />
    </NoteSlide>

    <NoteSlide title="yet 放在 And 後面" mark="And yet">
      <NoteFix
        wrong="I was tired. And I couldn't sleep yet."
        right="I was tired. And yet I couldn't sleep."
        fix="And yet"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
