<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-be-to, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be to 說已經正式安排好的事" mark="is to come">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'He', role: '主詞', kind: 'dim' },
          { t: 'is to', role: 'be + to', kind: 'key', ring: true },
          { t: 'come', role: '原形動詞', kind: 'key' },
          { t: 'to Athens', kind: 'dim' },
          { t: 'next Friday.', role: '時間' },
        ]"
      />
      <p class="translation">他預定下週五來雅典。</p>
      <p class="remark">秘書通知分公司總經理的正式行程。</p>
    </NoteSlide>

    <NoteSlide title="主詞可以是人，也可以是事情" mark="He">
      <div class="rows is-labeled">
        <div>
          <span class="term">人</span>
          <span
            ><NoteMark sentence="I am to give a speech at the opening." :marks="['I']" /><span
              class="translation"
              >我預定在開幕典禮上致詞。</span
            ></span
          >
        </div>
        <div>
          <span class="term">事情</span>
          <span
            ><NoteMark
              sentence="The talks are to take place in Geneva."
              :marks="['The talks']"
            /><span class="translation">會談預定在日內瓦舉行。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定的 be not to 表示禁止" mark="is to">
      <div class="rows">
        <div>
          <span
            ><NoteMark sentence="You are not to leave the room." :marks="['are not to']" /><span
              class="translation"
              >你不准離開這個房間。</span
            ></span
          >
        </div>
        <div>
          <span
            ><NoteMark
              sentence="Visitors are not to feed the animals."
              :marks="['are not to']"
            /><span class="translation">遊客不准餵食動物。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動是 be to be 加過去分詞" mark="is to come">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The new school', role: '主詞', kind: 'dim' },
          { t: 'is to', role: 'be + to' },
          { t: 'be built', role: 'be + 過去分詞', kind: 'key', ring: true },
          { t: 'next to the park.', kind: 'dim' },
        ]"
      />
      <p class="translation">新學校預定蓋在公園旁邊。</p>
    </NoteSlide>

    <NoteSlide title="be going to 是自己的打算，be to 是別人正式安排的" mark="is to">
      <div class="rows is-labeled">
        <div>
          <span class="term">be going to<br /><i>自己的打算</i></span>
          <span
            ><NoteMark sentence="I'm going to visit my aunt." :marks="['going to']" /><span
              class="translation"
              >我要去看我阿姨。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be to<br /><i>正式安排</i></span>
          <span
            ><NoteMark sentence="The minister is to visit the factory." :marks="['is to']" /><span
              class="translation"
              >部長預定參觀工廠。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="to 前面要有 am、is 或 are" mark="is">
      <NoteFix
        wrong="He to come to Athens next Friday."
        right="He is to come to Athens next Friday."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="come">
      <NoteFix
        wrong="We are to meeting the director at noon."
        right="We are to meet the director at noon."
        fix="meet"
      />
    </NoteSlide>

    <NoteSlide title="變化的是 is，to 後面的動詞用原形" mark="come">
      <NoteFix
        wrong="She is to starts her new job on Monday."
        right="She is to start her new job on Monday."
        fix="start"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
