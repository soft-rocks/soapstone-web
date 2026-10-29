<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-linking-100, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="otherwise 說明不這樣做的結果">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Please let me know if you can collect it.', role: '第一個句子', kind: 'dim' },
          { t: 'Otherwise,', role: '連接副詞', kind: 'key' },
          { t: 'I will ask my other friend.', role: '沒有回覆的結果' },
        ]"
      />
      <p class="translation">請跟我說你能不能來拿。不然我就去拜託我另一個朋友。</p>
    </NoteSlide>

    <NoteSlide title="therefore 帶出結果，furthermore 補充同方向的事" mark="Otherwise,">
      <div class="rows is-labeled">
        <div>
          <span class="term">therefore<br /><i>結果</i></span>
          <span
            ><NoteMark
              sentence="You don't like big cities. Therefore, I suggest a small school in the countryside."
              :marks="['Therefore,']"
            /><span class="translation">你不喜歡大城市。所以我建議你去鄉下的小學校。</span></span
          >
        </div>
        <div>
          <span class="term">furthermore<br /><i>補充</i></span>
          <span
            ><NoteMark
              sentence="The course is cheap. Furthermore, it's very close to my house."
              :marks="['Furthermore,']"
            /><span class="translation">這門課很便宜。而且離我家很近。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="therefore 和 furthermore 比較正式，說話多半用 so 和 also">
      <div class="rows is-labeled">
        <div>
          <span class="term">正式</span>
          <span><code>therefore</code>、<code>furthermore</code></span>
        </div>
        <div>
          <span class="term">說話</span>
          <span><code>so</code>、<code>also</code>、<code>what's more</code></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說話時，otherwise 常接在祈使句的逗號後面" mark="Otherwise,">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Hurry up,', role: '祈使句', kind: 'dim' },
          { t: 'otherwise', role: '連接副詞', kind: 'key' },
          { t: 'we\'ll miss the train.', role: '結果' },
        ]"
      />
      <p class="translation">快一點，不然我們會趕不上火車。</p>
    </NoteSlide>

    <NoteSlide title="正式的文字裡，therefore 前面用句點，不用逗號">
      <NoteFix
        wrong="It was raining, therefore we stayed at home."
        right="It was raining. Therefore, we stayed at home."
        fix="Therefore,"
      />
    </NoteSlide>

    <NoteSlide title="therefore 的結尾是 e">
      <NoteFix
        wrong="He was ill. Therefor, he stayed at home."
        right="He was ill. Therefore, he stayed at home."
        fix="Therefore,"
      />
    </NoteSlide>

    <NoteSlide title="otherwise 前面不再加 if 子句" mark="Otherwise,">
      <NoteFix
        wrong="If you don't hurry, otherwise we'll be late."
        right="Hurry, otherwise we'll be late."
        fix="Hurry,"
      />
    </NoteSlide>

    <NoteSlide title="furthermore 是一個字">
      <NoteFix
        wrong="Further more, the price includes breakfast."
        right="Furthermore, the price includes breakfast."
        fix="Furthermore,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
