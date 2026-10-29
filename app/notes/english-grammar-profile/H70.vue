<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-anything-focus, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="anything + 後位修飾語當主詞" mark="is">
      <NoteWords
        :size="18"
        :parts="[
          { t: 'Anything', role: '中心詞', kind: 'key' },
          { t: 'that puts you in contact with the English language', role: '後位修飾語' },
          { t: 'is', role: '單數動詞', kind: 'key' },
          { t: 'important.', kind: 'dim' },
        ]"
      />
      <p class="translation">任何能讓你接觸到英文的東西都很重要。</p>
    </NoteSlide>

    <NoteSlide title="後位修飾語：子句、不定詞、else" mark="that puts you">
      <div class="rows is-labeled">
        <div>
          <span class="term">關係子句</span>
          <span
            ><NoteMark
              sentence="Anything that makes you laugh is good for your health."
              :marks="['that makes you laugh']"
            /><span class="translation">任何能讓你笑的事都對健康有益。</span></span
          >
        </div>
        <div>
          <span class="term">不定詞</span>
          <span
            ><NoteMark
              sentence="Anything to keep the children quiet would be welcome."
              :marks="['to keep the children quiet']"
            /><span class="translation">任何能讓孩子安靜下來的辦法都好。</span></span
          >
        </div>
        <div>
          <span class="term">else</span>
          <span
            ><NoteMark sentence="Anything else can wait until tomorrow." :marks="['else']" /><span
              class="translation"
              >其他的事都可以等到明天。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="後位修飾語：介系詞片語、形容詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">介系詞片語</span>
          <span
            ><NoteMark
              sentence="Anything with sugar in it is bad for your teeth."
              :marks="['with sugar in it']"
            /><span class="translation">任何含糖的東西都對牙齒不好。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="Anything new takes time to learn." :marks="['new']" /><span
              class="translation"
              >任何新東西都要花時間學。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="anything 開頭的主詞強調範圍很廣" mark="Anything">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Anything you can do to help', role: '主詞', kind: 'key' },
          { t: 'will be appreciated.', kind: 'dim' },
        ]"
      />
      <p class="translation">你能幫上的任何忙，我們都很感激。</p>
    </NoteSlide>

    <NoteSlide title="主詞的動詞用單數" mark="is">
      <NoteFix
        wrong="Anything that helps you relax are worth trying."
        right="Anything that helps you relax is worth trying."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="關係子句的動詞也用單數" mark="puts">
      <NoteFix
        wrong="Anything that make you happy is fine with me."
        right="Anything that makes you happy is fine with me."
        fix="makes"
      />
    </NoteSlide>

    <NoteSlide title="形容詞放在 anything 後面">
      <NoteFix
        wrong="Interesting anything is worth reading."
        right="Anything interesting is worth reading."
        fix="Anything interesting"
      />
    </NoteSlide>

    <NoteSlide title="動詞前面不再加 it">
      <NoteFix
        wrong="Anything that you find useful, it is worth keeping."
        right="Anything that you find useful is worth keeping."
        fix="useful is"
      />
    </NoteSlide>

    <NoteSlide title="省略子句：逗號後面接祈使句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Anything you don\'t understand in the homework,', role: '省略子句', kind: 'key' },
          { t: 'ask the teacher.', role: '祈使句' },
        ]"
      />
      <p class="translation">作業裡有不懂的，就問老師。</p>
    </NoteSlide>

    <NoteSlide title="everything 指全部">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Everything in this suitcase', role: '全部的東西', kind: 'key' },
          { t: 'belongs to my sister.', kind: 'dim' },
        ]"
      />
      <p class="translation">這個行李箱裡的東西全都是我姊姊的。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
