<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-adverbs-821, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="句中副詞放在 have 和過去分詞中間" mark="just">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'have', role: 'have' },
          { t: 'just', role: '句中副詞', kind: 'key', ring: true },
          { t: 'seen', role: '過去分詞', kind: 'key' },
          { t: 'your notice.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我剛看到你的公告。</p>
      <p class="remark">說話者剛看到公告，馬上寫信給管理員。</p>
    </NoteSlide>

    <NoteSlide title="常用的句中副詞" mark="just">
      <div class="rows is-labeled">
        <div>
          <span class="term">just<br /><i>剛發生</i></span>
          <span
            ><NoteMark sentence="Your taxi has just arrived." :marks="['just']" /><span
              class="translation"
              >你叫的計程車剛到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">already<br /><i>已經做了</i></span>
          <span
            ><NoteMark
              sentence="Put your money away. I've already paid for the tickets."
              :marks="['already']"
            /><span class="translation">把錢收起來。票我已經付過錢了。</span></span
          >
        </div>
        <div>
          <span class="term">never<br /><i>從來沒有</i></span>
          <span
            ><NoteMark sentence="She's never met my parents." :marks="['never']" /><span
              class="translation"
              >她從來沒見過我爸媽。</span
            ></span
          >
        </div>
        <div>
          <span class="term">always<br /><i>一直都是</i></span>
          <span
            ><NoteMark sentence="I've always liked this song." :marks="['always']" /><span
              class="translation"
              >我一直都很喜歡這首歌。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問句的 ever 放在主詞後面" mark="have">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We\'re going to Edinburgh in May.', kind: 'dim' },
          { t: 'Have', role: '句首' },
          { t: 'you', role: '主詞' },
          { t: 'ever', role: '有沒有過', kind: 'key', ring: true },
          { t: 'been to Scotland?', role: '過去分詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我們五月要去愛丁堡。你去過蘇格蘭嗎？</p>
    </NoteSlide>

    <NoteSlide title="副詞不放在 have 前面" mark="have just">
      <NoteFix
        wrong="I just have seen your message about the party."
        right="I have just seen your message about the party."
        fix="have just"
      />
    </NoteSlide>

    <NoteSlide title="never 已經是否定，不加 not" mark="have">
      <NoteFix
        wrong="Our cat hasn't never caught a mouse."
        right="Our cat has never caught a mouse."
        fix="has never"
      />
    </NoteSlide>

    <NoteSlide title="already 不放在動詞和受詞中間" mark="just seen">
      <NoteFix
        wrong="The builders have finished already the new kitchen."
        right="The builders have already finished the new kitchen."
        fix="already finished"
      />
    </NoteSlide>

    <NoteSlide title="美式英語常用過去簡單式加 just" mark="have just seen">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'just saw', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'your notice by the lift.', kind: 'dim' },
          { t: 'I can help with the garden.', kind: 'dim' },
        ]"
      />
      <p class="translation">我剛看到你貼在電梯旁的公告。我可以幫忙整理花園。</p>
    </NoteSlide>

    <NoteSlide title="ever 用在問句，否定的回答用 never" mark="just">
      <div class="rows is-labeled">
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark
              sentence="This French restaurant is famous for snails. Have you ever eaten snails?"
              :marks="['ever']"
            /><span class="translation">這家法國餐廳的蝸牛很有名。你吃過蝸牛嗎？</span></span
          >
        </div>
        <div>
          <span class="term">否定的回答</span>
          <span
            ><NoteMark sentence="No, I've never eaten them." :marks="['never']" /><span
              class="translation"
              >沒有，我從來沒吃過。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
