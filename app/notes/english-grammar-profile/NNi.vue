<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-word-word, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="名詞 + and + 名詞" mark="chicken and rice.">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I like', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'chicken', role: '名詞' },
          { t: 'and', role: '連接詞', kind: 'key' },
          { t: 'rice.', role: '名詞' },
        ]"
      />
      <p class="translation">我喜歡雞肉和米飯。</p>
    </NoteSlide>

    <NoteSlide title="形容詞 + and、but + 形容詞" mark="and">
      <div class="rows is-labeled">
        <div>
          <span class="term">and</span>
          <span
            ><NoteMark
              sentence="My street is quiet and friendly."
              :marks="['quiet and friendly.']"
            /><span class="translation">我住的街很安靜，鄰居也很友善。</span></span
          >
        </div>
        <div>
          <span class="term">but</span>
          <span
            ><NoteMark sentence="My kitchen is small but nice." :marks="['small but nice.']" /><span
              class="translation"
              >我家廚房很小，但是很舒服。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="and、but、or 的意思" mark="and">
      <div class="rows is-labeled">
        <div>
          <span class="term">and</span>
          <span>和、而且，兩個都成立</span>
        </div>
        <div>
          <span class="term">but</span>
          <span>但是，後面的意思和前面的相反</span>
        </div>
        <div>
          <span class="term">or</span>
          <span>或、還是，兩個選一個</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定句連接名詞用 or">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I don\'t eat', role: '主詞 + 否定 + 動詞', kind: 'dim' },
          { t: 'meat', role: '名詞' },
          { t: 'or', role: '連接詞', kind: 'key' },
          { t: 'fish.', role: '名詞' },
        ]"
      />
      <p class="translation">我不吃肉，也不吃魚。</p>
    </NoteSlide>

    <NoteSlide title="連接兩個以上的字">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I bought', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'eggs,', role: '名詞 + 逗號' },
          { t: 'milk', role: '名詞' },
          { t: 'and', role: '連接詞', kind: 'key' },
          { t: 'bread.', role: '名詞' },
        ]"
      />
      <p class="translation">我買了蛋、牛奶和麵包。</p>
    </NoteSlide>

    <NoteSlide title="連接兩個詞性相同的字">
      <NoteFix
        wrong="My room is small and a mess."
        right="My room is small and messy."
        fix="small and messy."
      />
    </NoteSlide>

    <NoteSlide title="意思相反用 but">
      <NoteFix
        wrong="The hotel was old and comfortable."
        right="The hotel was old but comfortable."
        fix="old but comfortable."
      />
    </NoteSlide>

    <NoteSlide title="只在最後一項前面加 and">
      <NoteFix
        wrong="I bought apples and oranges and bananas and grapes."
        right="I bought apples, oranges, bananas and grapes."
        fix="apples, oranges,"
      />
    </NoteSlide>

    <NoteSlide title="兩個選一個用 or">
      <NoteFix
        wrong="Do you want rice and noodles? You can only have one."
        right="Do you want rice or noodles? You can only have one."
        fix="rice or noodles?"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
