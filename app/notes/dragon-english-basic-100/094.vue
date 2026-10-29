<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 094, as slides, in the order of notes/dragon-english-basic-100/094.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="that 在子句裡當主詞，後面直接接動詞" mark="that attracts">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Tom has', kind: 'dim' },
          { t: 'a dog', role: '名詞' },
          { t: 'that', role: '關係代名詞\n子句的主詞', kind: 'key' },
          { t: 'can swim.', role: '子句的動詞', kind: 'key' },
        ]"
      />
      <p class="translation">Tom 有一隻會游泳的狗。</p>
    </NoteSlide>

    <NoteSlide title="子句的動詞跟著它說明的名詞變化" mark="attracts">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I want', kind: 'dim' },
          { t: 'a phone', role: '單數名詞', kind: 'key' },
          { t: 'that', role: '關係代名詞' },
          { t: 'takes', role: '單數動詞', kind: 'key', ring: true },
          { t: 'good pictures.', kind: 'dim' },
        ]"
      />
      <p class="translation">我想要一支拍照很好看的手機。</p>
    </NoteSlide>

    <NoteSlide title="人也可以用 who，東西也可以用 which" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">人<br /><i>who</i></span>
          <span
            ><NoteMark
              sentence="I have an aunt who works at the airport."
              :marks="['an aunt', 'who']"
            /><span class="translation">我有一個在機場工作的阿姨。</span></span
          >
        </div>
        <div>
          <span class="term">東西<br /><i>which</i></span>
          <span
            ><NoteMark
              sentence="This is the road which goes to the beach."
              :marks="['the road', 'which']"
            /><span class="translation">這是通往海邊的路。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="人或東西有說不出來的特質，用 There is something about"
      mark="There is something about her"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">his voice</span>
          <span
            ><NoteMark
              sentence="There is something about his voice that makes people listen."
              :marks="['something about his voice']"
            /><span class="translation">他的聲音有某種讓人想聽的地方。</span></span
          >
        </div>
        <div>
          <span class="term">the old man</span>
          <span
            ><NoteMark
              sentence="There was something about the old man that reminded me of my grandfather."
              :marks="['something about the old man']"
            /><span class="translation">那位老先生有某種讓我想起我爺爺的地方。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>something about her</code> 是她身上的某種特質。</p>
    </NoteSlide>

    <NoteSlide title="that 子句說明 something，不是 about 後面的名詞" mark="that attracts me">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'There is', kind: 'dim' },
          { t: 'something', role: '某種特質\n單數', kind: 'key' },
          { t: 'about her', role: 'about + 人' },
          { t: 'that attracts me.', role: '說明 something', kind: 'key' },
        ]"
      />
      <p class="remark">動詞跟著單數的 <code>something</code> 用 <code>attracts</code>。</p>
    </NoteSlide>

    <NoteSlide title="What do you think of 問對方對人或東西的看法" mark="What do you think of">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'What', role: '疑問詞', kind: 'key' },
          { t: 'do you think', kind: 'dim' },
          { t: 'of', role: '介系詞' },
          { t: 'our new teacher?', role: '名詞' },
        ]"
      />
      <p class="remark">中文說怎麼樣，英文的疑問詞用 <code>what</code>。</p>
    </NoteSlide>

    <NoteSlide title="of 可以換成 about，問過去的經驗時 do 改成 did" mark="do you think of">
      <div class="rows is-labeled">
        <div>
          <span class="term">about</span>
          <span
            ><NoteMark sentence="What do you think about my idea?" :marks="['about']" /><span
              class="translation"
              >你覺得我的想法怎麼樣？</span
            ></span
          >
        </div>
        <div>
          <span class="term">did</span>
          <span
            ><NoteMark sentence="What did you think of the movie?" :marks="['did']" /><span
              class="translation"
              >你覺得那部電影怎麼樣？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
