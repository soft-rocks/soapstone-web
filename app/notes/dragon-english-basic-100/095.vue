<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 095, as slides, in the order of notes/dragon-english-basic-100/095.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="who 在子句裡當主詞，後面直接接動詞" mark="People who">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'People', role: '人', kind: 'key' },
          { t: 'who', role: '關係代名詞\n子句的主詞', kind: 'key' },
          { t: 'don’t feel', role: '子句的動詞' },
          { t: 'guilty about occupying two seats on a crowded train', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>who</code> 子句說明前面的 <code>people</code>。</p>
    </NoteSlide>

    <NoteSlide title="people 加 who 子句當主詞，動詞是 make" mark="make">
      <NoteWords
        :size="24"
        :parts="[
          {
            t: 'People who don’t feel guilty about occupying two seats on a crowded train',
            role: '主詞',
            kind: 'key',
          },
          { t: 'really', kind: 'dim' },
          { t: 'make', role: '動詞', kind: 'key', ring: true },
          { t: 'me angry.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="who 子句說明前面的人" mark="People who">
      <div class="rows is-labeled">
        <div>
          <span class="term">a girl</span>
          <span
            ><NoteMark
              sentence="I know a girl who plays the violin very well."
              :marks="['a girl', 'who plays']"
            /><span class="translation">我認識一個小提琴拉得很好的女孩。</span></span
          >
        </div>
        <div>
          <span class="term">the man</span>
          <span
            ><NoteMark
              sentence="The man who helped me was very kind."
              :marks="['The man', 'who helped']"
            /><span class="translation">幫我的那個男人很親切。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="feel guilty about 後面接動詞-ing" mark="feel guilty about occupying">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'feel guilty', role: '動詞 + 形容詞' },
          { t: 'about', role: '介系詞', kind: 'key' },
          { t: 'occupying two seats', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="remark"><code>feel guilty about</code> 表示對某件事覺得有罪惡感。</p>
    </NoteSlide>

    <NoteSlide title="afraid of 和 worried about 後面也接動詞-ing" mark="guilty about occupying">
      <div class="rows is-labeled">
        <div>
          <span class="term">feel guilty about</span>
          <span
            ><NoteMark
              sentence="I feel guilty about eating so much cake."
              :marks="['guilty about eating']"
            /><span class="translation">我吃了那麼多蛋糕，覺得很有罪惡感。</span></span
          >
        </div>
        <div>
          <span class="term">be afraid of</span>
          <span
            ><NoteMark
              sentence="She is afraid of making mistakes."
              :marks="['afraid of making']"
            /><span class="translation">她害怕犯錯。</span></span
          >
        </div>
        <div>
          <span class="term">be worried about</span>
          <span
            ><NoteMark
              sentence="I'm worried about missing the last bus."
              :marks="['worried about missing']"
            /><span class="translation">我擔心錯過末班公車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="make 加人加形容詞，表示讓那個人變成某種狀態" mark="make me angry">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'really', kind: 'dim' },
          { t: 'make', role: '動詞', kind: 'key' },
          { t: 'me', role: '人' },
          { t: 'angry.', role: '形容詞\n人的感覺', kind: 'key' },
        ]"
      />
      <p class="remark">原句的 <code>make me angry</code> 表示讓我生氣。</p>
    </NoteSlide>

    <NoteSlide title="make 後面的形容詞說明那個人的感覺" mark="make me angry">
      <div class="rows is-labeled">
        <div>
          <span class="term">happy</span>
          <span
            ><NoteMark sentence="His jokes always make me happy." :marks="['make me happy']" /><span
              class="translation"
              >他的笑話總是讓我很開心。</span
            ></span
          >
        </div>
        <div>
          <span class="term">tired</span>
          <span
            ><NoteMark sentence="The long trip made us tired." :marks="['made us tired']" /><span
              class="translation"
              >長途旅行讓我們很累。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
