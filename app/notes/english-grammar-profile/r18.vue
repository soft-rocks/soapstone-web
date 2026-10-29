<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-vague-expressions, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="例子 + or + 不定代名詞" mark="or anything like that?">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Is it worth having', kind: 'dim' },
          { t: 'a nervous breakdown', role: '具體的例子', kind: 'key' },
          { t: 'or', role: '連接' },
          { t: 'anything like that?', role: '這一類的東西', kind: 'key' },
        ]"
      />
      <p class="translation">搞到精神崩潰或那一類的狀況，值得嗎？</p>
    </NoteSlide>

    <NoteSlide title="說東西：or something、or anything">
      <div class="rows is-labeled">
        <div>
          <span class="term">or something</span>
          <span
            ><NoteMark sentence="Let's get a pizza or something." :marks="['or something']" /><span
              class="translation"
              >我們叫個披薩之類的吧。</span
            ></span
          >
        </div>
        <div>
          <span class="term">or anything</span>
          <span
            ><NoteMark
              sentence="I don't want a party or anything like that."
              :marks="['or anything like that.']"
            /><span class="translation">我不想辦派對什麼的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說地點、人、全部">
      <div class="rows is-labeled">
        <div>
          <span class="term">地點</span>
          <span
            ><NoteMark
              sentence="We could meet at the café or somewhere."
              :marks="['or somewhere.']"
            /><span class="translation">我們可以約在咖啡店或別的地方見面。</span></span
          >
        </div>
        <div>
          <span class="term">人</span>
          <span
            ><NoteMark sentence="Ask a teacher or someone." :marks="['or someone.']" /><span
              class="translation"
              >去問老師或其他人。</span
            ></span
          >
        </div>
        <div>
          <span class="term">全部</span>
          <span
            ><NoteMark
              sentence="She has a big house, a fast car and everything."
              :marks="['and everything.']"
            /><span class="translation">她有大房子、跑車，什麼都有。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="肯定句用 something，否定句和疑問句用 anything" mark="anything">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定</span>
          <span
            ><NoteMark
              sentence="He works in a bank or something."
              :marks="['or something.']"
            /><span class="translation">他在銀行之類的地方上班。</span></span
          >
        </div>
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark
              sentence="He doesn't have a job or anything."
              :marks="['or anything.']"
            /><span class="translation">他沒有工作什麼的。</span></span
          >
        </div>
        <div>
          <span class="term">疑問</span>
          <span
            ><NoteMark sentence="Do you need a pen or anything?" :marks="['or anything?']" /><span
              class="translation"
              >你需要筆或其他東西嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定句用 or anything" mark="anything">
      <NoteFix
        wrong="I didn't break the window or something."
        right="I didn't break the window or anything."
        fix="or anything."
      />
    </NoteSlide>

    <NoteSlide title="例子和 anything 之間要用 or" mark="or">
      <NoteFix
        wrong="Do you want a sandwich anything?"
        right="Do you want a sandwich or anything?"
        fix="or"
      />
    </NoteSlide>

    <NoteSlide title="like 後面要接 that" mark="like that?">
      <NoteFix
        wrong="He works in marketing or something like."
        right="He works in marketing or something like that."
        fix="like that."
      />
    </NoteSlide>

    <NoteSlide title="else 放在不定代名詞後面">
      <NoteFix
        wrong="Maybe we can eat at home or else somewhere."
        right="Maybe we can eat at home or somewhere else."
        fix="somewhere else."
      />
    </NoteSlide>

    <NoteSlide title="指具體東西的 something">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I bought', kind: 'dim' },
          { t: 'something', role: '具體的東西', kind: 'key' },
          { t: 'for your birthday.', kind: 'dim' },
        ]"
      />
      <p class="translation">我買了東西要送你當生日禮物。</p>
    </NoteSlide>

    <NoteSlide title="or else 的意思是不然">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Hurry up,', kind: 'dim' },
          { t: 'or else', role: '不然', kind: 'key' },
          { t: 'we\'ll miss the bus.', kind: 'dim' },
        ]"
      />
      <p class="translation">快點，不然我們會趕不上公車。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
