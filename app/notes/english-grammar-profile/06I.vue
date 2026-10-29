<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-use-negative-questions-with-not-emphasis, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not 不縮寫，放在主詞後面">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Do', role: '助動詞', kind: 'key' },
          { t: 'we', role: '主詞' },
          { t: 'not', role: '否定詞', kind: 'key', ring: true },
          { t: 'want', role: '動詞' },
          { t: 'our children', role: '受詞' },
          { t: 'to be as happy as possible?', kind: 'dim' },
        ]"
      />
      <p class="translation">難道我們不希望孩子盡可能過得快樂嗎？</p>
      <p class="remark">說話者用這種問句提出自己的論點，預期對方同意。</p>
    </NoteSlide>

    <NoteSlide title="縮寫的 n't 在主詞前面，not 在主詞後面" mark="not">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Isn\'t', role: 'be + n\'t', kind: 'key' },
          { t: 'it', role: '主詞' },
          { t: 'time we changed the rules?', kind: 'dim' },
        ]"
      />
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Is', role: 'be', kind: 'key' },
          { t: 'it', role: '主詞' },
          { t: 'not', role: '否定詞', kind: 'key' },
          { t: 'time we changed the rules?', kind: 'dim' },
        ]"
      />
      <p class="translation">我們難道不該改改規則了嗎？</p>
      <p class="remark">兩句的意思相同。縮寫形式用在口語。<br />未縮寫形式用在正式的論述。</p>
    </NoteSlide>

    <NoteSlide title="not 後面的動詞形式由助動詞決定" mark="want">
      <div class="rows is-labeled">
        <div>
          <span class="term">Do、Does、Did<br /><i>原形</i></span>
          <span
            ><NoteMark sentence="Do they not see the danger?" :marks="['Do', 'see']" /><span
              class="translation"
              >他們難道看不出危險嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Have、Has<br /><i>過去分詞</i></span>
          <span
            ><NoteMark
              sentence="Have we not heard this excuse before?"
              :marks="['Have', 'heard']"
            /><span class="translation">這個藉口我們難道沒聽過嗎？</span></span
          >
        </div>
        <div>
          <span class="term">情態動詞<br /><i>原形</i></span>
          <span
            ><NoteMark sentence="Can we not ask the tenants first?" :marks="['Can', 'ask']" /><span
              class="translation"
              >我們難道不能先問問房客嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 開頭時，not 後面接形容詞、名詞或介系詞片語">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="Are you not worried about the cost?" :marks="['worried']" /><span
              class="translation"
              >你難道不擔心費用嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="Is this not the best plan we have?"
              :marks="['the best plan']"
            /><span class="translation">這難道不是我們最好的計畫嗎？</span></span
          >
        </div>
        <div>
          <span class="term">介系詞片語</span>
          <span
            ><NoteMark
              sentence="Are we not all on the same side here?"
              :marks="['on the same side']"
            /><span class="translation">我們難道不是站在同一邊的嗎？</span></span
          >
        </div>
        <div>
          <span class="term">形容詞 + to</span>
          <span
            ><NoteMark
              sentence="Is it not better to wait one more week?"
              :marks="['better to wait']"
            /><span class="translation">再等一個禮拜難道不是比較好嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞是代名詞時，not 放在主詞後面" mark="we not">
      <NoteFix
        wrong="Do not we want to protect the river?"
        right="Do we not want to protect the river?"
        fix="we not"
      >
        未縮寫的 <code>not</code> 不放在代名詞主詞前面。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="not 放在主詞和動詞中間" mark="not want">
      <NoteFix
        wrong="Do we owe not them an answer?"
        right="Do we not owe them an answer?"
        fix="not owe"
      >
        <code>not</code> 不放在動詞後面。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="句子的動詞是 be 時，be 放在句首" mark="Do">
      <NoteFix
        wrong="Does it not be possible to finish by Friday?"
        right="Is it not possible to finish by Friday?"
        fix="Is"
      >
        <code>be</code> 的句子不加 <code>do</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="Does 後面的動詞用原形" mark="want">
      <NoteFix
        wrong="Does he not sees the damage this will cause?"
        right="Does he not see the damage this will cause?"
        fix="see"
      >
        <code>Does</code> 已經表示人稱和時態。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="確認事實的否定疑問句不提出論點">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Didn\'t', role: '縮寫', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'get my email?', kind: 'dim' },
        ]"
      />
      <p class="translation">你沒收到我的 email 嗎？</p>
      <p class="remark">說話者以為對方收到了。說話者用這句確認事實。</p>
    </NoteSlide>

    <NoteSlide title="附加問句放在直述句後面">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We owe them an answer,', role: '直述句', kind: 'dim' },
          { t: 'don\'t we?', role: '附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">我們該給他們一個答覆，不是嗎？</p>
      <p class="remark">
        附加問句的說話者也預期對方同意。<br />不縮寫 not 的否定疑問句整句是問句。
      </p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
