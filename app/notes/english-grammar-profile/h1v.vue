<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-questions-804, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="疑問詞加 did，再接主詞和原形動詞" mark="did it">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'How', role: '疑問詞' },
          { t: 'did', role: '助動詞', kind: 'key', ring: true },
          { t: 'it', role: '主詞' },
          { t: 'turn out?', role: '片語動詞原形', kind: 'key' },
        ]"
      />
      <p class="translation">結果怎麼樣？</p>
      <p class="remark">同事第一次辦年終聚餐，聚餐結束後說話者問。</p>
    </NoteSlide>

    <NoteSlide title="過去簡單式的問句" mark="How did">
      <div class="rows is-labeled">
        <div>
          <span class="term">是非問句</span>
          <span
            ><NoteMark sentence="Did you spot the mistake?" :marks="['Did']" /><span
              class="translation"
              >你有發現那個錯誤嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問詞問句</span>
          <span
            ><NoteMark sentence="How did the interview go?" :marks="['How did']" /><span
              class="translation"
              >面試怎麼樣？</span
            ></span
          >
        </div>
        <div>
          <span class="term">附加問句</span>
          <span
            ><NoteMark sentence="I told you about Peter, didn't I?" :marks="['didn\'t I?']" /><span
              class="translation"
              >我跟你說過 Peter 的事了，對吧？</span
            ></span
          >
        </div>
        <div>
          <span class="term">否定問句</span>
          <span
            ><NoteMark sentence="Didn't you get my message?" :marks="['Didn\'t']" /><span
              class="translation"
              >你沒收到我的訊息嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="附加問句的肯定和否定相反" mark="did">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定句</span>
          <span
            ><NoteMark
              sentence="He turned down the job offer, didn't he?"
              :marks="['didn\'t he?']"
            /><span class="translation">他拒絕了那份工作，對吧？</span></span
          >
        </div>
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark
              sentence="You didn't forget my birthday, did you?"
              :marks="['did you?']"
            /><span class="translation">你沒有忘記我的生日吧？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="did 後面接原形動詞" mark="turn out?">
      <NoteFix wrong="How did it turned out?" right="How did it turn out?" fix="turn" />
    </NoteSlide>

    <NoteSlide title="肯定句接否定的附加問句" mark="did">
      <NoteFix
        wrong="I told you about Peter, did I?"
        right="I told you about Peter, didn't I?"
        fix="didn't I?"
      />
    </NoteSlide>

    <NoteSlide title="附加問句用代名詞" mark="it">
      <NoteFix
        wrong="Your sister passed her test, didn't your sister?"
        right="Your sister passed her test, didn't she?"
        fix="she?"
      />
    </NoteSlide>

    <NoteSlide title="Who 當主詞，不用 did" mark="did">
      <NoteFix wrong="Who did break the window?" right="Who broke the window?" fix="broke" />
    </NoteSlide>

    <NoteSlide title="Who 當主詞和 Who 當受詞" mark="did">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark sentence="Who called you last night?" :marks="['Who called']" /><span
              class="translation"
              >昨天晚上誰打給你？</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="Who did you call last night?" :marks="['did you call']" /><span
              class="translation"
              >你昨天晚上打給誰？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定問句表示意外" mark="did">
      <div class="rows is-labeled">
        <div>
          <span class="term">只問有沒有</span>
          <span
            ><NoteMark sentence="Did you lock the door?" :marks="['Did']" /><span
              class="translation"
              >你有鎖門嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">以為有</span>
          <span
            ><NoteMark sentence="Didn't you lock the door?" :marks="['Didn\'t']" /><span
              class="translation"
              >你沒鎖門嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
