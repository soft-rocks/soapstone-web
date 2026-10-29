<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-singular-for-emphasis, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="反身代名詞放在句尾，強調是這個人自己做的">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The food was delicious, especially the cake,', kind: 'dim' },
          { t: 'which Sandra had made', role: '主詞 + 動詞' },
          { t: 'herself.', role: '強調', kind: 'key' },
        ]"
      />
      <p class="translation">食物很好吃，尤其是蛋糕，那是 Sandra 自己做的。</p>
    </NoteSlide>

    <NoteSlide title="放在句尾，強調沒有請別人做" mark="herself.">
      <div class="rows is-labeled">
        <div>
          <span class="term">myself</span>
          <span
            ><NoteMark sentence="I made this dress myself." :marks="['myself.']" /><span
              class="translation"
              >這件洋裝是我自己做的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">yourself</span>
          <span
            ><NoteMark
              sentence="You should decide yourself what to do."
              :marks="['yourself']"
            /><span class="translation">你應該自己決定要怎麼做。</span></span
          >
        </div>
        <div>
          <span class="term">himself</span>
          <span
            ><NoteMark sentence="He built the bookshelf himself." :marks="['himself.']" /><span
              class="translation"
              >書架是他自己做的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="緊接在名詞或代名詞後面，強調是這個人本人" mark="herself.">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞後面</span>
          <span
            ><NoteMark
              sentence="It was the director himself who showed us around the garden."
              :marks="['the director himself']"
            /><span class="translation">帶我們參觀花園的是導演本人。</span></span
          >
        </div>
        <div>
          <span class="term">代名詞後面</span>
          <span
            ><NoteMark sentence="I myself have never been to London." :marks="['I myself']" /><span
              class="translation"
              >我本人從來沒去過倫敦。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="強調的反身代名詞拿掉後，句子還是完整的" mark="herself.">
      <div class="rows is-labeled">
        <div>
          <span class="term">強調</span>
          <span
            ><NoteMark sentence="She designed the logo herself." :marks="['herself.']" /><span
              class="translation"
              >拿掉 herself，句子還是完整的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="She hurt herself." :marks="['herself.']" /><span
              class="translation"
              >herself 是 hurt 的受詞，不能拿掉。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="my brother 是男性，用 himself" mark="herself.">
      <NoteFix
        wrong="My brother fixed the car herself."
        right="My brother fixed the car himself."
        fix="himself."
      />
    </NoteSlide>

    <NoteSlide title="正確的形式是 himself">
      <NoteFix
        wrong="He painted the house hisself."
        right="He painted the house himself."
        fix="himself."
      />
    </NoteSlide>

    <NoteSlide title="主詞用 I，myself 放在句尾">
      <NoteFix wrong="Myself will call the hotel." right="I'll call the hotel myself." fix="I'll" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
