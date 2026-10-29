<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-affirmative-825, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="肯定句是主詞加 has，再接過去分詞" mark="has signed">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Our company', role: '單數主詞' },
          { t: 'has signed', role: 'has + 過去分詞', kind: 'key', ring: true },
          { t: 'deals with a few German companies.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們公司已經跟幾家德國公司簽了合約。</p>
      <p class="remark">說話者在年度會議上報告今年的成果。</p>
    </NoteSlide>

    <NoteSlide title="代名詞後面的 have / has 常縮寫" mark="has">
      <div class="rows is-labeled">
        <div>
          <span class="term">I have → I've</span>
          <span
            ><NoteMark
              sentence="I can't get into the house. I've lost my keys."
              :marks="['I\'ve']"
            /><span class="translation">我進不了家門。我把鑰匙弄丟了。</span></span
          >
        </div>
        <div>
          <span class="term">she has → she's</span>
          <span
            ><NoteMark
              sentence="My sister won't be at Christmas dinner. She's moved to Italy."
              :marks="['She\'s']"
            /><span class="translation">我姊姊不會來吃聖誕晚餐。她搬去義大利了。</span></span
          >
        </div>
        <div>
          <span class="term">it has → it's</span>
          <span
            ><NoteMark
              sentence="I got a new job and found a flat. It's been an amazing week."
              :marks="['It\'s']"
            /><span class="translation">我找到新工作，也找到了公寓。這個禮拜太棒了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不規則動詞的過去分詞" mark="signed">
      <div class="rows is-labeled">
        <div>
          <span class="term">和過去式一樣</span>
          <span>buy – bought – bought</span>
        </div>
        <div>
          <span class="term">加 -n 或 -en</span>
          <span>take – taken、write – written</span>
        </div>
        <div>
          <span class="term">母音改變</span>
          <span>swim – swum、begin – begun</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="has 後面接過去分詞，不接過去式" mark="signed">
      <NoteFix
        wrong="Mum has took the train to Manchester."
        right="Mum has taken the train to Manchester."
        fix="taken"
      />
    </NoteSlide>

    <NoteSlide title="複數名詞主詞用 have" mark="has">
      <NoteFix
        wrong="The nurses has asked for more pay."
        right="The nurses have asked for more pay."
        fix="have"
      />
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，不接原形動詞" mark="signed">
      <NoteFix
        wrong="I have finish the sales report for June."
        right="I have finished the sales report for June."
        fix="finished"
      />
    </NoteSlide>

    <NoteSlide title="說出過去的時間，用過去簡單式" mark="has signed">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Business is good this year.', kind: 'dim' },
          { t: 'Our company', kind: 'dim' },
          { t: 'signed', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'a deal with a German company' },
          { t: 'in March.', role: '過去的時間' },
        ]"
      />
      <p class="translation">今年生意很好。我們公司三月跟一家德國公司簽了合約。</p>
    </NoteSlide>

    <NoteSlide title="she's 加形容詞時，'s 是 is" mark="has">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Let your mum sleep.', kind: 'dim' },
          { t: 'She\'s', role: 'she is', kind: 'key', ring: true },
          { t: 'tired.', role: '形容詞' },
        ]"
      />
      <p class="translation">讓你媽媽睡吧。她累了。</p>
    </NoteSlide>

    <NoteSlide title="現在完成進行式說持續到現在的動作" mark="has signed">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We know the Berlin team well.', kind: 'dim' },
          { t: 'We\'ve been working', role: '持續到現在', kind: 'key', ring: true },
          { t: 'with them for two years.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們很了解柏林的團隊。我們跟他們合作兩年了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
