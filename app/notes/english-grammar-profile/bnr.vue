<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-reported-requests-and-commands, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="asked / told + 人 + to + 原形動詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Dad', role: '主詞' },
          { t: 'asked', role: '引述動詞' },
          { t: 'me', role: '人', kind: 'key' },
          { t: 'to help him at work.', role: 'to + 原形動詞', kind: 'key' },
        ]"
      />
      <p class="translation">爸爸要我在工作上幫他。</p>
    </NoteSlide>

    <NoteSlide title="ask 轉述請求，tell 轉述命令" mark="asked">
      <div class="rows is-labeled">
        <div>
          <span class="term">ask</span>
          <span
            ><NoteMark
              sentence="She asked me to open the window."
              :marks="['asked me', 'to open']"
            /><span class="translation">她請我開窗。</span></span
          >
        </div>
        <div>
          <span class="term">tell</span>
          <span
            ><NoteMark
              sentence="The teacher told us to sit down."
              :marks="['told us', 'to sit']"
            /><span class="translation">老師叫我們坐下。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原話的 me 以轉述的人為準換掉" mark="him">
      <div class="rows is-labeled">
        <div>
          <span class="term">原話</span>
          <span
            ><NoteMark sentence='"Wait for me here."' :marks="['me', 'here']" /><span
              class="translation"
              >「在這裡等我。」</span
            ></span
          >
        </div>
        <div>
          <span class="term">轉述</span>
          <span
            ><NoteMark
              sentence="He told me to wait for him there."
              :marks="['him', 'there']"
            /><span class="translation">他叫我在那裡等他。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="好幾件事用 and 連起來，後面的 to 可以省略">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'They told me', kind: 'dim' },
          { t: 'to stay in the car', role: 'to + 原形動詞', kind: 'key' },
          { t: 'and', role: '連接詞' },
          { t: 'watch the road.', role: '原形動詞', kind: 'key' },
        ]"
      />
      <p class="translation">他們叫我待在車上，盯著路上。</p>
    </NoteSlide>

    <NoteSlide title="被動：be asked / be told + to">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'were asked', role: 'be asked', kind: 'key' },
          { t: 'to switch off our phones.', role: 'to + 原形動詞', kind: 'key' },
        ]"
      />
      <p class="translation">我們被要求關掉手機。</p>
    </NoteSlide>

    <NoteSlide title="told + 人後面接 to" mark="to help">
      <NoteFix wrong="She told me go home." right="She told me to go home." fix="to go" />
    </NoteSlide>

    <NoteSlide title="say 後面不接人" mark="asked me">
      <NoteFix
        wrong="He said me to close the door."
        right="He told me to close the door."
        fix="told me"
      />
    </NoteSlide>

    <NoteSlide title="asked 後面直接接人，不加 to" mark="asked me">
      <NoteFix
        wrong="The old man asked to me to carry his bag."
        right="The old man asked me to carry his bag."
        fix="asked me"
      />
    </NoteSlide>

    <NoteSlide title="原話的 me 是說話的人，轉述時換掉" mark="him">
      <NoteFix
        wrong="Lisa asked me to wait for me."
        right="Lisa asked me to wait for her."
        fix="her"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="help">
      <NoteFix
        wrong="The coach told us to running faster."
        right="The coach told us to run faster."
        fix="run"
      />
    </NoteSlide>

    <NoteSlide title="asked 後面沒有人，做那件事的是主詞" mark="asked me">
      <div class="rows is-labeled">
        <div>
          <span class="term">沒有人</span>
          <span
            ><NoteMark
              sentence="The customer asked to speak to the manager."
              :marks="['asked to speak']"
            /><span class="translation">那位客人要求跟經理談。</span></span
          >
        </div>
        <div>
          <span class="term">有人</span>
          <span
            ><NoteMark
              sentence="The customer asked the waiter to call the manager."
              :marks="['the waiter', 'to call']"
            /><span class="translation">那位客人請服務生去叫經理。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="to + 原形動詞是要求，that / if 子句不是" mark="to help">
      <div class="rows is-labeled">
        <div>
          <span class="term">命令</span>
          <span
            ><NoteMark
              sentence="My boss told me to book a meeting room."
              :marks="['to book']"
            /><span class="translation">我老闆叫我訂一間會議室。</span></span
          >
        </div>
        <div>
          <span class="term">一件事</span>
          <span
            ><NoteMark
              sentence="My boss told me that he had booked a meeting room."
              :marks="['that he had booked']"
            /><span class="translation">我老闆跟我說他已經訂好會議室了。</span></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark
              sentence="Lucy asked me if I could check her essay."
              :marks="['if I could check']"
            /><span class="translation">Lucy 問我能不能幫她看作文。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
