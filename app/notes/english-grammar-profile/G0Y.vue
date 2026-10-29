<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-if-present-simple, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if 子句說條件，主要子句說結果" mark="If you agree,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If you like the book,', role: '現在簡單式', kind: 'key' },
          { t: 'I\'ll lend you the next one.', role: '結果' },
        ]"
      />
      <p class="translation">如果你喜歡這本書，我會借你下一本。</p>
    </NoteSlide>

    <NoteSlide title="主要子句用 will、can 或祈使句" mark="can go">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark
              sentence="If you study hard, you'll pass the test."
              :marks="['you\'ll pass']"
            /><span class="translation">如果你用功讀書，就會通過考試。</span></span
          >
        </div>
        <div>
          <span class="term">can</span>
          <span
            ><NoteMark
              sentence="If it's sunny, we can have lunch outside."
              :marks="['can have']"
            /><span class="translation">如果天氣好，我們可以在外面吃午餐。</span></span
          >
        </div>
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark
              sentence="If you go to the bakery, please get some bread."
              :marks="['please get some bread.']"
            /><span class="translation">如果你去麵包店，請買些麵包。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="第三人稱單數的動詞加 -s">
      <div class="rows is-labeled">
        <div>
          <span class="term">he、she、it<br /><i>單數名詞</i></span>
          <span
            ><NoteMark sentence="If Sam calls, tell him I'm out." :marks="['Sam calls,']" /><span
              class="translation"
              >如果 Sam 打來，跟他說我出去了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>be</code> 動詞用 <code>is</code>。</p>
    </NoteSlide>

    <NoteSlide title="否定用 don't 或 doesn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">doesn't</span>
          <span
            ><NoteMark
              sentence="If she doesn't come by eight, we'll eat without her."
              :marks="['doesn\'t come']"
            /><span class="translation">如果她八點前沒來，我們就先吃，不等她。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if 子句放在後面不加逗號">
      <div class="rows is-labeled">
        <div>
          <span class="term">放在後面</span>
          <span
            ><NoteMark
              sentence="We'll go to the park if it stops raining."
              :marks="['if it stops raining.']"
            /><span class="translation">如果雨停了，我們會去公園。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：你同意就去逛街" mark="agree,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If you agree,', role: '現在簡單式', kind: 'key' },
          { t: 'we can go shopping after the film.', role: 'can + 原形動詞' },
        ]"
      />
      <p class="translation">如果你同意，我們看完電影可以去逛街。</p>
    </NoteSlide>

    <NoteSlide title="if 子句不用 will" mark="agree,">
      <NoteFix
        wrong="If you will come to my wedding, I'll be very happy."
        right="If you come to my wedding, I'll be very happy."
        fix="come"
      />
    </NoteSlide>

    <NoteSlide title="第三人稱單數用 has">
      <NoteFix
        wrong="If he have time, he'll help us."
        right="If he has time, he'll help us."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="否定要用 don't 或 doesn't">
      <NoteFix
        wrong="If he not want to come, he can stay here."
        right="If he doesn't want to come, he can stay here."
        fix="doesn't want"
      />
    </NoteSlide>

    <NoteSlide title="間接問句的 if 意思是是不是">
      <div class="rows is-labeled">
        <div>
          <span class="term">是不是</span>
          <span
            ><NoteMark
              sentence="I don't know if he likes fish."
              :marks="['if he likes fish.']"
            /><span class="translation">我不知道他喜不喜歡魚。</span></span
          >
        </div>
        <div>
          <span class="term">條件</span>
          <span
            ><NoteMark
              sentence="If he likes fish, I'll cook salmon."
              :marks="['If he likes fish,']"
            /><span class="translation">如果他喜歡魚，我就煮鮭魚。</span></span
          >
        </div>
      </div>
      <p class="remark">間接問句的 <code>if</code> 子句可以用 <code>will</code>。</p>
    </NoteSlide>

    <NoteSlide title="unless 等於 if ... not">
      <div class="rows is-labeled">
        <div>
          <span class="term">if ... not</span>
          <span
            ><NoteMark
              sentence="If you don't leave now, you'll be late."
              :marks="['If', 'don\'t leave']"
            /><span class="translation">如果你現在不出發，就會遲到。</span></span
          >
        </div>
        <div>
          <span class="term">unless</span>
          <span
            ><NoteMark
              sentence="Unless you leave now, you'll miss your train."
              :marks="['Unless', 'leave']"
            /><span class="translation">除非你現在出發，不然會趕不上火車。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
