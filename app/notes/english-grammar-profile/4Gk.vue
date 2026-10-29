<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-manner-99, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="together 放在動詞後面，說明動作怎麼做">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'We go', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'everywhere', role: '地點副詞', kind: 'dim' },
          { t: 'together.', role: '情狀副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我們去哪裡都在一起。</p>
    </NoteSlide>

    <NoteSlide title="介系詞加名詞也可以說明動作怎麼做" mark="together">
      <div class="rows is-labeled">
        <div>
          <span class="term">by + 名詞</span>
          <span
            ><NoteMark sentence="She made the cake by hand." :marks="['by hand']" /><span
              class="translation"
              >那個蛋糕是她親手做的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">in a hurry</span>
          <span
            ><NoteMark sentence="They packed their bags in a hurry." :marks="['in a hurry']" /><span
              class="translation"
              >他們匆匆忙忙地收拾行李。</span
            ></span
          >
        </div>
        <div>
          <span class="term">with + 名詞</span>
          <span
            ><NoteMark
              sentence="She opened the door with a smile."
              :marks="['with a smile']"
            /><span class="translation">她笑著開了門。</span></span
          >
        </div>
        <div>
          <span class="term">like + 名詞</span>
          <span
            ><NoteMark sentence="She sings like a bird." :marks="['like a bird']" /><span
              class="translation"
              >她唱歌像小鳥一樣好聽。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="by 表示方式時，名詞不加 the">
      <NoteFix
        wrong="I sent the form by the email."
        right="I sent the form by email."
        fix="by email"
      />
    </NoteSlide>

    <NoteSlide title="動詞有受詞時，情狀副詞放在受詞後面">
      <NoteFix
        wrong="She wrapped carefully the glasses."
        right="She wrapped the glasses carefully."
        fix="the glasses carefully"
      />
    </NoteSlide>

    <NoteSlide title="in a hurry 的 a 不能省略">
      <NoteFix wrong="He left in hurry." right="He left in a hurry." fix="in a hurry" />
    </NoteSlide>

    <NoteSlide title="表示像什麼一樣，用 like 接名詞">
      <NoteFix wrong="He eats as a horse." right="He eats like a horse." fix="like" />
    </NoteSlide>

    <NoteSlide title="alone 表示自己一個人，lonely 表示寂寞">
      <div class="rows is-labeled">
        <div>
          <span class="term">alone<br /><i>情狀副詞</i></span>
          <span
            ><NoteMark sentence="I live alone." :marks="['alone']" /><span class="translation"
              >我一個人住。</span
            ></span
          >
        </div>
        <div>
          <span class="term">lonely<br /><i>形容詞</i></span>
          <span
            ><NoteMark sentence="I feel lonely." :marks="['lonely']" /><span class="translation"
              >我覺得很寂寞。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
