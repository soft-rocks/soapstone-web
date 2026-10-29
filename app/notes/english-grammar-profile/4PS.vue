<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passive-voice-705, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="單數主詞加 is，再接過去分詞">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'The group', role: '單數主詞' },
          { t: 'is', role: 'is', kind: 'key' },
          { t: 'called', role: '過去分詞', kind: 'key' },
          { t: 'Playmo.', role: '名字', kind: 'dim' },
        ]"
      />
      <p class="translation">這個團體叫做 Playmo。</p>
    </NoteSlide>

    <NoteSlide title="常用的說法：名字、材料、產地、用途" mark="is called">
      <div class="rows is-labeled">
        <div>
          <span class="term">is called</span>
          <span
            ><NoteMark sentence="The group is called Playmo." :marks="['is called']" /><span
              class="translation"
              >這個團體叫做 Playmo。</span
            ></span
          >
        </div>
        <div>
          <span class="term">is made of</span>
          <span
            ><NoteMark sentence="This T-shirt is made of cotton." :marks="['is made of']" /><span
              class="translation"
              >這件 T 恤是棉做的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">is made in</span>
          <span
            ><NoteMark sentence="My bike is made in Taiwan." :marks="['is made in']" /><span
              class="translation"
              >我的腳踏車是台灣製造的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">is used for</span>
          <span
            ><NoteMark sentence="This room is used for meetings." :marks="['is used for']" /><span
              class="translation"
              >這個房間是拿來開會的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動要有 is" mark="is">
      <NoteFix wrong="The group called Playmo." right="The group is called Playmo." fix="is" />
    </NoteSlide>

    <NoteSlide title="主詞是單數用 is" mark="is">
      <NoteFix
        wrong="The shirt are made of cotton."
        right="The shirt is made of cotton."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="is 後面接過去分詞" mark="called">
      <NoteFix
        wrong="This room is use for meetings."
        right="This room is used for meetings."
        fix="used"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
