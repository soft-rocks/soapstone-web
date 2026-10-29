<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 010, as slides, in the order of notes/dragon-english-basic-100/010.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="insist that 堅持說某件事是真的，insist on 堅持要做某件事"
      mark="insisted that"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">insist that<br /><i>堅持說</i></span>
          <span
            ><NoteMark
              sentence="She insisted that she was right."
              :marks="['insisted that']"
            /><span class="translation">她堅持說她是對的。</span></span
          >
        </div>
        <div>
          <span class="term">insist on<br /><i>堅持要做</i></span>
          <span
            ><NoteMark
              sentence="My father insisted on paying for dinner."
              :marks="['insisted on']"
            /><span class="translation">我爸爸堅持要付晚餐的錢。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>insist that</code> 常用在別人不相信的時候。</p>
    </NoteSlide>

    <NoteSlide title="insist on 後面接動詞-ing" mark="insisted">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Ann', kind: 'dim' },
          { t: 'insisted on', role: '動詞 + 介系詞', kind: 'key' },
          { t: 'walking', role: '動詞-ing', kind: 'key' },
          { t: 'home alone.', kind: 'dim' },
        ]"
      />
      <p class="translation">Ann 堅持要自己走路回家。</p>
    </NoteSlide>

    <NoteSlide title="主要動詞是過去式，之後的事用 would" :mark="['insisted', 'would be']">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Tom', kind: 'dim' },
          { t: 'insisted', role: '過去式', kind: 'key' },
          { t: 'that everything', kind: 'dim' },
          { t: 'would be', role: 'would + 動詞原形', kind: 'key' },
          { t: 'all right,', kind: 'dim' },
        ]"
      />
      <p class="remark">
        <code>would</code> 是 <code>will</code> 的過去式。Tom 當時說的話是
        <code>Everything will be all right.</code>
      </p>
    </NoteSlide>

    <NoteSlide title="said、thought 後面講之後的事，也用 would" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">said</span>
          <span
            ><NoteMark sentence="He said he would call me." :marks="['said', 'would call']" /><span
              class="translation"
              >他說他會打電話給我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">thought</span>
          <span
            ><NoteMark
              sentence="I thought it would rain."
              :marks="['thought', 'would rain']"
            /><span class="translation">我本來以為會下雨。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="can't help 加動詞-ing 表示忍不住做某件事" mark="couldn’t help feeling">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'couldn’t help', role: 'can\'t help 的過去式', kind: 'key' },
          { t: 'feeling', role: '動詞-ing', kind: 'key' },
          { t: 'worried.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">這裡的 <code>help</code> 的意思是避免。</p>
    </NoteSlide>

    <NoteSlide title="現在式用 can't help，過去式用 couldn't help" mark="couldn’t help">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark
              sentence="She can't help eating sweets."
              :marks="['can\'t help eating']"
            /><span class="translation">她忍不住會吃甜食。</span></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark
              sentence="When I saw the photo, I couldn't help crying."
              :marks="['couldn\'t help crying']"
            /><span class="translation">我看到那張照片的時候，忍不住哭了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="連綴動詞 feel 後面接形容詞，表示主詞的感覺" mark="feeling worried">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He', role: '主詞' },
          { t: 'felt', role: '連綴動詞', kind: 'key' },
          { t: 'nervous', role: '形容詞', kind: 'key' },
          { t: 'before the speech.', kind: 'dim' },
        ]"
      />
      <p class="translation">他演講前覺得很緊張。</p>
      <p class="remark">
        表示人的感覺的形容詞常用 <code>-&#x2060;ed</code> 結尾，像 <code>worried</code>。
      </p>
    </NoteSlide>
  </NoteDeck>
</template>
