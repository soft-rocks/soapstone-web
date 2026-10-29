<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 025, as slides, in the order of notes/dragon-english-basic-100/025.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="learn to 後面接動詞原形，表示學會做那個動作" mark="learn to express">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Humans', role: '主詞' },
          { t: 'learn to', kind: 'key' },
          { t: 'express', role: '動詞原形', kind: 'key' },
          { t: 'what they think …', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="learn 後面接名詞時，表示學某種知識或技能" mark="learn">
      <div class="rows is-labeled">
        <div>
          <span class="term">learn to + 動詞原形</span>
          <span
            ><NoteMark
              sentence="My little brother learned to ride a bike last year."
              :marks="['learned to ride']"
            /><span class="translation">我弟弟去年學會騎腳踏車。</span></span
          >
        </div>
        <div>
          <span class="term">learn + 名詞</span>
          <span
            ><NoteMark
              sentence="We are learning French at school."
              :marks="['learning French']"
            /><span class="translation">我們在學校學法文。</span></span
          >
        </div>
        <div>
          <span class="term">learn + 名詞</span>
          <span
            ><NoteMark
              sentence="My father learned Chinese cooking from my grandmother."
              :marks="['learned Chinese cooking']"
            /><span class="translation">我爸爸跟我奶奶學中式料理。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="what 帶出名詞子句，當動詞的受詞" mark="what they think">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'express', role: '動詞', kind: 'dim' },
          { t: 'what', role: 'the thing that', kind: 'key' },
          { t: 'they', role: '主詞' },
          { t: 'think', role: '動詞' },
        ]"
      />
      <p class="remark"><code>what they think</code> 是他們心裡想的事。</p>
    </NoteSlide>

    <NoteSlide title="what 子句可以當動詞或介系詞的受詞，或放在 be 後面" mark="what">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞的受詞</span>
          <span
            ><NoteMark sentence="I can't believe what he said." :marks="['what he said']" /><span
              class="translation"
              >我不敢相信他說的話。</span
            ></span
          >
        </div>
        <div>
          <span class="term">介系詞的受詞</span>
          <span
            ><NoteMark
              sentence="Don't worry about what other people think."
              :marks="['what other people think']"
            /><span class="translation">不要在意別人的想法。</span></span
          >
        </div>
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark sentence="This is what I wanted." :marks="['what I wanted']" /><span
              class="translation"
              >這就是我想要的東西。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="by 加時間，表示動作最晚在那個時間完成" mark="by the age of five or six">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'by', role: '介系詞', kind: 'key' },
          { t: 'the age of five or six.', role: '年紀' },
        ]"
      />
      <p class="remark">到五、六歲的時候已經做到了。</p>
    </NoteSlide>

    <NoteSlide title="by 後面可以接時間或年紀" mark="by">
      <div class="rows is-labeled">
        <div>
          <span class="term">星期</span>
          <span
            ><NoteMark
              sentence="Please finish your report by Friday."
              :marks="['by Friday']"
            /><span class="translation">請在星期五之前完成你的報告。</span></span
          >
        </div>
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark sentence="I have to be home by ten." :marks="['by ten']" /><span
              class="translation"
              >我十點之前要到家。</span
            ></span
          >
        </div>
        <div>
          <span class="term">年紀</span>
          <span
            ><NoteMark
              sentence="Most children can read by the age of seven."
              :marks="['by the age of seven']"
            /><span class="translation">大部分的小孩到七歲的時候就會閱讀。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
