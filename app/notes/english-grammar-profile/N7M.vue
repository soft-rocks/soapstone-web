<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-this, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this + 單數動詞" mark="This is">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'This', role: '單數', kind: 'key' },
          { t: 'is', role: '單數動詞', kind: 'key' },
          { t: 'a very interesting place.', role: '名詞片語' },
        ]"
      />
      <p class="translation">這是一個很有意思的地方。</p>
    </NoteSlide>

    <NoteSlide title="this 在句子裡的位置" mark="This">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark sentence="This is my favourite shop in town." :marks="['This']" /><span
              class="translation"
              >這是我在鎮上最喜歡的店。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="Try this. It's really good." :marks="['this.']" /><span
              class="translation"
              >吃吃看這個，真的很好吃。</span
            ></span
          >
        </div>
        <div>
          <span class="term">介系詞後面</span>
          <span
            ><NoteMark sentence="I'm not sure about this." :marks="['about this.']" /><span
              class="translation"
              >這件事我不太確定。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 和 these" mark="This is">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark sentence="This is my brother." :marks="['This is']" /><span
              class="translation"
              >這是我哥哥。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark sentence="These are my sisters." :marks="['These are']" /><span
              class="translation"
              >這些是我的姊妹。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 接 is" mark="is">
      <NoteFix wrong="This are my new phone." right="This is my new phone." fix="is" />
    </NoteSlide>

    <NoteSlide title="一個東西用 this" mark="This">
      <NoteFix
        wrong="Look at the castle. These is the oldest building in the town."
        right="Look at the castle. This is the oldest building in the town."
        fix="This"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面加 a" mark="a very">
      <NoteFix wrong="This is very nice hotel." right="This is a very nice hotel." fix="a very" />
    </NoteSlide>

    <NoteSlide title="this + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'This', role: '限定詞', kind: 'key' },
          { t: 'town', role: '名詞' },
          { t: 'is very old.', kind: 'dim' },
        ]"
      />
      <p class="translation">這個小鎮很古老。</p>
    </NoteSlide>

    <NoteSlide title="this 近，that 遠">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'This', role: '近的', kind: 'key' },
          { t: 'is my seat, and', kind: 'dim' },
          { t: 'that', role: '遠的', kind: 'key' },
          { t: 'is yours.', kind: 'dim' },
        ]"
      />
      <p class="translation">這是我的座位，那是你的。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
