<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-wh-cleft-clause-titles, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="wh- 子句當標題，主詞在動詞前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Why', role: 'wh- 詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'think', role: '動詞' },
          { t: 'this is a good idea.', role: 'think 的受詞' },
        ]"
      />
      <p class="translation">我為什麼認為這是個好主意。</p>
      <p class="remark">標題只有一個子句，沒有主要子句。</p>
    </NoteSlide>

    <NoteSlide title="標題下面那一段回答標題的子句" mark="Why">
      <div class="rows is-labeled">
        <div>
          <span class="term">標題</span>
          <span><NoteMark sentence="Why you should choose this event" :marks="['Why']" /></span>
        </div>
        <div>
          <span class="term">內容</span>
          <span
            ><NoteMark
              sentence="If you fund this event, you will help people in need and your company will be admired."
              :marks="[]"
            /><span class="translation"
              >如果您贊助這個活動，您會幫助有需要的人，貴公司也會受到讚賞。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="wh- 詞說出下一段的主題" mark="Why">
      <div class="rows is-labeled">
        <div>
          <span class="term">Why<br /><i>原因</i></span>
          <span
            ><NoteMark sentence="Why we need a new website" :marks="['Why']" /><span
              class="translation"
              >我們為什麼需要新的網站</span
            ></span
          >
        </div>
        <div>
          <span class="term">How<br /><i>方法</i></span>
          <span
            ><NoteMark sentence="How I collected the data" :marks="['How']" /><span
              class="translation"
              >我怎麼收集資料</span
            ></span
          >
        </div>
        <div>
          <span class="term">What<br /><i>內容</i></span>
          <span
            ><NoteMark sentence="What the survey showed" :marks="['What']" /><span
              class="translation"
              >調查顯示了什麼</span
            ></span
          >
        </div>
        <div>
          <span class="term">Where<br /><i>地點</i></span>
          <span
            ><NoteMark sentence="Where the money will go" :marks="['Where']" /><span
              class="translation"
              >這筆錢會用在哪裡</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="標題照直述句的語序，不加 do" mark="I think">
      <NoteFix
        wrong="Why do we need a new website."
        right="Why we need a new website."
        fix="we need"
      />
    </NoteSlide>

    <NoteSlide title="標題不是問句，不加問號" mark="idea.">
      <NoteFix wrong="How I collected the data?" right="How I collected the data." fix="data." />
    </NoteSlide>

    <NoteSlide title="How 不是主詞，子句要有自己的主詞" mark="I">
      <NoteFix
        wrong="How investigated the problem."
        right="How we investigated the problem."
        fix="we"
      />
    </NoteSlide>

    <NoteSlide title="be 動詞放在主詞後面" mark="I think">
      <NoteFix
        wrong="What is the main problem with the plan."
        right="What the main problem with the plan is."
        fix="is."
      />
    </NoteSlide>

    <NoteSlide title="問句當標題用疑問句的語序和問號" mark="I think">
      <div class="rows is-labeled">
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Why do people volunteer?" :marks="['do people']" /><span
              class="translation"
              >人們為什麼當志工？</span
            ></span
          >
        </div>
        <div>
          <span class="term">wh- 子句</span>
          <span
            ><NoteMark sentence="Why I think this is a good idea." :marks="['I think']" /><span
              class="translation"
              >我為什麼認為這是個好主意。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="wh- 子句後面有動詞，就是主詞，不是標題" mark="idea.">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Why I think this is a good idea', role: 'wh- 子句（主詞）' },
          { t: 'is', role: '動詞', kind: 'key', ring: true },
          { t: 'simple.', kind: 'dim' },
        ]"
      />
      <p class="translation">我為什麼認為這是個好主意，原因很簡單。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
