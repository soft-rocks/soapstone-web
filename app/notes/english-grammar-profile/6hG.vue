<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-no-object-1062, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="show up 後面不接受詞" mark="show up">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The following day,', role: '時間', kind: 'dim' },
          { t: 'my grandpa', role: '主詞', kind: 'dim' },
          { t: 'didn\'t', role: '否定' },
          { t: 'show', role: '動詞', kind: 'key' },
          { t: 'up.', role: '小品詞', kind: 'key' },
        ]"
      />
      <p class="translation">隔天，我爺爺沒有出現。</p>
      <p class="remark"><code>show up</code> 的意思是出現、到場。</p>
    </NoteSlide>

    <NoteSlide title="後面可以接時間、地方、介系詞片語或動詞-ing，都不是受詞" mark="up">
      <div class="rows is-labeled">
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark sentence="He showed up at midnight." :marks="['at midnight']" /><span
              class="translation"
              >他半夜才出現。</span
            ></span
          >
        </div>
        <div>
          <span class="term">地方</span>
          <span
            ><NoteMark
              sentence="We ended up in a small hotel by the station."
              :marks="['in a small hotel']"
            /><span class="translation">我們最後住進車站旁的一家小旅館。</span></span
          >
        </div>
        <div>
          <span class="term">with + 人</span>
          <span
            ><NoteMark
              sentence="She broke up with her boyfriend."
              :marks="['with her boyfriend']"
            /><span class="translation">她和男朋友分手了。</span></span
          >
        </div>
        <div>
          <span class="term">動詞&#x2060;-&#x2060;ing</span>
          <span
            ><NoteMark
              sentence="If you don't read carefully, you'll end up wasting your time."
              :marks="['wasting']"
            /><span class="translation">如果你不仔細讀，最後只會浪費時間。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="pass away 比 die 委婉，get by 是口語" mark="show up">
      <div class="rows is-labeled">
        <div>
          <span class="term">pass away<br /><i>委婉</i></span>
          <span
            ><NoteMark
              sentence="My grandmother passed away last year."
              :marks="['passed away']"
            /><span class="translation">我奶奶去年過世了。</span></span
          >
        </div>
        <div>
          <span class="term">get by<br /><i>口語</i></span>
          <span
            ><NoteMark
              sentence="I don't speak much French, but I can get by."
              :marks="['get by']"
            /><span class="translation">我的法文不太好，可是還應付得來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="catch on 不接受詞，在哪些人之間流行用 with" mark="up">
      <NoteFix
        wrong="The new game quickly caught on young people."
        right="The new game quickly caught on with young people."
        fix="with"
      />
    </NoteSlide>

    <NoteSlide title="出現是 show up，up 不能省略" mark="up">
      <NoteFix
        wrong="Nobody knew why he didn't show."
        right="Nobody knew why he didn't show up."
        fix="up"
      />
    </NoteSlide>

    <NoteSlide title="說和誰分手，在人前面加 with">
      <NoteFix
        wrong="She broke up her boyfriend."
        right="She broke up with her boyfriend."
        fix="with"
      />
    </NoteSlide>

    <NoteSlide title="end up 後面接動詞-ing，不接 to 不定詞">
      <NoteFix
        wrong="We ended up to sleep in the car."
        right="We ended up sleeping in the car."
        fix="sleeping"
      />
    </NoteSlide>

    <NoteSlide title="break up 和 turn up 有受詞時，意思不同" mark="show up">
      <div class="rows is-labeled">
        <div>
          <span class="term">break up + 受詞<br /><i>制止</i></span>
          <span
            ><NoteMark sentence="They broke up the fight." :marks="['the fight']" /><span
              class="translation"
              >他們把打架的人拉開了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">turn up + 受詞<br /><i>調大聲</i></span>
          <span
            ><NoteMark sentence="Can you turn up the radio?" :marks="['the radio']" /><span
              class="translation"
              >你可以把收音機開大聲一點嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
