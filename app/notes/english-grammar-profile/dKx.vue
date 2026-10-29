<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-the-reason-why-focus, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="the reason why 加子句，說明是什麼事的原因">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'This is', kind: 'dim' },
          { t: 'the reason', role: '原因' },
          { t: 'why', role: '關係詞', kind: 'key' },
          { t: 'we are changing our working hours.', role: '主詞 + 動詞' },
        ]"
      />
      <p class="translation">這就是我們要調整工作時間的原因。</p>
    </NoteSlide>

    <NoteSlide title="The reason why 放在句首，is 後面說出原因" mark="the reason why">
      <div class="rows is-labeled">
        <div>
          <span class="term">that 子句</span>
          <span
            ><NoteMark
              sentence="The reason why I'm late is that my train broke down."
              :marks="['The reason why', 'is that']"
            /><span class="translation">我遲到是因為我的火車故障了。</span></span
          >
        </div>
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark sentence="The reason why I moved was the noise." :marks="['the noise.']"
          /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="先說一件事，再用 That's the reason why 說結果" mark="This is the reason why">
      <div class="rows is-labeled">
        <div>
          <span class="term">結果</span>
          <span
            ><NoteMark
              sentence="The roads are icy. That's the reason why the school is closed."
              :marks="['That\'s the reason why']"
            /><span class="translation">路上結冰了，所以學校停課。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="why 可以省略，也可以換成 that" mark="why">
      <div class="rows is-labeled">
        <div>
          <span class="term">省略</span>
          <span
            ><NoteMark
              sentence="The reason I called is to invite you to dinner."
              :marks="['The reason I']"
            /><span class="translation">我打電話來是要邀你吃晚餐。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="The reason why 子句已經是主詞，不再加 it">
      <NoteFix
        wrong="The reason why I was late it was the traffic."
        right="The reason why I was late was the traffic."
        fix="was the traffic."
      />
    </NoteSlide>

    <NoteSlide title="why 後面用一般的順序，不加 did" mark="we are changing">
      <NoteFix
        wrong="That's the reason why did he quit."
        right="That's the reason why he quit."
        fix="he quit."
      />
    </NoteSlide>

    <NoteSlide title="reason 後面直接接 why，不加 for" mark="the reason why">
      <NoteFix
        wrong="This is the reason for why I came."
        right="This is the reason why I came."
        fix="reason why"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
