<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-mental-process-verbs-clause, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定放在 think 上，後面的子句用肯定的形式">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'don\'t think', role: 'don\'t + 想法動詞', kind: 'key' },
          { t: 'I\'ll live here forever.', role: '肯定的子句' },
        ]"
      />
      <p class="translation">我不覺得我會一輩子住在這裡。</p>
    </NoteSlide>

    <NoteSlide title="believe、expect、suppose 的否定也放在想法動詞上" mark="don't think">
      <div class="rows is-labeled">
        <div>
          <span class="term">believe</span>
          <span
            ><NoteMark
              sentence="I don't believe she's telling the truth."
              :marks="['don\'t believe']"
            /><span class="translation">我不相信她說的是實話。</span></span
          >
        </div>
        <div>
          <span class="term">expect</span>
          <span
            ><NoteMark sentence="I don't expect you remember me." :marks="['don\'t expect']" /><span
              class="translation"
              >我想你應該不記得我了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">suppose</span>
          <span
            ><NoteMark
              sentence="I don't suppose you've seen my glasses?"
              :marks="['don\'t suppose']"
            /><span class="translation">你應該沒看到我的眼鏡吧？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="兩種說法都對，說話時多把否定放在 think 上" mark="don't think">
      <div class="rows is-labeled">
        <div>
          <span class="term">較常用</span>
          <span
            ><NoteMark
              sentence="I don't think the plumber will come today."
              :marks="['don\'t']"
            /><span class="translation">我覺得水電工今天不會來。</span></span
          >
        </div>
        <div>
          <span class="term">較少用</span>
          <span
            ><NoteMark
              sentence="I think the electrician won't be free until Monday."
              :marks="['won\'t']"
            /><span class="translation">我想電工星期一之前不會有空。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="hope 的否定放在後面的子句" mark="don't think">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'hope', role: 'hope' },
          { t: 'the baby doesn\'t wake up before we land.', role: '否定的子句', kind: 'key' },
        ]"
      />
      <p class="translation">希望寶寶在降落前不會醒來。</p>
    </NoteSlide>

    <NoteSlide title="think 和子句不要都用否定" mark="I'll">
      <NoteFix
        wrong="I don't think my sister won't like the gift."
        right="I don't think my sister will like the gift."
        fix="will"
      >
        兩個 <code>not</code> 會變成相反的意思：我覺得她會喜歡。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="hope 不用 don't hope" mark="don't think">
      <NoteFix wrong="I don't hope you get lost." right="I hope you don't get lost." fix="don't" />
    </NoteSlide>

    <NoteSlide title="主詞是 he、she、it 時用 doesn't think" mark="don't think">
      <NoteFix
        wrong="She don't think he's coming."
        right="She doesn't think he's coming."
        fix="doesn't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
