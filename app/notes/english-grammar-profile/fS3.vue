<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-use-with-adverbs-of-indefinite-frequency-863, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="persistently 放在 be 和動詞-ing 中間">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'are', role: 'be' },
          { t: 'persistently', role: '副詞', kind: 'key', ring: true },
          { t: 'asking', role: '動詞-ing', kind: 'key' },
          { t: 'ourselves questions about where we are from and why we are here.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們不斷地問自己：我們從哪裡來，為什麼會在這裡。</p>
    </NoteSlide>
    <NoteSlide title="正式的文字用更多種頻率副詞" mark="persistently">
      <div class="rows is-labeled">
        <div>
          <span class="term">persistently</span>
          <span
            ><NoteMark
              sentence="She is persistently ignoring my emails."
              :marks="['persistently']"
            /><span class="translation">她一直不理我的 email。</span></span
          >
        </div>
        <div>
          <span class="term">perpetually</span>
          <span
            ><NoteMark sentence="He's perpetually running late." :marks="['perpetually']" /><span
              class="translation"
              >他永遠都在遲到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">endlessly</span>
          <span
            ><NoteMark
              sentence="The kids are endlessly arguing over the remote."
              :marks="['endlessly']"
            /><span class="translation">孩子們為了遙控器吵個沒完。</span></span
          >
        </div>
        <div>
          <span class="term">repeatedly</span>
          <span
            ><NoteMark
              sentence="The company is repeatedly breaking its promises."
              :marks="['repeatedly']"
            /><span class="translation">那家公司一次又一次違背承諾。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="incessantly 常放在動詞-ing 後面" mark="persistently">
      <div class="rows is-labeled">
        <div>
          <span class="term">incessantly</span>
          <span
            ><NoteMark
              sentence="The dog next door is barking incessantly."
              :marks="['barking', 'incessantly']"
            /><span class="translation">隔壁的狗叫個不停。</span></span
          >
        </div>
      </div>
      <p class="remark">其他副詞多半放在動詞&#x2060;-&#x2060;ing 前面。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 be 後面" mark="persistently">
      <NoteFix
        wrong="She persistently is ignoring my advice."
        right="She is persistently ignoring my advice."
        :fix="['is', 'persistently']"
      />
    </NoteSlide>
    <NoteSlide title="修飾動詞用副詞 perpetually，不用形容詞" mark="persistently">
      <NoteFix
        wrong="He is perpetual complaining about his salary."
        right="He is perpetually complaining about his salary."
        :fix="['perpetually']"
      />
    </NoteSlide>
    <NoteSlide title="現在進行式要有 am、is 或 are" mark="are">
      <NoteFix
        wrong="The media endlessly repeating the same story."
        right="The media are endlessly repeating the same story."
        :fix="['are']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
