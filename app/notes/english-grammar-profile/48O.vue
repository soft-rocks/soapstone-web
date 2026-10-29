<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verbs-direct-object-to-infinitive, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="受詞是被請求的人，不定詞是那個人要做的事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', role: '主詞', kind: 'dim' },
          { t: 'asked', role: '動詞' },
          { t: 'me', role: '受詞', kind: 'key' },
          { t: 'to tell', role: 'to + 原形動詞', kind: 'key' },
          { t: 'you about one of my friends.', kind: 'dim' },
        ]"
      />
      <p class="translation">你要我跟你介紹我的一個朋友。</p>
    </NoteSlide>

    <NoteSlide title="tell、would like 也接受詞和不定詞" mark="asked">
      <div class="rows is-labeled">
        <div>
          <span class="term">tell</span>
          <span
            ><NoteMark
              sentence="The coach told us to run three laps."
              :marks="['told us to run']"
            /><span class="translation">教練叫我們跑三圈。</span></span
          >
        </div>
        <div>
          <span class="term">would like</span>
          <span
            ><NoteMark
              sentence="I would like you to meet my parents."
              :marks="['would like you to meet']"
            /><span class="translation">我希望你見見我爸媽。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not 放在 to 前面" mark="to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My mum', kind: 'dim' },
          { t: 'told', role: '動詞' },
          { t: 'me', role: '受詞' },
          { t: 'not', role: '否定 be late', kind: 'key', ring: true },
          { t: 'to be late.', role: 'to + 原形動詞', kind: 'key' },
        ]"
      />
      <p class="translation">我媽叫我不要遲到。</p>
    </NoteSlide>

    <NoteSlide title="被動句把受詞移到主詞的位置" mark="me">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We', role: '原來的受詞', kind: 'key', ring: true },
          { t: 'were asked', role: 'be + 過去分詞' },
          { t: 'to wait', role: 'to + 原形動詞' },
          { t: 'outside.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們被要求在外面等。</p>
      <p class="remark">主動句是 <code>They asked us to wait outside.</code></p>
    </NoteSlide>

    <NoteSlide title="want 後面接受詞加不定詞，不接 that 子句" mark="me to tell">
      <NoteFix
        wrong="I want that you come with me."
        right="I want you to come with me."
        fix="you to come"
      />
    </NoteSlide>

    <NoteSlide title="受詞後面要加 to，再接原形動詞" mark="to">
      <NoteFix wrong="She asked me help her." right="She asked me to help her." fix="to" />
    </NoteSlide>

    <NoteSlide title="動詞後面的代名詞用受格" mark="me">
      <NoteFix wrong="The doctor told he to rest." right="The doctor told him to rest." fix="him" />
    </NoteSlide>

    <NoteSlide title="叫某人做事用 tell，say 後面不能直接接人" mark="asked">
      <NoteFix
        wrong="My boss said me to finish the report."
        right="My boss told me to finish the report."
        fix="told"
      />
    </NoteSlide>

    <NoteSlide title="沒有受詞時，做事的人是主詞" mark="me">
      <div class="rows is-labeled">
        <div>
          <span class="term">沒有受詞<br /><i>I 要見經理</i></span>
          <span
            ><NoteMark sentence="I asked to see the manager." :marks="['asked to see']" /><span
              class="translation"
              >我要求見經理。</span
            ></span
          >
        </div>
        <div>
          <span class="term">有受詞<br /><i>助理打電話</i></span>
          <span
            ><NoteMark
              sentence="I asked my assistant to call the manager."
              :marks="['my assistant', 'to call']"
            /><span class="translation">我請我的助理打電話給經理。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="make 和 let 的受詞後面不加 to" mark="to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My boss', kind: 'dim' },
          { t: 'let', role: '動詞', kind: 'key' },
          { t: 'me', role: '受詞' },
          { t: 'take a long lunch.', role: '原形動詞', kind: 'key' },
        ]"
      />
      <p class="translation">我老闆讓我午休久一點。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
