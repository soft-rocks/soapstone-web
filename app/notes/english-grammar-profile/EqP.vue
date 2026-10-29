<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-1210, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="問句把 could 放在句首，主詞後面接原形動詞" mark="Could">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Could', role: '句首', kind: 'key', ring: true },
          { t: 'we', role: '主詞' },
          { t: 'meet', role: '原形動詞', kind: 'key' },
          { t: 'on Friday afternoon?', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">我們可以星期五下午見面嗎？</p>
    </NoteSlide>

    <NoteSlide title="主詞不同，問的事也不同" mark="we">
      <div class="rows is-labeled">
        <div>
          <span class="term">Could I<br /><i>請求許可</i></span>
          <span
            ><NoteMark sentence="Could I sit here?" :marks="['Could I']" /><span class="translation"
              >我可以坐這裡嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Could you<br /><i>請對方幫忙</i></span>
          <span
            ><NoteMark sentence="Could you check my spelling?" :marks="['Could you']" /><span
              class="translation"
              >你可以幫我檢查拼字嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Could we<br /><i>提議一起做</i></span>
          <span
            ><NoteMark sentence="Could we start at nine?" :marks="['Could we']" /><span
              class="translation"
              >我們可以九點開始嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="疑問詞放在 could 前面" mark="Could">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'What time', role: '疑問詞', kind: 'key', ring: true },
          { t: 'could', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'come?', role: '原形動詞' },
        ]"
      />
      <p class="translation">你幾點可以來？</p>
    </NoteSlide>

    <NoteSlide title="說過去的能力用 could 回答，答應請求用 can" mark="Could">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去的能力</span>
          <span
            ><NoteMark
              sentence="Could you swim as a child? — Yes, I could."
              :marks="['I could']"
            /><span class="translation">你小時候會游泳嗎？會。</span></span
          >
        </div>
        <div>
          <span class="term">答應請求</span>
          <span
            ><NoteMark sentence="Could I borrow this? — Yes, you can." :marks="['you can']" /><span
              class="translation"
              >我可以借這個嗎？可以。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問句把 could 放在主詞前面" mark="Could we">
      <NoteFix wrong="We could meet tomorrow?" right="Could we meet tomorrow?" fix="Could we" />
    </NoteSlide>

    <NoteSlide title="could 的問句不用 do 或 did" mark="Could">
      <NoteFix wrong="Did you could see the stage?" right="Could you see the stage?" fix="Could" />
    </NoteSlide>

    <NoteSlide title="主詞是 she，動詞也不加 -s" mark="meet">
      <NoteFix wrong="Could she comes with us?" right="Could she come with us?" fix="come" />
    </NoteSlide>

    <NoteSlide title="Can 和 Could 都能請求或提議，Could 比較客氣" mark="Could">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Can', role: '也能提議', kind: 'key', ring: true },
          { t: 'we meet on Monday?', kind: 'dim' },
        ]"
      />
      <p class="translation">我們星期一可以見面嗎？</p>
    </NoteSlide>

    <NoteSlide title="Could 加 have 和過去分詞，問過去可能發生的事" mark="Could">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Could she', kind: 'dim' },
          { t: 'have missed', role: 'have + 過去分詞', kind: 'key', ring: true },
          { t: 'the bus?', kind: 'dim' },
        ]"
      />
      <p class="translation">她會不會是沒趕上公車？</p>
    </NoteSlide>

    <NoteSlide title="Would you like 問想不想要，Could you 請對方做事" mark="Could">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Would you like', role: '想不想要', kind: 'key', ring: true },
          { t: 'some tea?', kind: 'dim' },
        ]"
      />
      <p class="translation">你要喝點茶嗎？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
