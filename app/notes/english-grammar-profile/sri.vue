<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-non-finite-with-ing-248, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="After having 加過去分詞，強調前一件事已經完成">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'After having worked', role: 'after having + 過去分詞', kind: 'key' },
          { t: 'for many hours,', kind: 'dim' },
          { t: 'you\'ll probably be tired.', role: '主要子句' },
        ]"
      />
      <p class="translation">工作了好幾個小時之後，你大概會很累。</p>
      <p class="remark">主要子句的 <code>you</code> 也是工作的人。</p>
    </NoteSlide>

    <NoteSlide title="after having 和 after 加動詞-ing 意思差不多" mark="After having worked">
      <div class="rows is-labeled">
        <div>
          <span class="term">having + 過去分詞</span>
          <span
            ><NoteMark
              sentence="After having lived in Japan for ten years, she speaks perfect Japanese."
              :marks="['After having lived']"
            /><span class="translation">在日本住了十年之後，她的日文說得很完美。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞是被做那件事的人，用 being 加過去分詞" mark="After having">
      <div class="rows is-labeled">
        <div>
          <span class="term">被動</span>
          <span
            ><NoteMark
              sentence="After being told the news, he sat down in silence."
              :marks="['After being told']"
            /><span class="translation">聽到那個消息後，他默默坐了下來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句沒有自己的時態，時間跟著主要子句" mark="you'll">
      <div class="rows is-labeled">
        <div>
          <span class="term">未來</span>
          <span
            ><NoteMark
              sentence="After having checked in, you'll get your room key."
              :marks="['you\'ll get']"
            /><span class="translation">辦好入住後，你會拿到房間鑰匙。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="having 後面用過去分詞" mark="worked">
      <NoteFix
        wrong="After having finish the report, I went home."
        right="After having finished the report, I went home."
        fix="finished"
      />
    </NoteSlide>

    <NoteSlide title="動作者不同時，寫完整的子句" mark="you'll">
      <NoteFix
        wrong="After having eaten dinner, the waiter brought the bill."
        right="After we had eaten dinner, the waiter brought the bill."
        fix="we had eaten"
      >
        想說的是我們吃完晚餐。子句的動作者要和主要子句的主詞一樣。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="主詞是被邀請的人，用 being 加過去分詞">
      <NoteFix
        wrong="After having invited to the party, I bought a new dress."
        right="After being invited to the party, I bought a new dress."
        fix="being invited"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
