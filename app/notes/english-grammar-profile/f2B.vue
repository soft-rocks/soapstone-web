<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-use-get-object-to-infinitive, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="get 加受詞，再接 to 加原形動詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'to get', role: 'get' },
          { t: 'them', role: '受詞', kind: 'key' },
          { t: 'to shop', role: 'to + 原形動詞', kind: 'key' },
          { t: 'at this particular store', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">讓他們專門來這家店購物</p>
    </NoteSlide>

    <NoteSlide title="get 說服，make 強迫，have 安排" mark="get them to shop">
      <div class="rows is-labeled">
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark sentence="I got my brother to help me." :marks="['got', 'to help']" /><span
              class="translation"
              >我說服我哥哥幫我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">make</span>
          <span
            ><NoteMark sentence="My mum made me clean my room." :marks="['made', 'clean']" /><span
              class="translation"
              >我媽媽逼我打掃房間。</span
            ></span
          >
        </div>
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark sentence="I'll have my assistant call you." :marks="['have', 'call']" /><span
              class="translation"
              >我會叫我的助理打給你。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="can't get ... to：怎麼試都沒辦法" mark="get them">
      <div class="rows is-labeled">
        <div>
          <span class="term">can't get</span>
          <span
            ><NoteMark sentence="I can't get the baby to sleep." :marks="['can\'t get']" /><span
              class="translation"
              >我沒辦法讓寶寶睡覺。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞後面要加 to" mark="to shop">
      <NoteFix
        wrong="I got my brother help me."
        right="I got my brother to help me."
        fix="to help"
      />
    </NoteSlide>

    <NoteSlide title="get 後面的代名詞用受格" mark="them">
      <NoteFix
        wrong="We need to get they to come more often."
        right="We need to get them to come more often."
        fix="them"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="shop">
      <NoteFix
        wrong="I can't get the baby to sleeping."
        right="I can't get the baby to sleep."
        fix="sleep"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
