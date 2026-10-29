<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 020, as slides, in the order of notes/dragon-english-basic-100/020.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="現在完成式表示到現在為止的經驗，副詞放在 have 和過去分詞中間"
      mark="often heard"
    >
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: '’ve', role: '助動詞', kind: 'key' },
          { t: 'often', role: '副詞', kind: 'key', ring: true, alts: ['never'] },
          { t: 'heard', role: '過去分詞', kind: 'key' },
          { t: 'Tom boast …', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>often</code> 表示經常，<code>never</code> 表示從來沒有。</p>
    </NoteSlide>

    <NoteSlide title="經驗的問句用 ever" mark="never">
      <div class="rows is-labeled">
        <div>
          <span class="term">never</span>
          <span
            ><NoteMark sentence="I've never eaten natto." :marks="['never']" /><span
              class="translation"
              >我從來沒吃過納豆。</span
            ></span
          >
        </div>
        <div>
          <span class="term">often</span>
          <span
            ><NoteMark sentence="We have often talked about this." :marks="['often']" /><span
              class="translation"
              >我們常常談到這件事。</span
            ></span
          >
        </div>
        <div>
          <span class="term">ever，問句</span>
          <span
            ><NoteMark
              sentence="Has Tom ever cooked dinner for you?"
              :marks="['Has', 'ever']"
            /><span class="translation">Tom 有煮過晚餐給你吃嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have been to 加地方表示去過那個地方">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My father', role: '主詞' },
          { t: 'has been to', kind: 'key' },
          { t: 'Korea', role: '地方' },
          { t: 'three times.', kind: 'dim' },
        ]"
      />
      <p class="translation">我爸爸去過韓國三次。</p>
    </NoteSlide>

    <NoteSlide title="感官動詞後面先接受詞，再接動詞原形" mark="heard Tom boast">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I’ve often', kind: 'dim' },
          { t: 'heard', role: '感官動詞', kind: 'key' },
          { t: 'Tom', role: '受詞' },
          { t: 'boast', role: '動詞原形', kind: 'key' },
          { t: 'that he is very good at swimming,', kind: 'dim' },
        ]"
      />
      <p class="remark">完成式裡也一樣，過去分詞後面接受詞和動詞原形。</p>
    </NoteSlide>

    <NoteSlide title="感官動詞後面的動詞原形前面不加 to" mark="seen him swim">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I’ve never', kind: 'dim' },
          { t: 'heard', role: '感官動詞' },
          { t: 'her', role: '受詞' },
          { t: 'to', role: '不加', kind: 'gone' },
          { t: 'sing.', role: '動詞原形', kind: 'key' },
        ]"
      />
      <p class="translation">我從來沒聽過她唱歌。</p>
    </NoteSlide>

    <NoteSlide title="感官動詞的受詞是代名詞時用受格" mark="him">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I’ve never actually', kind: 'dim' },
          { t: 'seen', role: '感官動詞' },
          { t: 'him', role: '受格', kind: 'key', ring: true, alts: ['her'] },
          { t: 'swim.', role: '動詞原形' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="be good at 後面接名詞或動詞-ing" mark="good at swimming">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark sentence="My sister is good at math." :marks="['math']" /><span
              class="translation"
              >我妹妹數學很好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark sentence="Ann is good at playing the violin." :marks="['playing']" /><span
              class="translation"
              >Ann 很會拉小提琴。</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>be good at</code> 表示很會做某件事。<code>at</code> 是介系詞。</p>
    </NoteSlide>

    <NoteSlide title="不擅長用 be bad at 或 be not good at" mark="good at">
      <div class="rows is-labeled">
        <div>
          <span class="term">be bad at</span>
          <span
            ><NoteMark sentence="I'm bad at remembering names." :marks="['bad at']" /><span
              class="translation"
              >我很不會記名字。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be not good at</span>
          <span
            ><NoteMark
              sentence="Tom is not good at speaking in front of people."
              :marks="['not good at']"
            /><span class="translation">Tom 不擅長在別人面前說話。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
