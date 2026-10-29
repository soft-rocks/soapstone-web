<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 037, as slides, in the order of notes/dragon-english-basic-100/037.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="without 加名詞可以代替假設的 if 子句"
      :mark="['Without fossil fuels', 'would have been']"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Without fossil fuels', role: 'without + 名詞', kind: 'key' },
          { t: 'such as oil and coal,', kind: 'dim' },
          { t: 'the history of the 20th century', role: '主詞' },
          { t: 'would have been', role: 'would have + 過去分詞', kind: 'key' },
          { t: 'completely different.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="講過去用 would have，講現在用 would 或 could" mark="would have been">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去<br /><i>would have + 過去分詞</i></span>
          <span
            ><NoteMark
              sentence="Without your help, I would have failed the test."
              :marks="['would have failed']"
            /><span class="translation">沒有你的幫忙，我考試就會不及格了。</span></span
          >
        </div>
        <div>
          <span class="term">現在<br /><i>would + 原形</i></span>
          <span
            ><NoteMark
              sentence="Without phones, our lives would be very different."
              :marks="['would be']"
            /><span class="translation">沒有電話，我們的生活就會很不一樣。</span></span
          >
        </div>
        <div>
          <span class="term">現在能不能做到<br /><i>could + 原形</i></span>
          <span
            ><NoteMark
              sentence="Without water, we couldn't live."
              :marks="['couldn\'t live']"
            /><span class="translation">沒有水，我們就活不下去。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="such as 放在名詞後面，舉出屬於這個名詞的例子" mark="such as oil and coal">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'fossil fuels', role: '名詞', kind: 'key' },
          { t: 'such as', role: '舉例' },
          { t: 'oil and coal', role: '例子', kind: 'key' },
        ]"
      />
      <p class="remark">例子可以是一個，也可以是兩三個。</p>
    </NoteSlide>

    <NoteSlide title="口語常用 like，用法和 such as 一樣" mark="such as">
      <div class="rows is-labeled">
        <div>
          <span class="term">such as</span>
          <span
            ><NoteMark
              sentence="I like fruit such as apples and bananas."
              :marks="['such as']"
            /><span class="translation">我喜歡蘋果和香蕉這類水果。</span></span
          >
        </div>
        <div>
          <span class="term">like</span>
          <span
            ><NoteMark
              sentence="I love sweet food like cake and chocolate."
              :marks="['like']"
            /><span class="translation">我很愛蛋糕和巧克力這類甜食。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>such as</code> 和 <code>like</code> 後面只接例子，不接句子。</p>
    </NoteSlide>

    <NoteSlide title="用一整句舉例時，句首用 For example" mark="such as">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Japan has many festivals.', role: '句子', kind: 'dim' },
          { t: 'For example,', role: '後面加逗號', kind: 'key' },
          { t: 'Kyoto has the Gion Festival in July.', role: '舉例的句子' },
        ]"
      />
      <p class="translation">日本有很多慶典。例如，京都七月有祇園祭。</p>
    </NoteSlide>
  </NoteDeck>
</template>
