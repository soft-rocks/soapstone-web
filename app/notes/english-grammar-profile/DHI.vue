<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-questions-798, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定問句表示意外" mark="Didn't you">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Didn\'t', role: '否定問句', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'tell', role: '原形動詞', kind: 'key' },
          { t: 'me that you had to go to Orleans today?', kind: 'dim' },
        ]"
      />
      <p class="translation">你不是跟我說你今天要去奧爾良嗎？</p>
      <p class="remark">說話者以為朋友已經出發了。</p>
    </NoteSlide>

    <NoteSlide title="是非問句和疑問詞問句" mark="tell">
      <div class="rows is-labeled">
        <div>
          <span class="term">是非問句</span>
          <span
            ><NoteMark sentence="Did the medicine help at all?" :marks="['Did', 'help']" /><span
              class="translation"
              >藥有一點效果嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問詞問句</span>
          <span
            ><NoteMark
              sentence="Where did you learn to swim?"
              :marks="['Where did', 'learn']"
            /><span class="translation">你在哪裡學會游泳的？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="附加問句" mark="Didn't you">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定句</span>
          <span
            ><NoteMark
              sentence="You remembered to feed the cat, didn't you?"
              :marks="['didn\'t you']"
            /><span class="translation">你有記得餵貓吧？</span></span
          >
        </div>
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark sentence="They didn't apologise, did they?" :marks="['did they']" /><span
              class="translation"
              >他們沒道歉吧？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Didn't 和 Why didn't" mark="Didn't you">
      <div class="rows is-labeled">
        <div>
          <span class="term">確認</span>
          <span
            ><NoteMark sentence="Didn't you invite Sam?" :marks="['Didn\'t you']" /><span
              class="translation"
              >你不是有邀 Sam 嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">問原因</span>
          <span
            ><NoteMark sentence="Why didn't you invite Sam?" :marks="['Why didn\'t you']" /><span
              class="translation"
              >你為什麼沒邀 Sam？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Didn't 後面接原形動詞" mark="tell">
      <NoteFix
        wrong="Didn't you told me about the party?"
        right="Didn't you tell me about the party?"
        fix="tell"
      />
    </NoteSlide>

    <NoteSlide title="didn't 放在主詞前面" mark="Didn't you">
      <NoteFix
        wrong="Why you didn't call the police?"
        right="Why didn't you call the police?"
        fix="didn't you"
      />
    </NoteSlide>

    <NoteSlide title="附加問句用 didn't" mark="Didn't you">
      <NoteFix
        wrong="We had a terrific time, hadn't we?"
        right="We had a terrific time, didn't we?"
        fix="didn't"
      />
    </NoteSlide>

    <NoteSlide title="last 放在原形動詞前面" mark="tell">
      <NoteFix
        wrong="When did you see last your sister?"
        right="When did you last see your sister?"
        fix="last see"
      />
    </NoteSlide>

    <NoteSlide title="照事實回答否定問句" mark="Didn't you">
      <NoteFix
        wrong="Didn't you get the tickets? Yes, I didn't."
        right="Didn't you get the tickets? No, I didn't."
        fix="No"
      />
    </NoteSlide>

    <NoteSlide title="否定問句和附加問句" mark="Didn't you">
      <div class="rows is-labeled">
        <div>
          <span class="term">以為有</span>
          <span
            ><NoteMark sentence="Didn't you lock the car?" :marks="['Didn\'t you']" /><span
              class="translation"
              >你沒鎖車嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">以為沒有</span>
          <span
            ><NoteMark sentence="You didn't lock the car, did you?" :marks="['did you']" /><span
              class="translation"
              >你沒鎖車吧？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
