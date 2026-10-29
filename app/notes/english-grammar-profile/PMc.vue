<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-reported-yes-no-questions, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="asked + if / whether + 子句，轉述是非問句">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I asked her', role: '主詞 + asked + 人' },
          { t: 'if', role: 'if / whether', kind: 'key' },
          { t: 'she wanted to go and have dinner together.', role: '子句', kind: 'key' },
        ]"
      />
      <p class="translation">我問她要不要一起去吃晚餐。</p>
    </NoteSlide>

    <NoteSlide title="do 拿掉，you 換成 she，want 後移成 wanted" mark="if she wanted">
      <div class="rows is-labeled">
        <div>
          <span class="term">原本的問題</span>
          <span
            ><NoteMark
              sentence='"Do you want to go and have dinner together?"'
              :marks="['Do you want']"
            /><span class="translation">「你要不要一起去吃晚餐？」</span></span
          >
        </div>
        <div>
          <span class="term">轉述</span>
          <span
            ><NoteMark
              sentence="I asked her if she wanted to go and have dinner together."
              :marks="['if she wanted']"
            /><span class="translation">我問她要不要一起去吃晚餐。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞放回動詞前面，時態後移" mark="she wanted">
      <div class="rows is-labeled">
        <div>
          <span class="term">do</span>
          <span
            ><NoteMark sentence="He asked me if I liked jazz." :marks="['I liked']" /><span
              class="translation"
              >他問我喜不喜歡爵士樂。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be 動詞</span>
          <span
            ><NoteMark sentence="She asked if I was tired." :marks="['I was']" /><span
              class="translation"
              >她問我累不累。</span
            ></span
          >
        </div>
        <div>
          <span class="term">助動詞</span>
          <span
            ><NoteMark sentence="They asked me whether I could swim." :marks="['I could']" /><span
              class="translation"
              >他們問我會不會游泳。</span
            ></span
          >
        </div>
        <div>
          <span class="term">現在完成式</span>
          <span
            ><NoteMark sentence="She asked if I had seen the film." :marks="['I had seen']" /><span
              class="translation"
              >她問我有沒有看過那部電影。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="or not 放在句尾，或緊接在 whether 後面" mark="if">
      <div class="rows is-labeled">
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="She asked if I was ready or not." :marks="['or not']" /><span
              class="translation"
              >她問我準備好了沒。</span
            ></span
          >
        </div>
        <div>
          <span class="term">whether 後面</span>
          <span
            ><NoteMark
              sentence="She asked whether or not I was ready."
              :marks="['whether or not']"
            /><span class="translation">她問我準備好了沒有。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時態不後移：引述動詞是現在式，或問的事還成立">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark
              sentence="I'm writing to ask whether you can come to my party."
              :marks="['ask', 'can']"
            /><span class="translation">我寫信來問你能不能來我的派對。</span></span
          >
        </div>
        <div>
          <span class="term">還成立</span>
          <span
            ><NoteMark sentence="She asked me if I like spicy food." :marks="['like']" /><span
              class="translation"
              >她問過我喜不喜歡吃辣。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="是非問句用 if，不用 that" mark="if">
      <NoteFix
        wrong="He asked me that I wanted some coffee."
        right="He asked me if I wanted some coffee."
        fix="if"
      />
    </NoteSlide>

    <NoteSlide title="if 後面用陳述句的語序" mark="she wanted">
      <NoteFix wrong="I asked him if was he OK." right="I asked him if he was OK." fix="he was" />
    </NoteSlide>

    <NoteSlide title="間接引述的句尾用句號" mark="together.">
      <NoteFix
        wrong="She asked me whether I was coming to the party?"
        right="She asked me whether I was coming to the party."
        fix="party."
      />
    </NoteSlide>

    <NoteSlide title="or not 只能緊接在 whether 後面" mark="if">
      <NoteFix
        wrong="My dad asked if or not I had finished."
        right="My dad asked whether or not I had finished."
        fix="whether or not"
      />
    </NoteSlide>

    <NoteSlide title="問的內容和條件" mark="if">
      <div class="rows is-labeled">
        <div>
          <span class="term">問的內容</span>
          <span
            ><NoteMark sentence="Ask Tom if he's free." :marks="['if he\'s free']" /><span
              class="translation"
              >問問 Tom 他有沒有空。</span
            ></span
          >
        </div>
        <div>
          <span class="term">條件</span>
          <span
            ><NoteMark sentence="If Tom's free, ask him." :marks="['If Tom\'s free,']" /><span
              class="translation"
              >如果 Tom 有空，就問他。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="是非問句用 if，wh 問句用 wh 詞" mark="if">
      <div class="rows is-labeled">
        <div>
          <span class="term">是非問句</span>
          <span
            ><NoteMark sentence="I asked her if she lived nearby." :marks="['if']" /><span
              class="translation"
              >我問她是不是住在附近。</span
            ></span
          >
        </div>
        <div>
          <span class="term">wh 問句</span>
          <span
            ><NoteMark
              sentence="I asked her which part of town she lived in."
              :marks="['which']"
            /><span class="translation">我問她住在城裡哪一區。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
