<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-there-is-uncountable, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不可數名詞跟 there is，不跟 there are">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'There is', role: 'there + be', kind: 'key' },
          { t: 'some', role: '數量詞' },
          { t: 'information', role: '不可數名詞', kind: 'key' },
          { t: 'about the new art class.', kind: 'dim' },
        ]"
      />
      <p class="translation">這裡有一些新美術課的資訊。</p>
      <p class="remark">資訊再多，也用 <code>there is</code>。</p>
    </NoteSlide>

    <NoteSlide title="不可數名詞前面用 some、a lot of、a little 或 no" mark="some">
      <div class="rows is-labeled">
        <div>
          <span class="term">some</span>
          <span
            ><NoteMark sentence="There's some soup left from lunch." :marks="['some']" /><span
              class="translation"
              >午餐的湯還剩一些。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a lot of</span>
          <span
            ><NoteMark
              sentence="There is a lot of rubbish in the park after the festival."
              :marks="['a lot of']"
            /><span class="translation">音樂節之後公園裡有很多垃圾。</span></span
          >
        </div>
        <div>
          <span class="term">a little</span>
          <span
            ><NoteMark
              sentence="There's a little paint left in the tin."
              :marks="['a little']"
            /><span class="translation">罐子裡還剩一點油漆。</span></span
          >
        </div>
        <div>
          <span class="term">no</span>
          <span
            ><NoteMark sentence="There is no space for another bed." :marks="['no']" /><span
              class="translation"
              >沒有空間再放一張床了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不可數名詞用 there is" mark="There is">
      <NoteFix
        wrong="There are some money in my wallet."
        right="There is some money in my wallet."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞沒有複數，不加 -s" mark="information">
      <NoteFix
        wrong="There is some informations about the trip in this email."
        right="There is some information about the trip in this email."
        fix="information"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞前面不加 a" mark="some">
      <NoteFix
        wrong="There is a bread on the table."
        right="There is some bread on the table."
        fix="some"
      >
        也可以說 <code>a loaf of bread</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="many 只接複數名詞" mark="some">
      <NoteFix
        wrong="There is many traffic today."
        right="There is a lot of traffic today."
        fix="a lot of"
      />
    </NoteSlide>

    <NoteSlide title="furniture 不可數用 there is，chairs 可數用 there are" mark="There is">
      <div class="rows is-labeled">
        <div>
          <span class="term">不可數</span>
          <span
            ><NoteMark
              sentence="There is a lot of furniture in the room."
              :marks="['is', 'furniture']"
            /><span class="translation">房間裡有很多家具。</span></span
          >
        </div>
        <div>
          <span class="term">可數</span>
          <span
            ><NoteMark
              sentence="There are a lot of chairs in the hall for the concert."
              :marks="['are', 'chairs']"
            /><span class="translation">禮堂裡為音樂會擺了很多椅子。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
