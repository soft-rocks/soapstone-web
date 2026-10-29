<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-modal-auxiliary-verbs, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="情態動詞後面接原形動詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I\'ll', role: 'I + will', kind: 'key' },
          { t: 'be', role: '原形動詞', kind: 'key' },
          { t: 'very happy', role: '形容詞' },
          { t: 'to help you.', role: 'to + 原形動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我很樂意幫你。</p>
      <p class="remark"><code>will</code> 說未來的事。</p>
    </NoteSlide>

    <NoteSlide title="can 說能力和請求，will 說未來，would 是客氣的說法" mark="I'll">
      <div class="rows is-labeled">
        <div>
          <span class="term">can</span>
          <span
            ><NoteMark sentence="Can you bring some music to the dinner?" :marks="['Can']" /><span
              class="translation"
              >你可以帶些音樂來晚餐嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark sentence="I'll call you tomorrow." :marks="['I\'ll']" /><span
              class="translation"
              >我明天打給你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">would like</span>
          <span
            ><NoteMark
              sentence="I would like to eat some Spanish food."
              :marks="['would like']"
            /><span class="translation">我想吃點西班牙菜。</span></span
          >
        </div>
        <div>
          <span class="term">Would you ...?</span>
          <span
            ><NoteMark sentence="Would you open the door for me, please?" :marks="['Would']" /><span
              class="translation"
              >可以麻煩你幫我開門嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定加 not，問句把情態動詞放到主詞前面" mark="I'll">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark sentence="She can't come to the party." :marks="['can\'t']" /><span
              class="translation"
              >她不能來參加派對。</span
            ></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Will you be at home tonight?" :marks="['Will']" /><span
              class="translation"
              >你今晚會在家嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情態動詞後面直接接原形動詞，不加 to" mark="be">
      <NoteFix wrong="I can to speak English." right="I can speak English." fix="speak" />
    </NoteSlide>

    <NoteSlide title="情態動詞不照主詞變化" mark="I'll">
      <NoteFix
        wrong="My brother cans cook very well."
        right="My brother can cook very well."
        fix="can"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞後面的動詞用原形" mark="be">
      <NoteFix wrong="She will comes tomorrow." right="She will come tomorrow." fix="come" />
    </NoteSlide>

    <NoteSlide title="情態動詞的問句不用 do">
      <NoteFix wrong="Do you can help me?" right="Can you help me?" fix="Can" />
    </NoteSlide>

    <NoteSlide title="would like 後面接動詞時，動詞前面加 to" mark="to">
      <NoteFix wrong="I would like visit London." right="I would like to visit London." fix="to" />
    </NoteSlide>

    <NoteSlide title="would like 比 want 客氣">
      <NoteFork
        stem="I"
        :branches="[
          { head: 'want', rest: 'a coffee.', meaning: '直接', zh: '我要一杯咖啡。' },
          { head: 'would like', rest: 'a coffee.', meaning: '客氣', zh: '我想要一杯咖啡。' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="be going to 說事先決定的計畫，will 常說當下決定的事" mark="I'll">
      <div class="rows is-labeled">
        <div>
          <span class="term">be going to</span>
          <span
            ><NoteMark
              sentence="I'm going to visit my aunt on Sunday."
              :marks="['going to']"
            /><span class="translation">我星期天要去看我阿姨。</span></span
          >
        </div>
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark sentence="I'll call you tomorrow." :marks="['I\'ll']" /><span
              class="translation"
              >我明天打給你。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
