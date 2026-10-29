<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-general-comment, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="所有格代名詞等於所有格形容詞加名詞">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'This isn\'t', kind: 'dim' },
          { t: 'my umbrella;', role: '所有格形容詞 + 名詞' },
          { t: 'mine', role: '所有格代名詞', kind: 'key' },
          { t: 'is blue.', kind: 'dim' },
        ]"
      />
      <p class="translation">這不是我的傘，我的是藍色的。</p>
    </NoteSlide>

    <NoteSlide title="所有格形容詞後面接名詞，所有格代名詞後面不接名詞" mark="mine">
      <div class="rows is-labeled">
        <div><span class="term">my</span><span>mine</span></div>
        <div><span class="term">your</span><span>yours</span></div>
        <div><span class="term">his</span><span>his</span></div>
        <div><span class="term">her</span><span>hers</span></div>
        <div><span class="term">our</span><span>ours</span></div>
        <div><span class="term">their</span><span>theirs</span></div>
      </div>
      <p class="remark">
        <code>That's her bag. That bag is hers.</code> <code>its</code> 很少當所有格代名詞用。
      </p>
    </NoteSlide>

    <NoteSlide title="所有格代名詞可以當主詞、受詞，也可以放在 be 和介系詞後面" mark="mine">
      <div class="rows is-labeled">
        <div><span class="term">主詞</span><span>Mine is the green one.</span></div>
        <div><span class="term">受詞</span><span>I lost my pen, so I borrowed his.</span></div>
        <div><span class="term">be 後面</span><span>The black car is theirs.</span></div>
        <div><span class="term">介系詞後面</span><span>Their house is bigger than ours.</span></div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞加 of 加所有格代名詞，說某人的某一個人" mark="mine">
      <div class="rows is-labeled">
        <div>
          <span class="term">雙重所有格</span>
          <span
            ><NoteMark
              sentence="A friend of ours is coming to stay."
              :marks="['A friend of ours']"
            /><span class="translation">我們的一個朋友要來住。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="所有格代名詞都沒有撇號" mark="mine">
      <NoteFix wrong="Is this pen her's?" right="Is this pen hers?" fix="hers?" />
    </NoteSlide>

    <NoteSlide title="名詞前面用所有格形容詞" mark="my umbrella;">
      <NoteFix wrong="This is ours house." right="This is our house." fix="our" />
    </NoteSlide>

    <NoteSlide title="it's 是 it is，所有格形容詞是 its">
      <NoteFix wrong="The cat licked it's paw." right="The cat licked its paw." fix="its" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
