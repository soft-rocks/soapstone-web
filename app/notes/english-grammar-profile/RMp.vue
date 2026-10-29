<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-pre-modifying-976, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="限定詞 + 修飾語 + ones" mark="my old ones">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'T-shirts', role: '複數名詞', kind: 'key' },
          { t: '… I don\'t like', kind: 'dim' },
          { t: 'my', role: '限定詞' },
          { t: 'old', role: '修飾語' },
          { t: 'ones', role: '代替 T-shirts', kind: 'key' },
          { t: 'anymore.', kind: 'dim' },
        ]"
      />
      <p class="translation">……我已經不喜歡我那些舊的了。</p>
    </NoteSlide>

    <NoteSlide title="常用的限定詞" mark="my">
      <div class="rows is-labeled">
        <div>
          <span class="term">the</span>
          <span><NoteMark sentence="the funny ones" :marks="['the']" /></span>
        </div>
        <div>
          <span class="term">所有格</span>
          <span><NoteMark sentence="her gold ones" :marks="['her']" /></span>
        </div>
        <div>
          <span class="term">some、any</span>
          <span><NoteMark sentence="some new ones" :marks="['some']" /></span>
        </div>
        <div>
          <span class="term">these、those</span>
          <span><NoteMark sentence="these soft ones" :marks="['these']" /></span>
        </div>
        <div>
          <span class="term">數字</span>
          <span><NoteMark sentence="two experienced ones" :marks="['two']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="形容詞、名詞當修飾語" mark="old">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="The new printers are quiet, but the old ones make a lot of noise."
              :marks="['old']"
            /><span class="translation">新的印表機很安靜，可是舊的很吵。</span></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="I don't watch many films, but I love the science-fiction ones."
              :marks="['science-fiction']"
            /><span class="translation">我不常看電影，可是很愛看科幻片。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="形容詞後面接 ones" mark="ones">
      <NoteFix
        wrong="My boots are too small, so I bought some new."
        right="My boots are too small, so I bought some new ones."
        fix="ones."
      />
    </NoteSlide>

    <NoteSlide title="沒有修飾語就用 yours">
      <NoteFix
        wrong="I forgot my pens. Can I borrow your ones?"
        right="I forgot my pens. Can I borrow yours?"
        fix="yours?"
      />
    </NoteSlide>

    <NoteSlide title="修飾語放在 ones 前面" mark="old">
      <NoteFix
        wrong="I like these shoes more than the ones black."
        right="I like these shoes more than the black ones."
        fix="black ones."
      />
    </NoteSlide>

    <NoteSlide title="單數用 one">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My phone is broken, so I need', kind: 'dim' },
          { t: 'a new one.', role: '代替單數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我的手機壞了，所以我要買一支新的。</p>
    </NoteSlide>

    <NoteSlide title="不加限定詞：泛指">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Small cafés are often friendlier than', kind: 'dim' },
          { t: 'big ones.', role: '泛指', kind: 'key' },
        ]"
      />
      <p class="translation">小咖啡店通常比大的親切。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
