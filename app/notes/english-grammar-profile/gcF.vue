<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-this-past, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this 加時間詞指過去">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'which', role: '關係代名詞', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'received', role: '過去式動詞', kind: 'key' },
          { t: 'this', role: 'this', kind: 'key' },
          { t: 'morning.', role: '時間詞' },
        ]"
      />
      <p class="translation">我今天早上收到了。</p>
    </NoteSlide>

    <NoteSlide title="看動詞的時態" mark="this morning">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark sentence="I saw her this morning." :marks="['saw']" /><span
              class="translation"
              >我今天早上看到她了。（現在是下午）</span
            ></span
          >
        </div>
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark sentence="I'm working at home this week." :marks="['I\'m working']" /><span
              class="translation"
              >我這星期在家工作。</span
            ></span
          >
        </div>
        <div>
          <span class="term">未來</span>
          <span
            ><NoteMark sentence="I'll call you this evening." :marks="['I\'ll call']" /><span
              class="translation"
              >我今天晚上打給你。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="還沒結束可以用現在完成式" mark="received">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成式</span>
          <span
            ><NoteMark
              sentence="I've had three cups of coffee this morning."
              :marks="['I\'ve had']"
            /><span class="translation">我今天早上已經喝了三杯咖啡。（還是早上）</span></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark sentence="I had a meeting at nine this morning." :marks="['had']" /><span
              class="translation"
              >我今天早上九點開了一個會。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 前面不加介系詞" mark="this morning">
      <NoteFix
        wrong="I received your letter in this morning."
        right="I received your letter this morning."
        fix="this morning"
      />
    </NoteSlide>

    <NoteSlide title="今天早上說 this morning" mark="this morning">
      <NoteFix
        wrong="I received it today morning."
        right="I received it this morning."
        fix="this morning"
      />
    </NoteSlide>

    <NoteSlide title="this 接單數名詞" mark="this morning">
      <NoteFix wrong="I saw him this mornings." right="I saw him this morning." fix="morning" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
