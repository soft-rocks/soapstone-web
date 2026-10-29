<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verb-plus-around, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不及物片語動詞後面不接受詞" mark="get up">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'m going to', kind: 'dim' },
          { t: 'get', role: '動詞', kind: 'key' },
          { t: 'up', role: '小品詞', kind: 'key' },
          { t: 'early on Saturday.', role: '時間' },
        ]"
      />
      <p class="translation">我星期六要早起。</p>
      <p class="remark"><code>get up</code> 的意思是起床。</p>
    </NoteSlide>

    <NoteSlide title="片語動詞後面可以接時間、地方或 to + 地方" mark="early on Saturday">
      <div class="rows is-labeled">
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark sentence="We can meet up at 2 pm." :marks="['at 2 pm']" /><span
              class="translation"
              >我們可以下午兩點碰面。</span
            ></span
          >
        </div>
        <div>
          <span class="term">地方</span>
          <span
            ><NoteMark sentence="Come in and sit down on the sofa." :marks="['on the sofa']" /><span
              class="translation"
              >進來坐在沙發上吧。</span
            ></span
          >
        </div>
        <div>
          <span class="term">to + 地方</span>
          <span
            ><NoteMark
              sentence="Shall we go out to a concert this weekend?"
              :marks="['to a concert']"
            /><span class="translation">我們這個週末要不要出去聽演唱會？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="同一個動詞，小品詞不同，意思不同" mark="up">
      <div class="rows is-labeled">
        <div>
          <span class="term">come in<br /><i>進來</i></span>
          <span
            ><NoteMark sentence="Please come in." :marks="['in']" /><span class="translation"
              >請進。</span
            ></span
          >
        </div>
        <div>
          <span class="term">come back<br /><i>回來</i></span>
          <span
            ><NoteMark sentence="I'll come back at five." :marks="['back']" /><span
              class="translation"
              >我五點會回來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">come over<br /><i>過來</i></span>
          <span
            ><NoteMark sentence="Can you come over tonight?" :marks="['over']" /><span
              class="translation"
              >你今晚可以過來嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="起床是 get up，up 不能省略" mark="up">
      <NoteFix wrong="I get at seven every day." right="I get up at seven every day." fix="up" />
    </NoteSlide>

    <NoteSlide title="小品詞放在動詞後面" mark="up">
      <NoteFix wrong="Please in come." right="Please come in." fix="come in" />
    </NoteSlide>

    <NoteSlide title="說自己醒來，wake up 後面不接受詞" mark="get up">
      <NoteFix
        wrong="What time did you wake up yourself?"
        right="What time did you wake up?"
        fix="wake up"
      />
    </NoteSlide>

    <NoteSlide title="片語動詞的動詞照時態變化，小品詞不變" mark="get">
      <NoteFix wrong="Yesterday I get up at six." right="Yesterday I got up at six." fix="got" />
    </NoteSlide>

    <NoteSlide title="wake up 有受詞時，是叫醒別人">
      <NoteMark sentence="My mum wakes me up at seven." :marks="['me']" />
      <p class="translation">我媽七點叫我起床。</p>
    </NoteSlide>

    <NoteSlide title="here 是地方副詞，不是小品詞">
      <NoteMark sentence="Come here." :marks="['here']" />
      <p class="translation">過來。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
