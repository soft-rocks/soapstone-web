<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-questions-820, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Have 放在 you 前面，問到現在做了沒有" mark="Have you">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Have', role: '句首', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'bought', role: '過去分詞', kind: 'key' },
          { t: 'anything?', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">你有買什麼東西嗎？</p>
      <p class="remark">朋友還在逛街，說話者打電話問。</p>
    </NoteSlide>

    <NoteSlide title="回答用 have 或 haven't" mark="Have">
      <div class="rows is-labeled">
        <div>
          <span class="term">問</span>
          <span
            ><NoteMark
              sentence="Dinner is ready. Have you finished your homework?"
              :marks="['Have']"
            /><span class="translation">晚餐好了。你功課寫完了嗎？</span></span
          >
        </div>
        <div>
          <span class="term">答</span>
          <span
            ><NoteMark
              sentence="Yes, I have. / No, I haven't."
              :marks="['have.', 'haven\'t.']"
            /><span class="translation">寫完了。／還沒。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="疑問詞放在 have 前面" mark="Have you">
      <div class="rows is-labeled">
        <div>
          <span class="term">where</span>
          <span
            ><NoteMark sentence="It's midnight. Where have you been?" :marks="['Where']" /><span
              class="translation"
              >現在半夜十二點了。你跑去哪裡了？</span
            ></span
          >
        </div>
        <div>
          <span class="term">what</span>
          <span
            ><NoteMark
              sentence="It's bright green! What have you done to your hair?"
              :marks="['What']"
            /><span class="translation">變成亮綠色了！你對你的頭髮做了什麼？</span></span
          >
        </div>
        <div>
          <span class="term">how<br /><i>問近況</i></span>
          <span
            ><NoteMark
              sentence="Hi Jools, it's good to hear from you. How have you been?"
              :marks="['How']"
            /><span class="translation">嗨，茱爾斯，真高興收到你的消息。你最近好嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have 放在句首，不加 do" mark="Have">
      <NoteFix
        wrong="Do you have bought anything for Mum's birthday?"
        right="Have you bought anything for Mum's birthday?"
        fix="Have"
      />
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，不接過去式" mark="bought">
      <NoteFix
        wrong="Have you ate lunch at the new café?"
        right="Have you eaten lunch at the new café?"
        fix="eaten"
      />
    </NoteSlide>

    <NoteSlide title="簡答不重複過去分詞" mark="Have">
      <NoteFix
        wrong="Have you bought the milk? — Yes, I have bought."
        right="Have you bought the milk? — Yes, I have."
        fix="have."
      />
    </NoteSlide>

    <NoteSlide title="說出過去的時間，用過去簡單式" mark="Have you bought">
      <NoteFix
        wrong="Have you watched the football match on TV last night?"
        right="Did you watch the football match on TV last night?"
        fix="Did you watch"
      />
    </NoteSlide>

    <NoteSlide title="時間已經結束，用 Did you" mark="Have you bought">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'You\'re back from the Sunday market.', role: '逛完了', kind: 'dim' },
          { t: 'Did you buy', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'anything there?', kind: 'dim' },
        ]"
      />
      <p class="translation">你從星期天市集回來了。你在那裡有買東西嗎？</p>
    </NoteSlide>

    <NoteSlide title="Do you have 的 have 是主要動詞" mark="Have">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I need to sign this form.', kind: 'dim' },
          { t: 'Do you', role: '加 do', kind: 'dim' },
          { t: 'have', role: '主要動詞', kind: 'key', ring: true },
          { t: 'a pen?', kind: 'dim' },
        ]"
      />
      <p class="translation">我要簽這張表格。你有筆嗎？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
