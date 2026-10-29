<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// discourse-markers-form-use-as-you-know-organising-marking, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="As you know 提醒聽的人已經知道的事" mark="As you know,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'As you know,', role: '言談標記', kind: 'key' },
          {
            t: 'my parents are leaving home tomorrow night to go to Spain.',
            role: '聽的人已經知道的事',
          },
        ]"
      />
      <p class="translation">你也知道，我爸媽明天晚上要出門去西班牙。</p>
      <p class="remark">寫的人和讀的人都知道這個旅行計畫。寫的人先提醒讀的人，再說接下來的事。</p>
    </NoteSlide>

    <NoteSlide title="as you know 可以放在句首、句中或句尾">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="As you know, I'm starting university in September."
              :marks="['As you know,']"
            /><span class="translation">你也知道，我九月要上大學了。</span></span
          >
        </div>
        <div>
          <span class="term">連接詞後面</span>
          <span
            ><NoteMark
              sentence="I can't come to your wedding because, as you know, I've got exams that week."
              :marks="['as you know,']"
            /><span class="translation"
              >我不能去你的婚禮，因為你也知道，我那個星期有考試。</span
            ></span
          >
        </div>
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="My brother, as you know, has just moved to Berlin."
              :marks="['as you know,']"
            /><span class="translation">我哥哥剛搬去柏林，你也知道的。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="I'm a vegetarian, as you know." :marks="['as you know.']" /><span
              class="translation"
              >我吃素，你也知道的。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        句首的 <code>As you know</code> 後面加逗號。句中的前後加逗號，句尾的前面加逗號。
      </p>
    </NoteSlide>

    <NoteSlide title="as you may know 和 as you all know">
      <div class="rows is-labeled">
        <div>
          <span class="term">as you may know<br /><i>不確定對方知不知道</i></span>
          <span
            ><NoteMark
              sentence="As you may know, the school is closing next year."
              :marks="['As you may know,']"
            /><span class="translation">你可能已經知道，學校明年要關了。</span></span
          >
        </div>
        <div>
          <span class="term">as you all know<br /><i>對一群人說</i></span>
          <span
            ><NoteMark
              sentence="As you all know, this is Mrs Brown's last day with us."
              :marks="['As you all know,']"
            /><span class="translation">大家都知道，今天是 Brown 太太在這裡的最後一天。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as you know 後面加逗號，不接 that" mark="As you know,">
      <NoteFix
        wrong="As you know that my parents are going to Spain, I'll be alone at home."
        right="As you know, my parents are going to Spain, so I'll be alone at home."
        fix="As you know,"
      />
    </NoteSlide>

    <NoteSlide title="據我所知是 as far as I know">
      <NoteFix
        wrong="As I know, the museum is closed on Mondays."
        right="As far as I know, the museum is closed on Mondays."
        fix="As far as I know,"
      />
      <p class="remark"><code>as you know</code> 說的是聽的人知道的事。</p>
    </NoteSlide>

    <NoteSlide title="聽的人還不知道的事，不用 as you know">
      <NoteFix
        wrong="As you know, I have some big news: I'm getting married!"
        right="I have some big news: I'm getting married!"
        fix="I have"
      />
    </NoteSlide>

    <NoteSlide title="口語的 you know 用來停頓，不提醒聽的人一件事">
      <div class="rows is-labeled">
        <div>
          <span class="term">you know<br /><i>停頓</i></span>
          <span
            ><NoteMark sentence="It's a bit, you know, expensive." :marks="['you know,']" /><span
              class="translation"
              >那有點，你懂的，貴。</span
            ></span
          >
        </div>
        <div>
          <span class="term">you know<br /><i>停頓</i></span>
          <span
            ><NoteMark
              sentence="We could, you know, just stay at home."
              :marks="['you know,']"
            /><span class="translation">我們可以，嗯，就待在家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞 know 後面直接接子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">know + 子句</span>
          <span
            ><NoteMark sentence="You know I can't swim." :marks="['know']" /><span
              class="translation"
              >你知道我不會游泳。</span
            ></span
          >
        </div>
        <div>
          <span class="term">know + 子句</span>
          <span
            ><NoteMark sentence="You know my sister doesn't eat meat." :marks="['know']" /><span
              class="translation"
              >你知道我妹妹不吃肉。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">前面沒有 <code>as</code>，<code>know</code> 後面不加逗號。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
