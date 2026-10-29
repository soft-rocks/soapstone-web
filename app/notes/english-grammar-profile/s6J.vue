<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-these, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="these + 複數動詞" mark="These are">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'These', role: '複數', kind: 'key' },
          { t: 'are', role: '複數動詞', kind: 'key' },
          { t: 'the main things', role: '複數名詞' },
          { t: '…', kind: 'dim' },
        ]"
      />
      <p class="translation">這些就是我能告訴你的主要內容。</p>
    </NoteSlide>

    <NoteSlide title="this 和 these" mark="These">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark sentence="This is my new address." :marks="['This is']" /><span
              class="translation"
              >這是我的新地址。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark sentence="These are my new trainers." :marks="['These are']" /><span
              class="translation"
              >這是我的新運動鞋。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="these 在句子裡的位置" mark="These">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark sentence="These are my cousins from Canada." :marks="['These']" /><span
              class="translation"
              >這幾位是我從加拿大來的表兄弟姊妹。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="I made these for you." :marks="['these']" /><span
              class="translation"
              >這些是我做給你的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">介系詞後面</span>
          <span
            ><NoteMark sentence="Put your coat with these." :marks="['with these.']" /><span
              class="translation"
              >把你的外套和這些放在一起。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數用 these" mark="These are">
      <NoteFix
        wrong="I've got two tickets for the show. This are for you and me."
        right="I've got two tickets for the show. These are for you and me."
        fix="These"
      />
    </NoteSlide>

    <NoteSlide title="後面的名詞用複數" mark="things">
      <NoteFix
        wrong="These are my best friend, Tom and Sam."
        right="These are my best friends, Tom and Sam."
        fix="friends,"
      />
    </NoteSlide>

    <NoteSlide title="拼法是 these" mark="These">
      <NoteFix
        wrong="Theses are the photos from my holiday."
        right="These are the photos from my holiday."
        fix="These"
      />
    </NoteSlide>

    <NoteSlide title="these + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'These', role: '限定詞', kind: 'key' },
          { t: 'days', role: '名詞' },
          { t: 'I get up early.', kind: 'dim' },
        ]"
      />
      <p class="translation">最近我都很早起。</p>
    </NoteSlide>

    <NoteSlide title="these 和 those">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'These', role: '近的', kind: 'key' },
          { t: 'are mine, and', kind: 'dim' },
          { t: 'those', role: '遠的', kind: 'key' },
          { t: 'over there are yours.', kind: 'dim' },
        ]"
      />
      <p class="translation">這些是我的，那邊那些是你的。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
