<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// discourse-markers-form-use-organising-marking-new-knowledge-informal, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="言談標記引出聽的人還不知道的事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The thing is,', role: '言談標記', kind: 'key' },
          { t: 'if I could move, I\'d go to the countryside.', role: '新資訊', kind: 'dim' },
        ]"
      />
      <p class="translation">其實，如果我能搬家，我會搬到鄉下去。</p>
      <p class="remark">
        <code>The thing is</code>
        引出說話的人真正想做的事：搬到鄉下。言談標記放在句首時，後面加逗號。
      </p>
    </NoteSlide>

    <NoteSlide title="you see 引出聽的人不知道的原因或背景">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="You see, I'm allergic to cats. That's why I can't stay at your place."
              :marks="['You see,']"
            /><span class="translation">是這樣的，我對貓過敏，所以不能住你家。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="I can't come tonight. I'm working late, you see."
              :marks="['you see.']"
            /><span class="translation">我今晚不能來。我得加班，你知道的。</span></span
          >
        </div>
      </div>
      <p class="remark">句尾的 <code>you see</code> 前面加逗號。</p>
    </NoteSlide>

    <NoteSlide title="the thing is 引出問題或真正的原因" mark="The thing is,">
      <div class="rows is-labeled">
        <div>
          <span class="term">the thing is,</span>
          <span
            ><NoteMark
              sentence="I'd love to come. The thing is, I've got an exam on Monday."
              :marks="['The thing is,']"
            /><span class="translation">我很想去。問題是，我星期一有考試。</span></span
          >
        </div>
        <div>
          <span class="term">the thing is that</span>
          <span
            ><NoteMark
              sentence="The thing is that nobody told us about the meeting."
              :marks="['The thing is that']"
            /><span class="translation">問題是沒人通知我們開會。</span></span
          >
        </div>
        <div>
          <span class="term">the thing was<br /><i>過去的事</i></span>
          <span
            ><NoteMark
              sentence="We wanted to go camping. The thing was, it rained all weekend."
              :marks="['The thing was,']"
            /><span class="translation">我們本來想去露營。問題是，整個週末都在下雨。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>that</code> 前面不加逗號。</p>
    </NoteSlide>

    <NoteSlide title="the thing is 的 thing 用單數，動詞用 is" mark="The thing is,">
      <NoteFix
        wrong="The things are, my car won't start."
        right="The thing is, my car won't start."
        fix="The thing is,"
      />
    </NoteSlide>

    <NoteSlide title="說過去的事也用 you see">
      <NoteFix
        wrong="You saw, I was ill that week."
        right="You see, I was ill that week."
        fix="You see,"
      />
    </NoteSlide>

    <NoteSlide title="you see 引出陳述句，句尾用句號">
      <NoteFix
        wrong="You see, I've lost my ticket?"
        right="You see, I've lost my ticket."
        fix="ticket."
      />
    </NoteSlide>

    <NoteSlide title="動詞 see 後面有受詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">you see<br /><i>言談標記</i></span>
          <span
            ><NoteMark
              sentence="You see, the shop was already closed."
              :marks="['You see,']"
            /><span class="translation">是這樣的，那家店已經關了。</span></span
          >
        </div>
        <div>
          <span class="term">see<br /><i>動詞</i></span>
          <span
            ><NoteMark
              sentence="Do you see that bird on the roof?"
              :marks="['see that bird']"
            /><span class="translation">你有看到屋頂上那隻鳥嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">言談標記 <code>you see</code> 拿掉以後，句子還是完整的。</p>
    </NoteSlide>

    <NoteSlide title="as you can see 引出聽的人眼前看得到的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">as you can see<br /><i>看得到的事</i></span>
          <span
            ><NoteMark
              sentence="As you can see, the kitchen is quite small."
              :marks="['As you can see,']"
            /><span class="translation">你也看得到，廚房很小。</span></span
          >
        </div>
        <div>
          <span class="term">you see<br /><i>不知道的事</i></span>
          <span
            ><NoteMark
              sentence="You see, I'm allergic to cats. That's why I can't stay at your place."
              :marks="['You see,']"
            /><span class="translation">是這樣的，我對貓過敏，所以不能住你家。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
