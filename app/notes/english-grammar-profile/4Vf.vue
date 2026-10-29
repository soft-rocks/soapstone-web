<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-affirmative-818, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I 加 have，再接過去分詞" mark="have seen">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'have seen', role: 'have + 過去分詞', kind: 'key', ring: true },
          { t: 'the Eiffel Tower and many old buildings.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我看過艾菲爾鐵塔，也看過很多古老的建築。</p>
      <p class="remark">說話者在巴黎玩了三天，晚上寫明信片給家人。</p>
    </NoteSlide>

    <NoteSlide title="I 和 we 都用 have，說話時常縮寫" mark="have">
      <div class="rows is-labeled">
        <div>
          <span class="term">I have → I've</span>
          <span
            ><NoteMark
              sentence="I love Japanese food. I've been to Japan three times."
              :marks="['I\'ve']"
            /><span class="translation">我很愛日本菜。我去過日本三次。</span></span
          >
        </div>
        <div>
          <span class="term">we have → we've</span>
          <span
            ><NoteMark
              sentence="Come and see it outside. We've bought a new car."
              :marks="['We\'ve']"
            /><span class="translation">來外面看看。我們買了一輛新車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，不接過去式" mark="seen">
      <NoteFix
        wrong="I have saw the Eiffel Tower from my hotel window."
        right="I have seen the Eiffel Tower from my hotel window."
        fix="seen"
      />
    </NoteSlide>

    <NoteSlide title="過去分詞前面要有 have" mark="have">
      <NoteFix
        wrong="We seen all the paintings in this room."
        right="We have seen all the paintings in this room."
        fix="have seen"
      />
    </NoteSlide>

    <NoteSlide title="去過、已經回來，用 been to" mark="have seen">
      <NoteFix
        wrong="I have gone to Vienna three times."
        right="I have been to Vienna three times."
        fix="been to"
      />
    </NoteSlide>

    <NoteSlide title="說出過去的時間，用過去簡單式" mark="have seen">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Paris was wonderful.', kind: 'dim' },
          { t: 'We', kind: 'dim' },
          { t: 'saw', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'the Eiffel Tower', kind: 'dim' },
          { t: 'on Monday.', role: '過去的時間' },
        ]"
      />
      <p class="translation">巴黎很棒。我們星期一去看了艾菲爾鐵塔。</p>
    </NoteSlide>

    <NoteSlide title="I'd 不是 I have" mark="have">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Can I take your order? —', kind: 'dim' },
          { t: 'I\'d', role: 'I would', kind: 'key', ring: true },
          { t: 'like a coffee, please.', kind: 'dim' },
        ]"
      />
      <p class="translation">可以幫您點餐了嗎？我想要一杯咖啡，謝謝。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
