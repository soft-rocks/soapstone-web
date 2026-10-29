<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-not-a-noun, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Not a + 名詞當主詞，後面接被動動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Not a word', role: 'Not a + 名詞（主詞）', kind: 'key' },
          { t: 'was spoken', role: '被動動詞', kind: 'key' },
          { t: 'by anyone', role: '動作的人' },
          { t: 'throughout the journey.', role: '時間' },
        ]"
      />
      <p class="translation">整趟旅程中，沒有任何人說過一句話。</p>
    </NoteSlide>

    <NoteSlide title="Not a + 名詞當主詞，動詞也可以用主動" mark="was spoken">
      <div class="rows is-labeled">
        <div>
          <span class="term">被動</span>
          <span
            ><NoteMark
              sentence="Not a single tree was left standing after the storm."
              :marks="['was left']"
            /><span class="translation">暴風雨過後，連一棵樹都沒有留下來。</span></span
          >
        </div>
        <div>
          <span class="term">主動</span>
          <span
            ><NoteMark sentence="Not a sound came from the room." :marks="['came']" /><span
              class="translation"
              >房間裡一點聲音都沒有。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Not a + 名詞是受詞，放到句首後要倒裝" mark="Not a word">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Not a word', role: 'Not a + 名詞（受詞）', kind: 'key' },
          { t: 'did', role: '助動詞', kind: 'key', ring: true },
          { t: 'she', role: '主詞' },
          { t: 'say.', role: '原形動詞' },
        ]"
      />
      <p class="translation">她連一個字都沒說。</p>
      <p class="remark">一般語序是 She didn't say a word.</p>
    </NoteSlide>

    <NoteSlide title="助動詞照時態和主詞選" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">did<br /><i>過去式</i></span>
          <span
            ><NoteMark sentence="Not a penny did he pay back." :marks="['did']" /><span
              class="translation"
              >他一毛錢都沒還。</span
            ></span
          >
        </div>
        <div>
          <span class="term">do<br /><i>現在式</i></span>
          <span
            ><NoteMark sentence="Not a scrap of remorse do they show." :marks="['do']" /><span
              class="translation"
              >他們一點悔意都沒有。</span
            ></span
          >
        </div>
        <div>
          <span class="term">have<br /><i>現在完成式</i></span>
          <span
            ><NoteMark sentence="Not a single complaint have we received." :marks="['have']" /><span
              class="translation"
              >我們連一件客訴都沒收到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will<br /><i>未來</i></span>
          <span
            ><NoteMark sentence="Not a cent will I give him." :marks="['will']" /><span
              class="translation"
              >我一分錢都不會給他。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞放到句首，助動詞放在主詞前面" mark="Not a word">
      <NoteFix wrong="Not a word she said." right="Not a word did she say." fix="did she say" />
    </NoteSlide>

    <NoteSlide title="時態在 did 上，主詞後面的動詞用原形">
      <NoteFix
        wrong="Not a penny did he paid back."
        right="Not a penny did he pay back."
        fix="pay"
      />
    </NoteSlide>

    <NoteSlide title="Not a 已經是否定，動詞不再加 not" mark="was">
      <NoteFix
        wrong="Not a single tree wasn't left standing."
        right="Not a single tree was left standing."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="a 後面接單數名詞" mark="word">
      <NoteFix wrong="Not a words was spoken." right="Not a word was spoken." fix="word" />
    </NoteSlide>

    <NoteSlide title="Not a + 名詞放在句首才有強調的作用" mark="Not a word">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定在動詞上</span>
          <span
            ><NoteMark
              sentence="She didn't say a word during the journey."
              :marks="['didn\'t', 'a word']"
            /><span class="translation">旅途中她一句話也沒說。</span></span
          >
        </div>
        <div>
          <span class="term">Not a 在句首</span>
          <span
            ><NoteMark sentence="Not a word did she say." :marks="['Not a word']" /><span
              class="translation"
              >她連一個字都沒說。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Not only 後面接倒裝，不接名詞" mark="Not a">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Not only', role: 'Not only', kind: 'key' },
          { t: 'did she', role: '助動詞 + 主詞' },
          { t: 'win,', kind: 'dim' },
          { t: 'she broke the record.', kind: 'dim' },
        ]"
      />
      <p class="translation">她不但贏了，還破了紀錄。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
