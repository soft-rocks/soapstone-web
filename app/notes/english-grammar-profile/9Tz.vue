<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-those, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="those + 複數動詞" mark="those are">
      <NoteWords
        :size="24"
        :parts="[
          { t: '… green or orange;', role: '前面的事物' },
          { t: 'those', role: '複數', kind: 'key' },
          { t: 'are', role: '複數動詞', kind: 'key' },
          { t: 'my favorite colors!', kind: 'dim' },
        ]"
      />
      <p class="translation">我的衣服大多是檸檬黃、綠色或橘色，那些是我最喜歡的顏色！</p>
    </NoteSlide>

    <NoteSlide title="that 和 those" mark="those">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark
              sentence="I've got a new idea. That is my plan for the weekend."
              :marks="['That is']"
            /><span class="translation">我有一個新點子，那是我週末的計畫。</span></span
          >
        </div>
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark
              sentence="Well, those are my ideas, but you can choose."
              :marks="['those are']"
            /><span class="translation">嗯，那些是我的想法，不過你可以自己選。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="those 在句子裡的位置" mark="those">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark sentence="Those are my brother's shoes." :marks="['Those']" /><span
              class="translation"
              >那些是我哥哥的鞋子。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="Can you give me those, please?" :marks="['those,']" /><span
              class="translation"
              >可以把那些給我嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">介系詞後面</span>
          <span
            ><NoteMark
              sentence="I'll put the new books next to those."
              :marks="['next to those.']"
            /><span class="translation">我會把新書放在那些旁邊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數用 those" mark="those are">
      <NoteFix
        wrong="I like red and blue. That are my favourite colours."
        right="I like red and blue. Those are my favourite colours."
        fix="Those"
      />
    </NoteSlide>

    <NoteSlide title="後面的名詞用複數" mark="colors!">
      <NoteFix
        wrong="Look at those birds! Those are a swan."
        right="Look at those birds! Those are swans."
        fix="swans."
      />
    </NoteSlide>

    <NoteSlide title="主詞不用 them" mark="those">
      <NoteFix
        wrong="Look at the cakes in the window. Them look delicious."
        right="Look at the cakes in the window. Those look delicious."
        fix="Those"
      />
    </NoteSlide>

    <NoteSlide title="those + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Those', role: '限定詞', kind: 'key' },
          { t: 'colors', role: '名詞' },
          { t: 'look great on you.', kind: 'dim' },
        ]"
      />
      <p class="translation">那些顏色很適合你。</p>
    </NoteSlide>

    <NoteSlide title="they：只指前面說過的">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I found your keys.', kind: 'dim' },
          { t: 'They', role: '= your keys', kind: 'key' },
          { t: 'were under the sofa.', kind: 'dim' },
        ]"
      />
      <p class="translation">我找到你的鑰匙了，在沙發底下。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
