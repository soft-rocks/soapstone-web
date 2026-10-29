<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-if-past-simple-would-future, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="想像的情況和想像的結果" mark="went">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If I found a wallet in the street,', role: '過去簡單式', kind: 'key' },
          { t: 'I would take it to the police.', role: 'would + 原形動詞' },
        ]"
      />
      <p class="translation">如果我在路上撿到錢包，我會把它交給警察。</p>
      <p class="remark"><code>found</code> 不說過去的事。它說想像的情況。</p>
    </NoteSlide>

    <NoteSlide title="疑問句的 would 放在主詞前面" mark="would you go?">
      <div class="rows is-labeled">
        <div>
          <span class="term">直述句</span>
          <span
            ><NoteMark
              sentence="If we lived in the city, we would go to the theatre more."
              :marks="['we would go']"
            /><span class="translation">如果我們住在城市，我們會比較常去看戲。</span></span
          >
        </div>
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark
              sentence="If you had a free day tomorrow, what would you do?"
              :marks="['what would you do?']"
            /><span class="translation">如果你明天有一天空閒，你會做什麼？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if 子句放在後面給建議">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面不加逗號</span>
          <span
            ><NoteMark
              sentence="It would be cheaper if you took the bus."
              :marks="['if you took the bus.']"
            /><span class="translation">如果你搭公車，會比較便宜。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定用 didn't 和 wouldn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">didn't<br /><i>wouldn't</i></span>
          <span
            ><NoteMark
              sentence="If you didn't stay up so late, you wouldn't feel tired all day."
              :marks="['didn\'t stay', 'wouldn\'t feel']"
            /><span class="translation">如果你沒那麼晚睡，就不會整天覺得累。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：想像跟朋友去度假" mark="where would you go?">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If you went on holiday with your friends,', role: '過去簡單式', kind: 'key' },
          { t: 'where would you go?', role: '疑問句' },
        ]"
      />
      <p class="translation">如果你跟朋友去度假，你會去哪裡？</p>
    </NoteSlide>

    <NoteSlide title="主要子句用 would" mark="would">
      <NoteFix
        wrong="If you moved to the coast, you will love it."
        right="If you moved to the coast, you would love it."
        fix="would"
      />
    </NoteSlide>

    <NoteSlide title="if 子句用過去簡單式" mark="went">
      <NoteFix
        wrong="If I would have a boat, I would sail around the island."
        right="If I had a boat, I would sail around the island."
        fix="had"
      />
    </NoteSlide>

    <NoteSlide title="疑問句的 would 在主詞前面" mark="would you">
      <NoteFix
        wrong="If you had a million pounds, what you would buy?"
        right="If you had a million pounds, what would you buy?"
        fix="would you"
      />
    </NoteSlide>

    <NoteSlide title="第一條件句覺得有可能">
      <div class="rows is-labeled">
        <div>
          <span class="term">第一條件句<br /><i>有可能</i></span>
          <span
            ><NoteMark
              sentence="If I get the job, I'll move to Leeds."
              :marks="['get', 'I\'ll']"
            /><span class="translation">如果我得到那份工作，我會搬去里茲。</span></span
          >
        </div>
        <div>
          <span class="term">第二條件句<br /><i>不太可能</i></span>
          <span
            ><NoteMark
              sentence="If I got a job in London, I'd rent a small flat there."
              :marks="['got', 'I\'d']"
            /><span class="translation">要是我在倫敦找到工作，我會在那裡租一間小公寓。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="第三條件句說過去">
      <div class="rows is-labeled">
        <div>
          <span class="term">第二條件句<br /><i>現在或未來</i></span>
          <span
            ><NoteMark
              sentence="If I knew the answer, I would tell you."
              :marks="['knew', 'would tell']"
            /><span class="translation">如果我知道答案，我會告訴你。</span></span
          >
        </div>
        <div>
          <span class="term">第三條件句<br /><i>過去</i></span>
          <span
            ><NoteMark
              sentence="If I had known the answer, I would have told you."
              :marks="['had known', 'would have told']"
            /><span class="translation">如果我當時知道答案，我就會告訴你了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
