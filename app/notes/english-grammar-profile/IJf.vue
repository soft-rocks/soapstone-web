<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-time, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="See you soon 省略了主詞 I'll">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'ll', role: '省略', kind: 'gone' },
          { t: 'See you', role: 'see + 受詞' },
          { t: 'soon.', role: '時間副詞', kind: 'key' },
        ]"
      />
      <p class="translation">回頭見。</p>
      <p class="remark"><code>soon</code> 表示說話者預期不久以後會再見面。</p>
    </NoteSlide>

    <NoteSlide title="Get well soon 是祈使句，祝對方早日康復" mark="soon">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'m sorry you\'re sick.', kind: 'dim' },
          { t: 'Get well', role: '祈使句', kind: 'key' },
          { t: 'soon.', role: '時間副詞', kind: 'key' },
        ]"
      />
      <p class="translation">聽說你生病了。早日康復。</p>
      <p class="remark">只對生病或受傷的人說，常寫在卡片上。</p>
    </NoteSlide>

    <NoteSlide title="電話、訊息和信件的結尾也用 soon" mark="soon">
      <div class="rows is-labeled">
        <div>
          <span class="term">電話、訊息</span>
          <span
            ><NoteMark sentence="Talk to you soon." :marks="['soon']" /><span class="translation"
              >再聊。</span
            ></span
          >
        </div>
        <div>
          <span class="term">信件、卡片</span>
          <span
            ><NoteMark sentence="Hope to see you soon." :marks="['soon']" /><span
              class="translation"
              >希望很快能見到你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">請對方回信</span>
          <span
            ><NoteMark sentence="Write soon." :marks="['soon']" /><span class="translation"
              >快點回信。</span
            ></span
          >
        </div>
        <div>
          <span class="term">加 again</span>
          <span
            ><NoteMark sentence="See you again soon." :marks="['again']" /><span class="translation"
              >希望很快再見。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="這個固定說法裡，soon 放在句尾" mark="soon">
      <NoteFix wrong="Soon see you." right="See you soon." fix="soon" />
    </NoteSlide>

    <NoteSlide title="祝人康復用 soon，不用 fast" mark="soon">
      <NoteFix wrong="Get well fast." right="Get well soon." fix="soon">
        <code>fast</code> 說的是速度。<code>soon</code> 說的是時間不久。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="說身體健康用 well">
      <NoteFix wrong="Get good soon, Dad." right="Get well soon, Dad." fix="well" />
    </NoteSlide>

    <NoteSlide title="see 後面要有受詞 you" mark="you">
      <NoteFix wrong="See soon, Amy." right="See you soon, Amy." fix="you" />
    </NoteSlide>

    <NoteSlide title="later 指同一天稍後，soon 不說出確切的時間" mark="soon">
      <div class="rows is-labeled">
        <div>
          <span class="term">later<br /><i>同一天稍後</i></span>
          <span
            ><NoteMark sentence="I'm going to the shop. See you later." :marks="['later']" /><span
              class="translation"
              >我去一下商店。待會見。</span
            ></span
          >
        </div>
        <div>
          <span class="term">tomorrow<br /><i>說出日子</i></span>
          <span
            ><NoteMark sentence="Thanks for today. See you tomorrow." :marks="['tomorrow']" /><span
              class="translation"
              >今天謝謝你。明天見。</span
            ></span
          >
        </div>
        <div>
          <span class="term">soon<br /><i>不久以後</i></span>
          <span
            ><NoteMark sentence="I have to go now. See you soon." :marks="['soon']" /><span
              class="translation"
              >我得走了。回頭見。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不在結尾語裡的 soon 說的是事情不久就會發生" mark="soon">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'The bus', role: '主詞' },
          { t: 'will be here', role: '動詞' },
          { t: 'soon.', role: '時間副詞', kind: 'key' },
        ]"
      />
      <p class="translation">公車快來了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
