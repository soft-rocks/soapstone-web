<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// sequence-of-tenses, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="said + that + 子句，代名詞換掉，時態後移">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'He said', role: '主詞 + said' },
          { t: 'that', role: 'that' },
          { t: 'it was his phone', role: '子句', kind: 'key' },
          { t: 'and he had left it in a cafe.', role: '第二個子句', kind: 'key' },
        ]"
      />
      <p class="translation">他說那是他的手機，他把它忘在一家咖啡廳了。</p>
    </NoteSlide>

    <NoteSlide title="my 換成 his，is 和 left 往過去移" mark="his">
      <div class="rows is-labeled">
        <div>
          <span class="term">原話</span>
          <span
            ><NoteMark
              sentence='"It&apos;s my phone. I left it in a cafe."'
              :marks="['It\'s my', 'I left']"
            /><span class="translation">「這是我的手機。我把它忘在一家咖啡廳了。」</span></span
          >
        </div>
        <div>
          <span class="term">轉述</span>
          <span
            ><NoteMark
              sentence="He said that it was his phone and he had left it in a cafe."
              :marks="['was his', 'he had left']"
            /><span class="translation">他說那是他的手機，他把它忘在一家咖啡廳了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時態後移：現在式" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">work → worked</span>
          <span
            ><NoteMark sentence="She said she worked at a bank." :marks="['worked']" /><span
              class="translation"
              >她說她在銀行上班。</span
            ></span
          >
        </div>
        <div>
          <span class="term">am seeing → was seeing</span>
          <span
            ><NoteMark
              sentence="Kate told me she was seeing someone new."
              :marks="['was seeing']"
            /><span class="translation">Kate 跟我說她在跟一個新對象交往。</span></span
          >
        </div>
        <div>
          <span class="term">have lost → had lost</span>
          <span
            ><NoteMark sentence="He said he had lost his wallet." :marks="['had lost']" /><span
              class="translation"
              >他說他的皮夾丟了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時態後移：過去式和助動詞" mark="had left">
      <div class="rows is-labeled">
        <div>
          <span class="term">met → had met</span>
          <span
            ><NoteMark sentence="She said she had met him in Paris." :marks="['had met']" /><span
              class="translation"
              >她說她是在巴黎認識他的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will → would</span>
          <span
            ><NoteMark sentence="He told me he would help me." :marks="['would']" /><span
              class="translation"
              >他跟我說他會幫我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">can → could</span>
          <span
            ><NoteMark sentence="She said she could drive." :marks="['could']" /><span
              class="translation"
              >她說她會開車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">have to → had to</span>
          <span
            ><NoteMark sentence="He said he had to go." :marks="['had to']" /><span
              class="translation"
              >他說他得走了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="代名詞以轉述的人為準" mark="his">
      <div class="rows is-labeled">
        <div>
          <span class="term">we → they</span>
          <span
            ><NoteMark
              sentence="They said they were moving to a new flat."
              :marks="['they#2']"
            /><span class="translation">他們說他們要搬到新公寓。</span></span
          >
        </div>
        <div>
          <span class="term">your → my</span>
          <span
            ><NoteMark sentence="The man told me my bag was ready." :marks="['my']" /><span
              class="translation"
              >那個男人跟我說我的包包好了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="and 後面的子句也要換" mark="and he had left">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'He said', kind: 'dim' },
          { t: 'he was Lucy\'s brother', role: '子句', kind: 'key' },
          { t: 'and', role: '連接詞' },
          { t: 'we had met before.', role: '第二個子句', kind: 'key' },
        ]"
      />
      <p class="translation">他說他是 Lucy 的哥哥，還說我們以前見過面。</p>
    </NoteSlide>

    <NoteSlide title="原話的 I 和 my 是 Anna，換成 she 和 her" mark="he">
      <NoteFix
        wrong="Anna said that I had lost my keys."
        right="Anna said that she had lost her keys."
        :fix="['she', 'her']"
      />
    </NoteSlide>

    <NoteSlide title="say 後面不接聽的人" mark="said">
      <NoteFix
        wrong="She said me that the last train had already gone."
        right="She told me that the last train had already gone."
        fix="told me"
      />
    </NoteSlide>

    <NoteSlide title="已經不成立的事要後移" mark="was">
      <NoteFix
        wrong="When I met him in 2015, he said he is a student."
        right="When I met him in 2015, he said he was a student."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="第二個子句也要後移" mark="had left">
      <NoteFix
        wrong="Last night Mia said she was tired and she wants to go home."
        right="Last night Mia said she was tired and she wanted to go home."
        fix="wanted"
      />
    </NoteSlide>

    <NoteSlide title="that 後面不接原話" mark="that">
      <NoteFix
        wrong='He said that, "I&apos;m busy tonight."'
        right="He said that he was busy that night."
        fix="he was busy"
      />
    </NoteSlide>

    <NoteSlide title="到現在還成立的事，可以不後移">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My cousin said', kind: 'dim' },
          { t: 'she works', role: '現在式', kind: 'key' },
          { t: 'at a hospital.', kind: 'dim' },
        ]"
      />
      <p class="translation">我表姊說她在醫院上班。</p>
    </NoteSlide>

    <NoteSlide title="直接引述保留原話">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'He said,', kind: 'dim' },
          { t: '&quot;It\'s my phone.&quot;', role: '原話', kind: 'key' },
        ]"
      />
      <p class="translation">他說：「這是我的手機。」</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
