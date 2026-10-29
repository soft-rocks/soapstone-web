<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-past-negative-549, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide
      title="It + must not have been + 形容詞 + (for 人) + (to + 原形動詞)"
      mark="must not have been easy"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">must not have been</span>
          <span>過去一定不是。</span>
        </div>
        <div>
          <span class="term">easy</span>
          <span>最常用的形容詞。must not have been easy 表示當時一定很辛苦。</span>
        </div>
        <div>
          <span class="term">mustn't</span>
          <span>must not 的縮寫。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="表示理解和同情">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Your dad was away at sea for months. It must not have been easy for your mother." :marks="[]" /><span
              class="translation"
              >你爸爸出海好幾個月。這對你媽媽來說一定很不容易。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這個說法常用來理解別人過去的辛苦。</p>
    </NoteSlide>
    <NoteSlide title="推論數量或時間">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It mustn't have been more than an hour."
              :marks="['mustn\'t have been more than']"
            /><span class="translation">一定不超過一個小時。</span></span
          >
        </div>
      </div>
      <p class="remark">mustn't have been more than 推論數量或時間一定沒有超過某個數字。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞 been" mark="have">
      <NoteFix
        wrong="My grandparents moved to Canada at sixty. That must not have be easy."
        right="My grandparents moved to Canada at sixty. That must not have been easy."
        :fix="['been']"
      />
    </NoteSlide>
    <NoteSlide title="形容詞前面要有 been" mark="been">
      <NoteFix
        wrong="You spent your first winter in Moscow. It must not have easy."
        right="You spent your first winter in Moscow. It must not have been easy."
        :fix="['been']"
      />
    </NoteSlide>
    <NoteSlide title="must not 和 been 中間要有 have" mark="must not">
      <NoteFix
        wrong="The team lost the final in the last minute. It must not been easy for them."
        right="The team lost the final in the last minute. It must not have been easy for them."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
