<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-affirmative-with-will, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="未來進行式說未來某時正在進行的動作" mark="be waiting">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ll', role: '主詞 + will', kind: 'dim' },
          { t: 'be', role: 'be', kind: 'key' },
          { t: 'waiting', role: '動詞-ing', kind: 'key' },
          { t: 'for you.', kind: 'dim' },
        ]"
      />
      <p class="translation">我會等著你。</p>
      <p class="remark">朋友到站的時候，Ann 已經開始等，還在等。</p>
    </NoteSlide>

    <NoteSlide title="每個人稱都用 will be 加動詞-ing" mark="be">
      <div class="rows is-labeled">
        <div>
          <span class="term">I</span>
          <span
            ><NoteMark sentence="I'll be studying in my room." :marks="['be studying']" /><span
              class="translation"
              >我會在房間念書。</span
            ></span
          >
        </div>
        <div>
          <span class="term">He</span>
          <span
            ><NoteMark sentence="He'll be playing tennis at four." :marks="['be playing']" /><span
              class="translation"
              >他四點會在打網球。</span
            ></span
          >
        </div>
        <div>
          <span class="term">The guests</span>
          <span
            ><NoteMark
              sentence="The guests will be arriving soon."
              :marks="['will be arriving']"
            /><span class="translation">客人很快就會到了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="口語常把 will 縮寫成 'll" mark="I'll">
      <div class="rows is-labeled">
        <div>
          <span class="term">will be<br /><i>書面、正式場合</i></span>
          <span
            ><NoteMark
              sentence="We will be starting at twelve o'clock."
              :marks="['will be']"
            /><span class="translation">我們十二點開始。</span></span
          >
        </div>
        <div>
          <span class="term">'ll be<br /><i>口語</i></span>
          <span
            ><NoteMark sentence="I'll be sitting near the door." :marks="['I\'ll be']" /><span
              class="translation"
              >我會坐在門邊。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="will 加原形動詞說決定，will be 加動詞-ing 說進行中的動作" mark="be waiting">
      <NoteFork
        stem="I'll"
        :branches="[
          { head: 'wait', rest: 'at the gate', meaning: '決定要做', zh: '我會在門口等。' },
          {
            head: 'be waiting',
            rest: 'at the gate',
            meaning: '對方到時正在進行',
            zh: '我會在門口等著。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="will be 加動詞-ing 的動作在那個時間之前就開始了" mark="be waiting">
      <div class="rows is-labeled">
        <div>
          <span class="term">will + 原形動詞<br /><i>八點開始</i></span>
          <span
            ><NoteMark sentence="At eight I'll have dinner." :marks="['have']" /><span
              class="translation"
              >我八點吃晚餐。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will be + 動詞-ing<br /><i>八點前已經開始</i></span>
          <span
            ><NoteMark sentence="At eight I'll be having dinner." :marks="['be having']" /><span
              class="translation"
              >八點的時候我正在吃晚餐。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="will 後面先接 be，再接動詞-ing" mark="be">
      <NoteFix
        wrong="I will waiting for you."
        right="I will be waiting for you."
        fix="be waiting"
      />
    </NoteSlide>

    <NoteSlide title="be 後面的動詞用 -ing 形式" mark="waiting">
      <NoteFix
        wrong="We will be start at noon."
        right="We will be starting at noon."
        fix="starting"
      />
    </NoteSlide>

    <NoteSlide title="will 後面的 be 用原形，不隨主詞變化" mark="be">
      <NoteFix
        wrong="They will are staying with us."
        right="They will be staying with us."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="will 是情態動詞，第三人稱單數也不加 -s" mark="I'll">
      <NoteFix wrong="She wills be working late." right="She will be working late." fix="will" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
