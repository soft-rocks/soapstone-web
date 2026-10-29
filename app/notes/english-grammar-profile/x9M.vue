<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-auxiliary-verb-be, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="助動詞 be 加動詞-ing 組成現在進行式">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'m', role: '主詞 + 助動詞 be', kind: 'key' },
          { t: 'working', role: '動詞-ing', kind: 'key' },
          { t: 'today.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">我今天要上班。</p>
      <p class="remark"><code>'m</code> 是 <code>am</code> 的縮寫。</p>
    </NoteSlide>

    <NoteSlide title="助動詞 be 照主詞變化" mark="I'm">
      <div class="rows is-labeled">
        <div>
          <span class="term">I</span>
          <span>am、I'm</span>
        </div>
        <div>
          <span class="term">he、she、it</span>
          <span>is、he's、she's、it's</span>
        </div>
        <div>
          <span class="term">you、we、they</span>
          <span>are、you're、we're、they're</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="字尾是 -e 的去掉 e，單音節的重複最後的子音" mark="working">
      <div class="rows is-labeled">
        <div>
          <span class="term">加 -&#x2060;ing</span>
          <span>work → working</span>
        </div>
        <div>
          <span class="term">去掉 e</span>
          <span>write → writing</span>
        </div>
        <div>
          <span class="term">重複子音</span>
          <span>sit → sitting、run → running</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在進行式說正在做的事、這段時間的事和安排好的計畫" mark="today">
      <div class="rows is-labeled">
        <div>
          <span class="term">正在做</span>
          <span
            ><NoteMark sentence="He's cooking dinner." :marks="['He\'s', 'cooking']" /><span
              class="translation"
              >他在煮晚餐。</span
            ></span
          >
        </div>
        <div>
          <span class="term">這段時間</span>
          <span
            ><NoteMark sentence="I'm reading a great book this week." :marks="['this week']" /><span
              class="translation"
              >我這星期在看一本很好看的書。</span
            ></span
          >
        </div>
        <div>
          <span class="term">安排好的計畫</span>
          <span
            ><NoteMark sentence="We are going to the park on Sunday." :marks="['on Sunday']" /><span
              class="translation"
              >我們星期天要去公園。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定加 not，問句把助動詞 be 放到主詞前面" mark="I'm">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark sentence="I'm not working today." :marks="['not']" /><span
              class="translation"
              >我今天不用上班。</span
            ></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Are you working today?" :marks="['Are']" /><span
              class="translation"
              >你今天要上班嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞-ing 前面要有 am、is 或 are" mark="I'm">
      <NoteFix wrong="I working today." right="I'm working today." fix="I'm" />
    </NoteSlide>

    <NoteSlide title="助動詞 be 後面的一般動詞用動詞-ing" mark="working">
      <NoteFix wrong="She is cook dinner now." right="She is cooking dinner now." fix="cooking" />
    </NoteSlide>

    <NoteSlide title="主詞是複數名詞，助動詞 be 用 are" mark="I'm">
      <NoteFix
        wrong="My friends is waiting for me."
        right="My friends are waiting for me."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="sit 要重複 t 再加 -ing" mark="working">
      <NoteFix
        wrong="We are siting in the garden."
        right="We are sitting in the garden."
        fix="sitting"
      />
    </NoteSlide>

    <NoteSlide title="現在簡單式說習慣，現在進行式只說今天" mark="working">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在簡單式</span>
          <span
            ><NoteMark sentence="I work on Saturdays." :marks="['work']" /><span class="translation"
              >我星期六都要上班。</span
            ></span
          >
        </div>
        <div>
          <span class="term">現在進行式</span>
          <span
            ><NoteMark sentence="I'm working today." :marks="['I\'m', 'working']" /><span
              class="translation"
              >我今天要上班。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 動詞後面接形容詞時是連綴動詞，不是助動詞" mark="I'm">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'m', role: '連綴動詞 be', kind: 'key', ring: true },
          { t: 'tired', role: '形容詞' },
          { t: 'today.', kind: 'dim' },
        ]"
      />
      <p class="translation">我今天很累。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
