<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-complex-847, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="as for 放在句首轉換話題">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'As for', role: '複合介系詞', kind: 'key' },
          { t: 'the camping,', role: '名詞片語' },
          { t: 'I admit that I\'m not a great fan of it.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">至於露營，我承認我不太喜歡。</p>
    </NoteSlide>

    <NoteSlide title="as for 和 in terms of 轉換話題" mark="As for">
      <div class="rows is-labeled">
        <div>
          <span class="term">as for<br /><i>至於</i></span>
          <span
            ><NoteMark
              sentence="The flat is small. As for the rent, it's very reasonable."
              :marks="['As for']"
            /><span class="translation">公寓很小。至於房租，相當合理。</span></span
          >
        </div>
        <div>
          <span class="term">in terms of<br /><i>就……方面來說</i></span>
          <span>in terms of price</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="in spite of 說讓步，意思跟 despite 一樣" mark="As for">
      <div class="rows is-labeled">
        <div>
          <span class="term">in spite of<br /><i>儘管</i></span>
          <span
            ><NoteMark
              sentence="In spite of the rain, the festival was a great success."
              :marks="['In spite of']"
            /><span class="translation">儘管下雨，音樂節還是很成功。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="in addition to 補充，except for 排除，apart from 兩種都可以" mark="As for">
      <div class="rows is-labeled">
        <div>
          <span class="term">in addition to<br /><i>除了……之外還有</i></span>
          <span>in addition to English</span>
        </div>
        <div>
          <span class="term">apart from<br /><i>加上</i></span>
          <span
            ><NoteMark
              sentence="Apart from English, she speaks French and Thai."
              :marks="['Apart from']"
            /><span class="translation">除了英文，她還會說法文和泰文。</span></span
          >
        </div>
        <div>
          <span class="term">except for<br /><i>排除</i></span>
          <span
            ><NoteMark sentence="Everyone came except for Leo." :marks="['except for']" /><span
              class="translation"
              >除了 Leo，大家都來了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="on behalf of 說代表誰" mark="As for">
      <div class="rows is-labeled">
        <div>
          <span class="term">on behalf of<br /><i>代表</i></span>
          <span>on behalf of the team</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="in spite of 的 of 不能省略">
      <NoteFix
        wrong="In spite the cold, we went swimming."
        right="In spite of the cold, we went swimming."
        fix="of"
      />
    </NoteSlide>

    <NoteSlide title="in addition to 的 to 是介系詞，後面接動詞-ing">
      <NoteFix
        wrong="In addition to teach, she writes books."
        right="In addition to teaching, she writes books."
        fix="teaching"
      />
    </NoteSlide>

    <NoteSlide title="as for 後面接名詞片語或動詞-ing，不接子句" mark="the camping,">
      <NoteFix
        wrong="As for I don't like hiking, I'll stay at the hotel."
        right="As for hiking, I'd rather stay at the hotel."
        fix="hiking,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
