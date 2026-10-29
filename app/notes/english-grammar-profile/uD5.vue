<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-the-reason-that-the-place, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="The reason 加子句當主詞，be 後面說出重點">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The reason', role: 'The reason' },
          { t: 'I am writing', role: '子句' },
          { t: 'is', role: 'be', kind: 'key' },
          { t: 'to suggest a few things about our holidays.', role: '重點', kind: 'key' },
        ]"
      />
      <p class="translation">我寫這封信，是想針對我們的假期提幾點建議。</p>
      <p class="remark">關係代名詞 <code>that</code> 省略了。</p>
    </NoteSlide>

    <NoteSlide title="重點可以是 to + 原形動詞、that 子句或 because 子句" mark="to suggest">
      <div class="rows is-labeled">
        <div>
          <span class="term">to + 原形動詞</span>
          <span
            ><NoteMark
              sentence="The reason I called is to invite you to dinner."
              :marks="['to invite']"
            /><span class="translation">我打電話來，是想請你吃晚餐。</span></span
          >
        </div>
        <div>
          <span class="term">that 子句</span>
          <span
            ><NoteMark
              sentence="The reason I left is that the pay was too low."
              :marks="['that']"
            /><span class="translation">我離職的原因是薪水太低。</span></span
          >
        </div>
        <div>
          <span class="term">because 子句<br /><i>口語</i></span>
          <span
            ><NoteMark
              sentence="The reason I'm late is because the bus broke down."
              :marks="['because']"
            /><span class="translation">我遲到是因為公車拋錨了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="The place 在子句裡的角色，決定關係詞能不能省略" mark="The reason">
      <div class="rows is-labeled">
        <div>
          <span class="term">受詞<br /><i>可以省略</i></span>
          <span
            ><NoteMark
              sentence="The place we liked most was the old harbour."
              :marks="['The place', 'liked']"
            /><span class="translation">我們最喜歡的地方是那個老港口。</span></span
          >
        </div>
        <div>
          <span class="term">主詞<br /><i>不能省略</i></span>
          <span
            ><NoteMark
              sentence="The place which impressed me most is Kyoto."
              :marks="['which']"
            /><span class="translation">最讓我印象深刻的地方是京都。</span></span
          >
        </div>
        <div>
          <span class="term">地點<br /><i>用 where</i></span>
          <span
            ><NoteMark
              sentence="The place where they got married is beautiful."
              :marks="['where']"
            /><span class="translation">他們結婚的地方很美。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="which 當子句的主詞，不能省略">
      <NoteFix
        wrong="The place impressed me most is Kyoto."
        right="The place which impressed me most is Kyoto."
        fix="which"
      />
    </NoteSlide>

    <NoteSlide title="The place 已經是受詞，子句裡不再加 it">
      <NoteFix
        wrong="The place we liked it most was the harbour."
        right="The place we liked most was the harbour."
        fix="liked most"
      />
    </NoteSlide>

    <NoteSlide title="子句有動詞，整句還要有 be" mark="is">
      <NoteFix
        wrong="The reason I am writing to complain about the noise."
        right="The reason I am writing is to complain about the noise."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="主詞的中心是單數的 The reason，be 用 is" mark="is">
      <NoteFix
        wrong="The reason I chose these courses are that they are practical."
        right="The reason I chose these courses is that they are practical."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="The reason 後面接子句，不加 for" mark="The reason">
      <NoteFix
        wrong="The reason for I came is to see you."
        right="The reason I came is to see you."
        fix="The reason I came"
      />
    </NoteSlide>

    <NoteSlide title="The reason for 後面接名詞" mark="The reason">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The reason for', kind: 'key' },
          { t: 'the delay', role: '名詞', kind: 'key' },
          { t: 'is bad weather.', kind: 'dim' },
        ]"
      />
      <p class="translation">延誤的原因是天氣不好。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
