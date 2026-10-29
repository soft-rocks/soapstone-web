<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-ing-form-1089, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="can't stand 後面接動詞-ing">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'couldn\'t stand', role: '動詞', kind: 'key' },
          { t: 'being', role: '動詞-ing', kind: 'key' },
          { t: 'there.', kind: 'dim' },
        ]"
      />
      <p class="translation">我受不了待在那裡。</p>
    </NoteSlide>

    <NoteSlide title="片語動詞的動詞-ing 放在小品詞後面" mark="being">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The band', kind: 'dim' },
          { t: 'carried', role: '動詞' },
          { t: 'on', role: '小品詞', kind: 'key' },
          { t: 'playing.', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="remark">像 <code>put off</code>、<code>give up</code>、<code>carry on</code>。</p>
    </NoteSlide>

    <NoteSlide title="動詞-ing 可以是否定、被動或完成的形式" mark="being">
      <div class="rows is-labeled">
        <div>
          <span class="term">not + 動詞&#x2060;-&#x2060;ing</span>
          <span
            ><NoteMark sentence="He admitted not locking the door." :marks="['not locking']" /><span
              class="translation"
              >他承認沒有鎖門。</span
            ></span
          >
        </div>
        <div>
          <span class="term">being + 過去分詞</span>
          <span
            ><NoteMark
              sentence="I can't stand being told what to do."
              :marks="['being told']"
            /><span class="translation">我受不了被人指使。</span></span
          >
        </div>
        <div>
          <span class="term">having + 過去分詞</span>
          <span
            ><NoteMark sentence="He denied having met her before." :marks="['having met']" /><span
              class="translation"
              >他否認以前見過她。</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>having + 過去分詞</code> 說的事比動詞早發生。</p>
    </NoteSlide>

    <NoteSlide title="deny 後面接動詞-ing，不接不定詞" mark="being">
      <NoteFix
        wrong="He denied to break the window."
        right="He denied breaking the window."
        fix="breaking"
      />
    </NoteSlide>

    <NoteSlide title="give up 後面接動詞-ing，不接原形動詞" mark="being">
      <NoteFix
        wrong="My aunt gave up play the violin at sixty."
        right="My aunt gave up playing the violin at sixty."
        fix="playing"
      />
    </NoteSlide>

    <NoteSlide title="小品詞緊跟在動詞後面" mark="stand">
      <NoteFix wrong="The band carried playing on." right="The band carried on playing." fix="on" />
    </NoteSlide>

    <NoteSlide title="appreciate 後面不接人加不定詞" mark="couldn't stand">
      <NoteFix
        wrong="I'd appreciate you to call me back."
        right="I'd appreciate it if you called me back."
        fix="it if"
      />
    </NoteSlide>

    <NoteSlide title="afford 後面接不定詞" mark="being">
      <NoteMark sentence="She refused to answer the reporter's questions." :marks="['to answer']" />
      <p class="translation">她拒絕回答記者的問題。</p>
    </NoteSlide>

    <NoteSlide title="be used to 的 to 是介系詞，後面接動詞-ing" mark="being">
      <NoteMark sentence="I'm used to working at night." :marks="['to working']" />
      <p class="translation">我習慣晚上工作。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
