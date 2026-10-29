<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-expectations-with-might-or-may, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="may be 加動詞-ing 說未來某時可能正在進行的動作" mark="may be calling">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Your boss', role: '主詞', kind: 'dim' },
          { t: 'may', role: '不確定', kind: 'key', ring: true },
          { t: 'be calling', role: 'be + 動詞-ing', kind: 'key' },
          { t: 'at 10 p.m.', role: '未來的時間' },
          { t: 'asking you to prepare a report for the next day\'s meeting.', kind: 'dim' },
        ]"
      />
      <p class="translation">你老闆可能會在晚上 10 點打電話來，要你準備隔天開會用的報告。</p>
    </NoteSlide>

    <NoteSlide title="上下文看得出時間時，可以不寫時間" mark="at 10 p.m.">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Send me an email next week.', role: '上下文的時間', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'might be travelling.', role: 'might be + 動詞-ing', kind: 'key' },
        ]"
      />
      <p class="translation">下星期寄電子郵件給我，我那時候可能在旅行。</p>
    </NoteSlide>

    <NoteSlide title="might 表示的可能性比 may 小" mark="may">
      <div class="rows is-labeled">
        <div>
          <span class="term">may</span>
          <span
            ><NoteMark sentence="She may be joining us later." :marks="['may']" /><span
              class="translation"
              >她晚一點可能會來找我們。</span
            ></span
          >
        </div>
        <div>
          <span class="term">might</span>
          <span
            ><NoteMark
              sentence="She might be joining us later, but I doubt it."
              :marks="['might']"
            /><span class="translation">她晚一點也許會來找我們，不過我不太相信。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="will 表示確定，may 表示不確定" mark="may">
      <NoteFork
        stem="I"
        :branches="[
          { head: '\'ll be working', rest: 'on Sunday', meaning: '確定', zh: '我星期天會上班。' },
          {
            head: 'may be working',
            rest: 'on Sunday',
            meaning: '不確定',
            zh: '我星期天可能會上班。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="否定的 not 放在 may 或 might 後面" mark="may be">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'might', role: 'might' },
          { t: 'not', role: '否定', kind: 'key', ring: true },
          { t: 'be coming', role: 'be + 動詞-ing' },
          { t: 'to the party.', kind: 'dim' },
        ]"
      />
      <p class="translation">我可能不會去派對。</p>
    </NoteSlide>

    <NoteSlide title="might 後面先接 be，再接動詞-ing" mark="be">
      <NoteFix
        wrong="He might coming with us."
        right="He might be coming with us."
        fix="be coming"
      />
    </NoteSlide>

    <NoteSlide title="be 後面接動詞-ing" mark="calling">
      <NoteFix
        wrong="They may be move house soon."
        right="They may be moving house soon."
        fix="moving"
      />
    </NoteSlide>

    <NoteSlide title="might 後面直接接原形的 be" mark="may be">
      <NoteFix
        wrong="We might to be travelling in June."
        right="We might be travelling in June."
        fix="might be"
      />
    </NoteSlide>

    <NoteSlide title="not 放在 may 後面、be 前面" mark="may be">
      <NoteFix
        wrong="I may be not working tomorrow."
        right="I may not be working tomorrow."
        fix="not be"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
