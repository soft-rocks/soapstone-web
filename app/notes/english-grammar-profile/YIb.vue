<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-negative-819, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I haven't 加過去分詞，說到現在都沒做" mark="haven't seen">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'haven\'t seen', role: 'haven\'t + 過去分詞', kind: 'key', ring: true },
          { t: 'you', role: '受詞', kind: 'dim' },
          { t: 'for a long time.', role: '一段時間' },
        ]"
      />
      <p class="translation">我很久沒見到你了。</p>
      <p class="remark">兩個人從畢業以後就沒見過面。</p>
    </NoteSlide>

    <NoteSlide title="正式的文字寫 I have not" mark="haven't">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Dear Mr Hall, I wrote to you on 3 May.', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'have not', role: '完整形式', kind: 'key', ring: true },
          { t: 'received', role: '過去分詞' },
          { t: 'your reply.', kind: 'dim' },
        ]"
      />
      <p class="translation">霍爾先生您好，我五月三日寫信給您。我還沒收到您的回覆。</p>
    </NoteSlide>

    <NoteSlide title="否定句常加時間的說法" mark="for a long time.">
      <div class="rows is-labeled">
        <div>
          <span class="term">for<br /><i>一段時間</i></span>
          <span
            ><NoteMark
              sentence="I'm going to give this dress away. I haven't worn it for years."
              :marks="['for years.']"
            /><span class="translation">我要把這件洋裝送人。我好幾年沒穿了。</span></span
          >
        </div>
        <div>
          <span class="term">yet<br /><i>句尾</i></span>
          <span
            ><NoteMark
              sentence="I'm saving it for my birthday. I haven't opened your present yet."
              :marks="['yet.']"
            /><span class="translation">我要留到生日那天。你送的禮物我還沒拆。</span></span
          >
        </div>
        <div>
          <span class="term">since<br /><i>起點</i></span>
          <span
            ><NoteMark
              sentence="My uncle lives in Canada now. I haven't seen him since Christmas."
              :marks="['since Christmas.']"
            /><span class="translation"
              >我叔叔現在住在加拿大。我從聖誕節以後就沒見過他。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not 加在 have 後面，不用 don't" mark="haven't">
      <NoteFix
        wrong="I don't have seen my grandparents for a long time."
        right="I haven't seen my grandparents for a long time."
        fix="haven't"
      />
    </NoteSlide>

    <NoteSlide title="haven't 後面接過去分詞" mark="seen">
      <NoteFix
        wrong="I haven't eat any fruit this week."
        right="I haven't eaten any fruit this week."
        fix="eaten"
      />
    </NoteSlide>

    <NoteSlide title="第三人稱單數用 hasn't" mark="haven't">
      <NoteFix
        wrong="My dad haven't called me since Sunday."
        right="My dad hasn't called me since Sunday."
        fix="hasn't"
      />
    </NoteSlide>

    <NoteSlide title="已經結束的時間，用 didn't" mark="haven't seen">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Were you at Ben\'s house on Saturday?', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'didn\'t see', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'you', kind: 'dim' },
          { t: 'at the party.', role: '已經結束' },
        ]"
      />
      <p class="translation">你星期六有去班家嗎？我在派對上沒看到你。</p>
    </NoteSlide>

    <NoteSlide title="說習慣，用 don't" mark="haven't seen">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'No burger for me, thanks.', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'don\'t eat', role: '習慣', kind: 'key', ring: true },
          { t: 'meat.', kind: 'dim' },
        ]"
      />
      <p class="translation">我不要漢堡，謝謝。我不吃肉。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
